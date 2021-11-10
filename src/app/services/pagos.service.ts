


import { Injectable } from '@angular/core';
import { Platform, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';


import { ConfigHelper } from '../helpers/config.helper';

// Plugins
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Device } from '@ionic-native/device/ngx';

// Modelos
import { ConfigModel } from '../models/config.model';
import { RegistrarpagoModel } from '../models/registrar-pago.model';

// Servicios
import { ConfiguracionService } from './configuracion.service';
import { CuadreCajaRequesModel, CuadreCajaResponseModel } from '../models/cuadre-caja.model';
import { PagoResponseModel } from '../models/responses/pago-response.model';
import { OfflineService } from './offline.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  config: ConfigModel = new ConfigModel();

  DiasMes: Date;
  ValorPorDia: number = 0;
  DiasASumar : number = 0;

  constructor(
    private platform: Platform,
    private http: HttpClient,
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private androidPermissions: AndroidPermissions,
    private diagnostic: Diagnostic,
    private geolocation: Geolocation,
    private device: Device,
    private configuracionService: ConfiguracionService,
    private offline: OfflineService
  ) {
    this.config = this.configuracionService.config;
  }

  cargarFormaPago() {
    return new Promise((resolve, reject) => {

      let isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;

      if(!isOffline)
      {
          const configHelper = new ConfigHelper(this.config);
          this.http.get(`${configHelper.getApiUrl()}/pago/TiposPagos`)
            .subscribe((result: any[]) => {
              resolve(result);
          },
          (error: HttpErrorResponse) => {
            console.log(JSON.stringify(error))
            reject();
            this.mostrarToastSimple('Error realizando el pago');
    
          });
      }
      else
      {
        this.offline.createDatabase().then(res => {
          // tslint:disable-next-line: no-shadowed-variable
          this.offline.getFormaPago().then((result: any[]) => {
            resolve(result);
          });
      });

      }
    });
  }

  cuadreCaja(fecha: string, usuario: string) {
    return new Promise((resolve, reject) => {
      let isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;

      if(!isOffline){
          this.loadingController.create({
            message: 'Cuadrando Caja',
            duration: 30000
          }).then((loading) => {
    
            loading.present();
    
            const dataPost = new CuadreCajaRequesModel(usuario, fecha);
            const configHelper = new ConfigHelper(this.configuracionService.config);
            const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type': 'application/json'
              })
            };
            
            this.http.post(`${configHelper.getApiUrl()}/cuadre/cuadre`, dataPost, httpOptions)
            .subscribe((data: CuadreCajaResponseModel) => {
                loading.dismiss();
                resolve(data);
              },
                (error: HttpErrorResponse) => {
                  console.log(JSON.stringify(error))
                  this.mostrarToastSimple('Error autenticando en el servidor');
                  loading.dismiss();
                  reject();
                });
    
          });
      }
      else{
        this.loadingController.create({
          message: 'Cuadrando Caja',
          duration: 30000
        }).then((loading) => {
          loading.present();
          this.offline.getCuadreCaja(usuario, fecha).then((data: CuadreCajaResponseModel) => {
              loading.dismiss();
              resolve(data);
          });
        });

      }
    });
  }

  lstPagos(fecha: string, usuario: string) {
    return new Promise((resolve, reject) => {

      this.loadingController.create({
        message: 'Lista Pagos',
        duration: 30000
      }).then((loading) => {

        loading.present();

        const dataPost = new CuadreCajaRequesModel(usuario, fecha);
        const configHelper = new ConfigHelper(this.configuracionService.config);
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
        
        this.http.post(`${configHelper.getApiUrl()}/cuadre/lstPagoUser`, dataPost, httpOptions)
        .subscribe((data: string[]) => {
            loading.dismiss();
            resolve(data);
          },
            (error: HttpErrorResponse) => {
              console.log(JSON.stringify(error))
              this.mostrarToastSimple('Error autenticando en el servidor');
              loading.dismiss();
              reject();
            });

      });

    });
  }

 
  prepararRegistroPago(registroPago: RegistrarpagoModel) {
    return new Promise((resolve, reject) => {
      console.log('la forma de pago a validar', registroPago.FORMAPAGO)
      if (!registroPago.FORMAPAGO) {
        this.mostrarToastSimple('Por favor seleccione la forma de pago');
        reject();
        return;
      }

      if (!this.platform.is('android')) {

        resolve(registroPago);

      } else {

        // Validaciones de permisos en Android

        this.validarAccesoGPS().then(() => {

          this.validarGPSActivo().then(() => {

            this.validarAccesoDispositivo().then(() => {

              this.loadingController.create({
                message: 'Obteniendo geolocalización',
                duration: 5300
              }).then((loading) => {

                loading.present();

                // Obtenemos la geolocalización
                this.geolocation.getCurrentPosition({
                  timeout: 5000, 
                  enableHighAccuracy: true
                }).then((resp) => {
                  loading.dismiss();

                  registroPago.POSX = String(resp.coords.latitude);
                  registroPago.POSY = String(resp.coords.longitude);
                  
                  // Obtenemos el UUID
                  registroPago.MAQUINA = this.device.uuid;

                  console.log(`POSX: ${registroPago.POSX}, POSY: ${registroPago.POSY}`);
                  console.log(`MAQUINA: ${registroPago.MAQUINA}`);

                  // Mostrar modal de confirmación
                  resolve(registroPago);

                }).catch((error) => {
                  loading.dismiss();
                  this.mostrarToastSimple('Error obteniendo la geolocalización, intente de nuevo');
                  resolve(registroPago);
                  //reject();
                });

              });

            }).catch(() => {
              reject();
            });

          }).catch(() => {
            reject();
          });

        }).catch(() => {
          reject();
        });

      }

    });
  }

  private validarAccesoGPS() {
    return new Promise((resolve, reject) => {
      this.diagnostic.isLocationAuthorized().then((authorized) => {

        console.log(`¿Autorizado permiso de GPS?: ${authorized ? 'SI' : 'NO'}`);

        if (!authorized) {
          // No está autorizada la app

          this.alertController.create({
            header: 'Permiso uso de GPS',
            message: 'Necesitamos su permiso para acceder al GPS antes de continuar.',
            buttons: [{
              role: 'cancel',
              text: 'Cancelar',
              handler: () => {
                reject();
              }
            }, {
              text: 'De acuerdo',
              handler: () => {

                this.diagnostic.requestLocationAuthorization().then(() => {
                  resolve(null);
                }).catch(() => {
                  this.mostrarToastSimple('No se concedió acceso al GPS');
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
        this.mostrarToastSimple('Error comprobando autorizaciòn de GPS');
        reject();
      })
    });
  }

  private validarGPSActivo() {
    return new Promise((resolve, reject) => {
      this.diagnostic.isGpsLocationAvailable().then((enabled) => {

        console.log(`¿Esta activado GPS?: ${enabled ? 'SI' : 'NO'}`);

        if (!enabled) {
          // No está activo el GPS

          this.alertController.create({
            header: 'Activar GPS',
            message: 'Por favor active el GPS en el modo Alta precisión antes de continuar.',
            buttons: [{
              role: 'cancel',
              text: 'Cancelar',
              handler: () => {
                reject();
              }
            }, {
              text: 'De acuerdo',
              handler: () => {
                this.diagnostic.switchToLocationSettings();
                reject();
              }
            }]
          }).then((myAlert) => {
            myAlert.present();
          });

        } else {
          resolve(null);
        }

      }).catch((error) => {
        this.mostrarToastSimple('Error comprobando GPS activo');
        reject();
      })
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
        this.mostrarToastSimple('Error comprobando autorizaciòn de estado de dispositivo');
        reject();
      });

    });
  }


  registrarPago(pago: RegistrarpagoModel) {
    return new Promise((resolve, reject) => {

      const configHelper = new ConfigHelper(this.config);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };

      const isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;

      if(!isOffline){
            this.loadingController.create({
              message: 'Registrando pago',
              duration: 30000
            }).then((loading) => {
              loading.present();
              console.log("los datos del pago son:", pago)
              this.http.post(`${configHelper.getApiUrl()}/pago/create`, pago, httpOptions)
              //this.http.post('http://localhost:5008/api/pago/create', pago, httpOptions)
                .subscribe((result: PagoResponseModel) => {
                  if (result.Respuesta.indexOf('ERROR') !== -1) {
                    
                    loading.dismiss();
                    this.alertController.create({
                      header: 'Error',
                      message: result.Respuesta.split('-')[1] + ' ' + result.Respuesta.split('-')[2],
                      buttons:['Ok']
                    }).then(obj=>{
                      obj.present();
                    });
                    reject();
                  } else {
                    loading.dismiss();
                    this.alertController.create({
                      header: 'Información',
                      message: 'Pago realizado satisfactoriamente',
                      buttons:['Ok']
                    }).then(obj=>{
                      obj.present();
                    });
                    resolve(result);
                  }
                },
                  (error: HttpErrorResponse) => {
      
                    loading.dismiss();
                    console.log(JSON.stringify(error))
                    reject();
                    this.mostrarToastSimple('Error realizando el pago');
      
                  });
      
            });
    }
    else
    {
      let result = new PagoResponseModel();
          
      this.loadingController.create({
            message : 'Registrando Pago',
            duration: 30000
        }).then((loading) => {
          loading.present();
          this.offline.guardarPagosLocal(pago).then((resp: any) => {
            loading.dismiss();
            this.alertController.create({
                      header: 'Información',
                      message: 'Pago realizado satisfactoriamente',
                      buttons:['Ok']
                    // tslint:disable-next-line: whitespace
                    }).then(obj=> {
                      obj.present();
                    });

            this.offline.getPagoHasta(pago.IDCONTRATO).then((res: any) => {
                              result.NroRecibo = pago.NRORECIBO; //resp; momentGGGG
                              result.VlrDctoPago = pago.DESCUENTO;
                              result.VlrIva = 0;
                              result.VlrCto = pago.VALOR;
                              //result.DetallePago = pago.OBSERVACIONES;
                              let fecha = new Date(res.PAGOHASTA);
                              result.Desde = fecha.toString();
                              console.log("el pago**********************", pago)
                              if( pago.CANTIDADCUOTAS == 0){

                                this.DiasMes =   new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0)
                                this.ValorPorDia = (pago.CUOTAMENSUAL / this.DiasMes.getDate());
                                this.DiasASumar = (pago.VALOR / this.ValorPorDia)
                                
                                result.Hasta =  new Date(new Date(res.PAGOHASTA).setDate(new Date(res.PAGOHASTA ).getDate() + Math.round(this.DiasASumar))).toString();
                                console.log("los datos son DiasMes ", this.DiasMes.getDate() ," ValorPorDia ", this.ValorPorDia, "  DiasASumar ", Math.round(this.DiasASumar), "  result.Hasta ",  result.Hasta)

                              }else{
                                result.Hasta =  new Date(new Date(res.PAGOHASTA).setMonth(new Date(res.PAGOHASTA ).getMonth() + pago.CANTIDADCUOTAS)).toString();
                              }
                              this.offline.updatePagoHasta(result.Hasta, pago.IDCONTRATO).then(() => {});
                              //actualiza las fechas del pago 
                              this.offline.fechasPagos(result.Desde ,result.Hasta, result.NroRecibo).then(() => {});
                              
                              
                              resolve(result);
                    });




           // resolve(result);
          });
         
        });

    }

    });
  }

  mostrarAlertSimple(titulo: string, texto: string) {
    this.alertController.create({
      header: titulo,
      message: texto,
      buttons: [{
        role: 'cancel',
        text: 'Ok'
      }]
    }).then((myAlert) => {
      myAlert.present();
    });
  }

  private mostrarToastSimple(texto: string) {
    this.toastController.create({
      message: texto,
      duration: 2000
    }).then(toast => {
      toast.present();
    });
  }
}
