(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-cuadre-caja-cuadre-caja-module~pages-lista-pago-lista-pago-module~pages-registrar-pago~352ba1bd"],{

/***/ "6kuY":
/*!*********************************************************!*\
  !*** ./src/app/models/responses/pago-response.model.ts ***!
  \*********************************************************/
/*! exports provided: PagoResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagoResponseModel", function() { return PagoResponseModel; });
// Informaciòn que retorna el servidor al inicar sesión
var PagoResponseModel = /** @class */ (function () {
    function PagoResponseModel() {
        this.DetallePago = '';
    }
    return PagoResponseModel;
}());



/***/ }),

/***/ "tDkB":
/*!*******************************************!*\
  !*** ./src/app/services/pagos.service.ts ***!
  \*******************************************/
/*! exports provided: PagosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagosService", function() { return PagosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _helpers_config_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/config.helper */ "5Ez/");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "mtRb");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/device/ngx */ "xS7M");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/config.model */ "oRqo");
/* harmony import */ var _configuracion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./configuracion.service */ "Hpqp");
/* harmony import */ var _models_cuadre_caja_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/cuadre-caja.model */ "qDQK");
/* harmony import */ var _models_responses_pago_response_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/responses/pago-response.model */ "6kuY");
/* harmony import */ var _offline_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./offline.service */ "DFAf");





// Plugins




// Modelos

// Servicios




var PagosService = /** @class */ (function () {
    function PagosService(platform, http, alertController, toastController, loadingController, androidPermissions, diagnostic, geolocation, device, configuracionService, offline) {
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
        this.offline = offline;
        this.config = new _models_config_model__WEBPACK_IMPORTED_MODULE_9__["ConfigModel"]();
        this.ValorPorDia = 0;
        this.DiasASumar = 0;
        this.config = this.configuracionService.config;
    }
    PagosService.prototype.cargarFormaPago = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;
            if (!isOffline) {
                var configHelper = new _helpers_config_helper__WEBPACK_IMPORTED_MODULE_4__["ConfigHelper"](_this.config);
                _this.http.get(configHelper.getApiUrl() + "/pago/TiposPagos")
                    .subscribe(function (result) {
                    resolve(result);
                }, function (error) {
                    console.log(JSON.stringify(error));
                    reject();
                    _this.mostrarToastSimple('Error realizando el pago');
                });
            }
            else {
                _this.offline.createDatabase().then(function (res) {
                    // tslint:disable-next-line: no-shadowed-variable
                    _this.offline.getFormaPago().then(function (result) {
                        resolve(result);
                    });
                });
            }
        });
    };
    PagosService.prototype.cuadreCaja = function (fecha, usuario) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;
            if (!isOffline) {
                _this.loadingController.create({
                    message: 'Cuadrando Caja',
                    duration: 30000
                }).then(function (loading) {
                    loading.present();
                    var dataPost = new _models_cuadre_caja_model__WEBPACK_IMPORTED_MODULE_11__["CuadreCajaRequesModel"](usuario, fecha);
                    var configHelper = new _helpers_config_helper__WEBPACK_IMPORTED_MODULE_4__["ConfigHelper"](_this.configuracionService.config);
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                            'Content-Type': 'application/json'
                        })
                    };
                    _this.http.post(configHelper.getApiUrl() + "/cuadre/cuadre", dataPost, httpOptions)
                        .subscribe(function (data) {
                        loading.dismiss();
                        resolve(data);
                    }, function (error) {
                        console.log(JSON.stringify(error));
                        _this.mostrarToastSimple('Error autenticando en el servidor');
                        loading.dismiss();
                        reject();
                    });
                });
            }
            else {
                _this.loadingController.create({
                    message: 'Cuadrando Caja',
                    duration: 30000
                }).then(function (loading) {
                    loading.present();
                    _this.offline.getCuadreCaja(usuario, fecha).then(function (data) {
                        loading.dismiss();
                        resolve(data);
                    });
                });
            }
        });
    };
    PagosService.prototype.lstPagos = function (fecha, usuario) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadingController.create({
                message: 'Lista Pagos',
                duration: 30000
            }).then(function (loading) {
                loading.present();
                var dataPost = new _models_cuadre_caja_model__WEBPACK_IMPORTED_MODULE_11__["CuadreCajaRequesModel"](usuario, fecha);
                var configHelper = new _helpers_config_helper__WEBPACK_IMPORTED_MODULE_4__["ConfigHelper"](_this.configuracionService.config);
                var httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                        'Content-Type': 'application/json'
                    })
                };
                _this.http.post(configHelper.getApiUrl() + "/cuadre/lstPagoUser", dataPost, httpOptions)
                    .subscribe(function (data) {
                    loading.dismiss();
                    resolve(data);
                }, function (error) {
                    console.log(JSON.stringify(error));
                    _this.mostrarToastSimple('Error autenticando en el servidor');
                    loading.dismiss();
                    reject();
                });
            });
        });
    };
    PagosService.prototype.prepararRegistroPago = function (registroPago) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!registroPago.FORMAPAGO) {
                _this.mostrarToastSimple('Por favor seleccione la forma de pago');
                reject();
                return;
            }
            if (!_this.platform.is('android')) {
                resolve(registroPago);
            }
            else {
                // Validaciones de permisos en Android
                _this.validarAccesoGPS().then(function () {
                    _this.validarGPSActivo().then(function () {
                        _this.validarAccesoDispositivo().then(function () {
                            _this.loadingController.create({
                                message: 'Obteniendo geolocalización',
                                duration: 5300
                            }).then(function (loading) {
                                loading.present();
                                // Obtenemos la geolocalización
                                _this.geolocation.getCurrentPosition({
                                    timeout: 5000,
                                    enableHighAccuracy: true
                                }).then(function (resp) {
                                    loading.dismiss();
                                    registroPago.POSX = String(resp.coords.latitude);
                                    registroPago.POSY = String(resp.coords.longitude);
                                    // Obtenemos el UUID
                                    registroPago.MAQUINA = _this.device.uuid;
                                    console.log("POSX: " + registroPago.POSX + ", POSY: " + registroPago.POSY);
                                    console.log("MAQUINA: " + registroPago.MAQUINA);
                                    // Mostrar modal de confirmación
                                    resolve(registroPago);
                                }).catch(function (error) {
                                    loading.dismiss();
                                    _this.mostrarToastSimple('Error obteniendo la geolocalización, intente de nuevo');
                                    resolve(registroPago);
                                    //reject();
                                });
                            });
                        }).catch(function () {
                            reject();
                        });
                    }).catch(function () {
                        reject();
                    });
                }).catch(function () {
                    reject();
                });
            }
        });
    };
    PagosService.prototype.validarAccesoGPS = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.diagnostic.isLocationAuthorized().then(function (authorized) {
                console.log("\u00BFAutorizado permiso de GPS?: " + (authorized ? 'SI' : 'NO'));
                if (!authorized) {
                    // No está autorizada la app
                    _this.alertController.create({
                        header: 'Permiso uso de GPS',
                        message: 'Necesitamos su permiso para acceder al GPS antes de continuar.',
                        buttons: [{
                                role: 'cancel',
                                text: 'Cancelar',
                                handler: function () {
                                    reject();
                                }
                            }, {
                                text: 'De acuerdo',
                                handler: function () {
                                    _this.diagnostic.requestLocationAuthorization().then(function () {
                                        resolve(null);
                                    }).catch(function () {
                                        _this.mostrarToastSimple('No se concedió acceso al GPS');
                                        reject();
                                    });
                                }
                            }]
                    }).then(function (myAlert) {
                        myAlert.present();
                    });
                }
                else {
                    resolve(null);
                }
            }).catch(function (error) {
                _this.mostrarToastSimple('Error comprobando autorizaciòn de GPS');
                reject();
            });
        });
    };
    PagosService.prototype.validarGPSActivo = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.diagnostic.isGpsLocationAvailable().then(function (enabled) {
                console.log("\u00BFEsta activado GPS?: " + (enabled ? 'SI' : 'NO'));
                if (!enabled) {
                    // No está activo el GPS
                    _this.alertController.create({
                        header: 'Activar GPS',
                        message: 'Por favor active el GPS en el modo Alta precisión antes de continuar.',
                        buttons: [{
                                role: 'cancel',
                                text: 'Cancelar',
                                handler: function () {
                                    reject();
                                }
                            }, {
                                text: 'De acuerdo',
                                handler: function () {
                                    _this.diagnostic.switchToLocationSettings();
                                    reject();
                                }
                            }]
                    }).then(function (myAlert) {
                        myAlert.present();
                    });
                }
                else {
                    resolve(null);
                }
            }).catch(function (error) {
                _this.mostrarToastSimple('Error comprobando GPS activo');
                reject();
            });
        });
    };
    // Para consultar el IMEI
    PagosService.prototype.validarAccesoDispositivo = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(function (hasPermission) {
                console.log("\u00BFAutorizado permiso de estado de dispositivo?: " + (hasPermission ? 'SI' : 'NO'));
                if (!hasPermission) {
                    _this.alertController.create({
                        header: 'Permiso estado dispositivo',
                        message: 'Necesitamos consultar el estado del dispositivo, por favor concedanos el permiso antes de continuar.',
                        buttons: [{
                                role: 'cancel',
                                text: 'Cancelar',
                                handler: function () {
                                    reject();
                                }
                            }, {
                                text: 'De acuerdo',
                                handler: function () {
                                    // Solicitar permiso
                                    _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(function () {
                                        resolve(null);
                                    }).catch(function () {
                                        reject();
                                    });
                                }
                            }]
                    }).then(function (myAlert) {
                        myAlert.present();
                    });
                }
                else {
                    resolve(null);
                }
            }).catch(function (error) {
                _this.mostrarToastSimple('Error comprobando autorizaciòn de estado de dispositivo');
                reject();
            });
        });
    };
    PagosService.prototype.registrarPago = function (pago) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var configHelper = new _helpers_config_helper__WEBPACK_IMPORTED_MODULE_4__["ConfigHelper"](_this.config);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                })
            };
            var isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;
            if (!isOffline) {
                _this.loadingController.create({
                    message: 'Registrando pago',
                    duration: 30000
                }).then(function (loading) {
                    loading.present();
                    console.log("los datos del pago son:", pago);
                    _this.http.post(configHelper.getApiUrl() + "/pago/create", pago, httpOptions)
                        //this.http.post('http://localhost:5008/api/pago/create', pago, httpOptions)
                        .subscribe(function (result) {
                        if (result.Respuesta.indexOf('ERROR') !== -1) {
                            loading.dismiss();
                            _this.alertController.create({
                                header: 'Error',
                                message: result.Respuesta.split('-')[1] + ' ' + result.Respuesta.split('-')[2],
                                buttons: ['Ok']
                            }).then(function (obj) {
                                obj.present();
                            });
                            reject();
                        }
                        else {
                            loading.dismiss();
                            _this.alertController.create({
                                header: 'Información',
                                message: 'Pago realizado satisfactoriamente',
                                buttons: ['Ok']
                            }).then(function (obj) {
                                obj.present();
                            });
                            resolve(result);
                        }
                    }, function (error) {
                        loading.dismiss();
                        console.log(JSON.stringify(error));
                        reject();
                        _this.mostrarToastSimple('Error realizando el pago');
                    });
                });
            }
            else {
                var result_1 = new _models_responses_pago_response_model__WEBPACK_IMPORTED_MODULE_12__["PagoResponseModel"]();
                _this.loadingController.create({
                    message: 'Registrando Pago',
                    duration: 30000
                }).then(function (loading) {
                    loading.present();
                    _this.offline.guardarPagosLocal(pago).then(function (resp) {
                        loading.dismiss();
                        _this.alertController.create({
                            header: 'Información',
                            message: 'Pago realizado satisfactoriamente',
                            buttons: ['Ok']
                            // tslint:disable-next-line: whitespace
                        }).then(function (obj) {
                            obj.present();
                        });
                        _this.offline.getPagoHasta(pago.IDCONTRATO).then(function (res) {
                            result_1.NroRecibo = pago.NRORECIBO; //resp; momentGGGG
                            result_1.VlrDctoPago = pago.DESCUENTO;
                            result_1.VlrIva = 0;
                            result_1.VlrCto = pago.VALOR;
                            //result.DetallePago = pago.OBSERVACIONES;
                            var fecha = new Date(res.PAGOHASTA);
                            result_1.Desde = fecha.toString();
                            console.log("el pago**********************", pago);
                            if (pago.CANTIDADCUOTAS == 0) {
                                _this.DiasMes = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0);
                                _this.ValorPorDia = (pago.CUOTAMENSUAL / _this.DiasMes.getDate());
                                _this.DiasASumar = (pago.VALOR / _this.ValorPorDia);
                                result_1.Hasta = new Date(new Date(res.PAGOHASTA).setDate(new Date(res.PAGOHASTA).getDate() + Math.round(_this.DiasASumar))).toString();
                                console.log("los datos son DiasMes ", _this.DiasMes.getDate(), " ValorPorDia ", _this.ValorPorDia, "  DiasASumar ", Math.round(_this.DiasASumar), "  result.Hasta ", result_1.Hasta);
                            }
                            else {
                                result_1.Hasta = new Date(new Date(res.PAGOHASTA).setMonth(new Date(res.PAGOHASTA).getMonth() + pago.CANTIDADCUOTAS)).toString();
                            }
                            _this.offline.updatePagoHasta(result_1.Hasta, pago.IDCONTRATO).then(function () { });
                            //actualiza las fechas del pago 
                            _this.offline.fechasPagos(result_1.Desde, result_1.Hasta, result_1.NroRecibo).then(function () { });
                            resolve(result_1);
                        });
                        // resolve(result);
                    });
                });
            }
        });
    };
    PagosService.prototype.mostrarAlertSimple = function (titulo, texto) {
        this.alertController.create({
            header: titulo,
            message: texto,
            buttons: [{
                    role: 'cancel',
                    text: 'Ok'
                }]
        }).then(function (myAlert) {
            myAlert.present();
        });
    };
    PagosService.prototype.mostrarToastSimple = function (texto) {
        this.toastController.create({
            message: texto,
            duration: 2000
        }).then(function (toast) {
            toast.present();
        });
    };
    PagosService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__["AndroidPermissions"] },
        { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_7__["Diagnostic"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"] },
        { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"] },
        { type: _configuracion_service__WEBPACK_IMPORTED_MODULE_10__["ConfiguracionService"] },
        { type: _offline_service__WEBPACK_IMPORTED_MODULE_13__["OfflineService"] }
    ]; };
    PagosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__["AndroidPermissions"],
            _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_7__["Diagnostic"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"],
            _configuracion_service__WEBPACK_IMPORTED_MODULE_10__["ConfiguracionService"],
            _offline_service__WEBPACK_IMPORTED_MODULE_13__["OfflineService"]])
    ], PagosService);
    return PagosService;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-cuadre-caja-cuadre-caja-module~pages-lista-pago-lista-pago-module~pages-registrar-pago~352ba1bd.js.map