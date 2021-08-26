(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-config-config-module"],{

/***/ "/WYT":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/config/config.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Configuración\"></app-header>\r\n\r\n<ion-content>\r\n    <ion-grid fixed>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-item>\r\n                    <ion-label position=\"fixed\">Ip servidor</ion-label>\r\n                    <ion-input #servidorIp autofocus=\"true\" placeholder=\"Ejemplo: 127.0.0.1\" type=\"text\" [value]=\"config.servidorIp\" (ionChange)=\"actualizarcampoConfig('servidorIp', servidorIp.value)\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-margin-bottom\">\r\n            <ion-col>\r\n                <ion-item>\r\n                    <ion-label position=\"fixed\">Puerto</ion-label>\r\n                    <ion-input #servidorPuerto placeholder=\"Ejemplo: 5544\" type=\"text\" [value]=\"config.servidorPuerto\" (ionChange)=\"actualizarcampoConfig('servidorPuerto', servidorPuerto.value)\">\r\n                    </ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-text-center\">\r\n            <ion-col>\r\n                <p>Seleccione el logo de la empresa</p>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n\r\n                <ion-thumbnail class=\"logo-empresa borde\" (click)=\"cambiarLogoEmpresaClick()\">\r\n                    <ion-icon color=\"medium\" *ngIf=\"!config.logoEmpresa\" name=\"ios-image\"></ion-icon>\r\n                    <ion-img *ngIf=\"config.logoEmpresa\" [src]=\"config.logoEmpresaUtilizable\"></ion-img>\r\n                </ion-thumbnail>\r\n\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"mostrarRuta\">\r\n            <ion-col size=\"12\">\r\n                <p *ngIf=\"config.logoEmpresa\">\r\n                    {{config.logoEmpresa}}\r\n                </p>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button color=\"danger\" expand=\"block\" (click)=\"guardarConfiguracionClick()\">\r\n                    Guardar\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button color=\"danger\" expand=\"block\" (click)=\"configurarImpresoraClick()\">\r\n                    Configurar impresora\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button color=\"danger\" expand=\"block\" (click)=\"ValidarLicencia()\">\r\n                    Validar Licencia\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-button color=\"danger\" expand=\"block\">\r\n                    V. 25/Ago/2021\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n</ion-content>");

/***/ }),

/***/ "JqvM":
/*!*********************************************!*\
  !*** ./src/app/pages/config/config.page.ts ***!
  \*********************************************/
/*! exports provided: ConfigPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPage", function() { return ConfigPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_config_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./config.page.html */ "/WYT");
/* harmony import */ var _config_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.page.scss */ "a4Zq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "tAfe");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "eHpL");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../models/config.model */ "oRqo");
/* harmony import */ var _services_configuracion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../services/configuracion.service */ "Hpqp");
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/print.service */ "Bhbv");
/* harmony import */ var _services_sesion_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../services/sesion.service */ "PbBf");






// plugins




// Servicios



var ConfigPage = /** @class */ (function () {
    function ConfigPage(platform, router, toastController, webview, file, imagePicker, configuracionService, print, alert, sesionService) {
        var _this = this;
        this.platform = platform;
        this.router = router;
        this.toastController = toastController;
        this.webview = webview;
        this.file = file;
        this.imagePicker = imagePicker;
        this.configuracionService = configuracionService;
        this.print = print;
        this.alert = alert;
        this.sesionService = sesionService;
        this.config = new _models_config_model__WEBPACK_IMPORTED_MODULE_9__["ConfigModel"]();
        this.mostrarRuta = false;
        this.actualizarcampoConfig = function (campo, valor) {
            _this.config[campo] = valor;
        };
        this.guardarConfiguracionClick = function () {
            if (!_this.config.servidorIp) {
                _this.mostrarToast('Por favor ingrese la IP del servidor');
                return;
            }
            if (_this.config.servidorIp.split('.').length !== 4 && _this.config.servidorIp.toLocaleLowerCase() !== 'localhost') {
                _this.mostrarToast('Por favor ingrese una IP válida');
                return;
            }
            if (!_this.config.servidorPuerto) {
                _this.mostrarToast('Por favor ingrese el puerto del servidor');
                return;
            }
            _this.configuracionService.guardarConfiguracion()
                .then(function () {
                _this.mostrarToast('Configuración guardada');
            })
                .catch(function (error) {
                _this.mostrarToast("Error guardando la configuraci\u00F3n: " + error.exception);
            });
        };
        this.mostrarToast = function (mensaje) {
            _this.toastController.create({
                message: mensaje,
                duration: 2000
            }).then(function (toast) {
                toast.present();
            });
        };
    }
    ConfigPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Cargamos la configuración en pantalla
            _this.config = _this.configuracionService.config;
        });
    };
    ConfigPage.prototype.cambiarLogoEmpresaClick = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            this.mostrarToast('Esta funcionalidad sólo es permitida en Android o IOS');
            return;
        }
        var options = {
            maximumImagesCount: 1
        };
        this.imagePicker.getPictures(options)
            .then(function (results) {
            var _loop_1 = function () {
                var rutaArchivoActual = results[i];
                var directorioActual = rutaArchivoActual.substr(0, rutaArchivoActual.lastIndexOf('/'));
                var nombreArchivo = rutaArchivoActual.substr((rutaArchivoActual.lastIndexOf('/') + 1));
                var extensionArchivo = nombreArchivo.substr(nombreArchivo.lastIndexOf('.'));
                var nuevoDirectorio = _this.file.dataDirectory + "logos/";
                var nuevoNombreArchivo = "logo_empresa" + extensionArchivo;
                _this.file.resolveDirectoryUrl(_this.file.dataDirectory)
                    .then(function (directoryEntry) {
                    directoryEntry.getDirectory('logos', { create: true }, function (logosEntry) {
                        _this.file.moveFile(directorioActual, nombreArchivo, nuevoDirectorio, nuevoNombreArchivo)
                            .then(function (archivoMovido) {
                            _this.config.logoEmpresa = archivoMovido.toURL();
                            _this.actualizaLogoEmpresa();
                            console.log("El archivo se movio desde " + rutaArchivoActual + " a " + archivoMovido.toURL());
                        })
                            .catch(function (error) {
                            _this.mostrarToast('Error moviendo el archivo');
                        });
                    }, function (error) {
                        _this.mostrarToast('Error obteniendo diectorio de logos');
                    });
                })
                    .catch(function (error) {
                    _this.mostrarToast('Error resolviendo el directorio de dataDirectory');
                });
            };
            // tslint:disable-next-line: prefer-for-of
            for (var i = 0; i < results.length; i++) {
                _loop_1();
            }
        }, function (err) {
            _this.mostrarToast('Error obteniendo la galería');
        });
    };
    ConfigPage.prototype.actualizaLogoEmpresa = function () {
        var _this = this;
        setTimeout(function () {
            _this.configuracionService.generarRutaLogoReutilizable();
        }, 500);
    };
    ConfigPage.prototype.ValidarLicencia = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            cssClass: 'my-custom-class',
                            header: 'Confirmar Licencia!',
                            message: 'Desea Validar La <strong>Licencia</strong>!!!',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Confirmar',
                                    handler: function () {
                                        if (_this.config.servidorIp !== null && _this.config.servidorIp !== undefined && _this.config.servidorIp !== '') {
                                            _this.sesionService.agregarLicencia(_this.config);
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfigPage.prototype.configurarImpresoraClick = function () {
        /**
         * Se genera lógica para consulta de dispositivos bluetooth.
         */
        var _this = this;
        this.print.searchBt().then(function (res) {
            var inputs = [];
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var item = res_1[_i];
                inputs.push({
                    name: item.address,
                    type: 'radio',
                    value: item.address,
                    label: item.name
                });
            }
            var modalPrint;
            _this.alert.create({
                header: 'Dispositivos',
                inputs: inputs,
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary'
                    },
                    {
                        text: 'Aceptar',
                        handler: function (data) {
                            _this.configuracionService.guardarImpresora(data).then(function (res) {
                                _this.toastController.create({
                                    message: 'Impresora configurada satisfactoriamente',
                                    duration: 2000
                                }).then(function (res) {
                                    res.present();
                                });
                            }).catch(function (err) {
                                _this.toastController.create({ message: err.message, duration: 2000 }).then(function (obj) { obj.present(); });
                            });
                        }
                    }
                ]
            }).then(function (res) {
                modalPrint = res;
                res.present();
            });
        }).catch(function (err) {
            _this.alert.create({
                header: 'Error',
                message: 'Se ha presentado un error al conectarnos con sus dispositivos Bluetooth, por favor revise su conexión',
                buttons: ['Ok']
            }).then(function (res) {
                res.present();
            });
        });
    };
    ConfigPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__["WebView"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
        { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"] },
        { type: _services_configuracion_service__WEBPACK_IMPORTED_MODULE_10__["ConfiguracionService"] },
        { type: _services_print_service__WEBPACK_IMPORTED_MODULE_11__["PrintService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _services_sesion_service__WEBPACK_IMPORTED_MODULE_12__["SesionService"] }
    ]; };
    ConfigPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-config',
            template: _raw_loader_config_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_config_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__["WebView"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"],
            _services_configuracion_service__WEBPACK_IMPORTED_MODULE_10__["ConfiguracionService"],
            _services_print_service__WEBPACK_IMPORTED_MODULE_11__["PrintService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _services_sesion_service__WEBPACK_IMPORTED_MODULE_12__["SesionService"]])
    ], ConfigPage);
    return ConfigPage;
}());



/***/ }),

/***/ "a4Zq":
/*!***********************************************!*\
  !*** ./src/app/pages/config/config.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "t5pA":
/*!***********************************************!*\
  !*** ./src/app/pages/config/config.module.ts ***!
  \***********************************************/
/*! exports provided: ConfigPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPageModule", function() { return ConfigPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var _config_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config.page */ "JqvM");
/* harmony import */ var src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/own-components/own-components.module */ "9FvA");








var routes = [
    {
        path: '',
        component: _config_page__WEBPACK_IMPORTED_MODULE_6__["ConfigPage"]
    }
];
var ConfigPageModule = /** @class */ (function () {
    function ConfigPageModule() {
    }
    ConfigPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__["OwnComponentsModule"]
            ],
            declarations: [_config_page__WEBPACK_IMPORTED_MODULE_6__["ConfigPage"]]
        })
    ], ConfigPageModule);
    return ConfigPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-config-config-module.js.map