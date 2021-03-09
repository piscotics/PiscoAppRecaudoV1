import { Injectable } from '@angular/core';
import { ToastController, Platform, AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { ConfigModel } from '../models/config.model';
import { ConfigHelper } from '../helpers/config.helper';
import { LoadingController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

// plugins
import { NativeStorage } from '@ionic-native/native-storage/ngx';

// modelos
import { ErrorNativeStorage } from './../interfaces/error-native-storage';
import { IniciarSesionModel } from '../models/iniciar-sesion.model';
import { LoginResponseModel } from '../models/responses/login-response.model';
import { SesionLocalModel } from './../models/sesion-local.model';

import { Device } from '@ionic-native/device/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
// Servicios
import { ConfiguracionService } from './configuracion.service';
import { ContratoModel } from '../models/contrato-model';
import { OfflineService } from './offline.service';


@Injectable({
  providedIn: 'root'
})
export class SesionService {
  
  config: ConfigModel = new ConfigModel();
  private readonly sesionLocalKey: string = 'SESION_LOCAL';
  private readonly sesionEmpresaKey: string = 'EMPRESA_LOCAL';
  sesionLocal: SesionLocalModel = new SesionLocalModel();

  constructor(
    private platform: Platform,
    private http: HttpClient,
    private router: Router,
    private androidPermissions: AndroidPermissions,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private nativeStorage: NativeStorage,
    private configuracionService: ConfiguracionService,
    private device: Device,
    private alertController: AlertController,
    private offline: OfflineService
  ) {
    this.config = this.configuracionService.config;
  }

  // Obtiene la información acerca de la sesión actual
  obtenerSesionLocal() {
    return new Promise((resolve, reject) => {

      if (!this.platform.is('cordova')) {
        // Si estamos en un navegador entonces usamos el localStorage

        let sesionLocal = localStorage.getItem(this.sesionLocalKey);

        if (sesionLocal) {
          this.sesionLocal = JSON.parse(sesionLocal);
        }

        resolve(null);
      } else {

        this.nativeStorage.getItem(this.sesionLocalKey)
          .then((sesionLocal: SesionLocalModel) => {
            this.sesionLocal = sesionLocal;
            resolve(null);
          })
          .catch((error: ErrorNativeStorage) => {

            if (error.code === 2) {
              // No existe la key en el storage aún, no hay problema usamos el objeto con la data predeterminada
              resolve(null);
            } else {
              reject(error);
            }

          });

      }

    });
  }

  guardarSesionLocal() {
    return new Promise((resolve, reject) => {

      if (!this.platform.is('cordova')) {
        // Si estamos en un navegador entonces usamos el localStorage

        localStorage.setItem(this.sesionLocalKey, JSON.stringify(this.sesionLocal));
        resolve(null);
      } else {
        this.nativeStorage.setItem(this.sesionLocalKey, this.sesionLocal)
          .then(() => {
            resolve(null);
          })
          .catch((error: ErrorNativeStorage) => {
            reject(error);
          });
      }

    });
  }

  obtenerInfoEmpresa() {
    return new Promise((resolve, reject) => {

      if (!this.platform.is('cordova')) {
        // Si estamos en un navegador entonces usamos el localStorage

        let sesionLocal = localStorage.getItem(this.sesionEmpresaKey);

        if (sesionLocal) {
          resolve(JSON.parse(sesionLocal));
        }else{
          resolve(null);
        }

      } else {

        this.nativeStorage.getItem(this.sesionEmpresaKey)
          .then((infoEmpresa: string) => {
            
            resolve(JSON.parse(infoEmpresa));
          })
          .catch((error: ErrorNativeStorage) => {

            if (error.code === 2) {
              // No existe la key en el storage aún, no hay problema usamos el objeto con la data predeterminada
              resolve(null);
            } else {
              reject(error);
            }

          });

      }

    });
  }

  guardarInfoEmpresa(info) {
    return new Promise((resolve, reject) => {

      if (!this.platform.is('cordova')) {
        // Si estamos en un navegador entonces usamos el localStorage

        localStorage.setItem(this.sesionEmpresaKey, info);
        resolve(null);
      } else {
        this.nativeStorage.setItem(this.sesionEmpresaKey, info)
          .then(() => {
            resolve(null);
          })
          .catch((error: ErrorNativeStorage) => {
            reject(error);
          });
      }

    });
  }

  iniciarSesion(usuario: string, contrasena: string) {
    ///this.validarAccesoDispositivo().then(() => {

    return new Promise((resolve, reject) => {

      this.loadingController.create({
        message: 'Iniciando sesión',
        duration: 30000
      }).then((loading) => {

        loading.present();
        let maquina = '';
  
        if (!this.platform.is('android')) {
          maquina = '';
        }
        else
        {
          maquina =  this.device.uuid;
        }
        
        const dataPost = new IniciarSesionModel(usuario, contrasena, maquina);
        const configHelper = new ConfigHelper(this.configuracionService.config);
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
        
        let isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;

        if(!isOffline){
          this.http.post(`${configHelper.getApiUrl()}/login/authenticate`, dataPost, httpOptions)
        .subscribe((data: LoginResponseModel) => {
            console.log(JSON.stringify(data));

            if(JSON.stringify(data) !== "\"Licencia No Registrada\"")
            {
              
            this.sesionLocal.sesionIniciada = true;
            this.sesionLocal.sesionUsuario = data;
        
            this.guardarSesionLocal()
              .then(() => {
                loading.textContent = 'Consultando información de empresa';

                this.http.get(`${configHelper.getApiUrl()}/pago/funeraria`, httpOptions).subscribe(res=>{
                  this.guardarInfoEmpresa(JSON.stringify(res)).then(()=>{
                    
                    loading.dismiss();
                    const extras: NavigationExtras = {
                      replaceUrl: true
                    };

                    this.router.navigate(['consultar-contrato'], extras);
                  }).catch(err=>{
                    loading.dismiss();
                    this.mostrarToast('Error Guardando la funeraria, intente de nuevo.');
                  });
                }, err=>{
                  loading.dismiss();
                  this.mostrarToast('Error Consultando la sesión, intente de nuevo.');
                  reject();
                });
              })
              .catch((error) => {
                loading.dismiss();
                this.mostrarToast('Error guardando la sesión, intente de nuevo.');
                reject();
              });
            }
            else
            {
              loading.dismiss();
              this.mostrarToast('Licencia No Registrada, Consulte su Administrador.');
              reject();
            }
          },
            (error: HttpErrorResponse) => {
              console.log(JSON.stringify(error));
              this.mostrarToast('Error autenticando en el servidor');
              loading.dismiss();
              reject();
            });
        }else{
          this.offline.createDatabase().then(res=>{
            this.offline.loginOffline(usuario, contrasena).then((res: any)=>{
              this.sesionLocal.sesionIniciada = true;
              this.sesionLocal.sesionUsuario = res;
          
              this.guardarSesionLocal()
                .then(() => {
                  loading.textContent = 'Consultando información de empresa';
                   this.offline.getInfoEmpresa().then(res=>{
                    this.guardarInfoEmpresa(JSON.stringify(res)).then(()=>{
                      loading.dismiss();
                      const extras: NavigationExtras = {
                        replaceUrl: true
                      };
  
                      this.router.navigate(['consultar-contrato'], extras);
                    }).catch(err=>{
                      loading.dismiss();
                      this.mostrarToast('Error Guardando la funeraria, intente de nuevo.');
                    });
                  }).catch(err=>{
                    loading.dismiss();
                    this.mostrarToast('Error Consultando la sesión, intente de nuevo.');
                    reject();
                  })
                  
                  }, err=>{
                    loading.dismiss();
                    this.mostrarToast('Error Consultando la sesión, intente de nuevo.');
                    reject();
                  });
            }).catch(err=>{
              if(usuario== "1005"){
                localStorage.setItem('offlineMode', 'false');
                loading.dismiss();
                this.mostrarToast('Ingrese de nuevo, intente de nuevo.');
              }
              else{
                loading.dismiss();
                this.mostrarToast('Error Consultando la sesión, intente de nuevo.');
                reject();
              }
              
            });
          }).catch(err=>{
            if(usuario== "1005"){
              localStorage.setItem('offlineMode', 'false');
              loading.dismiss();
              this.mostrarToast('Ingrese de nuevo, intente de nuevo.');
            }
            else{
              loading.dismiss();
              this.mostrarToast('Error Consultando la sesión, intente de nuevo.');
            }
          });
          
        }
        

        });

      });
     //});
  }

  cerrarSesion() 
  {
    this.sesionLocal.sesionIniciada = false;
    this.sesionLocal.sesionUsuario = null;

    this.guardarSesionLocal()
      .then(() => {
        const extras: NavigationExtras = {
          replaceUrl: true
        };

         this.router.navigate(['login'], extras);
       
      })
      .catch((error: ErrorNativeStorage) => {
        this.mostrarToast('Error al cerrar la sesión, intente de nuevo');
      })
  }


  agregarLicencia(_config: ConfigModel)
  {
      this.validarAccesoDispositivo().then(() => {
          // Obtenemos el UUID
      return new Promise((resolve, reject) => 
      {
        console.log(this.device.uuid);
        const params = new HttpParams().set('Licence', this.device.uuid);
        const configHelper = new ConfigHelper(_config);
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
          params
        };

        this.loadingController.create({
          message: 'Validando Licencia',
          duration: 30000
        }).then((loading) => {
  
          loading.present();
  
          this.http.post(`${configHelper.getApiUrl()}/login/addlicence`, null, httpOptions)
            .subscribe((resultado: Boolean) => {
              if (!resultado) {
                loading.dismiss();
                this.mostrarToast('No se Pudo Agregar la Licencia, intente nuevamente.');
                reject();
              } else {
                loading.dismiss();
                resolve(resultado);
                this.mostrarToast('La Licencia se Valido Correctamente');
              }
            },
              (error: HttpErrorResponse) => {
  
                loading.dismiss();
                console.log(JSON.stringify(error))
                reject();
                this.mostrarToast('Error Validando Licencia');
              });
        });
      });
  });
}



  removerLicencia()
  {
    this.validarAccesoDispositivo().then(() => {
    
    return new Promise((resolve, reject) => {

      const params = new HttpParams().set('Licence',  this.device.uuid);
      const configHelper = new ConfigHelper(this.configuracionService.config);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        params
      };

      this.loadingController.create({
        message: 'Removiendo Licencia',
        duration: 30000
      }).then((loading) => {

        loading.present();

        this.http.post(`${configHelper.getApiUrl()}/login/removelicence`, null, httpOptions)
          .subscribe((resultado: Boolean) => {
            if (!resultado) {
              loading.dismiss();
              this.mostrarToast('No se Pudo Removiendo la Licencia, intente nuevamente.');
              reject();
            } else {
              loading.dismiss();
              resolve(resultado);
            }

          },
            (error: HttpErrorResponse) => {

              loading.dismiss();
              console.log(JSON.stringify(error))
              reject();
              this.mostrarToast('Error Removiendo Licencia');

            });

      });

    });
  });
}


  // Para consultar el IMEI
  private validarAccesoDispositivo() {
    return new Promise((resolve, reject) => {

      this.androidPermissions.checkPermission(
        this.androidPermissions.PERMISSION.READ_PHONE_STATE
      ).then((hasPermission) => {

        console.log(`¿Autorizado permiso de estado de dispositivo?: ${hasPermission ? 'SI' : 'NO'}`);

        if (!hasPermission) {

          this.alertController.create({
            header: 'Permiso estado dispositivo',
            message: 'Necesitamos consultar el estado del dispositivo, por favor concedanos el permiso antes de continuar.',
            buttons: [{
              role: 'cancel',
              text: 'Cancelar',
              handler: () => {
                reject();
              }
            }, {
              text: 'De acuerdo',
              handler: () => {

                // Solicitar permiso
                this.androidPermissions.requestPermission(
                  this.androidPermissions.PERMISSION.READ_PHONE_STATE
                ).then(() => {

                  resolve(null);

                }).catch(() => {

                  reject();

                });

              }
            }]
          }).then((myAlert) => {
            myAlert.present();
          });

        } else {

          resolve(null);

        }

      }).catch((error) => {
        this.mostrarToast('Error comprobando autorizaciòn de estado de dispositivo');
        reject();
      });

    });
  }


  private mostrarToast(texto: string) {
    this.toastController.create({
      message: texto,
      duration: 2000
    }).then(toast => {
      toast.present();
    });
  }
}
