(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/05H":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/own-components/ultimos-pagos/ultimos-pagos.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n    <ion-grid>\r\n    <ion-row class=\"md5\" *ngFor=\"let pago of pagos\">\r\n        <ion-card>\r\n            <ion-card-content>\r\n                {{pago}}\r\n            </ion-card-content>\r\n        </ion-card>\r\n        <!-- <ion-col>\r\n            <label *ngFor=\"let item of items\">\r\n        </ion-col> -->\r\n    </ion-row>\r\n</ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "/Zxc":
/*!*****************************************************************************************!*\
  !*** ./src/app/own-components/modal-confirmar-pago/modal-confirmar-pago.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1jb25maXJtYXItcGFnby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Recaudooffline V.1.0.1\PiscoAppRecaudo\src\main.ts */"zUnb");


/***/ }),

/***/ "205S":
/*!*************************************************************!*\
  !*** ./src/app/own-components/header/header.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "4m80":
/*!*********************************************************************!*\
  !*** ./src/app/own-components/datos-pago/datos-pago.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRvcy1wYWdvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "54qg":
/*!***************************************************************************!*\
  !*** ./src/app/own-components/ultimos-pagos/ultimos-pagos.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bHRpbW9zLXBhZ29zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "5Ez/":
/*!******************************************!*\
  !*** ./src/app/helpers/config.helper.ts ***!
  \******************************************/
/*! exports provided: ConfigHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigHelper", function() { return ConfigHelper; });
var ConfigHelper = /** @class */ (function () {
    function ConfigHelper(config) {
        this.config = config;
    }
    ConfigHelper.prototype.getApiUrl = function () {
        return "http://" + this.config.servidorIp + ":" + this.config.servidorPuerto + "/api";
    };
    return ConfigHelper;
}());



/***/ }),

/***/ "5b9S":
/*!*******************************************************************!*\
  !*** ./src/app/own-components/datos-pago/datos-pago.component.ts ***!
  \*******************************************************************/
/*! exports provided: DatosPagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosPagoComponent", function() { return DatosPagoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_datos_pago_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./datos-pago.component.html */ "vE+j");
/* harmony import */ var _datos_pago_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datos-pago.component.scss */ "4m80");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var _models_consulta_pago_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/consulta-pago.model */ "dNaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/printer/ngx */ "METt");
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/print.service */ "Bhbv");
/* harmony import */ var _services_configuracion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/configuracion.service */ "Hpqp");
/* harmony import */ var src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/sesion.service */ "PbBf");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);






// Plugins





var DatosPagoComponent = /** @class */ (function () {
    function DatosPagoComponent(printer, toastController, print, loading, config, sesion) {
        this.printer = printer;
        this.toastController = toastController;
        this.print = print;
        this.loading = loading;
        this.config = config;
        this.sesion = sesion;
    }
    DatosPagoComponent.prototype.ngOnInit = function () { };
    DatosPagoComponent.prototype.imprimir = function () {
        /** Se comenta código anterior por inexistencia de lógica. */
        // this.printer.print('').catch(() => {
        //   this.mostrarToastSimple('Error al imprimir');
        // });
        var _this = this;
        /**
         * Se inicializa el código para realizar la impresión
         * 1) Se crea la cadena para el cuerpo del pos.
         */
        moment__WEBPACK_IMPORTED_MODULE_10__["locale"]('es');
        //el dato apelllido retorna el tipo de documento en el api lo especificaron mal
        var tipodoc = this.sesion.sesionLocal.sesionUsuario.APELLIDOS;
        console.log("el apellido del cobrador es", this.sesion.sesionLocal.sesionUsuario.APELLIDOS);
        //el dato nombre retorna nombre y apellidos del cobrador se especifico mal en el api
        var cobrador = this.sesion.sesionLocal.sesionUsuario.NOMBRES;
        console.log("el nombre es", this.sesion.sesionLocal.sesionUsuario.NOMBRES);
        this.loading.create({
            message: 'Obteniendo configuración de impresora'
        }).then(function (loading) {
            loading.present();
            _this.config.obtenerImpresora().then(function (address) {
                _this.sesion.obtenerInfoEmpresa().then(function (info) {
                    var printBody = '';
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_ALIGN_CT;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += _this.print.normailizeText(info.NOMBRE);
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.normailizeText(info.NIT);
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.normailizeText((info.CIUDAD == null ? '' : (info.CIUDAD + ' - ')) + info.DIRECCION);
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.normailizeText(info.TELEFONOS);
                    printBody += _this.print.PosCommand.LF;
                    printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
                    printBody += _this.print.PosCommand.LF;
                    if (_this.pago.Observaciones.indexOf("COPIA") == -1) {
                        printBody += '| | | | O R I G I N A L | | | |';
                        printBody += _this.print.PosCommand.LF;
                    }
                    else {
                        printBody += '| | | | | | C O P I A  | | | | |';
                        printBody += _this.print.PosCommand.LF;
                    }
                    printBody += '| | | | REGISTRO DE PAGO| | | |';
                    printBody += _this.print.PosCommand.LF;
                    printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    if (_this.pago.NumeroDocumento !== undefined) {
                        var isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;
                        if (!isOffline) {
                            printBody += tipodoc + ': ' + _this.pago.NumeroDocumento;
                        }
                        else {
                            printBody += 'RECIBO' + ': ' + _this.pago.NumeroDocumento;
                        }
                        printBody += _this.print.PosCommand.LF;
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    }
                    /*  }else{
                       printBody += tipodoc + ': ' ;
                       printBody += this.print.PosCommand.LF;
                       printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                     } */
                    printBody += _this.print.PosCommand.LF;
                    printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_ALIGN_LT;
                    printBody += _this.print.mapTextColumn('Contrato:', 'Cuota:');
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += _this.print.mapTextColumn(_this.pago.Contrato, _this.pago.Cuota + '');
                    printBody += _this.print.PosCommand.LF;
                    if (_this.pago.Departamento !== null && _this.pago.Departamento !== undefined) {
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                        printBody += 'Dpto: ' + _this.pago.Departamento;
                        ;
                        printBody += _this.print.PosCommand.LF;
                    }
                    if (_this.pago.Ciudad !== null && _this.pago.Ciudad !== undefined) {
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                        printBody += 'Ciudad: ' + _this.pago.Ciudad;
                        printBody += _this.print.PosCommand.LF;
                    }
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Nombre:';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += _this.pago.Nombre;
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Cedula: ' + _this.pago.Cedula;
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += _this.print.mapTextColumn('Fecha Pago:', 'Total:');
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += _this.print.mapTextColumn(moment__WEBPACK_IMPORTED_MODULE_10__(_this.pago.FechaPago).format('MMM DD, YYYY'), _this.pago.Total + '');
                    printBody += _this.print.PosCommand.LF;
                    if (_this.pago.PagoDesde !== null && _this.pago.PagoDesde !== undefined) {
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                        printBody += _this.print.mapTextColumn('Pago Desde:', 'Pago Hasta:');
                        printBody += _this.print.PosCommand.LF;
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                        // tslint:disable-next-line: max-line-length
                        console.log('el pago hasta es ' + _this.pago.PagoHasta);
                        printBody += _this.print.mapTextColumn(moment__WEBPACK_IMPORTED_MODULE_10__(_this.pago.PagoDesde).format('MMM DD, YYYY'), moment__WEBPACK_IMPORTED_MODULE_10__(_this.pago.PagoHasta).format('MMM DD, YYYY'));
                        printBody += _this.print.PosCommand.LF;
                    }
                    if (_this.pago.PVisita !== null && _this.pago.PVisita !== undefined) {
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                        printBody += _this.print.mapTextColumn('Proxima Visi:', 'Anulado:');
                        printBody += _this.print.PosCommand.LF;
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                        if (_this.pago.Anulado == "1") {
                            printBody += _this.print.mapTextColumn(moment__WEBPACK_IMPORTED_MODULE_10__(_this.pago.PVisita).format('MMM DD, YYYY'), "Si");
                        }
                        else {
                            printBody += _this.print.mapTextColumn(moment__WEBPACK_IMPORTED_MODULE_10__(_this.pago.PVisita).format('MMM DD, YYYY'), "No");
                        }
                        printBody += _this.print.PosCommand.LF;
                    }
                    if (_this.pago.Vdesde !== null && _this.pago.Vdesde !== undefined) {
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                        printBody += _this.print.mapTextColumn('V Desde:', 'v Hasta:');
                        printBody += _this.print.PosCommand.LF;
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                        printBody += _this.print.mapTextColumn(moment__WEBPACK_IMPORTED_MODULE_10__(_this.pago.Vdesde).format('MMM DD, YYYY'), moment__WEBPACK_IMPORTED_MODULE_10__(_this.pago.Vhasta).format('MMM DD, YYYY'));
                        printBody += _this.print.PosCommand.LF;
                    }
                    if (_this.pago.VlrCto !== null && _this.pago.VlrCto !== undefined) {
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                        printBody += 'Valor Contrato:';
                        printBody += _this.print.PosCommand.LF;
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                        printBody += _this.pago.VlrCto;
                        printBody += _this.print.PosCommand.LF;
                    }
                    if (_this.pago.VlrSaldo !== null && _this.pago.VlrSaldo !== undefined) {
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                        printBody += 'Saldo Contrato:';
                        printBody += _this.print.PosCommand.LF;
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                        printBody += _this.pago.VlrSaldo;
                        printBody += _this.print.PosCommand.LF;
                    }
                    if (_this.pago.VlrDctoPago !== null) {
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                        printBody += 'Dcto: ' + _this.pago.VlrDctoPago;
                        ;
                        printBody += _this.print.PosCommand.LF;
                    }
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Forma De Pago: ' + _this.pago.FormaPago;
                    printBody += _this.print.PosCommand.LF;
                    if (_this.pago.VlrIva !== null) {
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                        printBody += 'Valor Iva:';
                        printBody += _this.print.PosCommand.LF;
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                        printBody += _this.pago.VlrIva;
                        printBody += _this.print.PosCommand.LF;
                    }
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Cobrador:';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += cobrador;
                    printBody += _this.print.PosCommand.LF;
                    if (_this.pago.ValorLetras !== undefined) {
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                        printBody += 'Valor en Letras:';
                        printBody += _this.print.PosCommand.LF;
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                        printBody += _this.pago.ValorLetras;
                        printBody += _this.print.PosCommand.LF;
                    }
                    if (_this.pago.Terminal !== null) {
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                        printBody += 'Terminal:';
                        printBody += _this.print.PosCommand.LF;
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                        printBody += _this.pago.Terminal;
                        printBody += _this.print.PosCommand.LF;
                    }
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Usuario: ' + _this.pago.Usuario;
                    printBody += _this.print.PosCommand.LF;
                    printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
                    printBody += _this.print.PosCommand.LF;
                    if (_this.pago.Observaciones !== null) {
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                        printBody += 'Observaciones:';
                        printBody += _this.print.PosCommand.LF;
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                        printBody += _this.pago.Observaciones;
                        printBody += _this.print.PosCommand.LF;
                    }
                    printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
                    printBody += _this.print.PosCommand.LF;
                    if (_this.pago.Concepto !== null && _this.pago.Concepto !== undefined) {
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                        printBody += 'Concepto:';
                        printBody += _this.print.PosCommand.LF;
                        printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                        printBody += _this.pago.Concepto;
                        printBody += _this.print.PosCommand.LF;
                        printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
                        printBody += _this.print.PosCommand.LF;
                    }
                    printBody += _this.print.normailizeText(info.RESOLUCION);
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.LF;
                    printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
                    printBody += _this.print.PosCommand.LF;
                    printBody += '________________________';
                    printBody += _this.print.PosCommand.LF;
                    printBody += 'F I R M A  C L I E N T E ';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.LF;
                    var src = _this.config.generarRutaLogoReutilizable();
                    _this.print.print(address, printBody).then(function () {
                        loading.dismiss();
                    }).catch(function (err) {
                        loading.dismiss();
                    });
                }).catch(function (err) {
                });
            }).catch(function (err) {
                loading.dismiss();
                _this.toastController.create({ message: err.message, duration: 2000 }).then(function (obj) { obj.present(); });
            });
        });
    };
    DatosPagoComponent.prototype.imprimirBloque = function () {
        var _this = this;
        this.printer.print(document.getElementById('bloqueImpresion').innerHTML).catch(function () {
            _this.mostrarToastSimple('Error al imprimir bloque');
        });
    };
    DatosPagoComponent.prototype.mostrarToastSimple = function (mensaje) {
        this.toastController.create({
            message: mensaje,
            duration: 2000
        }).then(function (toast) {
            toast.present();
        });
    };
    DatosPagoComponent.ctorParameters = function () { return [
        { type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_6__["Printer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _services_print_service__WEBPACK_IMPORTED_MODULE_7__["PrintService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _services_configuracion_service__WEBPACK_IMPORTED_MODULE_8__["ConfiguracionService"] },
        { type: src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_9__["SesionService"] }
    ]; };
    DatosPagoComponent.propDecorators = {
        pago: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
    };
    DatosPagoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-datos-pago',
            template: _raw_loader_datos_pago_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_datos_pago_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_6__["Printer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _services_print_service__WEBPACK_IMPORTED_MODULE_7__["PrintService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _services_configuracion_service__WEBPACK_IMPORTED_MODULE_8__["ConfiguracionService"],
            src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_9__["SesionService"]])
    ], DatosPagoComponent);
    return DatosPagoComponent;
}());



/***/ }),

/***/ "7Ihc":
/*!********************************************************!*\
  !*** ./src/app/enums/modo-visualizar-contrato.enum.ts ***!
  \********************************************************/
/*! exports provided: ModoVisualizarContratoEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModoVisualizarContratoEnum", function() { return ModoVisualizarContratoEnum; });
var ModoVisualizarContratoEnum;
(function (ModoVisualizarContratoEnum) {
    ModoVisualizarContratoEnum[ModoVisualizarContratoEnum["MODO_EDICION"] = 0] = "MODO_EDICION";
    ModoVisualizarContratoEnum[ModoVisualizarContratoEnum["MODO_CONSULTA"] = 1] = "MODO_CONSULTA";
    ModoVisualizarContratoEnum[ModoVisualizarContratoEnum["MODO_CONCISO"] = 2] = "MODO_CONCISO";
})(ModoVisualizarContratoEnum || (ModoVisualizarContratoEnum = {}));


/***/ }),

/***/ "81KG":
/*!******************************************!*\
  !*** ./src/app/models/contrato-model.ts ***!
  \******************************************/
/*! exports provided: ContratoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContratoModel", function() { return ContratoModel; });
var ContratoModel = /** @class */ (function () {
    function ContratoModel() {
    }
    return ContratoModel;
}());



/***/ }),

/***/ "8rdd":
/*!*************************************************************************!*\
  !*** ./src/app/own-components/datos-novedad/datos-novedad.component.ts ***!
  \*************************************************************************/
/*! exports provided: DatosNovedadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosNovedadComponent", function() { return DatosNovedadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_datos_novedad_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./datos-novedad.component.html */ "tyzh");
/* harmony import */ var _datos_novedad_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datos-novedad.component.scss */ "eKrY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_registro_gestion_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/registro-gestion.model */ "gjAW");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/printer/ngx */ "METt");
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/print.service */ "Bhbv");
/* harmony import */ var _services_configuracion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/configuracion.service */ "Hpqp");
/* harmony import */ var src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/sesion.service */ "PbBf");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);






// Plugins





var DatosNovedadComponent = /** @class */ (function () {
    function DatosNovedadComponent(printer, toastController, print, loading, config, sesion) {
        this.printer = printer;
        this.toastController = toastController;
        this.print = print;
        this.loading = loading;
        this.config = config;
        this.sesion = sesion;
    }
    DatosNovedadComponent.prototype.ngOnInit = function () { };
    DatosNovedadComponent.prototype.imprimir = function () {
        var _this = this;
        var cobrador = this.sesion.sesionLocal.sesionUsuario.NOMBRES;
        moment__WEBPACK_IMPORTED_MODULE_10__["locale"]('es');
        this.loading.create({
            message: 'Obteniendo configuración de impresora'
        }).then(function (loading) {
            loading.present();
            _this.config.obtenerImpresora().then(function (address) {
                _this.sesion.obtenerInfoEmpresa().then(function (info) {
                    var printBody = '';
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_ALIGN_CT;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += _this.print.normailizeText(info.NOMBRE);
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.normailizeText(info.NIT);
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.normailizeText((info.CIUDAD == null ? '' : (info.CIUDAD + ' - ')) + info.DIRECCION);
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.normailizeText(info.TELEFONOS);
                    printBody += _this.print.PosCommand.LF;
                    printBody += '| | | | O R I G I N A L | | | |';
                    printBody += _this.print.PosCommand.LF;
                    printBody += '| | | | N O V E D A D | | | |';
                    printBody += _this.print.PosCommand.LF;
                    printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Fecha / Hora Novedad:';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += moment__WEBPACK_IMPORTED_MODULE_10__().format('DD/MMM/YYYY HH:mm:ss');
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Contrato: ' + _this.gestion.Contrato;
                    printBody += _this.print.PosCommand.LF;
                    // printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    // printBody += this.gestion.Contrato;
                    // printBody += this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Titular:';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += _this.gestion.Titular;
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Pago Hasta:';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += moment__WEBPACK_IMPORTED_MODULE_10__(_this.gestion.PagoHasta).format('DD/MMM/YYYY');
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Novedad:';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += _this.gestion.NovedadDesc;
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Proxima Visita:';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    //let newDate = new Date(this.gestion.Fechaprogramada +  'T00:00:00');
                    //const formattedDate = newDate.toLocaleDateString('es-ES', {
                    //  day: 'numeric', month: 'short', year: 'numeric'
                    // }).replace('.', '');
                    printBody += moment__WEBPACK_IMPORTED_MODULE_10__(_this.gestion.Fechaprogramada).format('DD/MMM/YYYY');
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.LF;
                    printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Observaciones:';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += _this.gestion.Observaciones + ' NO ES VALIDO COMO RECIBO DE PAGO';
                    printBody += _this.print.PosCommand.LF;
                    printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Nota:';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += _this.gestion.Nota1;
                    printBody += _this.print.PosCommand.LF;
                    printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Cobrador:';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += cobrador;
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Usuario: ' + _this.gestion.Usuario;
                    printBody += _this.print.PosCommand.LF;
                    // printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    // printBody += this.gestion.Usuario;
                    // printBody += this.print.PosCommand.LF;
                    printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
                    printBody += _this.print.PosCommand.LF;
                    // printBody += '';
                    // printBody += this.print.PosCommand.LF;
                    // printBody += '';
                    // printBody += this.print.PosCommand.LF;
                    // printBody += '________________________';
                    // printBody += this.print.PosCommand.LF;
                    // printBody += 'F I R M A  C L I E N T E ';
                    // printBody += this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.LF;
                    // let src = this.config.generarRutaLogoReutilizable();
                    // printBody += this.print.PosCommand.BITMAP_FORMAT.BITMAP_S8;
                    // printBody += src;
                    // printBody += this.print.PosCommand.LF;
                    _this.print.print(address, printBody).then(function () {
                        loading.dismiss();
                    }).catch(function (err) {
                        loading.dismiss();
                    });
                }).catch(function (err) {
                    loading.dismiss();
                });
            }).catch(function (err) {
                loading.dismiss();
                _this.toastController.create({ message: err.message, duration: 2000 }).then(function (obj) { obj.present(); });
            });
        });
    };
    DatosNovedadComponent.prototype.imprimirBloque = function () {
        var _this = this;
        this.printer.print(document.getElementById('bloqueImpresion').innerHTML).catch(function () {
            _this.mostrarToastSimple('Error al imprimir bloque');
        });
    };
    DatosNovedadComponent.prototype.mostrarToastSimple = function (mensaje) {
        this.toastController.create({
            message: mensaje,
            duration: 2000
        }).then(function (toast) {
            toast.present();
        });
    };
    DatosNovedadComponent.ctorParameters = function () { return [
        { type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_6__["Printer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _services_print_service__WEBPACK_IMPORTED_MODULE_7__["PrintService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: _services_configuracion_service__WEBPACK_IMPORTED_MODULE_8__["ConfiguracionService"] },
        { type: src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_9__["SesionService"] }
    ]; };
    DatosNovedadComponent.propDecorators = {
        gestion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    DatosNovedadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-datos-novedad',
            template: _raw_loader_datos_novedad_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_datos_novedad_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_6__["Printer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _services_print_service__WEBPACK_IMPORTED_MODULE_7__["PrintService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _services_configuracion_service__WEBPACK_IMPORTED_MODULE_8__["ConfiguracionService"],
            src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_9__["SesionService"]])
    ], DatosNovedadComponent);
    return DatosNovedadComponent;
}());



/***/ }),

/***/ "9FvA":
/*!*********************************************************!*\
  !*** ./src/app/own-components/own-components.module.ts ***!
  \*********************************************************/
/*! exports provided: OwnComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnComponentsModule", function() { return OwnComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _modal_confirmar_pago_modal_confirmar_pago_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-confirmar-pago/modal-confirmar-pago.component */ "uaSe");
/* harmony import */ var _beneficiarios_beneficiarios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./beneficiarios/beneficiarios.component */ "9L3W");
/* harmony import */ var _logo_empresa_logo_empresa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo-empresa/logo-empresa.component */ "iVmT");
/* harmony import */ var _datos_pago_datos_pago_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datos-pago/datos-pago.component */ "5b9S");
/* harmony import */ var _datos_contrato_datos_contrato_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datos-contrato/datos-contrato.component */ "KWYh");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "TIVg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var _datos_novedad_datos_novedad_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./datos-novedad/datos-novedad.component */ "8rdd");
/* harmony import */ var _ultimos_pagos_ultimos_pagos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ultimos-pagos/ultimos-pagos.component */ "IuA+");












var OwnComponentsModule = /** @class */ (function () {
    function OwnComponentsModule() {
    }
    OwnComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _datos_contrato_datos_contrato_component__WEBPACK_IMPORTED_MODULE_5__["DatosContratoComponent"],
                _datos_pago_datos_pago_component__WEBPACK_IMPORTED_MODULE_4__["DatosPagoComponent"],
                _logo_empresa_logo_empresa_component__WEBPACK_IMPORTED_MODULE_3__["LogoEmpresaComponent"],
                _modal_confirmar_pago_modal_confirmar_pago_component__WEBPACK_IMPORTED_MODULE_1__["ModalConfirmarPagoComponent"],
                _beneficiarios_beneficiarios_component__WEBPACK_IMPORTED_MODULE_2__["BeneficiariosComponent"],
                _datos_novedad_datos_novedad_component__WEBPACK_IMPORTED_MODULE_10__["DatosNovedadComponent"],
                _ultimos_pagos_ultimos_pagos_component__WEBPACK_IMPORTED_MODULE_11__["UltimosPagosComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"]
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _datos_contrato_datos_contrato_component__WEBPACK_IMPORTED_MODULE_5__["DatosContratoComponent"],
                _datos_pago_datos_pago_component__WEBPACK_IMPORTED_MODULE_4__["DatosPagoComponent"],
                _logo_empresa_logo_empresa_component__WEBPACK_IMPORTED_MODULE_3__["LogoEmpresaComponent"],
                _datos_novedad_datos_novedad_component__WEBPACK_IMPORTED_MODULE_10__["DatosNovedadComponent"]
            ],
            entryComponents: [_modal_confirmar_pago_modal_confirmar_pago_component__WEBPACK_IMPORTED_MODULE_1__["ModalConfirmarPagoComponent"], _beneficiarios_beneficiarios_component__WEBPACK_IMPORTED_MODULE_2__["BeneficiariosComponent"], _ultimos_pagos_ultimos_pagos_component__WEBPACK_IMPORTED_MODULE_11__["UltimosPagosComponent"]]
        })
    ], OwnComponentsModule);
    return OwnComponentsModule;
}());



/***/ }),

/***/ "9L3W":
/*!*************************************************************************!*\
  !*** ./src/app/own-components/beneficiarios/beneficiarios.component.ts ***!
  \*************************************************************************/
/*! exports provided: BeneficiariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiariosComponent", function() { return BeneficiariosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_beneficiarios_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./beneficiarios.component.html */ "HcCb");
/* harmony import */ var _beneficiarios_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./beneficiarios.component.scss */ "soxc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "P4DM");





var BeneficiariosComponent = /** @class */ (function () {
    function BeneficiariosComponent(modalctrl, navParams) {
        this.modalctrl = modalctrl;
        this.navParams = navParams;
        this.beneficiarios = [];
    }
    BeneficiariosComponent.prototype.ngOnInit = function () { };
    BeneficiariosComponent.prototype.ionViewWillEnter = function () {
        this.beneficiarios = this.navParams.get('beneficiarios');
    };
    BeneficiariosComponent.prototype.close = function () {
        this.modalctrl.dismiss(true);
    };
    BeneficiariosComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
    ]; };
    BeneficiariosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-beneficiarios',
            template: _raw_loader_beneficiarios_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_beneficiarios_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]])
    ], BeneficiariosComponent);
    return BeneficiariosComponent;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Bhbv":
/*!*******************************************!*\
  !*** ./src/app/services/print.service.ts ***!
  \*******************************************/
/*! exports provided: PrintService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintService", function() { return PrintService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "7uwA");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "P4DM");




var PrintService = /** @class */ (function () {
    function PrintService(btSerial, alertCtrl) {
        this.btSerial = btSerial;
        this.alertCtrl = alertCtrl;
        this.PosCommand = {
            LF: '\x0a',
            EOL: '\n',
            FEED_CONTROL_SEQUENCES: {
                CTL_LF: '\x0a',
                CTL_FF: '\x0c',
                CTL_CR: '\x0d',
                CTL_HT: '\x09',
                CTL_VT: '\x0b',
            },
            LINE_SPACING: {
                LS_DEFAULT: '\x1b\x32',
                LS_SET: '\x1b\x33' //Spacing
            },
            HARDWARE: {
                HW_INIT: '\x1b\x40',
                HW_SELECT: '\x1b\x3d\x01',
                HW_RESET: '\x1b\x3f\x0a\x00',
            },
            CASH_DRAWER: {
                CD_KICK_2: '\x1b\x70\x00',
                CD_KICK_5: '\x1b\x70\x01',
            },
            MARGINS: {
                BOTTOM: '\x1b\x4f',
                LEFT: '\x1b\x6c',
                RIGHT: '\x1b\x51',
            },
            PAPER: {
                PAPER_FULL_CUT: '\x1d\x56\x00',
                PAPER_PART_CUT: '\x1d\x56\x01',
                PAPER_CUT_A: '\x1d\x56\x41',
                PAPER_CUT_B: '\x1d\x56\x42',
            },
            TEXT_FORMAT: {
                TXT_NORMAL: '\x1b\x21\x00',
                TXT_2HEIGHT: '\x1b\x21\x10',
                TXT_2WIDTH: '\x1b\x21\x20',
                TXT_4SQUARE: '\x1b\x21\x30',
                TXT_CUSTOM_SIZE: function (width, height) {
                    var widthDec = (width - 1) * 16;
                    var heightDec = height - 1;
                    var sizeDec = widthDec + heightDec;
                    return '\x1d\x21' + String.fromCharCode(sizeDec);
                },
                TXT_HEIGHT: {
                    1: '\x00',
                    2: '\x01',
                    3: '\x02',
                    4: '\x03',
                    5: '\x04',
                    6: '\x05',
                    7: '\x06',
                    8: '\x07'
                },
                TXT_WIDTH: {
                    1: '\x00',
                    2: '\x10',
                    3: '\x20',
                    4: '\x30',
                    5: '\x40',
                    6: '\x50',
                    7: '\x60',
                    8: '\x70'
                },
                TXT_UNDERL_OFF: '\x1b\x2d\x00',
                TXT_UNDERL_ON: '\x1b\x2d\x01',
                TXT_UNDERL2_ON: '\x1b\x2d\x02',
                TXT_BOLD_OFF: '\x1b\x45\x00',
                TXT_BOLD_ON: '\x1b\x45\x01',
                TXT_ITALIC_OFF: '\x1b\x35',
                TXT_ITALIC_ON: '\x1b\x34',
                TXT_FONT_A: '\x1b\x4d\x00',
                TXT_FONT_B: '\x1b\x4d\x01',
                TXT_FONT_C: '\x1b\x4d\x02',
                TXT_ALIGN_LT: '\x1b\x61\x00',
                TXT_ALIGN_CT: '\x1b\x61\x01',
                TXT_ALIGN_RT: '\x1b\x61\x02',
            },
            BARCODE_FORMAT: {
                BARCODE_TXT_OFF: '\x1d\x48\x00',
                BARCODE_TXT_ABV: '\x1d\x48\x01',
                BARCODE_TXT_BLW: '\x1d\x48\x02',
                BARCODE_TXT_BTH: '\x1d\x48\x03',
                BARCODE_FONT_A: '\x1d\x66\x00',
                BARCODE_FONT_B: '\x1d\x66\x01',
                BARCODE_HEIGHT: function (height) {
                    return '\x1d\x68' + String.fromCharCode(height);
                },
                // Barcode Width  [2-6]
                BARCODE_WIDTH: {
                    1: '\x1d\x77\x02',
                    2: '\x1d\x77\x03',
                    3: '\x1d\x77\x04',
                    4: '\x1d\x77\x05',
                    5: '\x1d\x77\x06',
                },
                BARCODE_HEIGHT_DEFAULT: '\x1d\x68\x64',
                BARCODE_WIDTH_DEFAULT: '\x1d\x77\x01',
                BARCODE_UPC_A: '\x1d\x6b\x00',
                BARCODE_UPC_E: '\x1d\x6b\x01',
                BARCODE_EAN13: '\x1d\x6b\x02',
                BARCODE_EAN8: '\x1d\x6b\x03',
                BARCODE_CODE39: '\x1d\x6b\x04',
                BARCODE_ITF: '\x1d\x6b\x05',
                BARCODE_NW7: '\x1d\x6b\x06',
                BARCODE_CODE93: '\x1d\x6b\x48',
                BARCODE_CODE128: '\x1d\x6b\x49',
            },
            CODE2D_FORMAT: {
                TYPE_PDF417: '\x1b\x5a\x00',
                TYPE_DATAMATRIX: '\x1b\x5a\x01',
                TYPE_QR: '\x1b\x5a\x02',
                CODE2D: '\x1b\x5a',
            },
            IMAGE_FORMAT: {
                S_RASTER_N: '\x1d\x76\x30\x00',
                S_RASTER_2W: '\x1d\x76\x30\x01',
                S_RASTER_2H: '\x1d\x76\x30\x02',
                S_RASTER_Q: '\x1d\x76\x30\x03',
            },
            BITMAP_FORMAT: {
                BITMAP_S8: '\x1b\x2a\x00',
                BITMAP_D8: '\x1b\x2a\x01',
                BITMAP_S24: '\x1b\x2a\x20',
                BITMAP_D24: '\x1b\x2a\x21'
            },
            GSV0_FORMAT: {
                GSV0_NORMAL: '\x1d\x76\x30\x00',
                GSV0_DW: '\x1d\x76\x30\x01',
                GSV0_DH: '\x1d\x76\x30\x02',
                GSV0_DWDH: '\x1d\x76\x30\x03'
            }
        };
    }
    PrintService.prototype.searchBt = function () {
        return this.btSerial.list();
    };
    PrintService.prototype.connectBT = function (address) {
        return this.btSerial.connect(address);
    };
    PrintService.prototype.print = function (address, text) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var printEvent = _this.connectBT(address).subscribe(function (data) {
                _this.btSerial.write(text).then(function (dataz) {
                    _this.alertCtrl.create({
                        header: "Información",
                        message: 'Impresión realizada satisfactoriamente',
                        buttons: ['Aceptar']
                    }).then(function (res) {
                        res.present();
                    });
                    printEvent.unsubscribe();
                    resolve(null);
                }, function (errx) {
                    _this.alertCtrl.create({
                        header: "Error",
                        message: "Se ha presentado un error al realizar la impresión, el detalle del error se encuentra a continuación <br> " + errx,
                        buttons: ['Aceptar']
                    }).then(function (res) {
                        res.present();
                    });
                    reject();
                });
            }, function (err) {
                reject();
                var errorAlert = _this.alertCtrl.create({
                    header: "Error",
                    message: "Se ha presentado un error al realiza la conexión con su impresora, por favor revise su conexión e intentelo de nuevo.",
                    buttons: ['Aceptar']
                }).then(function (res) {
                    res.present();
                });
            });
        });
    };
    PrintService.prototype.mapTextColumn = function (text1, text2) {
        text1 = this.normailizeText(text1);
        text2 = this.normailizeText(text2);
        var text1a = [], text2a = [], tmpText = '';
        var tmpLength = 0, tmpRows = 0;
        if (text1.length === 15) {
            text1a.push(text1);
        }
        else if (text1.length < 15) {
            tmpLength = 15 - text1.length;
            tmpText = text1;
            for (var i = 0; i < tmpLength; i++) {
                tmpText = tmpText + ' ';
            }
            text1a.push(tmpText);
        }
        else {
            tmpRows = Math.ceil(text1.length / 15);
            for (var i = 0; i < tmpRows; i++) {
                tmpText = text1.substring((i * 15), ((i + 1) * 15));
                if (tmpText.length === 15) {
                    text1a.push(tmpText);
                }
                else {
                    tmpLength = 16 - text1.length;
                    for (var h = 0; h < tmpLength; h++) {
                        tmpText = tmpText + ' ';
                    }
                    text1a.push(tmpText);
                }
            }
        }
        if (text2.length === 15) {
            text2a.push(text2);
        }
        else if (text2.length < 15) {
            tmpLength = 15 - text2.length;
            tmpText = text2;
            for (var i = 0; i < tmpLength; i++) {
                tmpText = tmpText + ' ';
            }
            text2a.push(tmpText);
        }
        else {
            tmpRows = Math.ceil(text2.length / 15);
            for (var i = 0; i < tmpRows; i++) {
                tmpText = text2.substring((i * 15), ((i + 1) * 15));
                if (tmpText.length === 15) {
                    text2a.push(tmpText);
                }
                else {
                    tmpText = text2.substring((i * 15), ((i + 1) * 15));
                    tmpLength = 15 - tmpText.length;
                    for (var h = 0; h < tmpLength; h++) {
                        tmpText = tmpText + ' ';
                    }
                    text2a.push(tmpText);
                }
            }
        }
        tmpLength = text2a.length > text1a.length ? text2a.length : text1a.length;
        tmpText = '';
        for (var i = 0; i < tmpLength; i++) {
            if (text1a.length >= tmpLength) {
                tmpText += text1a[i] + ' ';
            }
            else {
                tmpText += '                ';
            }
            if (text2a.length >= tmpLength) {
                tmpText += text2a[i] + ' ';
            }
            else {
                tmpText += '                ';
            }
        }
        return tmpText;
    };
    PrintService.prototype.normailizeText = function (str) {
        str = str.replace(/\s+/g, " ");
        str = str.trim();
        var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc", mapping = {};
        for (var i = 0, j = from.length; i < j; i++)
            mapping[from.charAt(i)] = to.charAt(i);
        var ret = [];
        for (var i = 0, j = str.length; i < j; i++) {
            var c = str.charAt(i);
            if (mapping.hasOwnProperty(str.charAt(i)))
                ret.push(mapping[c]);
            else
                ret.push(c);
        }
        return ret.join('');
    };
    ;
    PrintService.prototype.formatMoney = function (n, c, d, t) {
        var c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "." : d, t = t == undefined ? "," : t, s = n < 0 ? "-" : "", i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - Number(i)).toFixed(c).slice(2) : "");
    };
    ;
    PrintService.ctorParameters = function () { return [
        { type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__["BluetoothSerial"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    PrintService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__["BluetoothSerial"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], PrintService);
    return PrintService;
}());



/***/ }),

/***/ "DFAf":
/*!*********************************************!*\
  !*** ./src/app/services/offline.service.ts ***!
  \*********************************************/
/*! exports provided: OfflineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineService", function() { return OfflineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "aaed");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






var OfflineService = /** @class */ (function () {
    function OfflineService(sqlite, file, emailComposer) {
        this.sqlite = sqlite;
        this.file = file;
        this.emailComposer = emailComposer;
        this.pagosLocales = [];
    }
    OfflineService.prototype.sendTest = function () {
        //traemos el listado de pagos
        this.testEmail(this.pagosLocales);
        var email = {
            to: 'info@piscotics.com',
            app: 'gmail',
            attachments: [
                this.file.dataDirectory + 'pagos.txt'
            ],
            subject: 'Archivo Pagos Usuario ',
            body: 'Se anexa el archivo con los pagos realizados en ' + moment__WEBPACK_IMPORTED_MODULE_5__().format('MMMM Do YYYY, h:mm:ss a'),
            isHtml: true
        };
        this.emailComposer.addAlias('gmail', 'com.google.android.gm');
        this.emailComposer.open(email);
        console.log("******** entro a crear archivo 3 **********");
    };
    OfflineService.prototype.testEmail = function (content) {
        var _this = this;
        console.log("******** entro a crear archivo **********", content);
        this.file.createFile(this.file.dataDirectory, 'pagos.txt', false).then(function () {
            //si no existe lo cre
            _this.file.writeFile(_this.file.dataDirectory, 'pagos.txt', content, { replace: true })
                .then(function () {
                console.log("******** entro a crear archivo 555 **********");
            })
                .catch(function (err) {
                console.error(err);
                console.log("******** entro a crear archivo 6666 **********");
            });
        }).catch(function (err) {
            //si existe lo sobre escribo
            _this.file.writeExistingFile(_this.file.dataDirectory, 'pagos.txt', content)
                .then(function () {
                console.log("******** entro a crear archivo 22 **********");
            })
                .catch(function (err) {
                console.error(err);
                console.log("******** entro a crear archivo 444 **********");
            });
        });
    };
    OfflineService.prototype.createDatabase = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, ex_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.sqlite.create({ name: 'developers.db', location: 'default' })];
                    case 1:
                        _a.db = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        ex_1 = _b.sent();
                        throw ex_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.createTables = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var sql;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "";
                        sql = 'DROP TABLE IF EXISTS USUARIOS';
                        return [4 /*yield*/, this.db.executeSql(sql, [])];
                    case 1:
                        _a.sent();
                        sql = 'CREATE TABLE IF NOT EXISTS USUARIOS (ID INTEGER, USERNAME TEXT, CLAVE TEXT, ESTADO TEXT, FECHAINICIAL TEXT, FECHAFINAL TEXT, HORAINICIAL TEXT, HORAFINAL TEXT, IDCOBRADOR TEXT, NOMBRES TEXT, APELLIDOS TEXT, MAQUINA TEXT, NIT TEXT,PREFIJO TEXT, IDCAJAIND INTEGER, IDCAJAEMP INTEGER, IDCAJAPAR INTEGER, IDCAJA INTEGER, IDCAJAANT INTEGER)';
                        return [4 /*yield*/, this.db.executeSql(sql, [])];
                    case 2:
                        _a.sent();
                        sql = 'DROP TABLE IF EXISTS LICENCIAS';
                        return [4 /*yield*/, this.db.executeSql(sql, [])];
                    case 3:
                        _a.sent();
                        sql = 'CREATE TABLE IF NOT EXISTS LICENCIAS (CODIGOLICENCIA TEXT PRIMARY KEY, FECHANOW TEXT)';
                        return [4 /*yield*/, this.db.executeSql(sql, [])];
                    case 4:
                        _a.sent();
                        sql = 'DROP TABLE IF EXISTS EMPRESA';
                        return [4 /*yield*/, this.db.executeSql(sql, [])];
                    case 5:
                        _a.sent();
                        sql = 'CREATE TABLE IF NOT EXISTS EMPRESA (NIT TEXT, NOMBRE TEXT, TELEFONOS TEXT, DIRECCION TEXT, CIUDAD TEXT, LOGO TEXT, PREFIJO TEXT, DOCUMENTO TEXT, RESOLUCION TEXT)';
                        return [4 /*yield*/, this.db.executeSql(sql, [])];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //si hay pagos sin sincronizar retorna true 
    OfflineService.prototype.comprobarEstadoPagosNovedad = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, data2, ex_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        console.log("ejecuto el metodo cat pagos sincronizados");
                        return [4 /*yield*/, this.db.executeSql("SELECT * FROM PAGOS WHERE SINCRONIZAR = 0", [])];
                    case 1:
                        data = _a.sent();
                        //let res = await this.db.executeSql("SELECT * FROM PAGOS WHERE SINCRONIZAR = 0")
                        console.log("pagos sincronizados", data);
                        if (!(data.rows.length > 0)) return [3 /*break*/, 2];
                        console.log("cat pagos sincronizados encontro");
                        return [2 /*return*/, true];
                    case 2: return [4 /*yield*/, this.db.executeSql("SELECT * FROM NOVEDAD WHERE SINCRONIZAR = 0", [])];
                    case 3:
                        data2 = _a.sent();
                        if (data2.rows.length > 0) {
                            console.log("cat pagos sincronizados encontro");
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        ex_2 = _a.sent();
                        console.log("err pagos sincronizados", ex_2);
                        return [2 /*return*/, false];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.createTablesRutas = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var sql;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "";
                        sql = 'DROP TABLE IF EXISTS RUTAS';
                        return [4 /*yield*/, this.db.executeSql(sql, [])];
                    case 1:
                        _a.sent();
                        sql = 'CREATE TABLE IF NOT EXISTS RUTAS(IDRUTA INTEGER PRIMARY KEY AUTOINCREMENT,  ' +
                            'USUARIO TEXT, IDCOBRADOR TEXT, IDCONTRATO TEXT, CEDULA TEXT, TITULAR TEXT, DIRECCION TEXT, ' +
                            'TELEFONO TEXT, CIUDAD TEXT, DIACOBRO1 SMALLINT, DIACOBRO2 SMALLINT, ESTADO TEXT, NOVEDAD INTEGER , ' +
                            'POSTFECHADODIA SMALLINT, INDICE SMALLINT, CUOTA FLOAT, PENDIENTE SMALLINT, ESTADOCONTRATO TEXT, FECHAR TEXT, ' +
                            'BASEDATOS TEXT, EMPRESA TEXT, NIT TEXT, DIRECCIONCOBRO TEXT, BOXCONTRATANTE TEXT, VALORCARTERA FLOAT, VALORSEGURO FLOAT, ' +
                            // tslint:disable-next-line: max-line-length
                            'CELULAR TEXT, PAGOHASTA TEXT, DEPTOC TEXT, MPIOC TEXT, BARRIOC TEXT, MOTIVO TEXT, FECHAPROGRAMADA TEXT, CODBARRIO TEXT, COBERTURA TEXT, ULTIMOSPAGOS TEXT, BENEFICIARIOS TEXT, BANDERA INTEGER,FECHAAFILIACION TEXT,PLAN TEXT, NOTA1 TEXT)';
                        return [4 /*yield*/, this.db.executeSql(sql, [])];
                    case 2:
                        _a.sent();
                        sql = 'DROP TABLE IF EXISTS FORMAPAGO';
                        return [4 /*yield*/, this.db.executeSql(sql, [])];
                    case 3:
                        _a.sent();
                        sql = 'CREATE TABLE IF NOT EXISTS FORMAPAGO (IdTipoPago INTEGER, NombreTipoPago TEXT)';
                        return [4 /*yield*/, this.db.executeSql(sql, [])];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.createTablesPgosNovedad = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var sql;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "";
                        sql = 'DROP TABLE IF EXISTS PAGOS';
                        return [4 /*yield*/, this.db.executeSql(sql, [])];
                    case 1:
                        _a.sent();
                        sql = 'CREATE TABLE IF NOT EXISTS PAGOS (ID INTEGER PRIMARY KEY AUTOINCREMENT, IDCONTRATO TEXT, IDPERSONA TEXT, VALOR FLOAT, DESCUENTO FLOAT, CANTIDADCUOTAS FLOAT, MAQUINA TEXT, TRANSAC TEXT, USUARIO TEXT, OBSERVACIONES TEXT, CUOTAMENSUAL FLOAT, ESTADO TEXT, FORMAPAGO TEXT, FECHAPAGOR TEXT, POSX TEXT, POSY TEXT, IDENTIFICADORBASE TEXT, TITULAR TEXT,  SINCRONIZAR TEXT , NRORECIBO TEXT, PagoDesde TEXT, PagoHasta TEXT,ValorLetras TEXT, NROREF TEXT )';
                        return [4 /*yield*/, this.db.executeSql(sql, [])];
                    case 2:
                        _a.sent();
                        sql = 'DROP TABLE IF EXISTS NOVEDAD';
                        return [4 /*yield*/, this.db.executeSql(sql, [])];
                    case 3:
                        _a.sent();
                        sql = 'CREATE TABLE IF NOT EXISTS NOVEDAD (ID INTEGER PRIMARY KEY AUTOINCREMENT ,CONTRATO TEXT , FECHA TEXT , NOVEDAD INTEGER, DIAPOST INTEGER, USUARIO TEXT, IDCOBRADOR TEXT, MODULO TEXT, TRANSAC INTEGER, FECHAPROGRAMADA TEXT, POSX TEXT, POSY TEXT, OBSERVACIONES TEXT,  SINCRONIZAR TEXT)';
                        return [4 /*yield*/, this.db.executeSql(sql, [])];
                    case 4:
                        _a.sent();
                        sql = 'DROP TABLE IF EXISTS TIPONOVEDAD';
                        return [4 /*yield*/, this.db.executeSql(sql, [])];
                    case 5:
                        _a.sent();
                        sql = 'CREATE TABLE IF NOT EXISTS TIPONOVEDAD (Idnovedad INTEGER, Novedad TEXT)';
                        return [4 /*yield*/, this.db.executeSql(sql, [])];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.sincronizarRutas = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var sql, _i, data_1, d, ex_3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.db.executeSql("DELETE FROM RUTAS", [])];
                    case 1:
                        _a.sent();
                        sql = 'INSERT INTO RUTAS (USUARIO, IDCOBRADOR, IDCONTRATO,CEDULA, TITULAR, DIRECCION , ' +
                            'TELEFONO, CIUDAD, DIACOBRO1, DIACOBRO2, ESTADO, NOVEDAD, POSTFECHADODIA, INDICE, CUOTA, PENDIENTE, ESTADOCONTRATO, FECHAR, ' +
                            'BASEDATOS, EMPRESA, NIT, DIRECCIONCOBRO, BOXCONTRATANTE, VALORCARTERA, VALORSEGURO,' +
                            'CELULAR, PAGOHASTA, DEPTOC, MPIOC, BARRIOC, MOTIVO, FECHAPROGRAMADA, CODBARRIO, COBERTURA,ULTIMOSPAGOS, BENEFICIARIOS,BANDERA,FECHAAFILIACION,PLAN,NOTA1) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?, ?,?,?,?,?)';
                        _i = 0, data_1 = data;
                        _a.label = 2;
                    case 2:
                        if (!(_i < data_1.length)) return [3 /*break*/, 5];
                        d = data_1[_i];
                        return [4 /*yield*/, this.db.executeSql(sql, [d.USUARIO, d.IDCOBRADOR, d.IDCONTRATO, d.CEDULA, d.TITULAR, d.DIRECCION, d.TELEFONO, d.CIUDAD,
                                d.DIACOBRO1, d.DIACOBRO2, d.ESTADO, d.NOVEDAD, d.POSTFECHADODIA, d.INDICE, d.CUOTA, d.PENDIENTE, d.ESTADOCONTRATO, d.FECHAR,
                                d.BASEDATOS, d.EMPRESA, d.NIT, d.DIRECCIONCOBRO, d.BOXCONTRATANTE, d.VALORCARTERA, d.VALORSEGURO, d.CELULAR, d.PAGOHASTA,
                                d.DEPTOC, d.MPIOC, d.BARRIOC, d.MOTIVO, d.FECHAPROGRAMADA, d.CODBARRIO, d.COBERTURA, d.ULTIMOSPAGOS, d.BENEFICIARIOS, 0, d.FECHAAFILIACION, d.PLAN, d.NOTA1])];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        ex_3 = _a.sent();
                        throw ex_3;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.getConsultarPagos = function (NroPago) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, todos, i, ex_4;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("los datos que se envian son", NroPago);
                        data = void 0;
                        return [4 /*yield*/, this.db.executeSql("SELECT IDCONTRATO, IDPERSONA, VALOR, DESCUENTO, CANTIDADCUOTAS, MAQUINA, USUARIO, OBSERVACIONES, CUOTAMENSUAL, ESTADO, FORMAPAGO, FECHAPAGOR, POSX, POSY, TITULAR, SINCRONIZAR, NRORECIBO NumeroDocumento, PagoDesde, PagoHasta,ValorLetras, NROREF  FROM PAGOS R  WHERE  R.NRORECIBO = ? ", [NroPago])];
                    case 1:
                        data = _a.sent();
                        console.log("la consulta a ejecutar es ", data);
                        if (data.rows.length > 0) {
                            todos = [];
                            for (i = 0; i < data.rows.length; i++) {
                                todos.push(data.rows.item(i));
                            }
                            return [2 /*return*/, todos];
                        }
                        else {
                            return [2 /*return*/, []];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        ex_4 = _a.sent();
                        throw ex_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.getConsultarRutas = function (fechar, idcobrador, estado, sincronizado) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, todos, i, ex_5;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        console.log("los datos que se envian son", fechar, idcobrador, estado, sincronizado);
                        data = void 0;
                        if (!(estado == "Sn")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.db.executeSql("SELECT R.IDCONTRATO,R.CEDULA, R.TITULAR, R.PAGOHASTA, R.DIRECCION, R.TELEFONO, R.ESTADO,R.CUOTA, R.VALORCARTERA, R.NOTA1  FROM RUTAS R  WHERE R.FECHAR = ? AND R.IDCOBRADOR = ? AND R.ESTADO = ? ", [fechar + "T00:00:00", idcobrador, estado])];
                    case 1:
                        data = _a.sent();
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(estado == "Pago")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.db.executeSql("SELECT R.IDCONTRATO,R.CEDULA, R.TITULAR, R.PAGOHASTA, R.DIRECCION, R.TELEFONO, R.ESTADO,R.CUOTA, R.VALORCARTERA, P.VALOR, P.SINCRONIZAR, P.DESCUENTO , R.NOTA1 FROM RUTAS R LEFT JOIN PAGOS P ON P.IDCONTRATO = R.IDCONTRATO  WHERE R.FECHAR = ? AND R.IDCOBRADOR = ? AND R.ESTADO = ? AND P.SINCRONIZAR = ?  ", [fechar + "T00:00:00", idcobrador, estado, sincronizado])];
                    case 3:
                        data = _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        if (!(estado == "Novedad")) return [3 /*break*/, 6];
                        console.log("si llego aqui a novedad");
                        return [4 /*yield*/, this.db.executeSql("SELECT R.IDCONTRATO,R.CEDULA, R.TITULAR, R.PAGOHASTA, R.DIRECCION, R.TELEFONO, R.ESTADO,R.CUOTA, R.VALORCARTERA,  T.NOVEDAD NOVEDADES, N.OBSERVACIONES, N.SINCRONIZAR , R.NOTA1 FROM RUTAS R INNER JOIN NOVEDAD N ON R.IDCONTRATO = N.CONTRATO INNER JOIN TIPONOVEDAD T ON T.Idnovedad = N.NOVEDAD WHERE R.FECHAR = ? AND R.IDCOBRADOR = ? AND R.ESTADO = ? AND N.SINCRONIZAR = ? ", [fechar + "T00:00:00", idcobrador, estado, sincronizado])];
                    case 5:
                        data = _a.sent();
                        _a.label = 6;
                    case 6:
                        console.log("la consulta a ejecutar es ", data);
                        if (data.rows.length > 0) {
                            todos = [];
                            for (i = 0; i < data.rows.length; i++) {
                                todos.push(data.rows.item(i));
                            }
                            return [2 /*return*/, todos];
                        }
                        else {
                            return [2 /*return*/, []];
                        }
                        return [3 /*break*/, 8];
                    case 7:
                        ex_5 = _a.sent();
                        throw ex_5;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.sincronizarLicencias = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var sql, _i, data_2, d, ex_6;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.db.executeSql("DELETE FROM LICENCIAS", [])];
                    case 1:
                        _a.sent();
                        sql = 'INSERT INTO LICENCIAS (CODIGOLICENCIA, FECHANOW) VALUES(?,?)';
                        _i = 0, data_2 = data;
                        _a.label = 2;
                    case 2:
                        if (!(_i < data_2.length)) return [3 /*break*/, 5];
                        d = data_2[_i];
                        return [4 /*yield*/, this.db.executeSql(sql, [d, new Date()])];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        ex_6 = _a.sent();
                        throw ex_6;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.sincronizarUsuarios = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var sql, _i, data_3, d, ex_7;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.db.executeSql("DELETE FROM USUARIOS", [])];
                    case 1:
                        _a.sent();
                        sql = 'INSERT INTO USUARIOS (ID, USERNAME, CLAVE, ESTADO, FECHAINICIAL, FECHAFINAL, HORAINICIAL, HORAFINAL, IDCOBRADOR, NOMBRES, APELLIDOS, MAQUINA, NIT,PREFIJO, IDCAJAIND, IDCAJAEMP, IDCAJAPAR, IDCAJA, IDCAJAANT) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?)';
                        _i = 0, data_3 = data;
                        _a.label = 2;
                    case 2:
                        if (!(_i < data_3.length)) return [3 /*break*/, 5];
                        d = data_3[_i];
                        return [4 /*yield*/, this.db.executeSql(sql, [d.ID, d.USERNAME, d.CLAVE, d.ESTADO, d.FECHAINICIAL, d.FECHAFINAL, d.HORAINICIAL, d.HORAFINAL, d.IDCOBRADOR, d.NOMBRES, d.APELLIDOS, d.MAQUINA, d.NIT, d.PREFIJO, d.IDCAJAIND, d.IDCAJAEMP, d.IDCAJAPAR, d.IDCAJA, d.IDCAJAANT])];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        ex_7 = _a.sent();
                        throw ex_7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.sincronizarPagos = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var sql, _i, data_4, d, ex_8;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.db.executeSql("DELETE FROM PAGOS", [])];
                    case 1:
                        _a.sent();
                        sql = 'INSERT INTO PAGOS (IDCONTRATO, IDPERSONA, VALOR, DESCUENTO, CANTIDADCUOTAS, MAQUINA, USUARIO, OBSERVACIONES, CUOTAMENSUAL, ESTADO, FORMAPAGO, FECHAPAGOR, POSX, POSY, TITULAR, NROREF) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?)';
                        _i = 0, data_4 = data;
                        _a.label = 2;
                    case 2:
                        if (!(_i < data_4.length)) return [3 /*break*/, 5];
                        d = data_4[_i];
                        return [4 /*yield*/, this.db.executeSql(sql, [d.IDCONTRATO, d.IDPERSONA, d.VALOR, d.DESCUENTO, d.CANTIDADCUOTAS, d.MAQUINA, d.USUARIO, d.OBSERVACIONES, d.CUOTAMENSUAL, d.ESTADO, d.FORMAPAGO, d.FECHAPAGOR, d.POSX, d.POSY, d.TITULAR, d.NROREF])];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        ex_8 = _a.sent();
                        throw ex_8;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.guardarPagosLocal = function (d) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var id_1, sql, data, ex_9, ex_10;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("pago a almacenar", d);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        id_1 = 0;
                        sql = 'INSERT INTO PAGOS (IDCONTRATO, IDPERSONA, VALOR, DESCUENTO, CANTIDADCUOTAS, MAQUINA,TRANSAC,  USUARIO, OBSERVACIONES, CUOTAMENSUAL, ESTADO, FORMAPAGO, FECHAPAGOR, POSX, POSY,IDENTIFICADORBASE, TITULAR, SINCRONIZAR, NRORECIBO, PagoDesde, PagoHasta,ValorLetras,NROREF ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?,?,?,?,?,?,?)';
                        return [4 /*yield*/, this.db.executeSql(sql, [d.IDCONTRATO, d.IDPERSONA, d.VALOR, d.DESCUENTO, d.CANTIDADCUOTAS, d.MAQUINA, d.TRANSAC, d.USUARIO, d.OBSERVACIONES, d.CUOTAMENSUAL, d.ESTADO, d.FORMAPAGO, new Date(d.FECHAPAGOR).toDateString(), d.POSX, d.POSY, 'OffLine', d.titular, 0, d.NRORECIBO, d.PagoDesde, d.PagoHasta, d.ValorLetras, d.NROREF]).then(function (row) {
                                _this.pagosLocales.push(d);
                                id_1 = row.insertId.toString();
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.db.executeSql('UPDATE RUTAS SET  ESTADO = ?  WHERE IDCONTRATO = ? AND CEDULA = ?', ['Pago', d.IDCONTRATO, d.IDPERSONA])];
                    case 4:
                        data = _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        ex_9 = _a.sent();
                        throw ex_9;
                    case 6: return [2 /*return*/, id_1];
                    case 7:
                        ex_10 = _a.sent();
                        throw ex_10;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.actualizarSincronizadoPago = function (IDCONTRATO, IDPERSONA) {
        //cambiar el sincronizado a 1
        try {
            console.log("sincronizo el pago del cto", IDCONTRATO, IDPERSONA);
            // tslint:disable-next-line: max-line-length
            var data = this.db.executeSql('UPDATE PAGOS SET SINCRONIZAR = 1  WHERE IDCONTRATO = ? AND IDPERSONA = ?', [IDCONTRATO, IDPERSONA]);
        }
        catch (ex) {
            throw ex;
        }
    };
    OfflineService.prototype.actualizarSincronizadoNovedad = function (ID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, ex_11;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.executeSql('UPDATE NOVEDAD SET SINCRONIZAR = 1  WHERE ID = ?', [ID])];
                    case 1:
                        data = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        ex_11 = _a.sent();
                        throw ex_11;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.guardarNovedadLocal = function (d) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var sql, data, ex_12, ex_13;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        console.log("va a guardar la novedad local");
                        sql = 'INSERT INTO NOVEDAD(CONTRATO, NOVEDAD, DIAPOST, USUARIO, IDCOBRADOR, MODULO, TRANSAC, FECHAPROGRAMADA, POSX, POSY,OBSERVACIONES,  FECHA, SINCRONIZAR) VALUES(?,?,?,?,?,?,?,?,?,?,?, ?,?)';
                        // tslint:disable-next-line: max-line-length
                        return [4 /*yield*/, this.db.executeSql(sql, [d.Contrato, d.Novedad, d.Diapos, d.Usuario, d.IdCobrador, d.Modulo, d.Transac, d.Fechaprogramada, d.Posx, d.Posy, d.Observaciones, new Date().toDateString(), 0])];
                    case 1:
                        // tslint:disable-next-line: max-line-length
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        console.log("va a cambiar la ruta a novedad", d.Contrato);
                        return [4 /*yield*/, this.db.executeSql('UPDATE RUTAS SET  ESTADO = ?  WHERE IDCONTRATO = ? ', ['Novedad', d.Contrato])];
                    case 3:
                        data = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        ex_12 = _a.sent();
                        console.log("error estado ruta novedad");
                        throw ex_12;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        ex_13 = _a.sent();
                        throw ex_13;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.sincronizarNovedades = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var sql, _i, data_5, d, ex_14;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.db.executeSql("DELETE FROM NOVEDAD", [])];
                    case 1:
                        _a.sent();
                        sql = 'INSERT INTO NOVEDAD(CONTRATO, NOVEDAD, DIAPOST, USUARIO, IDCOBRADOR, MODULO, TRANSAC, FECHAPROGRAMADA, POSX, POSY, OBSERVACIONES) VALUES(?,?,?,?,?,?,?,?,?,?)';
                        _i = 0, data_5 = data;
                        _a.label = 2;
                    case 2:
                        if (!(_i < data_5.length)) return [3 /*break*/, 5];
                        d = data_5[_i];
                        return [4 /*yield*/, this.db.executeSql(sql, [d.CONTRATO, d.NOVEDAD, d.DIAPOST, d.USUARIO, d.IDCOBRADOR, d.MODULO, d.TRANSAC, d.FECHAPROGRAMADA, d.POSX, d.POSY, d.OBSERVACIONES])];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        ex_14 = _a.sent();
                        throw ex_14;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.sincronizarEmpresas = function (d) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var sql, ex_15;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.db.executeSql("DELETE FROM EMPRESA", [])];
                    case 1:
                        _a.sent();
                        sql = 'INSERT INTO EMPRESA (NIT,NOMBRE,TELEFONOS,DIRECCION,CIUDAD,LOGO,PREFIJO,DOCUMENTO,RESOLUCION) VALUES (?,?,?,?,?,?,?,?,?)';
                        return [4 /*yield*/, this.db.executeSql(sql, [d.NIT, d.NOMBRE, d.TELEFONOS, d.DIRECCION, d.CIUDAD, d.LOGO, d.PREFIJO, d.DOCUMENTO, d.RESOLUCION])];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        ex_15 = _a.sent();
                        throw ex_15;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.sincronizarFormaPago = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var sql, _i, data_6, d, ex_16;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.db.executeSql('DELETE FROM FORMAPAGO', [])];
                    case 1:
                        _a.sent();
                        sql = 'INSERT INTO FORMAPAGO (IdTipoPago, NombreTipoPago) VALUES(?,?)';
                        _i = 0, data_6 = data;
                        _a.label = 2;
                    case 2:
                        if (!(_i < data_6.length)) return [3 /*break*/, 5];
                        d = data_6[_i];
                        return [4 /*yield*/, this.db.executeSql(sql, [d.IdTipoPago, d.NombreTipoPago])];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        ex_16 = _a.sent();
                        throw ex_16;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.SincronizarListaNovedades = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var sql, _i, data_7, d, ex_17;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.db.executeSql('DELETE FROM TIPONOVEDAD', [])];
                    case 1:
                        _a.sent();
                        sql = 'INSERT INTO TIPONOVEDAD (Idnovedad, Novedad) VALUES(?,?)';
                        _i = 0, data_7 = data;
                        _a.label = 2;
                    case 2:
                        if (!(_i < data_7.length)) return [3 /*break*/, 5];
                        d = data_7[_i];
                        return [4 /*yield*/, this.db.executeSql(sql, [d.Idnovedad, d.Novedad])];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        ex_17 = _a.sent();
                        throw ex_17;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.loginOffline = function (usuario, contrasena) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var res, data, ex_18;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.executeSql("SELECT * FROM USUARIOS WHERE USERNAME = ? AND CLAVE = ? ", [usuario, contrasena])];
                    case 1:
                        res = _a.sent();
                        data = [];
                        if (res.rows.length > 0) {
                            return [2 /*return*/, res.rows.item(0)];
                        }
                        else {
                            throw null;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        ex_18 = _a.sent();
                        throw ex_18;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.getInfoEmpresa = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, ex_19;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.executeSql("SELECT * FROM EMPRESA", [])];
                    case 1:
                        data = _a.sent();
                        if (data.rows.length > 0) {
                            return [2 /*return*/, data.rows.item(0)];
                        }
                        else {
                            return [2 /*return*/, {}];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        ex_19 = _a.sent();
                        throw ex_19;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.getPagoHasta = function (contrato) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, ex_20;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.executeSql("SELECT PAGOHASTA FROM RUTAS WHERE IDCONTRATO = ?", [contrato])];
                    case 1:
                        data = _a.sent();
                        if (data.rows.length > 0) {
                            return [2 /*return*/, data.rows.item(0)];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        ex_20 = _a.sent();
                        throw ex_20;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.updatePagoHasta = function (Pagohasta, contrato) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, ex_21;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.executeSql('UPDATE RUTAS SET  PAGOHASTA = ?  WHERE IDCONTRATO = ?', [new Date(Pagohasta).toDateString(), contrato])];
                    case 1:
                        data = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        ex_21 = _a.sent();
                        throw ex_21;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.fechasPagos = function (Pagodesde, Pagohasta, Nrorecibo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, ex_22;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.executeSql('UPDATE PAGOS SET  PagoDesde  = ?, PagoHasta  = ?  WHERE  NRORECIBO  = ?', [new Date(Pagodesde).toDateString(), new Date(Pagohasta).toDateString(), Nrorecibo])];
                    case 1:
                        data = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        ex_22 = _a.sent();
                        throw ex_22;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.getInfoContrato = function (contrato) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, ex_23;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.executeSql("SELECT * FROM RUTAS WHERE IDCONTRATO = ? ", [contrato])];
                    case 1:
                        data = _a.sent();
                        if (data.rows.length > 0) {
                            return [2 /*return*/, data.rows.item(0)];
                        }
                        else {
                            return [2 /*return*/, {}];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        ex_23 = _a.sent();
                        throw ex_23;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.getInfoCedula = function (cedula) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, todos, i, ex_24;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.executeSql("SELECT * FROM RUTAS WHERE CEDULA = ? ", [cedula])];
                    case 1:
                        data = _a.sent();
                        if (data.rows.length > 0) {
                            todos = [];
                            for (i = 0; i < data.rows.length; i++) {
                                todos.push(data.rows.item(i));
                            }
                            return [2 /*return*/, todos];
                        }
                        else {
                            return [2 /*return*/, []];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        ex_24 = _a.sent();
                        throw ex_24;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.getBeneficiarios = function (contrato) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, bene, ex_25;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.executeSql("SELECT BENEFICIARIOS FROM RUTAS WHERE IDCONTRATO = ? ", [contrato])];
                    case 1:
                        data = _a.sent();
                        if (data.rows.length > 0) {
                            bene = data.rows.item(0).BENEFICIARIOS.toString().split('*');
                            return [2 /*return*/, bene];
                        }
                        else {
                            return [2 /*return*/, {}];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        ex_25 = _a.sent();
                        throw ex_25;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.getUltimospagos = function (contrato) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, pagos, ex_26;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.executeSql("SELECT ULTIMOSPAGOS FROM RUTAS WHERE IDCONTRATO = ? ", [contrato])];
                    case 1:
                        data = _a.sent();
                        if (data.rows.length > 0) {
                            pagos = data.rows.item(0).ULTIMOSPAGOS.toString().split('*');
                            return [2 /*return*/, pagos];
                        }
                        else {
                            return [2 /*return*/, {}];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        ex_26 = _a.sent();
                        throw ex_26;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.getFormaPago = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, todos, i, ex_27;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.executeSql("SELECT * FROM FORMAPAGO ", [])];
                    case 1:
                        data = _a.sent();
                        if (data.rows.length > 0) {
                            todos = [];
                            for (i = 0; i < data.rows.length; i++) {
                                todos.push(data.rows.item(i));
                            }
                            return [2 /*return*/, todos];
                        }
                        else {
                            return [2 /*return*/, []];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        ex_27 = _a.sent();
                        throw ex_27;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.getNovedades = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, todos, i, ex_28;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.executeSql("SELECT * FROM TIPONOVEDAD ", [])];
                    case 1:
                        data = _a.sent();
                        if (data.rows.length > 0) {
                            todos = [];
                            for (i = 0; i < data.rows.length; i++) {
                                todos.push(data.rows.item(i));
                            }
                            return [2 /*return*/, todos];
                        }
                        else {
                            return [2 /*return*/, []];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        ex_28 = _a.sent();
                        throw ex_28;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.getCuadreCaja = function (usuario, fecha) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var m, data, ex_29;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        m = new Date(fecha);
                        return [4 /*yield*/, this.db.executeSql("SELECT ? AS FECHA ,COUNT(P.IDCONTRATO) AS CANTIDADPAGOS , IFNULL(SUM(P.VALOR) - SUM(P.DESCUENTO), 0) AS VALORPAGOS , 0 AS CANTIDADANULADOS, (SELECT COUNT(N.CONTRATO ) FROM NOVEDAD N WHERE N.FECHA >= ? ) AS CANTIDADNOVEDADES FROM PAGOS P WHERE P.FECHAPAGOR >= ?   ", [fecha, new Date(fecha).toDateString(), new Date(fecha).toDateString()])];
                    case 1:
                        data = _a.sent();
                        if (data.rows.length > 0) {
                            return [2 /*return*/, data.rows.item(0)];
                        }
                        else {
                            return [2 /*return*/, []];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        ex_29 = _a.sent();
                        throw ex_29;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.getListapago = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, todos, i, ex_30;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.executeSql("SELECT * FROM PAGOS WHERE SINCRONIZAR = 0 ORDER BY  TRANSAC ", [])];
                    case 1:
                        data = _a.sent();
                        if (data.rows.length > 0) {
                            todos = [];
                            for (i = 0; i < data.rows.length; i++) {
                                todos.push(data.rows.item(i));
                            }
                            return [2 /*return*/, todos];
                        }
                        else {
                            return [2 /*return*/, []];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        ex_30 = _a.sent();
                        throw ex_30;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.prototype.getListaNovedades = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, todos, i, ex_31;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("llego  a la consulta de la lista de novedades");
                        return [4 /*yield*/, this.db.executeSql("SELECT * FROM NOVEDAD WHERE SINCRONIZAR = 0 ORDER BY ID ", [])];
                    case 1:
                        data = _a.sent();
                        if (data.rows.length > 0) {
                            console.log("la cantidad a sincronizar es:" + data.rows.length);
                            todos = [];
                            for (i = 0; i < data.rows.length; i++) {
                                todos.push(data.rows.item(i));
                            }
                            return [2 /*return*/, todos];
                        }
                        else {
                            console.log("la cantidad a sincronizar es: 0");
                            return [2 /*return*/, []];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        ex_31 = _a.sent();
                        throw ex_31;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OfflineService.ctorParameters = function () { return [
        { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"] },
        { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__["EmailComposer"] }
    ]; };
    OfflineService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"],
            _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__["EmailComposer"]])
    ], OfflineService);
    return OfflineService;
}());



/***/ }),

/***/ "FzS+":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/own-components/header/header.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\r\n    <ion-toolbar class=\"imagen-header ion-no-padding\">\r\n        <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <img class=\"imagen-header\" src=\"assets/img/Cabecera Membrete1.jpg\" alt=\"Imágen de cabecera\">\r\n        </ion-item>\r\n    </ion-toolbar>\r\n    <ion-toolbar mode=\"ios\" color=\"danger\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button *ngIf=\"mostrarBackButton()\" defaultHref=\"home\" text=\"Atrás\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-center ion-text-capitalize\">{{titulo}}</ion-title>\r\n        <ion-buttons *ngIf=\"mostrarMenu()\" slot=\"end\">\r\n            <ion-menu-button menu=\"menuPrincipal\"></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>");

/***/ }),

/***/ "H+1c":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid1 {\n  height: 100%;\n  padding: 10px;\n}\n\n.contaier-login {\n  position: absolute !important;\n  z-index: 2;\n  width: 90%;\n  margin-top: 30px;\n  padding: 0px;\n  background: #FFFFFF;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);\n}\n\n.row3 {\n  height: 10%;\n}\n\n.row4 {\n  height: 30%;\n  z-index: 1;\n}\n\nion-button {\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n\nion-slide {\n  width: 100%;\n  height: 100%;\n  position: absolute !important;\n  top: 0px !important;\n}\n\n.imglogo {\n  display: flex;\n  width: 10%;\n  height: 10%;\n  justify-content: center;\n  align-items: center;\n}\n\nion-content.background {\n  --background: url(/assets/img/background.png) 0 0/100% 100% no-repeat;\n  background-size: cover;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  position: absolute !important;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQURKOztBQUlFO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFHQSxnREFBQTtBQURKOztBQU9FO0VBQ0UsV0FBQTtBQUpKOztBQU1FO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUFISjs7QUFPRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU9FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBSko7O0FBT0U7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNDLG1CQUFBO0FBSkw7O0FBU0U7RUFDRSxxRUFBQTtFQUNBLHNCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQU5KIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmdyaWQxIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWllci1sb2dpbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLnJvdzMge1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgfVxyXG4gIC5yb3c0IHtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICBpb24tc2xpZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIHRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWdsb2dvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvL3RoaXMgb25seSBpZiB5b3Ugd2FudCB0byB2ZXJ0aWNhbCBhbGlnbiBpdCB0byB0aGUgY2VudGVyIHRvb1xyXG4gICAgIFxyXG4gIH1cclxuICBcclxuICAvLyBzdHlsZSBmb3IgYXV0aCBwYWdlc1xyXG4gIGlvbi1jb250ZW50LmJhY2tncm91bmR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcbiAgXHJcbiAgICJdfQ== */");

/***/ }),

/***/ "HcCb":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/own-components/beneficiarios/beneficiarios.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\r\n    <ion-grid>\r\n        <ion-row class=\"md5\" *ngFor=\"let beneficiario of beneficiarios\">\r\n            <ion-card>\r\n                <ion-card-content>\r\n                    {{beneficiario}}\r\n                </ion-card-content>\r\n            </ion-card>\r\n            <!-- <ion-col>\r\n                <label *ngFor=\"let item of items\">\r\n            </ion-col> -->\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "Hpqp":
/*!***************************************************!*\
  !*** ./src/app/services/configuracion.service.ts ***!
  \***************************************************/
/*! exports provided: ConfiguracionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionService", function() { return ConfiguracionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/config.model */ "oRqo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "M2ZX");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "eHpL");




// Plugins


var ConfiguracionService = /** @class */ (function () {
    function ConfiguracionService(platform, nativeStorage, webview) {
        this.platform = platform;
        this.nativeStorage = nativeStorage;
        this.webview = webview;
        this.configKey = 'recaudos-config';
        this.printKey = 'print-config';
        this.config = new _models_config_model__WEBPACK_IMPORTED_MODULE_1__["ConfigModel"]();
    }
    // Obtiene la configuración de la aplicación
    ConfiguracionService.prototype.obtenerConfiguracion = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.platform.is('cordova')) {
                // Si estamos en un navegador entonces usamos el localStorage
                var config = localStorage.getItem(_this.configKey);
                if (config) {
                    _this.config = JSON.parse(config);
                }
                resolve(_this.config);
            }
            else {
                _this.nativeStorage.getItem(_this.configKey)
                    .then(function (config) {
                    _this.config = config;
                    resolve(config);
                })
                    .catch(function (error) {
                    if (error.code === 2) {
                        // No existe la key en el storage aún, no hay problema usamos el objeto con la data predeterminada
                        resolve(error.exception);
                    }
                    else {
                        reject(error);
                    }
                });
            }
        });
    };
    ConfiguracionService.prototype.generarRutaLogoReutilizable = function () {
        if (this.config.logoEmpresa) {
            this.config.logoEmpresaUtilizable = this.webview.convertFileSrc(this.config.logoEmpresa) + "?v=" + new Date().getTime();
        }
        else {
            this.config.logoEmpresaUtilizable = '';
        }
    };
    ConfiguracionService.prototype.guardarConfiguracion = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.generarRutaLogoReutilizable();
            if (!_this.platform.is('cordova')) {
                // Si estamos en un navegador entonces usamos el localStorage
                localStorage.setItem(_this.configKey, JSON.stringify(_this.config));
                resolve(null);
            }
            else {
                _this.nativeStorage.setItem(_this.configKey, _this.config)
                    .then(function () {
                    resolve(null);
                })
                    .catch(function (error) {
                    reject(error);
                });
            }
        });
    };
    ConfiguracionService.prototype.guardarImpresora = function (printAddress) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.platform.is('cordova')) {
                localStorage.setItem(_this.printKey, printAddress);
                resolve(null);
            }
            else {
                _this.nativeStorage.setItem(_this.printKey, printAddress)
                    .then(function () {
                    resolve(null);
                })
                    .catch(function (error) {
                    reject(error);
                });
            }
        });
    };
    ;
    ConfiguracionService.prototype.obtenerImpresora = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.platform.is('cordova')) {
                var config = localStorage.getItem('print-config');
                resolve(config);
            }
            else {
                _this.nativeStorage.getItem('print-config')
                    .then(function (config) {
                    resolve(config);
                })
                    .catch(function (error) {
                    if (error.code === 2) {
                        resolve(null);
                    }
                    else {
                        reject(error);
                    }
                });
            }
        });
    };
    ;
    ConfiguracionService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__["WebView"] }
    ]; };
    ConfiguracionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__["WebView"]])
    ], ConfiguracionService);
    return ConfiguracionService;
}());



/***/ }),

/***/ "IKtr":
/*!**********************************************!*\
  !*** ./src/app/models/sesion-local.model.ts ***!
  \**********************************************/
/*! exports provided: SesionLocalModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SesionLocalModel", function() { return SesionLocalModel; });
var SesionLocalModel = /** @class */ (function () {
    function SesionLocalModel() {
        this.sesionIniciada = false;
        this.sesionUsuario = null;
    }
    return SesionLocalModel;
}());



/***/ }),

/***/ "IuA+":
/*!*************************************************************************!*\
  !*** ./src/app/own-components/ultimos-pagos/ultimos-pagos.component.ts ***!
  \*************************************************************************/
/*! exports provided: UltimosPagosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UltimosPagosComponent", function() { return UltimosPagosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ultimos_pagos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ultimos-pagos.component.html */ "/05H");
/* harmony import */ var _ultimos_pagos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ultimos-pagos.component.scss */ "54qg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "P4DM");





var UltimosPagosComponent = /** @class */ (function () {
    function UltimosPagosComponent(modalctrl, navParams) {
        this.modalctrl = modalctrl;
        this.navParams = navParams;
        this.pagos = [];
    }
    UltimosPagosComponent.prototype.ngOnInit = function () { };
    UltimosPagosComponent.prototype.ionViewWillEnter = function () {
        this.pagos = this.navParams.get('pagos');
    };
    UltimosPagosComponent.prototype.close = function () {
        this.modalctrl.dismiss(true);
    };
    UltimosPagosComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
    ]; };
    UltimosPagosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-ultimos-pagos',
            template: _raw_loader_ultimos_pagos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_ultimos_pagos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]])
    ], UltimosPagosComponent);
    return UltimosPagosComponent;
}());



/***/ }),

/***/ "KWYh":
/*!***************************************************************************!*\
  !*** ./src/app/own-components/datos-contrato/datos-contrato.component.ts ***!
  \***************************************************************************/
/*! exports provided: DatosContratoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosContratoComponent", function() { return DatosContratoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_datos_contrato_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./datos-contrato.component.html */ "d4qT");
/* harmony import */ var _datos_contrato_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datos-contrato.component.scss */ "nzUR");
/* harmony import */ var _enums_modo_visualizar_contrato_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/modo-visualizar-contrato.enum */ "7Ihc");
/* harmony import */ var _models_ciudad_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/ciudad-model */ "vRwA");
/* harmony import */ var _models_departamento_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/departamento-model */ "j8jx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_contrato_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/contrato-model */ "81KG");








var DatosContratoComponent = /** @class */ (function () {
    function DatosContratoComponent() {
        this.contrato = null;
        this.modo = _enums_modo_visualizar_contrato_enum__WEBPACK_IMPORTED_MODULE_3__["ModoVisualizarContratoEnum"].MODO_CONSULTA;
        this.enumModo = _enums_modo_visualizar_contrato_enum__WEBPACK_IMPORTED_MODULE_3__["ModoVisualizarContratoEnum"];
        this.departamentos = [
            new _models_departamento_model__WEBPACK_IMPORTED_MODULE_5__["DepartamentoModel"](1, 'Huila'),
            new _models_departamento_model__WEBPACK_IMPORTED_MODULE_5__["DepartamentoModel"](2, 'Valle del Cauca'),
            new _models_departamento_model__WEBPACK_IMPORTED_MODULE_5__["DepartamentoModel"](3, 'Antioquia'),
            new _models_departamento_model__WEBPACK_IMPORTED_MODULE_5__["DepartamentoModel"](4, 'Cundinamarca'),
        ];
        this.ciudades = [
            new _models_ciudad_model__WEBPACK_IMPORTED_MODULE_4__["CiudadModel"](1, 'Neiva', 1),
            new _models_ciudad_model__WEBPACK_IMPORTED_MODULE_4__["CiudadModel"](2, 'Campoalegre', 1),
            new _models_ciudad_model__WEBPACK_IMPORTED_MODULE_4__["CiudadModel"](3, 'Rivera', 1),
            new _models_ciudad_model__WEBPACK_IMPORTED_MODULE_4__["CiudadModel"](4, 'Hobo', 1),
        ];
        this.compararDepartamento = function (o1, o2) {
            return (o1 && o2) && (o1.id === o2.id);
        };
    }
    DatosContratoComponent.prototype.ngOnInit = function () {
    };
    DatosContratoComponent.prototype.departamentoSeleccionado = function (event) {
        this.contrato.departamento = event.detail.value;
    };
    DatosContratoComponent.prototype.ciudadSeleccionada = function (event) {
        this.contrato.ciudad = event.detail.value;
    };
    DatosContratoComponent.prototype.departamentoPorId = function (id) {
        var departamento = this.departamentos.find(function (d) { return d.id === id; });
        return departamento ? departamento.nombre : '';
    };
    DatosContratoComponent.prototype.ciudadPorId = function (id) {
        var ciudad = this.ciudades.find(function (d) { return d.id === id; });
        return ciudad ? ciudad.nombre : '';
    };
    DatosContratoComponent.ctorParameters = function () { return []; };
    DatosContratoComponent.propDecorators = {
        contrato: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        modo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
    };
    DatosContratoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-datos-contrato',
            template: _raw_loader_datos_contrato_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_datos_contrato_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DatosContratoComponent);
    return DatosContratoComponent;
}());



/***/ }),

/***/ "M7j1":
/*!************************************************!*\
  !*** ./src/app/models/iniciar-sesion.model.ts ***!
  \************************************************/
/*! exports provided: IniciarSesionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IniciarSesionModel", function() { return IniciarSesionModel; });
var IniciarSesionModel = /** @class */ (function () {
    function IniciarSesionModel(Username, Password, Serial) {
        this.Username = Username;
        this.Password = Password;
        this.Serial = Serial;
    }
    return IniciarSesionModel;
}());



/***/ }),

/***/ "PbBf":
/*!********************************************!*\
  !*** ./src/app/services/sesion.service.ts ***!
  \********************************************/
/*! exports provided: SesionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SesionService", function() { return SesionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/config.model */ "oRqo");
/* harmony import */ var _helpers_config_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/config.helper */ "5Ez/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "M2ZX");
/* harmony import */ var _models_iniciar_sesion_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/iniciar-sesion.model */ "M7j1");
/* harmony import */ var _models_sesion_local_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../models/sesion-local.model */ "IKtr");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/device/ngx */ "xS7M");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _configuracion_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./configuracion.service */ "Hpqp");
/* harmony import */ var _offline_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./offline.service */ "DFAf");








// plugins





// Servicios


var SesionService = /** @class */ (function () {
    function SesionService(platform, http, router, androidPermissions, loadingController, toastController, nativeStorage, configuracionService, device, alertController, offline) {
        var _this = this;
        this.platform = platform;
        this.http = http;
        this.router = router;
        this.androidPermissions = androidPermissions;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.nativeStorage = nativeStorage;
        this.configuracionService = configuracionService;
        this.device = device;
        this.alertController = alertController;
        this.offline = offline;
        this.config = new _models_config_model__WEBPACK_IMPORTED_MODULE_4__["ConfigModel"]();
        this.sesionLocalKey = 'SESION_LOCAL';
        this.sesionEmpresaKey = 'EMPRESA_LOCAL';
        this.sesionLocal = new _models_sesion_local_model__WEBPACK_IMPORTED_MODULE_9__["SesionLocalModel"]();
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
        this.config = this.configuracionService.config;
    }
    // Obtiene la información acerca de la sesión actual
    SesionService.prototype.obtenerSesionLocal = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.platform.is('cordova')) {
                // Si estamos en un navegador entonces usamos el localStorage
                var sesionLocal = localStorage.getItem(_this.sesionLocalKey);
                if (sesionLocal) {
                    _this.sesionLocal = JSON.parse(sesionLocal);
                }
                resolve(null);
            }
            else {
                _this.nativeStorage.getItem(_this.sesionLocalKey)
                    .then(function (sesionLocal) {
                    _this.sesionLocal = sesionLocal;
                    resolve(null);
                })
                    .catch(function (error) {
                    if (error.code === 2) {
                        // No existe la key en el storage aún, no hay problema usamos el objeto con la data predeterminada
                        resolve(null);
                    }
                    else {
                        reject(error);
                    }
                });
            }
        });
    };
    SesionService.prototype.guardarSesionLocal = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.platform.is('cordova')) {
                // Si estamos en un navegador entonces usamos el localStorage
                localStorage.setItem(_this.sesionLocalKey, JSON.stringify(_this.sesionLocal));
                resolve(null);
            }
            else {
                _this.nativeStorage.setItem(_this.sesionLocalKey, _this.sesionLocal)
                    .then(function () {
                    resolve(null);
                })
                    .catch(function (error) {
                    reject(error);
                });
            }
        });
    };
    SesionService.prototype.obtenerInfoEmpresa = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.platform.is('cordova')) {
                // Si estamos en un navegador entonces usamos el localStorage
                var sesionLocal = localStorage.getItem(_this.sesionEmpresaKey);
                if (sesionLocal) {
                    resolve(JSON.parse(sesionLocal));
                }
                else {
                    resolve(null);
                }
            }
            else {
                _this.nativeStorage.getItem(_this.sesionEmpresaKey)
                    .then(function (infoEmpresa) {
                    resolve(JSON.parse(infoEmpresa));
                })
                    .catch(function (error) {
                    if (error.code === 2) {
                        // No existe la key en el storage aún, no hay problema usamos el objeto con la data predeterminada
                        resolve(null);
                    }
                    else {
                        reject(error);
                    }
                });
            }
        });
    };
    SesionService.prototype.guardarInfoEmpresa = function (info) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.platform.is('cordova')) {
                // Si estamos en un navegador entonces usamos el localStorage
                localStorage.setItem(_this.sesionEmpresaKey, info);
                resolve(null);
            }
            else {
                _this.nativeStorage.setItem(_this.sesionEmpresaKey, info)
                    .then(function () {
                    resolve(null);
                })
                    .catch(function (error) {
                    reject(error);
                });
            }
        });
    };
    SesionService.prototype.iniciarSesion = function (usuario, contrasena) {
        ///this.validarAccesoDispositivo().then(() => {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadingController.create({
                message: 'Iniciando sesión',
                duration: 30000
            }).then(function (loading) {
                loading.present();
                var maquina = '';
                if (!_this.platform.is('android')) {
                    maquina = '';
                }
                else {
                    maquina = _this.device.uuid;
                }
                var dataPost = new _models_iniciar_sesion_model__WEBPACK_IMPORTED_MODULE_8__["IniciarSesionModel"](usuario, contrasena, maquina);
                var configHelper = new _helpers_config_helper__WEBPACK_IMPORTED_MODULE_5__["ConfigHelper"](_this.configuracionService.config);
                var httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                        'Content-Type': 'application/json'
                    })
                };
                var isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;
                if (!isOffline) {
                    _this.http.post(configHelper.getApiUrl() + "/login/authenticate", dataPost, httpOptions)
                        .subscribe(function (data) {
                        console.log(JSON.stringify(data));
                        if (JSON.stringify(data) !== "\"Licencia No Registrada\"" || (JSON.stringify(data) == "\"Licencia No Registrada\"" && usuario == "PISCO")) {
                            _this.sesionLocal.sesionIniciada = true;
                            _this.sesionLocal.sesionUsuario = data;
                            console.log("entro **** ", _this.sesionLocal.sesionUsuario);
                            _this.guardarSesionLocal()
                                .then(function () {
                                loading.textContent = 'Consultando información de empresa';
                                _this.http.get(configHelper.getApiUrl() + "/pago/funeraria", httpOptions).subscribe(function (res) {
                                    _this.guardarInfoEmpresa(JSON.stringify(res)).then(function () {
                                        loading.dismiss();
                                        var extras = {
                                            replaceUrl: true
                                        };
                                        _this.router.navigate(['consultar-contrato'], extras);
                                    }).catch(function (err) {
                                        loading.dismiss();
                                        _this.mostrarToast('Error Guardando la empresa, intente de nuevo.');
                                    });
                                }, function (err) {
                                    loading.dismiss();
                                    _this.mostrarToast('Error Consultando la sesión, intente de nuevo.');
                                    reject();
                                });
                            })
                                .catch(function (error) {
                                loading.dismiss();
                                _this.mostrarToast('Error guardando la sesión, intente de nuevo.');
                                reject();
                            });
                        }
                        else {
                            loading.dismiss();
                            _this.mostrarToast('Licencia No Registrada, Consulte su Administrador.');
                            reject();
                        }
                    }, function (error) {
                        console.log(JSON.stringify(error));
                        _this.mostrarAlerta('Usuario O Contraseña Incorrectos, Intenta Nuevamente ');
                        loading.dismiss();
                        reject();
                    });
                }
                else {
                    _this.offline.createDatabase().then(function (res) {
                        _this.offline.loginOffline(usuario, contrasena).then(function (res) {
                            _this.sesionLocal.sesionIniciada = true;
                            _this.sesionLocal.sesionUsuario = res;
                            _this.guardarSesionLocal()
                                .then(function () {
                                loading.textContent = 'Consultando información de empresa';
                                _this.offline.getInfoEmpresa().then(function (res) {
                                    _this.guardarInfoEmpresa(JSON.stringify(res)).then(function () {
                                        loading.dismiss();
                                        var extras = {
                                            replaceUrl: true
                                        };
                                        _this.router.navigate(['consultar-contrato'], extras);
                                    }).catch(function (err) {
                                        loading.dismiss();
                                        _this.mostrarToast('Error Guardando la empresa, intente de nuevo.');
                                    });
                                }).catch(function (err) {
                                    loading.dismiss();
                                    _this.mostrarToast('Error Consultando la sesión, intente de nuevo.');
                                    reject();
                                });
                            }, function (err) {
                                loading.dismiss();
                                _this.mostrarToast('Error Consultando la sesión, intente de nuevo.');
                                reject();
                            });
                        }).catch(function (err) {
                            if (usuario == "1005") {
                                localStorage.setItem('offlineMode', 'false');
                                loading.dismiss();
                                _this.mostrarToast('Ingrese de nuevo, intente de nuevo.');
                            }
                            else {
                                loading.dismiss();
                                _this.mostrarToast('Error Consultando la sesión, intente de nuevo.');
                                reject();
                            }
                        });
                    }).catch(function (err) {
                        if (usuario == "1005") {
                            localStorage.setItem('offlineMode', 'false');
                            loading.dismiss();
                            _this.mostrarToast('Ingrese de nuevo, intente de nuevo.');
                        }
                        else {
                            loading.dismiss();
                            _this.mostrarToast('Error Consultando la sesión, intente de nuevo.');
                        }
                    });
                }
            });
        });
        //});
    };
    SesionService.prototype.cerrarSesion = function () {
        var _this = this;
        this.sesionLocal.sesionIniciada = false;
        this.sesionLocal.sesionUsuario = null;
        this.guardarSesionLocal()
            .then(function () {
            var extras = {
                replaceUrl: true
            };
            _this.router.navigate(['login'], extras);
        })
            .catch(function (error) {
            _this.mostrarToast('Error al cerrar la sesión, intente de nuevo');
        });
    };
    SesionService.prototype.agregarLicencia = function (_config) {
        var _this = this;
        this.validarAccesoDispositivo().then(function () {
            // Obtenemos el UUID
            return new Promise(function (resolve, reject) {
                console.log(_this.device.uuid);
                var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('Licence', _this.device.uuid);
                var configHelper = new _helpers_config_helper__WEBPACK_IMPORTED_MODULE_5__["ConfigHelper"](_config);
                var httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                    }),
                    params: params
                };
                _this.loadingController.create({
                    message: 'Validando Licencia',
                    duration: 30000
                }).then(function (loading) {
                    loading.present();
                    _this.http.post(configHelper.getApiUrl() + "/login/addlicence", null, httpOptions)
                        .subscribe(function (resultado) {
                        if (!resultado) {
                            loading.dismiss();
                            console.log("resultado", resultado);
                            _this.mostrarToast('Licencia Ya Registrada O Numero De Licencias Ya Superadas');
                            reject();
                        }
                        else {
                            loading.dismiss();
                            resolve(resultado);
                            console.log("resultado", resultado);
                            _this.mostrarToast('La Licencia se Valido Correctamente');
                        }
                    }, function (error) {
                        loading.dismiss();
                        console.log(JSON.stringify(error));
                        reject();
                        _this.mostrarToast('Error Validando Licencia');
                    });
                });
            });
        });
    };
    SesionService.prototype.removerLicencia = function () {
        var _this = this;
        this.validarAccesoDispositivo().then(function () {
            return new Promise(function (resolve, reject) {
                var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('Licence', _this.device.uuid);
                var configHelper = new _helpers_config_helper__WEBPACK_IMPORTED_MODULE_5__["ConfigHelper"](_this.configuracionService.config);
                var httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                    }),
                    params: params
                };
                _this.loadingController.create({
                    message: 'Removiendo Licencia',
                    duration: 30000
                }).then(function (loading) {
                    loading.present();
                    _this.http.post(configHelper.getApiUrl() + "/login/removelicence", null, httpOptions)
                        .subscribe(function (resultado) {
                        if (!resultado) {
                            loading.dismiss();
                            _this.mostrarToast('No se Pudo Removiendo la Licencia, intente nuevamente.');
                            reject();
                        }
                        else {
                            loading.dismiss();
                            resolve(resultado);
                        }
                    }, function (error) {
                        loading.dismiss();
                        console.log(JSON.stringify(error));
                        reject();
                        _this.mostrarToast('Error Removiendo Licencia');
                    });
                });
            });
        });
    };
    // Para consultar el IMEI
    SesionService.prototype.validarAccesoDispositivo = function () {
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
                _this.mostrarToast('Error comprobando autorizaciòn de estado de dispositivo');
                reject();
            });
        });
    };
    SesionService.prototype.mostrarToast = function (texto) {
        this.toastController.create({
            message: texto,
            duration: 2000
        }).then(function (toast) {
            toast.present();
        });
    };
    SesionService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__["AndroidPermissions"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"] },
        { type: _configuracion_service__WEBPACK_IMPORTED_MODULE_12__["ConfiguracionService"] },
        { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__["Device"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _offline_service__WEBPACK_IMPORTED_MODULE_13__["OfflineService"] }
    ]; };
    SesionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__["AndroidPermissions"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"],
            _configuracion_service__WEBPACK_IMPORTED_MODULE_12__["ConfiguracionService"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__["Device"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _offline_service__WEBPACK_IMPORTED_MODULE_13__["OfflineService"]])
    ], SesionService);
    return SesionService;
}());



/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _models_sesion_local_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/sesion-local.model */ "IKtr");
/* harmony import */ var src_app_services_configuracion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/configuracion.service */ "Hpqp");
/* harmony import */ var _services_sesion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/sesion.service */ "PbBf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/print.service */ "Bhbv");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _services_offline_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/offline.service */ "DFAf");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _helpers_config_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers/config.helper */ "5Ez/");
/* harmony import */ var _models_cuadre_caja_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./models/cuadre-caja.model */ "qDQK");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/device/ngx */ "xS7M");
/* harmony import */ var _models_registro_gestion_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./models/registro-gestion.model */ "gjAW");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");






// Modelos

// Servicios













var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, router, menu, alertController, configService, sesionService, androidPermissions, print, configuracionService, toastController, alert, sqlite, device, ofline, loading, http, navCtrl, network) {
        var _this = this;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.menu = menu;
        this.alertController = alertController;
        this.configService = configService;
        this.sesionService = sesionService;
        this.androidPermissions = androidPermissions;
        this.print = print;
        this.configuracionService = configuracionService;
        this.toastController = toastController;
        this.alert = alert;
        this.sqlite = sqlite;
        this.device = device;
        this.ofline = ofline;
        this.loading = loading;
        this.http = http;
        this.navCtrl = navCtrl;
        this.network = network;
        this.mostrandoConfirmacionCerrarApp = false;
        this.msg = '';
        this.sesionLocal = new _models_sesion_local_model__WEBPACK_IMPORTED_MODULE_6__["SesionLocalModel"]();
        this.menuPrincipalId = 'menuPrincipal';
        this.license = '';
        this.ctoNovedad = '';
        this.isConnected = false;
        this.initializeApp();
        this.statusOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;
        this.msg = localStorage.getItem('existeRuta');
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__["NavigationEnd"]) {
                try {
                    if (event.url === '/login') {
                        _this.menu.enable(false, _this.menuPrincipalId);
                    }
                    else {
                        _this.menu.enable(true, _this.menuPrincipalId);
                    }
                }
                catch (ex) {
                    console.log(ex);
                }
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backButtonSubscription = this.platform.backButton.subscribe(function () {
            if (!_this.mostrandoConfirmacionCerrarApp && (_this.router.url.startsWith('/home') || _this.router.url.startsWith('/login'))) {
                _this.mostrandoConfirmacionCerrarApp = true;
                _this.mostrarConfirmacionCerrarApp();
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.backButtonSubscription.unsubscribe();
    };
    AppComponent.prototype.mostrarConfirmacionCerrarApp = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirmación',
                            message: '¿Quieres salir de la aplicación?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        alert.dismiss();
                                        _this.mostrandoConfirmacionCerrarApp = false;
                                    }
                                }, {
                                    text: 'Si',
                                    handler: function () {
                                        navigator['app'].exitApp();
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
    AppComponent.prototype.consultarRuta = function () {
        this.router.navigate(['consultar-ruta']);
        this.menu.close(this.menuPrincipalId);
    };
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            //this.menu.close(this.menuPrincipalId);
            // Cargamos la configuración y el estado de la sesión
            Promise.all([
                _this.configService.obtenerConfiguracion(),
                _this.sesionService.obtenerSesionLocal()
            ]).then(function () {
                _this.sesionLocal = _this.sesionService.sesionLocal;
                if (_this.platform.is('ios')) {
                    _this.statusBar.overlaysWebView(true);
                }
                _this.license = _this.device.uuid;
                if (_this.platform.is('android')) {
                    _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.BLUETOOTH).then(function (res) {
                    }, function (err) {
                        _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.BLUETOOTH).then(function (res) {
                        }, function (err) {
                        });
                    });
                    _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.INTERNET).then(function (res) { }).catch(function (err) {
                        _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.INTERNET).then(function (res) { }).catch(function (err) { });
                    });
                }
                // this.statusBar.styleDefault();
                _this.statusBar.backgroundColorByName('lightGray');
                _this.splashScreen.hide();
                // this.createDatabase();
            });
        });
    };
    AppComponent.prototype.mostrarMenu = function () {
        //this.statusOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;
        return !this.router.url.startsWith('/login') && !this.router.url.startsWith('/config');
    };
    AppComponent.prototype.consultarContrato = function () {
        this.router.navigate(['consultar-contrato']);
        this.menu.close(this.menuPrincipalId);
    };
    AppComponent.prototype.consultarPago = function () {
        this.router.navigate(['consultar-pago']);
        this.menu.close(this.menuPrincipalId);
    };
    AppComponent.prototype.cuadreCaja = function () {
        this.router.navigate(['cuadre-caja']);
        this.menu.close(this.menuPrincipalId);
    };
    AppComponent.prototype.removerLicencia = function () {
        var _this = this;
        console.log("se removera la licencia");
        this.alertController.create({
            header: 'Eliminar Licencia',
            message: 'Esta Seguro De Eliminar La Licencia, ¿Desea continuar?',
            buttons: [
                {
                    text: 'Si', role: 'accept',
                    handler: function () {
                        _this.sesionService.removerLicencia();
                        _this.sesionService.cerrarSesion();
                        _this.router.navigate(['']);
                    }
                },
                {
                    text: 'No', role: 'cancel',
                    handler: function () {
                        _this.alertController.dismiss();
                    }
                }
            ]
        }).then(function (a) {
            a.present();
        });
    };
    AppComponent.prototype.geolicalizacion = function () {
        alert('Debe ir a la pantalla de golocalización (Pendiente)');
    };
    AppComponent.prototype.configurarImpresora = function () {
        /**
         * Se genera lógica para consulta de dispositivos bluetooth.
         */
        var _this = this;
        this.print.searchBt().then(function (res) {
            var inputs = [];
            for (var _a = 0, res_1 = res; _a < res_1.length; _a++) {
                var item = res_1[_a];
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
    AppComponent.prototype.cerrarSesion = function () {
        this.menu.close(this.menuPrincipalId);
        this.sesionService.cerrarSesion();
        // this.router.navigate(['/login']);
        // this.router.navigate(['login'], { replaceUrl: true });
    };
    AppComponent.prototype.createDatabase = function () {
        this.sqlite.create({
            name: 'developers.db',
            location: 'default'
        })
            .then(function (db) {
            console.log("db creada");
        })
            .catch(function (e) { return console.log(e); });
    };
    AppComponent.prototype.GetRest = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                })
            };
            var configHelper = new _helpers_config_helper__WEBPACK_IMPORTED_MODULE_15__["ConfigHelper"](_this.configuracionService.config);
            _this.http.get("" + configHelper.getApiUrl() + url).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AppComponent.prototype.GetRestBody = function (url, body) {
        var _this = this;
        try {
            return new Promise(function (resolve, reject) {
                var httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                    })
                };
                var configHelper = new _helpers_config_helper__WEBPACK_IMPORTED_MODULE_15__["ConfigHelper"](_this.configuracionService.config);
                console.log(JSON.stringify(body));
                _this.http.post("" + configHelper.getApiUrl() + url, body, httpOptions).subscribe(function (res) {
                    resolve(res);
                    _this.isConnected = true;
                }, function (err) {
                    _this.isConnected = false;
                    reject(err);
                });
            });
        }
        catch (error) {
            this.isConnected = false;
            throw error;
        }
    };
    AppComponent.prototype.SincronizeData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var dataPost, l, data, ex_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataPost = new _models_cuadre_caja_model__WEBPACK_IMPORTED_MODULE_16__["CuadreCajaRequesModel"](this.sesionLocal.sesionUsuario.IDCOBRADOR, null);
                        return [4 /*yield*/, this.loading.create({
                                message: 'Cargando Pagos/Novedades Locales',
                                backdropDismiss: false
                            })];
                    case 1:
                        l = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 12, , 13]);
                        return [4 /*yield*/, l.present()];
                    case 3:
                        _a.sent();
                        l.message = "Creando Base de Datos";
                        return [4 /*yield*/, this.ofline.createDatabase()];
                    case 4:
                        _a.sent();
                        l.message = "Creando Tablas Locales";
                        return [4 /*yield*/, this.ofline.createTables()];
                    case 5:
                        _a.sent();
                        l.message = "Cargando Licencias";
                        return [4 /*yield*/, this.GetRest('/login/licenceslocale')];
                    case 6:
                        data = _a.sent();
                        return [4 /*yield*/, this.ofline.sincronizarLicencias(data)];
                    case 7:
                        _a.sent();
                        l.message = "Cargando Usuarios";
                        return [4 /*yield*/, this.GetRest('/login/userlocale')];
                    case 8:
                        data = _a.sent();
                        return [4 /*yield*/, this.ofline.sincronizarUsuarios(data)];
                    case 9:
                        _a.sent();
                        //await this.ofline.loginOffline("1005", "1005");
                        l.message = "Cargando Informacion Empresa";
                        return [4 /*yield*/, this.GetRest('/pago/funeraria')];
                    case 10:
                        data = _a.sent();
                        return [4 /*yield*/, this.ofline.sincronizarEmpresas(data)];
                    case 11:
                        _a.sent();
                        l.dismiss();
                        alert('Modo Fuera De Linea Exitoso');
                        return [3 /*break*/, 13];
                    case 12:
                        ex_1 = _a.sent();
                        alert(ex_1.message);
                        l.dismiss();
                        return [3 /*break*/, 13];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    //metodo para sincronizar las rutas de la bd 
    AppComponent.prototype.cargarRuta = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                //se pregunta si desea cargar la ruta nuevamente ya que hay pagos sin sincronizar 
                console.log("llego a cargar ruta nuevo metodo");
                this.ofline.createDatabase().then(function (res) {
                    _this.ofline.comprobarEstadoPagosNovedad().then(function (result) {
                        _this.sincronizaPagosNovedad = result;
                        console.log("llego a cargar ruta nuevo metodo resultado ", result);
                        if (_this.sincronizaPagosNovedad == true) {
                            _this.alertController.create({
                                header: 'Nueva Ruta',
                                message: 'ya cuenta con una ruta cargada con datos no sincronizados, para continuar debe sincronizar los datos primero',
                                buttons: [
                                    /* {
                                      text: 'Si', role: 'accept', handler: ()=>{
                                        this.cargarRutas();
                            
                                      }
                                    }, */
                                    {
                                        text: 'Ok', role: 'cancel',
                                        handler: function () {
                                            _this.alertController.dismiss();
                                        }
                                    }
                                ]
                            }).then(function (a) {
                                a.present();
                            });
                        }
                        else {
                            _this.cargarRutas();
                        }
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    AppComponent.prototype.cargarRutas = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var dataPost, l, data, ex_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataPost = new _models_cuadre_caja_model__WEBPACK_IMPORTED_MODULE_16__["CuadreCajaRequesModel"](this.sesionLocal.sesionUsuario.IDCOBRADOR, null);
                        return [4 /*yield*/, this.loading.create({
                                message: 'Cargando Rutas',
                                backdropDismiss: false
                            })];
                    case 1:
                        l = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 20, , 21]);
                        this.msg = 'Ruta cargada satisfactoriamente';
                        return [4 /*yield*/, l.present()];
                    case 3:
                        _a.sent();
                        //sincroniza las rutas
                        l.message = "Creando Base de Datos";
                        return [4 /*yield*/, this.ofline.createDatabase()];
                    case 4:
                        _a.sent();
                        l.message = "Creando Tabla De Rutas";
                        return [4 /*yield*/, this.ofline.createTablesRutas()];
                    case 5:
                        _a.sent();
                        //************************************************* */
                        l.message = "Creando Tabla Pagos/Novedades";
                        return [4 /*yield*/, this.ofline.createTablesPgosNovedad()];
                    case 6:
                        _a.sent();
                        //sincronizamos  tipo novedad 
                        l.message = 'Cargando Tipos Novedades';
                        return [4 /*yield*/, this.GetRest('/contrato/tipoNovedad')];
                    case 7:
                        data = _a.sent();
                        return [4 /*yield*/, this.ofline.SincronizarListaNovedades(data)];
                    case 8:
                        _a.sent();
                        //**************************nuevas ********************************* */
                        l.message = "Creando Tablas Locales";
                        return [4 /*yield*/, this.ofline.createTables()];
                    case 9:
                        _a.sent();
                        l.message = "Cargando Licencias";
                        return [4 /*yield*/, this.GetRest('/login/licenceslocale')];
                    case 10:
                        data = _a.sent();
                        return [4 /*yield*/, this.ofline.sincronizarLicencias(data)];
                    case 11:
                        _a.sent();
                        l.message = "Cargando Usuarios";
                        return [4 /*yield*/, this.GetRest('/login/userlocale')];
                    case 12:
                        data = _a.sent();
                        return [4 /*yield*/, this.ofline.sincronizarUsuarios(data)];
                    case 13:
                        _a.sent();
                        //await this.ofline.loginOffline("1005", "1005");
                        l.message = "Cargando Informacion Empresa";
                        return [4 /*yield*/, this.GetRest('/pago/funeraria')];
                    case 14:
                        data = _a.sent();
                        return [4 /*yield*/, this.ofline.sincronizarEmpresas(data)];
                    case 15:
                        _a.sent();
                        //***************fin nuevas**************** */
                        l.message = 'Cargando Rutas';
                        return [4 /*yield*/, this.GetRestBody('/posicion/lstRutas', dataPost)];
                    case 16:
                        data = _a.sent();
                        console.log("los datos de la ruta ", data);
                        if (data == '') {
                            this.msg = 'Ruta No Encontrada';
                        }
                        else {
                            localStorage.setItem('existeRuta', 'Ruta cargada satisfactoriamente');
                        }
                        return [4 /*yield*/, this.ofline.sincronizarRutas(data)];
                    case 17:
                        _a.sent();
                        l.dismiss();
                        //sincroniza las formas de pago 
                        l.message = "Cargando Formas de Pago";
                        return [4 /*yield*/, this.GetRest('/pago/TiposPagos')];
                    case 18:
                        data = _a.sent();
                        return [4 /*yield*/, this.ofline.sincronizarFormaPago(data)];
                    case 19:
                        _a.sent();
                        l.dismiss();
                        alert(this.msg);
                        return [3 /*break*/, 21];
                    case 20:
                        ex_2 = _a.sent();
                        alert(ex_2.message);
                        l.dismiss();
                        return [3 /*break*/, 21];
                    case 21: return [2 /*return*/];
                }
            });
        });
    };
    //metodo para sincronizar las novedades y los pagos 
    AppComponent.prototype.sincronizar = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            function delay(ms) {
                return new Promise(function (resolve) { return setTimeout(resolve, ms); });
            }
            var l, ex_3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading.create({
                            message: 'Sincronizando Novedades Y Pagos',
                            backdropDismiss: false
                        })];
                    case 1:
                        l = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 10, , 11]);
                        return [4 /*yield*/, l.present()];
                    case 3:
                        _a.sent();
                        // sincroniza los pagos
                        l.message = 'Sincronizando Pagos';
                        return [4 /*yield*/, this.CargarPagosBdLocal()];
                    case 4:
                        _a.sent();
                        // l.dismiss();
                        l.message = 'Sincronizando Novedades';
                        return [4 /*yield*/, this.CargarNovedadBdLocal()];
                    case 5:
                        _a.sent();
                        l.dismiss();
                        if (!(this.isConnected == true)) return [3 /*break*/, 8];
                        return [4 /*yield*/, delay(5000)];
                    case 6:
                        _a.sent();
                        this.sincronizarAutomatico();
                        return [4 /*yield*/, delay(5000)];
                    case 7:
                        _a.sent();
                        alert('Informacíon sincronizada satisfactoriamente');
                        return [3 /*break*/, 9];
                    case 8:
                        alert('Informacíon no sincronizada');
                        _a.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        ex_3 = _a.sent();
                        alert(ex_3.message);
                        l.dismiss();
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    //metodo para sincronizar las novedades y los pagos 
    AppComponent.prototype.sincronizarAutomatico = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ex_4;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.CargarPagosBdLocal()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.CargarNovedadBdLocal()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        ex_4 = _a.sent();
                        alert(ex_4.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.CargarNovedadBdLocal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                console.log("llego a cargar nivedades a productiva");
                this.ofline.getListaNovedades().then(function (datanovedad) {
                    console.log("Cant novedades encontradas" + datanovedad.length);
                    console.log("novedades encontradas" + datanovedad);
                    if (datanovedad.length > 0) {
                        var _loop_1 = function () {
                            var gestiondata = new _models_registro_gestion_model__WEBPACK_IMPORTED_MODULE_18__["RegistroGestionModel"]();
                            itemnovedad = datanovedad[_j];
                            _this.ctoNovedad = itemnovedad.CONTRATO;
                            _this.idNovedad = itemnovedad.ID;
                            console.log("elnitem id es:", itemnovedad.ID);
                            gestiondata.ID = itemnovedad.ID;
                            gestiondata.Contrato = itemnovedad.CONTRATO;
                            gestiondata.Novedad = itemnovedad.NOVEDAD;
                            gestiondata.Diapos = itemnovedad.DIAPOST;
                            gestiondata.Usuario = itemnovedad.USUARIO;
                            gestiondata.IdCobrador = itemnovedad.IDCOBRADOR;
                            gestiondata.Modulo = itemnovedad.MODULO;
                            gestiondata.Transac = itemnovedad.TRANSAC;
                            gestiondata.Fechaprogramada = itemnovedad.FECHAPROGRAMADA;
                            gestiondata.Posx = itemnovedad.POSX;
                            gestiondata.Posy = itemnovedad.POSY;
                            gestiondata.Observaciones = itemnovedad.OBSERVACIONES;
                            try {
                                console.log("novedad a guardar" + JSON.stringify(gestiondata));
                                _this.GetRestBody('/pago/insertNove', gestiondata).then(function (res) {
                                    console.log("Mi Id Es Para La Novedad:", gestiondata.ID);
                                    console.log("llego a almacenar novedad productiva pruebas,", res);
                                    console.log("llego a almacenar novedad productiva Respuesta ES:", res.Respuesta);
                                    // this.retorno=res.Respuesta;
                                    if (_this.isConnected == true) {
                                        //pasa el estado de la novedad a sincronizado 1
                                        //pasa el estado del pago a sincronizado 1
                                        if (res.Respuesta == "Novedad Registrada") {
                                            console.log("el id ES:", gestiondata.ID);
                                            _this.ofline.actualizarSincronizadoNovedad(gestiondata.ID);
                                        }
                                    }
                                }).catch(function (err) {
                                });
                            }
                            catch (ex) {
                                throw ex;
                            }
                        };
                        var itemnovedad;
                        for (var _j = 0; _j < datanovedad.length; _j++) {
                            _loop_1();
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    AppComponent.prototype.CargarPagosBdLocal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.ofline.getListapago().then(function (datapagos) {
                    if (datapagos.length > 0) {
                        for (var _i = 0; _i < datapagos.length; _i++) {
                            var item = datapagos[_i];
                            try {
                                _this.GetRestBody('/pago/create', item).then(function (res) {
                                    console.log("llego a almacenar pagos productiva pruebas,", res);
                                    console.log("llego a almacenar pagos productiva Respuesta ES:", res.Respuesta);
                                    _this.retorno = res.Respuesta;
                                    if (_this.isConnected == true) {
                                        //pasa el estado del pago a sincronizado 1
                                        if (_this.retorno == "Pago Registrado") {
                                            _this.ofline.actualizarSincronizadoPago(res.IdContrato, res.IdPersona);
                                            //try
                                            // {
                                            //  let data = this.db.executeSql('UPDATE PAGOS SET SINCRONIZAR = 1  WHERE IDCONTRATO = ? AND IDPERSONA = ?', [ item.IDCONTRATO, item.IDPERSONA]);
                                            //} catch(ex){
                                            // throw ex;
                                            //}
                                        }
                                    }
                                }).catch(function (err) {
                                });
                            }
                            catch (ex) {
                                throw ex;
                            }
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    AppComponent.prototype.offlineChange = function () {
        var _this = this;
        console.log("statusOffline", this.statusOffline);
        console.log("localstore", localStorage.getItem('offlineMode'));
        if (this.statusOffline === false) {
            this.alertController.create({
                header: 'Trabajo Fuera de Linea',
                message: !this.statusOffline ? 'Si desactiva el modo "Trabajo Fuera de Linea" la aplicación no tendrá en cuenta la información local, ¿Desea continuar?' : 'Si activa el modo "Trabajo Fuera de Linea" debe cargar una ruta, ¿Desea continuar?',
                buttons: [
                    {
                        text: 'Si', role: 'accept',
                        handler: function () {
                            // if(this.statusOffline)
                            //{
                            // this.SincronizeData().then(res=>{
                            // }).catch(err=>{
                            // this.statusOffline = !this.statusOffline;
                            // });
                            //}
                            localStorage.setItem('offlineMode', _this.statusOffline ? 'true' : 'false');
                            localStorage.setItem('existeRuta', 'Ruta cargada satisfactoriamente');
                        }
                    },
                    {
                        text: 'No', role: 'cancel',
                        handler: function () {
                            _this.statusOffline = false;
                            _this.alertController.dismiss();
                        }
                    }
                ]
            }).then(function (a) {
                a.present();
            });
        }
        else {
            localStorage.setItem('offlineMode', this.statusOffline ? 'true' : 'false');
            localStorage.setItem('existeRuta', 'Ruta cargada satisfactoriamente');
        }
    };
    // utiiza el metodo sincronico para cargar rutas
    AppComponent.prototype.offlineCargarRutas = function () {
        var _this = this;
        this.alertController.create({
            header: 'Cargar Ruta',
            message: 'Esta Seguro De Cargar La Ruta, ¿Desea continuar?',
            buttons: [
                {
                    text: 'Si', role: 'accept',
                    handler: function () {
                        //carga la ruta
                        _this.cargarRuta().then(function (res) {
                        }).catch(function (err) {
                        });
                    }
                },
                {
                    text: 'No', role: 'cancel',
                    handler: function () {
                        _this.alertController.dismiss();
                    }
                }
            ]
        }).then(function (a) {
            a.present();
        });
    };
    // utiiza el metodo sincronico para cargar pagos y novedades
    AppComponent.prototype.offlineCargarPagosNovedades = function () {
        //comprueba la conexion a internet
        var _this = this;
        this.alertController.create({
            header: 'Sincronizar Rutas',
            message: 'Esta Seguro Que Desea Sincronizar Los Pagos Y Novedades, ¿Desea continuar?',
            buttons: [
                {
                    text: 'Si', role: 'accept',
                    handler: function () {
                        _this.sincronizar().then(function (res) {
                        }).catch(function (err) {
                        });
                    }
                },
                {
                    text: 'No', role: 'cancel',
                    handler: function () {
                        _this.alertController.dismiss();
                    }
                }
            ]
        }).then(function (a) {
            a.present();
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: src_app_services_configuracion_service__WEBPACK_IMPORTED_MODULE_7__["ConfiguracionService"] },
        { type: _services_sesion_service__WEBPACK_IMPORTED_MODULE_8__["SesionService"] },
        { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__["AndroidPermissions"] },
        { type: _services_print_service__WEBPACK_IMPORTED_MODULE_11__["PrintService"] },
        { type: src_app_services_configuracion_service__WEBPACK_IMPORTED_MODULE_7__["ConfiguracionService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_12__["SQLite"] },
        { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_17__["Device"] },
        { type: _services_offline_service__WEBPACK_IMPORTED_MODULE_13__["OfflineService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_19__["Network"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_services_configuracion_service__WEBPACK_IMPORTED_MODULE_7__["ConfiguracionService"],
            _services_sesion_service__WEBPACK_IMPORTED_MODULE_8__["SesionService"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__["AndroidPermissions"],
            _services_print_service__WEBPACK_IMPORTED_MODULE_11__["PrintService"],
            src_app_services_configuracion_service__WEBPACK_IMPORTED_MODULE_7__["ConfiguracionService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_12__["SQLite"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_17__["Device"],
            _services_offline_service__WEBPACK_IMPORTED_MODULE_13__["OfflineService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_19__["Network"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "TIVg":
/*!***********************************************************!*\
  !*** ./src/app/own-components/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "FzS+");
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss */ "205S");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _models_sesion_local_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/sesion-local.model */ "IKtr");
/* harmony import */ var src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/sesion.service */ "PbBf");






// Modelos

// Servicios

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(platform, router, sesionService) {
        this.platform = platform;
        this.router = router;
        this.sesionService = sesionService;
        this.sesionLocal = new _models_sesion_local_model__WEBPACK_IMPORTED_MODULE_6__["SesionLocalModel"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.sesionLocal = _this.sesionService.sesionLocal;
        });
    };
    HeaderComponent.prototype.mostrar = function () {
        return !this.router.url.startsWith('/login') && !this.router.url.startsWith('/config');
    };
    HeaderComponent.prototype.mostrarMenu = function () {
        return !this.router.url.startsWith('/login') && !this.router.url.startsWith('/config');
    };
    HeaderComponent.prototype.mostrarBackButton = function () {
        return !this.router.url.startsWith('/login') && !this.router.url.startsWith('/home')
            && !this.router.url.startsWith('/registrar-pago')
            && !this.router.url.startsWith('/registrar-pago2')
            && !this.router.url.startsWith('/registro-gestion')
            && !this.router.url.startsWith('/registro-gestion2');
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_7__["SesionService"] }
    ]; };
    HeaderComponent.propDecorators = {
        titulo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-header',
            template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_7__["SesionService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "TPCf":
/*!***************************************************!*\
  !*** ./src/app/services/tasks-service.service.ts ***!
  \***************************************************/
/*! exports provided: TasksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksService", function() { return TasksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var TasksService = /** @class */ (function () {
    function TasksService() {
        this.db = null;
    }
    TasksService.prototype.setDatabase = function (db) {
        if (this.db === null) {
            this.db = db;
        }
    };
    TasksService.prototype.createTable = function () {
        var sql = 'CREATE TABLE IF NOT EXISTS rutas(IDRUTA INTEGER PRIMARY KEY AUTOINCREMENT,  ' +
            'USUARIO TEXT, IDCOBRADOR TEXT, IDCONTRATO TEXT, CEDULA TEXT, TITULAR TEXT, DIRECCION TEXT, ' +
            'TELEFONO TEXT, CIUDAD TEXT, DIACOBRO1 SMALLINT, DIACOBRO2 SMALLINT, ESTADO TEXT, NOVEDAD INTEGER , ' +
            'POSTFECHADODIA SMALLINT, INDICE SMALLINT, CUOTA FLOAT, PENDIENTE SMALLINT, ESTADOCONTRATO TEXT, FECHAR TEXT, ' +
            'BASEDATOS TEXT, EMPRESA TEXT, NIT TEXT, DIRECCIONCOBRO TEXT, BOXCONTRATANTE TEXT, VALORCARTERA FLOAT, VALORSEGURO FLOAT, ' +
            // tslint:disable-next-line: max-line-length
            'CELULAR TEXT, PAGOHASTA TEXT, DEPTOC TEXT, MPIOC TEXT, BARRIOC TEXT, MOTIVO TEXT, FECHAPROGRAMADA TEXT, CODBARRIO TEXT, COBERTURA TEXT)';
        return this.db.executeSql(sql, []);
    };
    TasksService.prototype.create = function (task) {
        var sql = 'INSERT INTO rutas(title, completed) VALUES(?,?)';
        return this.db.executeSql(sql, [task.title, task.completed]);
    };
    TasksService.prototype.delete = function (ruta) {
        var sql = 'DELETE FROM rutas WHERE id=?';
        return this.db.executeSql(sql, [ruta.id]);
    };
    TasksService.ctorParameters = function () { return []; };
    TasksService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TasksService);
    return TasksService;
}());



/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content padding class=\"background\">\r\n\r\n  <ion-grid class=\"grid1\">\r\n  \r\n    <ion-row class=\"row1\">\r\n      <ion-col >\r\n      \r\n      </ion-col>\r\n  </ion-row>\r\n  \r\n      <ion-row class=\"row2\">\r\n          <ion-col>\r\n  \r\n          </ion-col>\r\n      </ion-row>\r\n  \r\n  </ion-grid>\r\n  \r\n  <ion-slide>\r\n      <div class=\"contaier-login\">\r\n          <ion-grid>\r\n              \r\n              <ion-row>\r\n                \r\n                  <ion-col>\r\n                      <ion-list>\r\n                        <ion-row class=\"row4\">\r\n                          <ion-col class=\"imglogo\">\r\n                            <ion-img src=\"assets/img/App.png\"></ion-img>\r\n                          </ion-col>\r\n                        </ion-row>\r\n  \r\n                          <ion-item>\r\n\r\n                            <ion-label color=\"primary\" position=\"floating\">Usuario</ion-label>\r\n                            <!-- <ion-input autocorrect=\"on\" autofocus=\"on\" clearInput=\"true\" clearOnEdit=\"true\" color=\"primary\" inputmode=\"text\" placeholder=\"Enter your name\" required=\"true\"></ion-input>\r\n                         -->\r\n                              \r\n                              <ion-input #userName autofocus=\"true\" placeholder=\"Ingresa Tu Usuario\" clearInput=\"true\" clearOnEdit=\"true\" color=\"danger\" type=\"text\" [value]=\"usuario\"\r\n                                (ionChange)=\"usuario = userName.value\"></ion-input>\r\n\r\n          \r\n                          </ion-item>\r\n                          <ion-item>\r\n                            <ion-label color=\"primary\" position=\"floating\">Clave</ion-label>\r\n                         \r\n                            \r\n\r\n                            <ion-input  #password type=\"password\" placeholder=\"Ingresa Tu Clave\" clearInput=\"true\" clearOnEdit=\"true\" color=\"danger\" [value]=\"clave\"\r\n                              (ionChange)=\"clave = password.value\"></ion-input>\r\n                        </ion-item>\r\n  \r\n                      </ion-list>\r\n                      \r\n                  </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                  <ion-col>\r\n                    <div id=\"recaptcha-container\"></div>\r\n                      <ion-button style=\"border-radius: 10%;\" color=\"danger\" fill=\"solid\" expand=\"full\" (click)=\"iniciarSesion()\">\r\n                        Ingresar\r\n                      </ion-button>\r\n                  </ion-col>\r\n              </ion-row>\r\n              <ion-row class=\"row3\" >\r\n                <ion-col class=\"img-container\">\r\n                    <ion-label  (click)=\"irAConfiguracion()\" color=\"danger\">\r\n                        <h3>Configuración</h3>\r\n                        \r\n                    </ion-label>\r\n              \r\n                    \r\n                </ion-col>\r\n              </ion-row> \r\n             \r\n          </ion-grid>\r\n          \r\n      </div>\r\n     \r\n    \r\n      \r\n  </ion-slide>\r\n  \r\n</ion-content>\r\n\r\n\r\n");

/***/ }),

/***/ "V42k":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/own-components/modal-confirmar-pago/modal-confirmar-pago.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-padding\">\r\n  <h5 class=\"semi-titulo ion-text-center\">Confirmación del pago</h5>\r\n</div>\r\n<ion-grid fixed>\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"4\">Contrato</ion-col>\r\n    <ion-col size=\"4\">\r\n      <ion-text color=\"danger\">\r\n        <span *ngIf=\"registroPago\">{{ registroPago.IDCONTRATO }}</span>\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"4\">Nombre</ion-col>\r\n    <ion-col size=\"8\">\r\n      <ion-text color=\"danger\">\r\n        <span *ngIf=\"registroPago\">{{ registroPago.titular }}</span>\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"4\">\r\n      Valor total\r\n    </ion-col>\r\n    <ion-col size=\"8\">\r\n      <ion-text color=\"danger\">\r\n        <span *ngIf=\"registroPago\">{{ registroPago.VALOR | currency:'COP':'symbol-narrow':'4.2-2' }}</span>\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"4\">\r\n      Descuento\r\n    </ion-col>\r\n    <ion-col size=\"8\">\r\n      <ion-text>\r\n        <span *ngIf=\"registroPago\">{{ registroPago.DESCUENTO | currency:'COP':'symbol-narrow':'4.2-2' }}</span>\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n \r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"4\">\r\n      Valor neto\r\n    </ion-col>\r\n    <ion-col size=\"8\">\r\n      <ion-text color=\"danger\">\r\n        <span *ngIf=\"registroPago\">{{ registroPago.VALOR-registroPago.DESCUENTO | currency:'COP':'symbol-narrow':'4.2-2' }}</span>\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\">¿Está seguro que desea realizar el pago?</ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col class=\"ion-justify-right\" size=\"6\">\r\n      <ion-button color=\"success\" expand=\"block\" (click)=\"aceptar()\">\r\n        Si\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-button color=\"danger\" expand=\"block\" (click)=\"cancelar()\">\r\n        No\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-grid>");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n\r\n    <ion-menu side=\"end\" [menuId]=\"menuPrincipalId\" *ngIf=\"mostrarMenu()\">\r\n        <ion-header>\r\n            <ion-toolbar color=\"danger\">\r\n                <ion-title>Menú</ion-title>\r\n            </ion-toolbar>\r\n        </ion-header>\r\n        <ion-content>\r\n            <ion-list>\r\n                <ion-item button=\"true\" (click)=\"consultarContrato()\">Consultar contrato</ion-item>\r\n                <ion-item button=\"true\" (click)=\"consultarPago()\">Consultar pago</ion-item>\r\n                <ion-item button=\"true\" (click)=\"cuadreCaja()\">Cuadre caja</ion-item>\r\n                <ion-item button=\"true\" (click)=\"consultarRuta()\">Consultar Ruta</ion-item>\r\n                <ion-item button=\"true\" (click)=\"removerLicencia()\">Remover Licencia</ion-item>\r\n                <ion-item button=\"true\" (click)=\"configurarImpresora()\">Configurar impresora</ion-item>\r\n\r\n                <ion-item *ngIf=\"msg == 'Ruta cargada satisfactoriamente' \">\r\n                    <ion-label>Trabajo Fuera de Linea</ion-label>\r\n                    <ion-toggle  [(ngModel)]=\"statusOffline\" color=\"primary\" (ionChange)=\"offlineChange()\"></ion-toggle>\r\n                </ion-item>\r\n\r\n                \r\n                <ion-item button=\"true\" *ngIf=\"statusOffline == false\" (click)=\"offlineCargarRutas()\">Cargar Ruta</ion-item>\r\n                <ion-item  *ngIf=\"msg == 'Ruta cargada satisfactoriamente' && statusOffline == false\" button=\"true\" (click)=\"offlineCargarPagosNovedades()\">Sincronizar</ion-item>\r\n\r\n                <ion-item button=\"true\" (click)=\"cerrarSesion()\">Cerrar sesión</ion-item>\r\n                <ion-item button=\"true\">\r\n                    <ion-input disabled=\"true\" #licenseInput color=\"danger\" value=\"{{ license }}\"> </ion-input>\r\n                </ion-item>\r\n                <ion-item button=\"true\">\r\n                    <ion-input disabled=\"true\" #licenseInput color=\"danger\" value=\"V. 05/Dic/2021\"> </ion-input>\r\n                </ion-item>\r\n              \r\n            </ion-list>\r\n        </ion-content>\r\n    </ion-menu>\r\n\r\n    <ion-router-outlet main></ion-router-outlet>\r\n</ion-app>");

/***/ }),

/***/ "X4az":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/own-components/logo-empresa/logo-empresa.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-thumbnail class=\"logo-empresa\">\r\n  <ion-icon color=\"medium\" *ngIf=\"!config.logoEmpresa\" name=\"ios-image\"></ion-icon>\r\n  <ion-img *ngIf=\"config.logoEmpresa\" [src]=\"config.logoEmpresaUtilizable\"></ion-img>\r\n</ion-thumbnail>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/es-CO */ "AQDP");
/* harmony import */ var _angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "7uwA");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "M2ZX");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "tAfe");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "eHpL");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "mtRb");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/device/ngx */ "xS7M");
/* harmony import */ var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/printer/ngx */ "METt");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _own_components_own_components_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./own-components/own-components.module */ "9FvA");
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/print.service */ "Bhbv");
/* harmony import */ var _services_tasks_service_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/tasks-service.service */ "TPCf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pages_login_login_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/login/login.page */ "bP1B");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "aaed");






// regionalización español colombia



Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["registerLocaleData"])(_angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_7___default.a);
// plugins





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"], _pages_login_login_page__WEBPACK_IMPORTED_MODULE_27__["LoginPage"]],
            entryComponents: [
                _pages_login_login_page__WEBPACK_IMPORTED_MODULE_27__["LoginPage"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _own_components_own_components_module__WEBPACK_IMPORTED_MODULE_23__["OwnComponentsModule"]
            ],
            providers: [
                _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__["StatusBar"],
                _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_9__["SplashScreen"],
                _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_11__["NativeStorage"],
                _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_12__["ImagePicker"],
                _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_13__["File"],
                _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_29__["EmailComposer"],
                _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__["WebView"],
                _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_16__["Geolocation"],
                _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_15__["AndroidPermissions"],
                _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_17__["Diagnostic"],
                _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_18__["Device"],
                _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_19__["Printer"],
                _services_print_service__WEBPACK_IMPORTED_MODULE_24__["PrintService"],
                _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_8__["BluetoothSerial"],
                _services_tasks_service_service__WEBPACK_IMPORTED_MODULE_25__["TasksService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"],
                _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_20__["SQLite"],
                _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_28__["Network"],
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'es-CO' }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "bP1B":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "TuYN");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "H+1c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_models_config_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/config.model */ "oRqo");
/* harmony import */ var src_app_models_sesion_local_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/sesion-local.model */ "IKtr");
/* harmony import */ var src_app_services_configuracion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/configuracion.service */ "Hpqp");
/* harmony import */ var _services_sesion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../services/sesion.service */ "PbBf");








// Servicios


var LoginPage = /** @class */ (function () {
    function LoginPage(platform, router, toastController, alertController, configuracionService, sesionService, navCtrl) {
        var _this = this;
        this.platform = platform;
        this.router = router;
        this.toastController = toastController;
        this.alertController = alertController;
        this.configuracionService = configuracionService;
        this.sesionService = sesionService;
        this.navCtrl = navCtrl;
        this.config = new src_app_models_config_model__WEBPACK_IMPORTED_MODULE_6__["ConfigModel"]();
        this.sesionLocal = new src_app_models_sesion_local_model__WEBPACK_IMPORTED_MODULE_7__["SesionLocalModel"]();
        this.usuario = '';
        this.clave = '';
        this.mostrarToast = function (mensaje) {
            _this.toastController.create({
                message: mensaje,
                duration: 2000
            }).then(function (toast) {
                toast.present();
            });
        };
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
    LoginPage.prototype.ngOnInit = function () {
        //Metodo Anterior Implementado alex
        // this.sesionLocal = this.sesionService.sesionLocal;
        // this.config = this.configuracionService.config;
        // this.navCtrl.pop();
        // if (this.sesionLocal.sesionIniciada) {
        //   // this.mostrarToast('Ya inicio sesión');
        //   this.router.navigate(['consultar-contrato'], { replaceUrl: true });
        // }
        var _this = this;
        this.platform.ready().then(function () {
            /*
              Primero preguntamos si el usuario ya inicio sesión, si ya inició
              entonces lo redireccionamos al la pantalla de consulta de contrato
            */
            _this.sesionLocal = _this.sesionService.sesionLocal;
            _this.config = _this.configuracionService.config;
            if (_this.sesionLocal.sesionIniciada) {
                // this.mostrarToast('Ya inicio sesión');
                _this.router.navigate(['consultar-contrato'], { replaceUrl: true });
            }
        });
    };
    LoginPage.prototype.iniciarSesion = function () {
        if (this.usuario.replace(/\s+/g, '').length === 0) {
            this.mostrarAlerta('Por favor ingrese el usuario');
            return;
        }
        if (this.clave.replace(/\s+/g, '').length === 0) {
            this.mostrarAlerta('Por favor ingrese la clave');
            return;
        }
        this.sesionService.iniciarSesion(this.usuario, this.clave);
    };
    LoginPage.prototype.irAConfiguracion = function () {
        this.router.navigate(['config']);
    };
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: src_app_services_configuracion_service__WEBPACK_IMPORTED_MODULE_8__["ConfiguracionService"] },
        { type: _services_sesion_service__WEBPACK_IMPORTED_MODULE_9__["SesionService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
    ]; };
    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            src_app_services_configuracion_service__WEBPACK_IMPORTED_MODULE_8__["ConfiguracionService"],
            _services_sesion_service__WEBPACK_IMPORTED_MODULE_9__["SesionService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "d4qT":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/own-components/datos-contrato/datos-contrato.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-padding\">\r\n  <h5 class=\"semi-titulo\">Datos del contrato</h5>\r\n</div>\r\n<ion-grid fixed>\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"4\">Contrato</ion-col>\r\n    <ion-col size=\"4\">\r\n      <ion-text color=\"danger\">\r\n        <span *ngIf=\"contrato\">{{ contrato.contrato }}</span>\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"4\">\r\n      Cuota\r\n    </ion-col>\r\n    <ion-col size=\"8\">\r\n      <ion-text color=\"danger\">\r\n        <span *ngIf=\"contrato\">{{ contrato.cuota | currency:'COP':'symbol-narrow':'4.2-2' }}</span>\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"4\">Fecha Afiliación</ion-col>\r\n    <ion-col size=\"8\"><span class=\"ion-text-capitalize\" *ngIf=\"contrato\">{{ contrato.fehaAfiliacion | date:'MMMM dd yyyy':'':'es-Co' }}</span>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"4\">Pago Hasta</ion-col>\r\n    <ion-col size=\"8\"><span class=\"ion-text-capitalize\" *ngIf=\"contrato\">{{ contrato.pagoHasta | date:'MMMM dd yyyy':'':'es-Co' }}</span></ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"modo === enumModo.MODO_CONSULTA || modo === enumModo.MODO_EDICION\" class=\"ion-align-items-center\">\r\n    <ion-col size=\"4\">Estado</ion-col>\r\n    <ion-col size=\"8\"><span *ngIf=\"contrato\">{{ contrato.estado }}</span></ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"modo === enumModo.MODO_CONSULTA || modo === enumModo.MODO_EDICION\" class=\"ion-align-items-center\">\r\n    <ion-col size=\"4\">Plan</ion-col>\r\n    <ion-col size=\"8\"><span *ngIf=\"contrato\">{{ contrato.plan }}</span></ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"4\">Cédula</ion-col>\r\n    <ion-col size=\"8\">\r\n      <ion-text color=\"danger\">\r\n        <span *ngIf=\"contrato\">{{ contrato.cedula }}</span>\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"4\">Nombre</ion-col>\r\n    <ion-col size=\"8\">\r\n      <ion-text color=\"danger\">\r\n        <span *ngIf=\"contrato\">{{ contrato.nombre }}</span>\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"modo === enumModo.MODO_EDICION\" class=\"ion-align-items-center\">\r\n    <ion-col size=\"4\">\r\n      Departamento\r\n    </ion-col>\r\n    <ion-col size=\"8\">\r\n\r\n      <ion-select *ngIf=\"modo === enumModo.MODO_EDICION\" placeholder=\"Seleccione un departamento\" okText=\"Escoger\"\r\n        cancelText=\"Cancelar\" [value]=\"contrato.departamento\" (ionChange)=\"departamentoSeleccionado($event)\">\r\n        <ion-select-option *ngFor=\"let departamento of departamentos\" [value]=\"departamento.id\">{{departamento.nombre}}\r\n        </ion-select-option>\r\n      </ion-select>\r\n\r\n      <span *ngIf=\"contrato && modo !== enumModo.MODO_EDICION\">{{ departamentoPorId(contrato.departamento) }}</span>\r\n\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"modo === enumModo.MODO_EDICION\" class=\"ion-align-items-center\">\r\n    <ion-col size=\"4\">Ciudad</ion-col>\r\n    <ion-col size=\"8\">\r\n\r\n      <ion-select *ngIf=\"modo === enumModo.MODO_EDICION\" placeholder=\"Seleccione una ciudad\" okText=\"Escoger\"\r\n        cancelText=\"Cancelar\" [value]=\"contrato.ciudad\" (ionChange)=\"ciudadSeleccionada($event)\">\r\n        <ion-select-option *ngFor=\"let ciudad of ciudades\" [value]=\"ciudad.id\">{{ ciudad.nombre }}</ion-select-option>\r\n      </ion-select>\r\n\r\n      <span *ngIf=\"contrato && modo !== enumModo.MODO_EDICION\">{{ ciudadPorId(contrato.ciudad) }}</span>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"modo === enumModo.MODO_CONSULTA || modo === enumModo.MODO_EDICION\" class=\"ion-align-items-center\">\r\n    <ion-col size=\"4\">Dirección</ion-col>\r\n    <ion-col size=\"8\">\r\n      <ion-input *ngIf=\"modo === enumModo.MODO_EDICION\" placeholder=\"Ingrese una dirección\"\r\n        [value]=\"contrato.direccion\"></ion-input>\r\n      <span *ngIf=\"contrato && modo !== enumModo.MODO_EDICION\">{{ contrato.direccion }}</span>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"modo === enumModo.MODO_EDICION\" class=\"ion-align-items-center\">\r\n    <ion-col size=\"4\">Dirección Cobro</ion-col>\r\n    <ion-col size=\"8\">\r\n      <ion-input *ngIf=\"modo === enumModo.MODO_EDICION\" placeholder=\"Ingrese una dirección de cobro\"\r\n        [value]=\"contrato.direccionCobro\">\r\n      </ion-input>\r\n      <span *ngIf=\"contrato && modo !== enumModo.MODO_EDICION\">{{ contrato.direccionCobro }}</span>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"modo === enumModo.MODO_CONSULTA || modo === enumModo.MODO_EDICION\" class=\"ion-align-items-center\">\r\n    <ion-col size=\"4\">Teléfono</ion-col>\r\n    <ion-col size=\"8\">\r\n      <ion-input *ngIf=\"modo === enumModo.MODO_EDICION\" placeholder=\"Ingrese el teléfono\" type=\"tel\"\r\n        [value]=\"contrato.telefono\">\r\n      </ion-input>\r\n      <span *ngIf=\"contrato && modo !== enumModo.MODO_EDICION\">{{ contrato.telefono }}</span>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"modo === enumModo.MODO_CONSULTA || modo === enumModo.MODO_EDICION\" class=\"ion-align-items-center\">\r\n    <ion-col size=\"4\">Mòvil</ion-col>\r\n    <ion-col size=\"8\">\r\n      <ion-input *ngIf=\"modo === enumModo.MODO_EDICION\" placeholder=\"Ingrese el móvil\" [value]=\"contrato.movil\">\r\n      </ion-input>\r\n      <span *ngIf=\"contrato && modo !== enumModo.MODO_EDICION\">{{ contrato.movil }}</span>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"modo === enumModo.MODO_CONSULTA || modo === enumModo.MODO_EDICION\" class=\"ion-align-items-center\">\r\n    <ion-col size=\"4\">Email</ion-col>\r\n    <ion-col size=\"8\">\r\n      <ion-input *ngIf=\"modo === enumModo.MODO_EDICION\" placeholder=\"Ingrese el email\" type=\"email\"\r\n        [value]=\"contrato.email\">\r\n      </ion-input>\r\n      <span *ngIf=\"contrato && modo !== enumModo.MODO_EDICION\">{{ contrato.email }}</span>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"4\">Nota</ion-col>\r\n    <ion-col size=\"8\">\r\n      <ion-text>\r\n        <span *ngIf=\"contrato\">{{ contrato.Nota1 }}</span>\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-grid>");

/***/ }),

/***/ "dNaG":
/*!***********************************************!*\
  !*** ./src/app/models/consulta-pago.model.ts ***!
  \***********************************************/
/*! exports provided: ConsultaPagoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaPagoModel", function() { return ConsultaPagoModel; });
var ConsultaPagoModel = /** @class */ (function () {
    function ConsultaPagoModel() {
        this.Observaciones = '';
    }
    return ConsultaPagoModel;
}());



/***/ }),

/***/ "df5q":
/*!******************************************************************************************************************************************!*\
  !*** ../node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"F9aY",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"X0n3",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"owCT",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"bfEr",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Cdt7",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"dJ9L",
		5
	],
	"./ion-button_2.entry.js": [
		"xIkb",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"a42N",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"u8ra",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"BLeQ",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"LWlC",
		10
	],
	"./ion-datetime_3.entry.js": [
		"d7GT",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"XHKO",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"C7MG",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"ue0N",
		14
	],
	"./ion-input.entry.js": [
		"tuBz",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"CPLj",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"uY9F",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"LzzF",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"9SvH",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"oh+x",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"xTgS",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"GlbS",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"O420",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"FWSH",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"iD9d",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"NNj2",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"UZzn",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"l0Ah",
		28
	],
	"./ion-route_4.entry.js": [
		"eQ6Z",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"0975",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"GkFz",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"9EPn",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"LF8h",
		33
	],
	"./ion-spinner.entry.js": [
		"NY5D",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"3/Fq",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"e0Yx",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"VhUQ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"Qvlj",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"UTrk",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"5e/D",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"2XLE",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"w2GW",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "df5q";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "eKrY":
/*!***************************************************************************!*\
  !*** ./src/app/own-components/datos-novedad/datos-novedad.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRvcy1ub3ZlZGFkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "gjAW":
/*!**************************************************!*\
  !*** ./src/app/models/registro-gestion.model.ts ***!
  \**************************************************/
/*! exports provided: RegistroGestionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroGestionModel", function() { return RegistroGestionModel; });
var RegistroGestionModel = /** @class */ (function () {
    function RegistroGestionModel() {
    }
    return RegistroGestionModel;
}());



/***/ }),

/***/ "gkQz":
/*!*************************************************************************!*\
  !*** ./src/app/own-components/logo-empresa/logo-empresa.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvLWVtcHJlc2EuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "iVmT":
/*!***********************************************************************!*\
  !*** ./src/app/own-components/logo-empresa/logo-empresa.component.ts ***!
  \***********************************************************************/
/*! exports provided: LogoEmpresaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoEmpresaComponent", function() { return LogoEmpresaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_logo_empresa_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./logo-empresa.component.html */ "X4az");
/* harmony import */ var _logo_empresa_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo-empresa.component.scss */ "gkQz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var src_app_models_config_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/config.model */ "oRqo");
/* harmony import */ var src_app_services_configuracion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/configuracion.service */ "Hpqp");





// Modelos

// Servicios

var LogoEmpresaComponent = /** @class */ (function () {
    function LogoEmpresaComponent(platform, configuracionService) {
        this.platform = platform;
        this.configuracionService = configuracionService;
        this.config = new src_app_models_config_model__WEBPACK_IMPORTED_MODULE_5__["ConfigModel"]();
        this.logoEmpresaSrc = null;
    }
    LogoEmpresaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.config = _this.configuracionService.config;
        });
    };
    LogoEmpresaComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: src_app_services_configuracion_service__WEBPACK_IMPORTED_MODULE_6__["ConfiguracionService"] }
    ]; };
    LogoEmpresaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-logo-empresa',
            template: _raw_loader_logo_empresa_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_logo_empresa_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            src_app_services_configuracion_service__WEBPACK_IMPORTED_MODULE_6__["ConfiguracionService"]])
    ], LogoEmpresaComponent);
    return LogoEmpresaComponent;
}());



/***/ }),

/***/ "j8jx":
/*!**********************************************!*\
  !*** ./src/app/models/departamento-model.ts ***!
  \**********************************************/
/*! exports provided: DepartamentoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartamentoModel", function() { return DepartamentoModel; });
var DepartamentoModel = /** @class */ (function () {
    function DepartamentoModel(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    return DepartamentoModel;
}());



/***/ }),

/***/ "nzUR":
/*!*****************************************************************************!*\
  !*** ./src/app/own-components/datos-contrato/datos-contrato.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRvcy1jb250cmF0by5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "oRqo":
/*!****************************************!*\
  !*** ./src/app/models/config.model.ts ***!
  \****************************************/
/*! exports provided: ConfigModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModel", function() { return ConfigModel; });
var ConfigModel = /** @class */ (function () {
    function ConfigModel() {
        this.servidorIp = '';
        this.servidorPuerto = '';
        this.logoEmpresa = '';
        this.logoEmpresaUtilizable = '';
    }
    return ConfigModel;
}());



/***/ }),

/***/ "qDQK":
/*!*********************************************!*\
  !*** ./src/app/models/cuadre-caja.model.ts ***!
  \*********************************************/
/*! exports provided: CuadreCajaModel, CuadreCajaRequesModel, CuadreCajaResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuadreCajaModel", function() { return CuadreCajaModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuadreCajaRequesModel", function() { return CuadreCajaRequesModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuadreCajaResponseModel", function() { return CuadreCajaResponseModel; });
var CuadreCajaModel = /** @class */ (function () {
    function CuadreCajaModel() {
    }
    return CuadreCajaModel;
}());

var CuadreCajaRequesModel = /** @class */ (function () {
    function CuadreCajaRequesModel(usuario, fecha) {
        this.Fecha = fecha;
        this.Dato = usuario;
    }
    return CuadreCajaRequesModel;
}());

;
var CuadreCajaResponseModel = /** @class */ (function () {
    function CuadreCajaResponseModel() {
    }
    return CuadreCajaResponseModel;
}());

;


/***/ }),

/***/ "soxc":
/*!***************************************************************************!*\
  !*** ./src/app/own-components/beneficiarios/beneficiarios.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  display: flex;\n  flex-direction: column;\n  width: 100% !important;\n  margin: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxiZW5lZmljaWFyaW9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQUNKIiwiZmlsZSI6ImJlbmVmaWNpYXJpb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "tyzh":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/own-components/datos-novedad/datos-novedad.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-padding\">\r\n    <h5 class=\"semi-titulo\">Datos de la novedad</h5>\r\n</div>\r\n<ion-grid fixed>\r\n    <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\">Contrato</ion-col>\r\n        <ion-col size=\"4\">\r\n            <ion-text color=\"danger\">\r\n                <span>{{ gestion.Contrato }}</span>\r\n            </ion-text>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\">Titular</ion-col>\r\n        <ion-col size=\"4\">\r\n            <ion-text color=\"danger\">\r\n                <span>{{ gestion.Titular }}</span>\r\n            </ion-text>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\">\r\n            Novedad\r\n        </ion-col>\r\n        <ion-col size=\"8\">\r\n            <ion-text color=\"danger\">\r\n                <span>{{ gestion.NovedadDesc }}</span>\r\n            </ion-text>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\">Observaciones</ion-col>\r\n        <ion-col size=\"8\">\r\n            <ion-text color=\"danger\">\r\n                <span>{{ gestion.Observaciones }}</span>\r\n            </ion-text>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\">Cobrador</ion-col>\r\n        <ion-col size=\"8\">\r\n            <ion-text color=\"danger\">\r\n                <span>{{ gestion.IdCobrador }}</span>\r\n            </ion-text>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\">Usuario</ion-col>\r\n        <ion-col size=\"8\"><span class=\"ion-text-capitalize\">{{ gestion.Usuario }}</span>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\">Fecha Programada</ion-col>\r\n        <ion-col size=\"8\"><span>{{ gestion.Fechaprogramada | date }}</span></ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"12\">\r\n            <ion-button color=\"danger\" expand=\"block\" (click)=\"imprimir()\">\r\n                Imprimir\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ "uaSe":
/*!***************************************************************************************!*\
  !*** ./src/app/own-components/modal-confirmar-pago/modal-confirmar-pago.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ModalConfirmarPagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalConfirmarPagoComponent", function() { return ModalConfirmarPagoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_confirmar_pago_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-confirmar-pago.component.html */ "V42k");
/* harmony import */ var _modal_confirmar_pago_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-confirmar-pago.component.scss */ "/Zxc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_sesion_local_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/sesion-local.model */ "IKtr");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/sesion.service */ "PbBf");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");








var ModalConfirmarPagoComponent = /** @class */ (function () {
    function ModalConfirmarPagoComponent(platform, navParams, modalController, sesionService, network, toastController) {
        this.platform = platform;
        this.navParams = navParams;
        this.modalController = modalController;
        this.sesionService = sesionService;
        this.network = network;
        this.toastController = toastController;
        this.registroPago = null;
        this.sesionLocal = new src_app_models_sesion_local_model__WEBPACK_IMPORTED_MODULE_4__["SesionLocalModel"]();
    }
    ModalConfirmarPagoComponent.prototype.ionViewWillEnter = function () {
        this.registroPago = this.navParams.get('registroPago');
    };
    ModalConfirmarPagoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.sesionLocal = _this.sesionService.sesionLocal;
        });
    };
    ModalConfirmarPagoComponent.prototype.aceptar = function () {
        var _this = this;
        // watch network for a disconnection
        var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
            _this.mostrarToast('Pago No registrado No Hay Conexion A Internet');
            _this.modalController.dismiss(false);
        });
        // stop disconnect watch
        disconnectSubscription.unsubscribe();
        this.modalController.dismiss(true);
    };
    ModalConfirmarPagoComponent.prototype.cancelar = function () {
        this.modalController.dismiss(false);
    };
    ModalConfirmarPagoComponent.prototype.mostrarToast = function (texto) {
        this.toastController.create({
            message: texto,
            duration: 2000
        }).then(function (toast) {
            toast.present();
        });
    };
    ModalConfirmarPagoComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_6__["SesionService"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
    ]; };
    ModalConfirmarPagoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-modal-confirmar-pago',
            template: _raw_loader_modal_confirmar_pago_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_modal_confirmar_pago_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_6__["SesionService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
    ], ModalConfirmarPagoComponent);
    return ModalConfirmarPagoComponent;
}());



/***/ }),

/***/ "vE+j":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/own-components/datos-pago/datos-pago.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-padding\">\r\n    <h5 class=\"semi-titulo\">Datos del pago</h5>\r\n</div>\r\n<ion-grid fixed>\r\n    <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\">Contrato</ion-col>\r\n        <ion-col size=\"4\">\r\n            <ion-text color=\"danger\">\r\n                <span>{{ pago.Contrato }}</span>\r\n            </ion-text>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\">\r\n            Cuota\r\n        </ion-col>\r\n        <ion-col size=\"8\">\r\n            <ion-text color=\"danger\">\r\n                <span>{{ pago.Cuota | currency:'COP':'symbol-narrow':'4.2-2' }}</span>\r\n            </ion-text>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\">Cédula</ion-col>\r\n        <ion-col size=\"8\">\r\n            <ion-text color=\"danger\">\r\n                <span>{{ pago.Cedula }}</span>\r\n            </ion-text>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\">Nombre</ion-col>\r\n        <ion-col size=\"8\">\r\n            <ion-text color=\"danger\">\r\n                <span>{{ pago.Nombre }}</span>\r\n            </ion-text>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\">Fecha Pago</ion-col>\r\n        <ion-col size=\"8\"><span class=\"ion-text-capitalize\">{{ pago.FechaPago | date:'MMMM dd yyyy':'':'es-Co' }}</span>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\">Total</ion-col>\r\n        <ion-col size=\"8\">\r\n            <ion-text color=\"danger\">\r\n                <span>{{ pago.Total | currency:'COP':'symbol-narrow':'4.2-2' }}</span>\r\n            </ion-text>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\">Forma De Pago</ion-col>\r\n        <ion-col size=\"8\"><span>{{ pago.FormaPago }}</span></ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\">Pago Hasta</ion-col>\r\n        <ion-col size=\"8\"><span class=\"ion-text-capitalize\">{{ pago.PagoHasta | date:'MMMM dd yyyy':'':'es-Co' }}</span>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\">Nro Doc</ion-col>\r\n        <ion-col size=\"8\">\r\n            <ion-text color=\"danger\">\r\n                <span>{{ pago.NumeroDocumento }}</span>\r\n            </ion-text>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\">Usuario</ion-col>\r\n        <ion-col size=\"8\"><span>{{ pago.Usuario }}</span></ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\">Terminal</ion-col>\r\n        <ion-col size=\"8\"><span>{{ pago.Terminal }}</span></ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\">Sincronizado</ion-col>\r\n        <ion-col size=\"8\"><span>{{ pago.Sincronizar }}</span></ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\">Observaciones</ion-col>\r\n        <ion-col size=\"8\">\r\n            <ion-textarea readonly rows=\"4\" [value]=\"pago.Observaciones\">\r\n            </ion-textarea>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\">Nro. Referencia</ion-col>\r\n        <ion-col size=\"8\">\r\n            <ion-textarea readonly rows=\"4\" [value]=\"pago.NROREF\">\r\n            </ion-textarea>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"12\">\r\n            <ion-button color=\"danger\" expand=\"block\" (click)=\"imprimir()\">\r\n                Imprimir\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ "vRwA":
/*!****************************************!*\
  !*** ./src/app/models/ciudad-model.ts ***!
  \****************************************/
/*! exports provided: CiudadModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CiudadModel", function() { return CiudadModel; });
var CiudadModel = /** @class */ (function () {
    function CiudadModel(id, nombre, departamentoId) {
        this.id = id;
        this.nombre = nombre;
        this.departamentoId = departamentoId;
    }
    return CiudadModel;
}());



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_login_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.page */ "bP1B");




var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
    { path: 'login', component: _pages_login_login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"] },
    { path: 'config', loadChildren: './pages/config/config.module#ConfigPageModule' },
    { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
    { path: 'consultar-contrato', loadChildren: './pages/consultar-contrato/consultar-contrato.module#ConsultarContratoPageModule' },
    // tslint:disable-next-line: max-line-length
    { path: 'consultar-contrato2/:criterioBusqueda/:textoBusqueda', loadChildren: './pages/consultar-contrato2/consultar-contrato2.module#ConsultarContrato2PageModule' },
    { path: 'registrar-pago/:contrato', loadChildren: './pages/registrar-pago/registrar-pago.module#RegistrarPagoPageModule' },
    { path: 'registrar-pago2/:pago', loadChildren: './pages/registrar-pago2/registrar-pago2.module#RegistrarPago2PageModule' },
    { path: 'consultar-pago', loadChildren: './pages/consultar-pago/consultar-pago.module#ConsultarPagoPageModule' },
    { path: 'registro-gestion/:contrato', loadChildren: './pages/registro-gestion/registro-gestion.module#RegistroGestionPageModule' },
    { path: 'registro-gestion2/:gestion', loadChildren: './pages/registro-gestion2/registro-gestion2.module#RegistroGestion2PageModule' },
    { path: 'actualizar-datos/:contrato', loadChildren: './pages/actualizar-datos/actualizar-datos.module#ActualizarDatosPageModule' },
    { path: 'cuadre-caja', loadChildren: './pages/cuadre-caja/cuadre-caja.module#CuadreCajaPageModule' },
    { path: 'consultar-ruta', loadChildren: './pages/consultar-ruta/consultar-ruta.module#ConsultarRutaPageModule' },
    { path: 'lista-pagos', loadChildren: './pages/lista-pago/lista-pago.module#ListaPagoPageModule' },
    { path: 'geolocalizacion', loadChildren: './pages/geolocalizacion/geolocalizacion.module#GeolocalizacionPageModule' },
    { path: 'lista-pago', loadChildren: './pages/lista-pago/lista-pago.module#ListaPagoPageModule' },
    { path: 'pruebas', loadChildren: './pages/pruebas/pruebas.module#PruebasPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/actualizar-datos/actualizar-datos.module": [
		"/8/F",
		"default~pages-actualizar-datos-actualizar-datos-module~pages-consultar-contrato2-consultar-contrato2-module",
		"pages-actualizar-datos-actualizar-datos-module"
	],
	"./pages/config/config.module": [
		"t5pA",
		"pages-config-config-module"
	],
	"./pages/consultar-contrato/consultar-contrato.module": [
		"HQ9G",
		"pages-consultar-contrato-consultar-contrato-module"
	],
	"./pages/consultar-contrato2/consultar-contrato2.module": [
		"rd9s",
		"default~pages-actualizar-datos-actualizar-datos-module~pages-consultar-contrato2-consultar-contrato2-module",
		"pages-consultar-contrato2-consultar-contrato2-module"
	],
	"./pages/consultar-pago/consultar-pago.module": [
		"WNKF",
		"pages-consultar-pago-consultar-pago-module"
	],
	"./pages/consultar-ruta/consultar-ruta.module": [
		"oDmx",
		"pages-consultar-ruta-consultar-ruta-module"
	],
	"./pages/cuadre-caja/cuadre-caja.module": [
		"e7df",
		"default~pages-cuadre-caja-cuadre-caja-module~pages-lista-pago-lista-pago-module~pages-registrar-pago~352ba1bd",
		"pages-cuadre-caja-cuadre-caja-module"
	],
	"./pages/geolocalizacion/geolocalizacion.module": [
		"A1KY",
		"pages-geolocalizacion-geolocalizacion-module"
	],
	"./pages/home/home.module": [
		"99Un",
		"pages-home-home-module"
	],
	"./pages/lista-pago/lista-pago.module": [
		"rAHZ",
		"default~pages-cuadre-caja-cuadre-caja-module~pages-lista-pago-lista-pago-module~pages-registrar-pago~352ba1bd",
		"pages-lista-pago-lista-pago-module"
	],
	"./pages/menu/menu.module": [
		"+eMj",
		"pages-menu-menu-module"
	],
	"./pages/registrar-pago/registrar-pago.module": [
		"SMe6",
		"default~pages-cuadre-caja-cuadre-caja-module~pages-lista-pago-lista-pago-module~pages-registrar-pago~352ba1bd",
		"pages-registrar-pago-registrar-pago-module"
	],
	"./pages/registrar-pago2/registrar-pago2.module": [
		"MPfm",
		"pages-registrar-pago2-registrar-pago2-module"
	],
	"./pages/registro-gestion/registro-gestion.module": [
		"IOUn",
		"pages-registro-gestion-registro-gestion-module"
	],
	"./pages/registro-gestion2/registro-gestion2.module": [
		"UfyA",
		"pages-registro-gestion2-registro-gestion2-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "zn8P";
module.exports = webpackAsyncContext;

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map