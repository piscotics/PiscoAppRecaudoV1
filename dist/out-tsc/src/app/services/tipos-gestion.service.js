import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigHelper } from '../helpers/config.helper';
import { Platform, ToastController, LoadingController, AlertController } from '@ionic/angular';
// Modelos
import { ConfigModel } from '../models/config.model';
// Plugins
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Device } from '@ionic-native/device/ngx';
// Servicios
import { ConfiguracionService } from './configuracion.service';
var TiposGestionService = /** @class */ (function() {
    function TiposGestionService(platform, http, alertController, toastController, loadingController, androidPermissions, diagnostic, geolocation, device, configuracionService) {
        var _this = this;
        this.platform = platform;
        this.http = http;
        this.alertController = alertController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.androidPermissions = androidPermissions;
        this.diagnostic = diagnostic;
        this.geolocation = geolocation;
        this.device = device;
        this.configuracionService = configuracionService;
        this.config = new ConfigModel();
        this.mostrarAlerta = function(titulo, mensaje) {
            _this.alertController.create({
                header: titulo,
                message: mensaje,
                buttons: [{
                    role: 'cancel',
                    text: 'Ok',
                }]
            }).then(function(alert) {
                alert.present();
            });
        };
        this.config = this.configuracionService.config;
    }
    TiposGestionService.prototype.cargarTipoNovedad = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
            var configHelper = new ConfigHelper(_this.config);
            _this.http.get(configHelper.getApiUrl() + "/contrato/tipoNovedad")
                .subscribe(function(result) {
                    resolve(result);
                }, function(error) {
                    console.log(JSON.stringify(error));
                    reject();
                    _this.mostrarToast('Error Consultando Tipo Novedad');
                });
        });
    };
    TiposGestionService.prototype.registrarNovedad = function(gestion) {
        var _this = this;
        return new Promise(function(resolve, reject) {
            var configHelper = new ConfigHelper(_this.config);
            var httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                })
            };
            _this.loadingController.create({
                message: 'Registrando Novedad',
                duration: 30000
            }).then(function(loading) {
                loading.present();
                //this.http.post('http://localhost:50088/api/pago/insertNove', gestion, httpOptions)
                _this.http.post(configHelper.getApiUrl() + "/pago/insertNove", gestion, httpOptions)
                    .subscribe(function(result) {
                        if (result === -1) {
                            _this.mostrarAlerta('Ingreso Novedad', 'No se pudo realizar la Novedad.');
                            loading.dismiss();
                        } else {
                            _this.mostrarAlerta('Ingreso Novedad', 'Novedad realizada correctamente.');
                            loading.dismiss();
                            resolve();
                        }
                    }, function(error) {
                        loading.dismiss();
                        reject();
                        _this.mostrarToastSimple('Error realizando la novedad');
                    });
            });
        });
    };
    TiposGestionService.prototype.prepararRegistroNovedad = function(gestionModel) {
        var _this = this;
        return new Promise(function(resolve, reject) {
            if (!gestionModel.Novedad) {
                _this.mostrarToastSimple('Por favor seleccione la Novedad');
                reject();
                return;
            }
            if (!_this.platform.is('android')) {
                gestionModel.Posx = '';
                gestionModel.Posy = '';
                resolve(gestionModel);
            } else {
                // Validaciones de permisos en Android
                _this.validarAccesoGPS().then(function() {
                    _this.validarGPSActivo().then(function() {
                        _this.validarAccesoDispositivo().then(function() {
                            _this.loadingController.create({
                                message: 'Obteniendo geolocalización',
                                duration: 5300
                            }).then(function(loading) {
                                loading.present();
                                // Obtenemos la geolocalización
                                _this.geolocation.getCurrentPosition({
                                    timeout: 5000,
                                    enableHighAccuracy: true
                                }).then(function(resp) {
                                    loading.dismiss();
                                    gestionModel.Posx = String(resp.coords.latitude);
                                    gestionModel.Posy = String(resp.coords.longitude);
                                    // Mostrar modal de confirmación
                                    resolve(gestionModel);
                                }).catch(function(error) {
                                    loading.dismiss();
                                    _this.mostrarToastSimple('Error obteniendo la geolocalización, intente de nuevo' + error.message);
                                    reject();
                                });
                            });
                        }).catch(function() {
                            reject();
                        });
                    }).catch(function() {
                        reject();
                    });
                }).catch(function() {
                    reject();
                });
            }
        });
    };
    TiposGestionService.prototype.validarAccesoGPS = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
            _this.diagnostic.isLocationAuthorized().then(function(authorized) {
                console.log("\u00BFAutorizado permiso de GPS?: " + (authorized ? 'SI' : 'NO'));
                if (!authorized) {
                    // No está autorizada la app
                    _this.alertController.create({
                        header: 'Permiso uso de GPS',
                        message: 'Necesitamos su permiso para acceder al GPS antes de continuar.',
                        buttons: [{
                            role: 'cancel',
                            text: 'Cancelar',
                            handler: function() {
                                reject();
                            }
                        }, {
                            text: 'De acuerdo',
                            handler: function() {
                                _this.diagnostic.requestLocationAuthorization().then(function() {
                                    resolve();
                                }).catch(function() {
                                    _this.mostrarToastSimple('No se concedió acceso al GPS');
                                    reject();
                                });
                            }
                        }]
                    }).then(function(myAlert) {
                        myAlert.present();
                    });
                } else {
                    resolve();
                }
            }).catch(function(error) {
                _this.mostrarToastSimple('Error comprobando autorizaciòn de GPS');
                reject();
            });
        });
    };
    TiposGestionService.prototype.validarGPSActivo = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
            _this.diagnostic.isGpsLocationAvailable().then(function(enabled) {
                console.log("\u00BFEsta activado GPS?: " + (enabled ? 'SI' : 'NO'));
                if (!enabled) {
                    // No está activo el GPS
                    _this.alertController.create({
                        header: 'Activar GPS',
                        message: 'Por favor active el GPS en el modo Alta precisión antes de continuar.',
                        buttons: [{
                            role: 'cancel',
                            text: 'Cancelar',
                            handler: function() {
                                reject();
                            }
                        }, {
                            text: 'De acuerdo',
                            handler: function() {
                                _this.diagnostic.switchToLocationSettings();
                                reject();
                            }
                        }]
                    }).then(function(myAlert) {
                        myAlert.present();
                    });
                } else {
                    resolve();
                }
            }).catch(function(error) {
                _this.mostrarToastSimple('Error comprobando GPS activo');
                reject();
            });
        });
    };
    // Para consultar el IMEI
    TiposGestionService.prototype.validarAccesoDispositivo = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
            _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(function(hasPermission) {
                console.log("\u00BFAutorizado permiso de estado de dispositivo?: " + (hasPermission ? 'SI' : 'NO'));
                if (!hasPermission) {
                    _this.alertController.create({
                        header: 'Permiso estado dispositivo',
                        message: 'Necesitamos consultar el estado del dispositivo, por favor concedanos el permiso antes de continuar.',
                        buttons: [{
                            role: 'cancel',
                            text: 'Cancelar',
                            handler: function() {
                                reject();
                            }
                        }, {
                            text: 'De acuerdo',
                            handler: function() {
                                // Solicitar permiso
                                _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(function() {
                                    resolve();
                                }).catch(function() {
                                    reject();
                                });
                            }
                        }]
                    }).then(function(myAlert) {
                        myAlert.present();
                    });
                } else {
                    resolve();
                }
            }).catch(function(error) {
                _this.mostrarToastSimple('Error comprobando autorizaciòn de estado de dispositivo');
                reject();
            });
        });
    };
    TiposGestionService.prototype.mostrarToast = function(texto) {
        this.toastController.create({
            message: texto,
            duration: 2000
        }).then(function(toast) {
            toast.present();
        });
    };
    TiposGestionService.prototype.mostrarToastSimple = function(mensaje) {
        this.toastController.create({
            message: mensaje,
            duration: 2000
        }).then(function(toast) {
            toast.present();
        });
    };
    TiposGestionService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            HttpClient,
            AlertController,
            ToastController,
            LoadingController,
            AndroidPermissions,
            Diagnostic,
            Geolocation,
            Device,
            ConfiguracionService
        ])
    ], TiposGestionService);
    return TiposGestionService;
}());
export { TiposGestionService };
//# sourceMappingURL=tipos-gestion.service.js.map