import { Injectable } from '@angular/core';
import { TipoGestionModel } from 'src/app/models/tipo-gestion.model';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { ConfigHelper } from '../helpers/config.helper';
import { Platform, ToastController, LoadingController , AlertController} from '@ionic/angular';

// Modelos
import { ConfigModel } from '../models/config.model';

import { RegistroGestionModel } from '../models/registro-gestion.model';

// Plugins
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Device } from '@ionic-native/device/ngx';
import { OfflineService } from './offline.service';
// Servicios
import { ConfiguracionService } from './configuracion.service';

@Injectable({
  providedIn: 'root'
})



export class TiposGestionService {



  config: ConfigModel = new ConfigModel();

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

  cargarTipoNovedad() {

    const isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;


    return new Promise((resolve, reject) => {
            if (!isOffline) {
              const configHelper = new ConfigHelper(this.config);
              this.http.get(`${configHelper.getApiUrl()}/contrato/tipoNovedad`)
                .subscribe((result: TipoGestionModel[]) => {
                  resolve(result);
              },
              (error: HttpErrorResponse) => {
                console.log(JSON.stringify(error));
                reject();
                this.mostrarToast('Error Consultando Tipo Novedad');

              });
          } else {
              this.offline.createDatabase().then(res => {
                // tslint:disable-next-line: no-shadowed-variable
                this.offline.getNovedades().then((result: TipoGestionModel[]) => {
                  resolve(result);
                });
            });
          }
        });



  }

  registrarNovedad(gestion: RegistroGestionModel) {
    return new Promise((resolve, reject) => {
      const isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;

      if (!isOffline)
      {
          const configHelper = new ConfigHelper(this.config);
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            })
          };

          this.loadingController.create({
            message: 'Registrando Novedad',
            duration: 30000
          }).then((loading) => {

            loading.present();
            this.http.post(`${configHelper.getApiUrl()}/pago/insertNove`, gestion, httpOptions)
              .subscribe((result: number) => {
                if (result === -1) {
                  this.mostrarAlerta('Ingreso Novedad' , 'No se pudo realizar la Novedad.');
                  loading.dismiss();
                } else {
                  this.mostrarAlerta('Ingreso Novedad' , 'Novedad realizada correctamente.');
                  loading.dismiss();
                  resolve(result);
                }
              },
                (error: HttpErrorResponse) => {

                  loading.dismiss();
                  reject();
                  this.mostrarToastSimple('Error realizando la novedad');
              });

          });
    } else {
        this.loadingController.create({
            message : 'Registrando Novedad',
            duration: 30000
        }).then((loading) => {
          loading.present();
          gestion.Posx = "";
          gestion.Posy = "" ;
          this.offline.guardarNovedadLocal(gestion).then(() => {
            loading.dismiss();
            this.alertController.create({
                      header: 'Información',
                      message: 'Novedad Almacenada Con Exito',
                      buttons: ['Ok']
                    }).then(obj => {
                      obj.present();
                    });
            resolve(1);
          });
        });

    }
    });
  }


  prepararRegistroNovedad(gestionModel: RegistroGestionModel) {
    return new Promise((resolve, reject) => {

      if (!gestionModel.Novedad) {
        this.mostrarToastSimple('Por favor seleccione la Novedad');
        reject();
        return;
      }


      if (!this.platform.is('android')) {
        gestionModel.Posx = '';
        gestionModel.Posy = '';
        resolve(gestionModel);

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

                  gestionModel.Posx = String(resp.coords.latitude);
                  gestionModel.Posy = String(resp.coords.longitude);

                  // Mostrar modal de confirmación
                  resolve(gestionModel);

                }).catch((error) => {
                  loading.dismiss();
                  this.mostrarToastSimple('Error obteniendo la geolocalización, intente de nuevo');
                  resolve(gestionModel);
                  reject();
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
      });
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
        this.mostrarToastSimple('Error comprobando autorizaciòn de estado de dispositivo');
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

  mostrarToastSimple(mensaje: string) {
    this.toastController.create({
      message: mensaje,
      duration: 2000
    }).then(toast => {
      toast.present();
    });
  }

  mostrarAlerta = (titulo: string , mensaje: string) => {
    this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: [{
        role: 'cancel',
        text: 'Ok',
      }]
    }).then((alert) => {
      alert.present();
    });
  }

}
