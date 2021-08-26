(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-actualizar-datos-actualizar-datos-module~pages-consultar-contrato2-consultar-contrato2-module"],{

/***/ "YjMO":
/*!**********************************************!*\
  !*** ./src/app/services/contrato.service.ts ***!
  \**********************************************/
/*! exports provided: ContratoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContratoService", function() { return ContratoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _helpers_config_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/config.helper */ "5Ez/");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/config.model */ "oRqo");
/* harmony import */ var _models_responses_consulta_contrato_response_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/responses/consulta-contrato-response.model */ "msiI");
/* harmony import */ var _configuracion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./configuracion.service */ "Hpqp");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "mtRb");
/* harmony import */ var _offline_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./offline.service */ "DFAf");





// Modelos


// Servicios

// Plugins




var ContratoService = /** @class */ (function () {
    function ContratoService(platform, http, toastController, loadingController, configuracionService, alertController, androidPermissions, diagnostic, geolocation, offline) {
        var _this = this;
        this.platform = platform;
        this.http = http;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.configuracionService = configuracionService;
        this.alertController = alertController;
        this.androidPermissions = androidPermissions;
        this.diagnostic = diagnostic;
        this.geolocation = geolocation;
        this.offline = offline;
        this.config = new _models_config_model__WEBPACK_IMPORTED_MODULE_5__["ConfigModel"]();
        this.mostrarAlerta = function (titulo, mensaje) {
            _this.alertController.create({
                header: titulo,
                message: mensaje,
                buttons: [{
                        role: 'cancel',
                        text: 'Ok',
                    }]
            }).then(function (alert) {
                alert.present();
            });
        };
        this.config = this.configuracionService.config;
    }
    ContratoService.prototype.consultarContratoPorNumero = function (numeroContrato) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('NumberContract', numeroContrato);
            var configHelper = new _helpers_config_helper__WEBPACK_IMPORTED_MODULE_4__["ConfigHelper"](_this.config);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                }),
                params: params
            };
            var isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;
            console.log("isOffline", isOffline);
            if (!isOffline) {
                _this.loadingController.create({
                    message: 'Consultando contrato',
                    duration: 30000
                }).then(function (loading) {
                    loading.present();
                    _this.http.post(configHelper.getApiUrl() + "/contrato/searchnumbercontract", null, httpOptions)
                        .subscribe(function (contrato) {
                        console.log(JSON.stringify(contrato));
                        if (!contrato.Cedula) {
                            loading.dismiss();
                            _this.mostrarToast('No se encontró el contrato, intente nuevamente.');
                            reject();
                        }
                        else {
                            loading.dismiss();
                            resolve(contrato);
                        }
                    }, function (error) {
                        loading.dismiss();
                        console.log(JSON.stringify(error));
                        reject();
                        _this.mostrarToast('Error consultando contrato');
                    });
                });
            }
            else {
                _this.loadingController.create({
                    message: 'Consultando contrato',
                    duration: 30000
                }).then(function (loading) {
                    _this.offline.createDatabase().then(function (res) {
                        // tslint:disable-next-line: no-shadowed-variable
                        _this.offline.getInfoContrato(numeroContrato).then(function (res) {
                            var contrato = new _models_responses_consulta_contrato_response_model__WEBPACK_IMPORTED_MODULE_6__["ConsultaContratoResponseModel"]();
                            contrato.IdContrato = res.IDCONTRATO;
                            contrato.FechaAfiliacion = res.FECHAAFILIACION;
                            contrato.FechaCobertura = res.PAGOHASTA;
                            // contrato.FechaCobertura  = res.FECHACOERTURA;
                            contrato.EstadoContrato = res.ESTADOCONTRATO;
                            contrato.Cedula = res.CEDULA;
                            contrato.Titular = res.TITULAR;
                            contrato.Direccion = res.DIRECCION;
                            contrato.DireccionCobro = res.DIRECCIONCOBRO;
                            contrato.Telefono = res.TELEFONO;
                            contrato.Celular = res.CELULAR;
                            contrato.Plan = res.PLAN;
                            contrato.Cuota = res.CUOTA;
                            contrato.FechaUltimoPago = res.FECHAULTIMOPAGO;
                            contrato.NoRecibo = res.NORECIBO;
                            contrato.Valor = res.VALOR;
                            contrato.Departamento = res.DEPARTAMENTO;
                            contrato.DepartamentoCobro = res.DEPARTAMENTOCOBRO;
                            contrato.Municipio = res.MUNICIPIO;
                            contrato.MunicipioCobro = res.MUNICIPIOCOBRO;
                            contrato.Barrio = res.BARRIO;
                            contrato.BarrioCobro = res.BARRIOCOBRO;
                            contrato.Email = res.EMAIL;
                            if (!contrato.Cedula) {
                                loading.dismiss();
                                _this.mostrarToast('No se encontró el contrato, intente nuevamente.');
                                reject();
                            }
                            else {
                                loading.dismiss();
                                resolve(contrato);
                            }
                        });
                    });
                });
            }
        });
    };
    ContratoService.prototype.consultarBeneficiarrios = function (cedula) {
        var _this = this;
        var isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;
        return new Promise(function (resolve, reject) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('NumberId', cedula);
            var configHelper = new _helpers_config_helper__WEBPACK_IMPORTED_MODULE_4__["ConfigHelper"](_this.config);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                }),
                params: params
            };
            if (!isOffline) {
                _this.loadingController.create({
                    message: 'Consultando Beneficiarios',
                    duration: 30000
                }).then(function (loading) {
                    loading.present();
                    _this.http.post(configHelper.getApiUrl() + "/contrato/searchBene", null, httpOptions)
                        .subscribe(function (beneficiarios) {
                        console.log(JSON.stringify(beneficiarios));
                        if (beneficiarios.length === 0) {
                            loading.dismiss();
                            _this.mostrarToast('No se encontraron Beneficiarios, intente nuevamente.');
                            reject();
                        }
                        else {
                            loading.dismiss();
                            resolve(beneficiarios);
                        }
                    }, function (error) {
                        loading.dismiss();
                        console.log(JSON.stringify(error));
                        reject();
                        _this.mostrarToast('Error consultando Beneficiarios');
                    });
                });
            }
            else {
                _this.loadingController.create({
                    message: 'Consultando Beneficiarios',
                    duration: 30000
                }).then(function (loading) {
                    loading.present();
                    _this.offline.getBeneficiarios(cedula).then(function (beneficiarios) {
                        loading.dismiss();
                        resolve(beneficiarios);
                    });
                });
            }
        });
    };
    ContratoService.prototype.consultarUltimosPagos = function (contrato) {
        var _this = this;
        var isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;
        return new Promise(function (resolve, reject) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('NumberId', contrato);
            var configHelper = new _helpers_config_helper__WEBPACK_IMPORTED_MODULE_4__["ConfigHelper"](_this.config);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                }),
                params: params
            };
            if (!isOffline) {
                _this.loadingController.create({
                    message: 'Consultando Ultimos Pagos',
                    duration: 30000
                }).then(function (loading) {
                    loading.present();
                    _this.http.post(configHelper.getApiUrl() + "/pago/searcPays", null, httpOptions)
                        .subscribe(function (pagos) {
                        console.log(JSON.stringify(pagos));
                        if (pagos.length === 0) {
                            loading.dismiss();
                            _this.mostrarToast('No se encontraron Pagos, intente nuevamente.');
                            reject();
                        }
                        else {
                            loading.dismiss();
                            resolve(pagos);
                        }
                    }, function (error) {
                        loading.dismiss();
                        console.log(JSON.stringify(error));
                        reject();
                        _this.mostrarToast('Error consultando Pagos');
                    });
                });
            }
            else {
                _this.loadingController.create({
                    message: 'Consultando Beneficiarios',
                    duration: 30000
                }).then(function (loading) {
                    loading.present();
                    _this.offline.getUltimospagos(contrato).then(function (pagos) {
                        loading.dismiss();
                        resolve(pagos);
                    });
                });
            }
        });
    };
    ContratoService.prototype.cargarDepartamentos = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var configHelper = new _helpers_config_helper__WEBPACK_IMPORTED_MODULE_4__["ConfigHelper"](_this.config);
            _this.http.get(configHelper.getApiUrl() + "/contrato/departamentos")
                .subscribe(function (result) {
                console.log(JSON.stringify(result));
                resolve(result);
            }, function (error) {
                console.log(JSON.stringify(error));
                reject();
                _this.mostrarToast('Error realizando la consulta De departamentos');
            });
        });
    };
    ContratoService.prototype.cargarMunicipios = function (departamento) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('Departamento', departamento);
            var configHelper = new _helpers_config_helper__WEBPACK_IMPORTED_MODULE_4__["ConfigHelper"](_this.config);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                }),
                params: params
            };
            _this.loadingController.create({
                message: 'Consultando Municipios',
                duration: 30000
            }).then(function (loading) {
                loading.present();
                _this.http.post(configHelper.getApiUrl() + "/contrato/municipios", null, httpOptions)
                    //this.http.post('http://localhost:5008/api/contrato/municipios', null, httpOptions)
                    .subscribe(function (municipios) {
                    console.log(JSON.stringify(municipios));
                    if (municipios.length === 0) {
                        loading.dismiss();
                        _this.mostrarToast('No se encontraron Municipios, intente nuevamente.');
                        reject();
                    }
                    else {
                        loading.dismiss();
                        resolve(municipios);
                    }
                }, function (error) {
                    loading.dismiss();
                    console.log(JSON.stringify(error));
                    reject();
                    _this.mostrarToast('Error consultando Municipios');
                });
            });
        });
    };
    ContratoService.prototype.consultarContratoPorCedula = function (cedula) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('NumberId', cedula);
            var configHelper = new _helpers_config_helper__WEBPACK_IMPORTED_MODULE_4__["ConfigHelper"](_this.config);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                }),
                params: params
            };
            var isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;
            if (!isOffline) {
                _this.loadingController.create({
                    message: 'Consultando contratos',
                    duration: 30000
                }).then(function (loading) {
                    loading.present();
                    _this.http.post(configHelper.getApiUrl() + "/contrato/searchnumberid", null, httpOptions)
                        .subscribe(function (contrato) {
                        console.log(JSON.stringify(contrato));
                        if (contrato.length === 0) {
                            loading.dismiss();
                            _this.mostrarToast('No se encontraron contratos, intente nuevamente.');
                            reject();
                        }
                        else {
                            loading.dismiss();
                            resolve(contrato);
                        }
                    }, function (error) {
                        loading.dismiss();
                        console.log(JSON.stringify(error));
                        reject();
                        _this.mostrarToast('Error consultando contratos');
                    });
                });
            }
            else {
                _this.loadingController.create({
                    message: 'Consultando contrato',
                    duration: 30000
                }).then(function (loading) {
                    _this.offline.createDatabase().then(function (res) {
                        // tslint:disable-next-line: no-shadowed-variable
                        _this.offline.getInfoCedula(cedula).then(function (res) {
                            var returncontrato = [];
                            var contrato = new _models_responses_consulta_contrato_response_model__WEBPACK_IMPORTED_MODULE_6__["ConsultaContratoResponseModel"]();
                            for (var i = 0; i < res.length; i++) {
                                contrato.IdContrato = res[i].IDCONTRATO;
                                contrato.FechaAfiliacion = res[i].FECHAAFILIACION;
                                //contrato.FechaCobertura  = res[i].FECHACOERTURA;
                                contrato.EstadoContrato = res[i].ESTADOCONTRATO;
                                contrato.Cedula = res[i].CEDULA;
                                contrato.FechaCobertura = res[i].PAGOHASTA;
                                contrato.Titular = res[i].TITULAR;
                                contrato.Direccion = res[i].DIRECCION;
                                contrato.DireccionCobro = res[i].DIRECCIONCOBRO;
                                contrato.Telefono = res[i].TELEFONO;
                                contrato.Celular = res[i].CELULAR;
                                contrato.Plan = res[i].PLAN;
                                contrato.Cuota = res[i].CUOTA;
                                contrato.FechaUltimoPago = res[i].FECHAULTIMOPAGO;
                                contrato.NoRecibo = res[i].NORECIBO;
                                contrato.Valor = res[i].VALOR;
                                contrato.Departamento = res[i].DEPARTAMENTO;
                                contrato.DepartamentoCobro = res[i].DEPARTAMENTOCOBRO;
                                contrato.Municipio = res[i].MUNICIPIO;
                                contrato.MunicipioCobro = res[i].MUNICIPIOCOBRO;
                                contrato.Barrio = res[i].BARRIO;
                                contrato.BarrioCobro = res[i].BARRIOCOBRO;
                                contrato.Email = res[i].EMAIL;
                                returncontrato.push(contrato);
                            }
                            if (returncontrato.length === 0) {
                                loading.dismiss();
                                _this.mostrarToast('No se encontraron contratos, intente nuevamente.');
                                reject();
                            }
                            else {
                                loading.dismiss();
                                resolve(returncontrato);
                            }
                        });
                    });
                });
            }
        });
    };
    ContratoService.prototype.actualizarContrato = function (contrato) {
        var _this = this;
        console.log("los datos del contrato son");
        console.log(contrato);
        return new Promise(function (resolve, reject) {
            var configHelper = new _helpers_config_helper__WEBPACK_IMPORTED_MODULE_4__["ConfigHelper"](_this.config);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                })
            };
            _this.loadingController.create({
                message: 'Actualizando Contrato',
                duration: 30000
            }).then(function (loading) {
                loading.present();
                /// this.http.post('http://localhost:5008/api/contrato/updatecontract', contrato, httpOptions)
                _this.http.post(configHelper.getApiUrl() + "/contrato/updatecontract", contrato, httpOptions)
                    .subscribe(function (result) {
                    if (result === '-1') {
                        _this.mostrarAlerta('Actualizando Contrato', 'No se pudo Actualizar el Contrato.');
                        loading.dismiss();
                    }
                    else {
                        _this.mostrarAlerta('Actualizando Contrato', result);
                        loading.dismiss();
                        resolve(null);
                    }
                }, function (error) {
                    loading.dismiss();
                    reject();
                    _this.mostrarToastSimple('Error Actualizando el Contrato');
                });
            });
        });
    };
    ContratoService.prototype.mostrarAlertSimple = function (titulo, texto) {
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
    ContratoService.prototype.prepararRegistroContrato = function (contratoModel) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!contratoModel.contrato) {
                _this.mostrarToastSimple('Por favor seleccione el Contrato');
                reject();
                return;
            }
            if (!_this.platform.is('android')) {
                contratoModel.posx = '';
                contratoModel.posy = '';
                resolve(contratoModel);
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
                                    contratoModel.posx = String(resp.coords.latitude);
                                    contratoModel.posy = String(resp.coords.longitude);
                                    // Mostrar modal de confirmación
                                    resolve(contratoModel);
                                }).catch(function (error) {
                                    loading.dismiss();
                                    _this.mostrarToastSimple('Error obteniendo la geolocalización, intente de nuevo');
                                    //reject();
                                    contratoModel.posx = '';
                                    contratoModel.posy = '';
                                    // Mostrar modal de confirmación
                                    resolve(contratoModel);
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
    ContratoService.prototype.validarAccesoGPS = function () {
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
    ContratoService.prototype.validarGPSActivo = function () {
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
    ContratoService.prototype.validarAccesoDispositivo = function () {
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
    ContratoService.prototype.mostrarToastSimple = function (texto) {
        this.toastController.create({
            message: texto,
            duration: 2000
        }).then(function (toast) {
            toast.present();
        });
    };
    ContratoService.prototype.mostrarToast = function (texto) {
        this.toastController.create({
            message: texto,
            duration: 2000
        }).then(function (toast) {
            toast.present();
        });
    };
    ContratoService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _configuracion_service__WEBPACK_IMPORTED_MODULE_7__["ConfiguracionService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__["AndroidPermissions"] },
        { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_10__["Diagnostic"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"] },
        { type: _offline_service__WEBPACK_IMPORTED_MODULE_11__["OfflineService"] }
    ]; };
    ContratoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _configuracion_service__WEBPACK_IMPORTED_MODULE_7__["ConfiguracionService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__["AndroidPermissions"],
            _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_10__["Diagnostic"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"],
            _offline_service__WEBPACK_IMPORTED_MODULE_11__["OfflineService"]])
    ], ContratoService);
    return ContratoService;
}());



/***/ }),

/***/ "msiI":
/*!**********************************************************************!*\
  !*** ./src/app/models/responses/consulta-contrato-response.model.ts ***!
  \**********************************************************************/
/*! exports provided: ConsultaContratoResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaContratoResponseModel", function() { return ConsultaContratoResponseModel; });
// Informaciòn que retorna el servidor al consultar un contrato
var ConsultaContratoResponseModel = /** @class */ (function () {
    function ConsultaContratoResponseModel() {
    }
    return ConsultaContratoResponseModel;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-actualizar-datos-actualizar-datos-module~pages-consultar-contrato2-consultar-contrato2-module.js.map