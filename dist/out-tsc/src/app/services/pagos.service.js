import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Platform, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigHelper } from '../helpers/config.helper';
// Plugins
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Device } from '@ionic-native/device/ngx';
// Modelos
import { ConfigModel } from '../models/config.model';
// Servicios
import { ConfiguracionService } from './configuracion.service';
import { CuadreCajaRequesModel } from '../models/cuadre-caja.model';
var PagosService = /** @class */ (function() {
    function PagosService(platform, http, alertController, toastController, loadingController, androidPermissions, diagnostic, geolocation, device, configuracionService) {
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
        this.config = this.configuracionService.config;
    }
    PagosService.prototype.cargarFormaPago = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
            var configHelper = new ConfigHelper(_this.config);
            _this.http.get(configHelper.getApiUrl() + "/pago/TiposPagos")
                .subscribe(function(result) {
                    resolve(result);
                }, function(error) {
                    console.log(JSON.stringify(error));
                    reject();
                    _this.mostrarToastSimple('Error realizando el pago');
                });
        });
    };
    PagosService.prototype.cuadreCaja = function(fecha, usuario) {
        var _this = this;
        return new Promise(function(resolve, reject) {
            _this.loadingController.create({
                message: 'Cuadrando Caja',
                duration: 30000
            }).then(function(loading) {
                loading.present();
                var dataPost = new CuadreCajaRequesModel(usuario, fecha);
                var configHelper = new ConfigHelper(_this.configuracionService.config);
                var httpOptions = {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json'
                    })
                };
                _this.http.post(configHelper.getApiUrl() + "/cuadre/cuadre", dataPost, httpOptions)
                    //this.http.post('http://localhost:50088/api/cuadre/cuadre', dataPost, httpOptions)
                    .subscribe(function(data) {
                        loading.dismiss();
                        resolve(data);
                    }, function(error) {
                        console.log(JSON.stringify(error));
                        _this.mostrarToastSimple('Error autenticando en el servidor');
                        loading.dismiss();
                        reject();
                    });
            });
        });
    };
    PagosService.prototype.prepararRegistroPago = function(registroPago) {
        var _this = this;
        return new Promise(function(resolve, reject) {
            if (!registroPago.FORMAPAGO) {
                _this.mostrarToastSimple('Por favor seleccione la forma de pago');
                reject();
                return;
            }
            if (!_this.platform.is('android')) {
                resolve(registroPago);
            } else {
                // Validaciones de permisos en Android
                _this.validarAccesoGPS().then(function() {
                    _this.validarGPSActivo().then(function() {
                        _this.validarAccesoDispositivo().then(function() {
                            _this.loadingController.create({
                                message: 'Obteniendo geolocalización',
                                duration: 15300
                            }).then(function(loading) {
                                loading.present();
                                // Obtenemos la geolocalización
                                _this.geolocation.getCurrentPosition({
                                    timeout: 15000,
                                    enableHighAccuracy: true
                                }).then(function(resp) {
                                    loading.dismiss();
                                    registroPago.POSX = String(resp.coords.latitude);
                                    registroPago.POSY = String(resp.coords.longitude);
                                    // Obtenemos el UUID
                                    registroPago.MAQUINA = _this.device.uuid;
                                    console.log("POSX: " + registroPago.POSX + ", POSY: " + registroPago.POSY);
                                    console.log("MAQUINA: " + registroPago.MAQUINA);
                                    // Mostrar modal de confirmación
                                    resolve(registroPago);
                                }).catch(function(error) {
                                    loading.dismiss();
                                    _this.mostrarToastSimple('Error obteniendo la geolocalización, intente de nuevo');
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
    PagosService.prototype.validarAccesoGPS = function() {
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
    PagosService.prototype.validarGPSActivo = function() {
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
    PagosService.prototype.validarAccesoDispositivo = function() {
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
    PagosService.prototype.registrarPago = function(pago) {
        var _this = this;
        return new Promise(function(resolve, reject) {
            var configHelper = new ConfigHelper(_this.config);
            var httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                })
            };
            _this.loadingController.create({
                message: 'Registrando pago',
                duration: 30000
            }).then(function(loading) {
                loading.present();
                _this.http.post(configHelper.getApiUrl() + "/pago/create", pago, httpOptions)
                    //this.http.post('http://localhost:5008/api/pago/create', pago, httpOptions)
                    .subscribe(function(result) {
                        if (result.Respuesta.indexOf('ERROR') !== -1) {
                            loading.dismiss();
                            _this.alertController.create({
                                header: 'Error',
                                message: result.Respuesta.split('-')[1] + ' ' + result.Respuesta.split('-')[2],
                                buttons: ['Ok']
                            }).then(function(obj) {
                                obj.present();
                            });
                            reject();
                        } else {
                            loading.dismiss();
                            _this.alertController.create({
                                header: 'Información',
                                message: 'Pago realizado satisfactoriamente',
                                buttons: ['Ok']
                            }).then(function(obj) {
                                obj.present();
                            });
                            resolve(result);
                        }
                    }, function(error) {
                        loading.dismiss();
                        console.log(JSON.stringify(error));
                        reject();
                        _this.mostrarToastSimple('Error realizando el pago');
                    });
            });
        });
    };
    PagosService.prototype.mostrarAlertSimple = function(titulo, texto) {
        this.alertController.create({
            header: titulo,
            message: texto,
            buttons: [{
                role: 'cancel',
                text: 'Ok'
            }]
        }).then(function(myAlert) {
            myAlert.present();
        });
    };
    PagosService.prototype.mostrarToastSimple = function(texto) {
        this.toastController.create({
            message: texto,
            duration: 2000
        }).then(function(toast) {
            toast.present();
        });
    };
    PagosService = tslib_1.__decorate([
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
    ], PagosService);
    return PagosService;
}());
export { PagosService };
//# sourceMappingURL=pagos.service.js.map