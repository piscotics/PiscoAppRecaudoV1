(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registro-gestion-registro-gestion-module"],{

/***/ "/iV7":
/*!*****************************************************************!*\
  !*** ./src/app/pages/registro-gestion/registro-gestion.page.ts ***!
  \*****************************************************************/
/*! exports provided: RegistroGestionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroGestionPage", function() { return RegistroGestionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registro_gestion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registro-gestion.page.html */ "vryb");
/* harmony import */ var _registro_gestion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registro-gestion.page.scss */ "F6UQ");
/* harmony import */ var _services_tipos_gestion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/tipos-gestion.service */ "Bmi9");
/* harmony import */ var _models_gestion_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/gestion.model */ "bVTB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_enums_modo_visualizar_contrato_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/enums/modo-visualizar-contrato.enum */ "7Ihc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _models_registro_gestion_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/registro-gestion.model */ "gjAW");
/* harmony import */ var _services_sesion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/sesion.service */ "PbBf");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "P4DM");











var RegistroGestionPage = /** @class */ (function () {
    function RegistroGestionPage(tiposGestionService, activatedRoute, sesion, router, alertController) {
        var _this = this;
        this.tiposGestionService = tiposGestionService;
        this.activatedRoute = activatedRoute;
        this.sesion = sesion;
        this.router = router;
        this.alertController = alertController;
        this.contrato = null;
        this.modoVisualizarContrato = src_app_enums_modo_visualizar_contrato_enum__WEBPACK_IMPORTED_MODULE_6__["ModoVisualizarContratoEnum"].MODO_CONCISO;
        this.gestion = null;
        this.registrogestion = null;
        this.tiposGestion = [];
        this.textoBusqueda = new Date(new Date().setDate(new Date().getDate() + 1)).toString();
        this.sesionLocal = null;
        this.mostrarAlerta = function (mensaje) {
            _this.alertController.create({
                header: 'Informaciòn',
                message: mensaje,
                buttons: [{
                        role: 'cancel',
                        text: 'Ok',
                    }]
            }).then(function (alert) {
                alert.present();
            });
        };
    }
    RegistroGestionPage.prototype.ngOnInit = function () {
        var _this = this;
        var contrato = this.activatedRoute.snapshot.paramMap.get('contrato');
        if (contrato) {
            this.contrato = JSON.parse(contrato);
        }
        var gestion = new _models_gestion_model__WEBPACK_IMPORTED_MODULE_4__["GestionModel"]();
        var registrogestion = new _models_registro_gestion_model__WEBPACK_IMPORTED_MODULE_8__["RegistroGestionModel"]();
        gestion.Observaciones = '';
        this.gestion = gestion;
        this.registrogestion = registrogestion;
        this.tiposGestionService.cargarTipoNovedad().then(function (tiponovedades) {
            _this.tiposGestion = tiponovedades;
        });
    };
    RegistroGestionPage.prototype.tipoGestion_Changed = function (event) {
        this.tipogestionselect = event.detail.value;
    };
    RegistroGestionPage.prototype.observacion_Changed = function (event) {
        this.gestion.Observaciones = event.detail.value;
    };
    RegistroGestionPage.prototype.cambiofecha = function (event) {
        this.textoBusqueda = event.target.value;
    };
    RegistroGestionPage.prototype.onClick = function () {
        console.log(this.gestion.Observaciones);
        console.log("el tipo gestion es ");
        console.log(this.tipogestionselect);
        if (this.tipogestionselect == null) {
            this.mostrarAlerta('Seleccione El Tipo De Gestion ');
            return;
        }
        this.guardar();
    };
    RegistroGestionPage.prototype.guardar = function () {
        var _this = this;
        this.sesionLocal = this.sesion.sesionLocal;
        this.registrogestion.Novedad = this.tipogestionselect.Idnovedad;
        this.registrogestion.Observaciones = this.gestion.Observaciones;
        this.tiposGestionService.prepararRegistroNovedad(this.registrogestion).then(function (registro) {
            registro.Fechaprogramada = _this.textoBusqueda.toString();
            registro.Transac = 1;
            registro.Contrato = _this.contrato.contrato;
            registro.Diapos = 1;
            registro.Usuario = _this.sesionLocal.sesionUsuario.USERNAME;
            registro.IdCobrador = _this.sesionLocal.sesionUsuario.IDCOBRADOR;
            registro.Modulo = '1';
            registro.NovedadDesc = _this.tipogestionselect.Novedad;
            registro.PagoHasta = _this.contrato.pagoHasta;
            registro.Titular = _this.contrato.nombre;
            _this.tiposGestionService.registrarNovedad(registro)
                .then(function () {
                _this.router.navigate(['registro-gestion2', JSON.stringify(registro)]);
                _this.gestion.FechaProgramacion = new Date().toDateString();
                _this.gestion.Observaciones = '';
                _this.gestion.TipoGestion = 0;
            });
        });
    };
    RegistroGestionPage.ctorParameters = function () { return [
        { type: _services_tipos_gestion_service__WEBPACK_IMPORTED_MODULE_3__["TiposGestionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _services_sesion_service__WEBPACK_IMPORTED_MODULE_9__["SesionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"] }
    ]; };
    RegistroGestionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-registro-gestion',
            template: _raw_loader_registro_gestion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_registro_gestion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_tipos_gestion_service__WEBPACK_IMPORTED_MODULE_3__["TiposGestionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _services_sesion_service__WEBPACK_IMPORTED_MODULE_9__["SesionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"]])
    ], RegistroGestionPage);
    return RegistroGestionPage;
}());



/***/ }),

/***/ "Bmi9":
/*!***************************************************!*\
  !*** ./src/app/services/tipos-gestion.service.ts ***!
  \***************************************************/
/*! exports provided: TiposGestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiposGestionService", function() { return TiposGestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _helpers_config_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/config.helper */ "5Ez/");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/config.model */ "oRqo");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "mtRb");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/device/ngx */ "xS7M");
/* harmony import */ var _offline_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./offline.service */ "DFAf");
/* harmony import */ var _configuracion_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./configuracion.service */ "Hpqp");





// Modelos

// Plugins





// Servicios

var TiposGestionService = /** @class */ (function () {
    function TiposGestionService(platform, http, alertController, toastController, loadingController, androidPermissions, diagnostic, geolocation, device, configuracionService, offline) {
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
    TiposGestionService.prototype.cargarTipoNovedad = function () {
        var _this = this;
        var isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;
        return new Promise(function (resolve, reject) {
            if (!isOffline) {
                var configHelper = new _helpers_config_helper__WEBPACK_IMPORTED_MODULE_3__["ConfigHelper"](_this.config);
                _this.http.get(configHelper.getApiUrl() + "/contrato/tipoNovedad")
                    .subscribe(function (result) {
                    resolve(result);
                }, function (error) {
                    console.log(JSON.stringify(error));
                    reject();
                    _this.mostrarToast('Error Consultando Tipo Novedad');
                });
            }
            else {
                _this.offline.createDatabase().then(function (res) {
                    // tslint:disable-next-line: no-shadowed-variable
                    _this.offline.getNovedades().then(function (result) {
                        resolve(result);
                    });
                });
            }
        });
    };
    TiposGestionService.prototype.registrarNovedad = function (gestion) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;
            if (!isOffline) {
                var configHelper_1 = new _helpers_config_helper__WEBPACK_IMPORTED_MODULE_3__["ConfigHelper"](_this.config);
                var httpOptions_1 = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                    })
                };
                _this.loadingController.create({
                    message: 'Registrando Novedad',
                    duration: 30000
                }).then(function (loading) {
                    loading.present();
                    console.log(gestion);
                    _this.http.post(configHelper_1.getApiUrl() + "/pago/insertNove", gestion, httpOptions_1)
                        .subscribe(function (result) {
                        if (result === -1) {
                            _this.mostrarAlerta('Ingreso Novedad', 'No se pudo realizar la Novedad.');
                            loading.dismiss();
                        }
                        else {
                            _this.mostrarAlerta('Ingreso Novedad', 'Novedad realizada correctamente.');
                            loading.dismiss();
                            resolve(result);
                        }
                    }, function (error) {
                        loading.dismiss();
                        reject();
                        _this.mostrarToastSimple('Error realizando la novedad');
                    });
                });
            }
            else {
                _this.loadingController.create({
                    message: 'Registrando Novedad',
                    duration: 30000
                }).then(function (loading) {
                    loading.present();
                    gestion.Posx = "";
                    gestion.Posy = "";
                    _this.offline.guardarNovedadLocal(gestion).then(function () {
                        loading.dismiss();
                        _this.alertController.create({
                            header: 'Información',
                            message: 'Novedad Almacenada Con Exito',
                            buttons: ['Ok']
                        }).then(function (obj) {
                            obj.present();
                        });
                        resolve(1);
                    });
                });
            }
        });
    };
    TiposGestionService.prototype.prepararRegistroNovedad = function (gestionModel) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!gestionModel.Novedad) {
                _this.mostrarToastSimple('Por favor seleccione la Novedad');
                reject();
                return;
            }
            if (!_this.platform.is('android')) {
                gestionModel.Posx = '';
                gestionModel.Posy = '';
                resolve(gestionModel);
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
                                    gestionModel.Posx = String(resp.coords.latitude);
                                    gestionModel.Posy = String(resp.coords.longitude);
                                    // Mostrar modal de confirmación
                                    console.log("gestion paso gps ", gestionModel);
                                    resolve(gestionModel);
                                }).catch(function (error) {
                                    loading.dismiss();
                                    gestionModel.Posx = "";
                                    gestionModel.Posy = "";
                                    console.log("gestion error gps ", gestionModel);
                                    resolve(gestionModel);
                                    _this.mostrarToastSimple('Error obteniendo la geolocalización, intente de nuevo');
                                    reject();
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
    TiposGestionService.prototype.validarAccesoGPS = function () {
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
    TiposGestionService.prototype.validarGPSActivo = function () {
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
    TiposGestionService.prototype.validarAccesoDispositivo = function () {
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
    TiposGestionService.prototype.mostrarToast = function (texto) {
        this.toastController.create({
            message: texto,
            duration: 2000
        }).then(function (toast) {
            toast.present();
        });
    };
    TiposGestionService.prototype.mostrarToastSimple = function (mensaje) {
        this.toastController.create({
            message: mensaje,
            duration: 2000
        }).then(function (toast) {
            toast.present();
        });
    };
    TiposGestionService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__["AndroidPermissions"] },
        { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_8__["Diagnostic"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] },
        { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__["Device"] },
        { type: _configuracion_service__WEBPACK_IMPORTED_MODULE_11__["ConfiguracionService"] },
        { type: _offline_service__WEBPACK_IMPORTED_MODULE_10__["OfflineService"] }
    ]; };
    TiposGestionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__["AndroidPermissions"],
            _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_8__["Diagnostic"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__["Device"],
            _configuracion_service__WEBPACK_IMPORTED_MODULE_11__["ConfiguracionService"],
            _offline_service__WEBPACK_IMPORTED_MODULE_10__["OfflineService"]])
    ], TiposGestionService);
    return TiposGestionService;
}());



/***/ }),

/***/ "F6UQ":
/*!*******************************************************************!*\
  !*** ./src/app/pages/registro-gestion/registro-gestion.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Ryby1nZXN0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "IOUn":
/*!*******************************************************************!*\
  !*** ./src/app/pages/registro-gestion/registro-gestion.module.ts ***!
  \*******************************************************************/
/*! exports provided: RegistroGestionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroGestionPageModule", function() { return RegistroGestionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var _registro_gestion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro-gestion.page */ "/iV7");
/* harmony import */ var src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/own-components/own-components.module */ "9FvA");








var routes = [
    {
        path: '',
        component: _registro_gestion_page__WEBPACK_IMPORTED_MODULE_6__["RegistroGestionPage"]
    }
];
var RegistroGestionPageModule = /** @class */ (function () {
    function RegistroGestionPageModule() {
    }
    RegistroGestionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__["OwnComponentsModule"]
            ],
            declarations: [_registro_gestion_page__WEBPACK_IMPORTED_MODULE_6__["RegistroGestionPage"]]
        })
    ], RegistroGestionPageModule);
    return RegistroGestionPageModule;
}());



/***/ }),

/***/ "bVTB":
/*!*****************************************!*\
  !*** ./src/app/models/gestion.model.ts ***!
  \*****************************************/
/*! exports provided: GestionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionModel", function() { return GestionModel; });
var GestionModel = /** @class */ (function () {
    function GestionModel() {
    }
    return GestionModel;
}());



/***/ }),

/***/ "vryb":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro-gestion/registro-gestion.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"registro gestión\"></app-header>\r\n\r\n<ion-content>\r\n    <app-datos-contrato [contrato]=\"contrato\" [modo]=\"modoVisualizarContrato\"></app-datos-contrato>\r\n    <div class=\"ion-padding\">\r\n        <h5 class=\"semi-titulo\">Datos de la gestión</h5>\r\n    </div>\r\n    <ion-grid fixed>\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"5\">Tipo gestión</ion-col>\r\n            <ion-col size=\"7\">\r\n                <ion-select placeholder=\"Seleccione un tipo de gestión\" okText=\"Escoger\" cancelText=\"Cancelar\" [value]=\"gestion.TipoGestion\" (ionChange)=\"tipoGestion_Changed($event)\">\r\n                    <ion-select-option *ngFor=\"let tipoGestion of tiposGestion\" [value]=\"tipoGestion\">\r\n                        {{ tipoGestion.Novedad }}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"5\">Fecha reprogramación</ion-col>\r\n            <ion-col size=\"7\">\r\n                <ion-text color=\"danger\">\r\n                    <ion-datetime displayFormat=\"YYYY MMM DD\" monthShortNames=\"Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre\" value=\"{{ textoBusqueda | date:'yyyy-MM-dd'}}\" (ionChange)=\"cambiofecha($event)\" cancelText=\"Cancelar\" max=\"2050-12-31\"></ion-datetime>\r\n                </ion-text>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"5\">Observaciones</ion-col>\r\n            <ion-col size=\"7\">\r\n                <ion-textarea rows=\"4\" placeholder=\"Ingresa alguna observación\" [value]=\"gestion.Observaciones\" (ionChange)=\"observacion_Changed($event)\">\r\n                </ion-textarea>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col class=\"ion-text-center\" size=\"12\">\r\n                <ion-button color=\"danger\" (click)=\"onClick()\">\r\n                    Guardar\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-registro-gestion-registro-gestion-module.js.map