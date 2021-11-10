(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cuadre-caja-cuadre-caja-module"],{

/***/ "AO7N":
/*!*******************************************************!*\
  !*** ./src/app/pages/cuadre-caja/cuadre-caja.page.ts ***!
  \*******************************************************/
/*! exports provided: CuadreCajaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuadreCajaPage", function() { return CuadreCajaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cuadre_caja_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cuadre-caja.page.html */ "VubJ");
/* harmony import */ var _cuadre_caja_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cuadre-caja.page.scss */ "bl85");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_cuadre_caja_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/cuadre-caja.model */ "qDQK");
/* harmony import */ var _services_pagos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/pagos.service */ "tDkB");
/* harmony import */ var src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/sesion.service */ "PbBf");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/print.service */ "Bhbv");
/* harmony import */ var _services_configuracion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/configuracion.service */ "Hpqp");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");












var CuadreCajaPage = /** @class */ (function () {
    function CuadreCajaPage(pagoservice, sesionService, toastController, print, loading, config, sesion, datePipe) {
        this.pagoservice = pagoservice;
        this.sesionService = sesionService;
        this.toastController = toastController;
        this.print = print;
        this.loading = loading;
        this.config = config;
        this.sesion = sesion;
        this.datePipe = datePipe;
        this.textoBusqueda = new Date();
        this.cuadreCaja = null;
        this.sesionLocal = null;
    }
    CuadreCajaPage.prototype.cambiofecha = function (event) {
        this.textoBusqueda = event.target.value;
    };
    CuadreCajaPage.prototype.consultarCuadre = function () {
        var _this = this;
        if (!this.textoBusqueda) {
            alert('Por favor ingresa un criterio de búsqueda');
            return;
        }
        this.sesionLocal = this.sesionService.sesionLocal;
        this.pagoservice.cuadreCaja(this.datePipe.transform(this.textoBusqueda, "yyyy-MM-dd"), this.sesionLocal.sesionUsuario.USERNAME)
            .then(function (cuadrecajaresponse) {
            var cuadreCaja = new _models_cuadre_caja_model__WEBPACK_IMPORTED_MODULE_4__["CuadreCajaModel"]();
            cuadreCaja.fecha = cuadrecajaresponse.FECHA;
            cuadreCaja.cantidadpagos = cuadrecajaresponse.CANTIDADPAGOS;
            cuadreCaja.valor = cuadrecajaresponse.VALORPAGOS;
            cuadreCaja.cantidadanulados = cuadrecajaresponse.CANTIDADANULADOS;
            cuadreCaja.cantidadnovedades = cuadrecajaresponse.CANTIDADNOVEDADES;
            _this.cuadreCaja = cuadreCaja;
        });
    };
    CuadreCajaPage.prototype.imprimir = function () {
        var _this = this;
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
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_ALIGN_LT;
                    printBody += _this.print.mapTextColumn('Fecha:', 'Cantidad Pagos:');
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    var newDate = new Date(_this.cuadreCaja.fecha);
                    var formattedDate = newDate.toLocaleDateString('es-ES', {
                        day: 'numeric', month: 'short', year: 'numeric'
                    }).replace('.', '');
                    printBody += _this.print.mapTextColumn(formattedDate, _this.cuadreCaja.cantidadpagos + '');
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += _this.print.mapTextColumn('Valor Pagos:', 'Cant. Anulados:');
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += _this.print.mapTextColumn(_this.print.formatMoney(_this.cuadreCaja.valor, 0, '.', ',') + '', _this.cuadreCaja.cantidadanulados + '');
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Cantidad Novedades:';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += _this.cuadreCaja.cantidadnovedades + '';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Fecha/Hora Impresion';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += moment__WEBPACK_IMPORTED_MODULE_10__().format('DD/MM/YYYY HH:mm:ss');
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Usuario';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += _this.sesion.sesionLocal.sesionUsuario.NOMBRES; // + ' ' + this.sesion.sesionLocal.sesionUsuario.APELLIDOS;
                    printBody += _this.print.PosCommand.LF;
                    printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.normailizeText(info.RESOLUCION);
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
    CuadreCajaPage.ctorParameters = function () { return [
        { type: _services_pagos_service__WEBPACK_IMPORTED_MODULE_5__["PagosService"] },
        { type: src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_6__["SesionService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
        { type: _services_print_service__WEBPACK_IMPORTED_MODULE_8__["PrintService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
        { type: _services_configuracion_service__WEBPACK_IMPORTED_MODULE_9__["ConfiguracionService"] },
        { type: src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_6__["SesionService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"] }
    ]; };
    CuadreCajaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-cuadre-caja',
            template: _raw_loader_cuadre_caja_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_cuadre_caja_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_pagos_service__WEBPACK_IMPORTED_MODULE_5__["PagosService"],
            src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_6__["SesionService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _services_print_service__WEBPACK_IMPORTED_MODULE_8__["PrintService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _services_configuracion_service__WEBPACK_IMPORTED_MODULE_9__["ConfiguracionService"],
            src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_6__["SesionService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]])
    ], CuadreCajaPage);
    return CuadreCajaPage;
}());



/***/ }),

/***/ "VubJ":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cuadre-caja/cuadre-caja.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Cuadre caja\"></app-header>\r\n<ion-content>\r\n    <div>\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">Criterio</ion-col>\r\n            <ion-col size=\"8\">\r\n                <ion-datetime displayFormat=\"YYYY MMM DD\" monthShortNames=\"Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre\"  max=\"2050-12-31\" value=\"{{ textoBusqueda | date:'yyyy-MM-dd'}}\" (ionChange)=\"cambiofecha($event)\" cancelText=\"Cancelar\"></ion-datetime>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-margin-top\">\r\n            <ion-col>\r\n                <ion-button color=\"danger\" expand=\"block\" (click)=\"consultarCuadre()\">\r\n                    Consultar Cuadre Caja\r\n                </ion-button>\r\n            </ion-col>\r\n            <ion-col *ngIf=\"cuadreCaja\">\r\n                <ion-button color=\"danger\" expand=\"block\" (click)=\"imprimir()\">\r\n                    Imprimir\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </div>\r\n    <div>\r\n        <ion-grid fixed *ngIf=\"cuadreCaja\">\r\n            <ion-row>\r\n                <ion-col size=\"5\">Fecha</ion-col>\r\n                <ion-col size=\"7\">{{ cuadreCaja.fecha | date }}</ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"5\">Cantidad Pagos</ion-col>\r\n                <ion-col size=\"7\">{{ cuadreCaja.cantidadpagos }}</ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"5\">Valor Pagos</ion-col>\r\n                <ion-col size=\"7\">{{ cuadreCaja.valor |  currency:\"COP\":true:\"1.2\" }}</ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"5\">Cantidad Anulados</ion-col>\r\n                <ion-col size=\"7\">{{ cuadreCaja.cantidadanulados }}</ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"5\">Cantidad Novedades</ion-col>\r\n                <ion-col size=\"7\">{{ cuadreCaja.cantidadnovedades }}</ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "bl85":
/*!*********************************************************!*\
  !*** ./src/app/pages/cuadre-caja/cuadre-caja.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdWFkcmUtY2FqYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "e7df":
/*!*********************************************************!*\
  !*** ./src/app/pages/cuadre-caja/cuadre-caja.module.ts ***!
  \*********************************************************/
/*! exports provided: CuadreCajaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuadreCajaPageModule", function() { return CuadreCajaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var _cuadre_caja_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cuadre-caja.page */ "AO7N");
/* harmony import */ var src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/own-components/own-components.module */ "9FvA");








var routes = [
    {
        path: '',
        component: _cuadre_caja_page__WEBPACK_IMPORTED_MODULE_6__["CuadreCajaPage"]
    }
];
var CuadreCajaPageModule = /** @class */ (function () {
    function CuadreCajaPageModule() {
    }
    CuadreCajaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__["OwnComponentsModule"]
            ],
            declarations: [_cuadre_caja_page__WEBPACK_IMPORTED_MODULE_6__["CuadreCajaPage"]]
        })
    ], CuadreCajaPageModule);
    return CuadreCajaPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cuadre-caja-cuadre-caja-module.js.map