(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-consultar-pago-consultar-pago-module"],{

/***/ "WNKF":
/*!***************************************************************!*\
  !*** ./src/app/pages/consultar-pago/consultar-pago.module.ts ***!
  \***************************************************************/
/*! exports provided: ConsultarPagoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarPagoPageModule", function() { return ConsultarPagoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _consultar_pago_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consultar-pago.page */ "xr98");
/* harmony import */ var src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/own-components/own-components.module */ "9FvA");








var routes = [
    {
        path: '',
        component: _consultar_pago_page__WEBPACK_IMPORTED_MODULE_6__["ConsultarPagoPage"]
    }
];
var ConsultarPagoPageModule = /** @class */ (function () {
    function ConsultarPagoPageModule() {
    }
    ConsultarPagoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__["OwnComponentsModule"]
            ],
            declarations: [_consultar_pago_page__WEBPACK_IMPORTED_MODULE_6__["ConsultarPagoPage"]]
        })
    ], ConsultarPagoPageModule);
    return ConsultarPagoPageModule;
}());



/***/ }),

/***/ "XLhW":
/*!***************************************************************!*\
  !*** ./src/app/pages/consultar-pago/consultar-pago.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25zdWx0YXItcGFnby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "nEYQ":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/consultar-pago/consultar-pago.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"consultar pago\"></app-header>\r\n\r\n<ion-content>\r\n  <ion-grid fixed class=\"ion-margin-top\">\r\n    <ion-row>\r\n      <ion-col size=\"5\">Nro de Recibo</ion-col>\r\n      <ion-col size=\"7\">\r\n        <ion-input type=\"text\" placeholder=\"Numero de Recibo\"  [(ngModel)]=\"NroPago\"></ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-button color=\"danger\" (click)=\"consultar()\">\r\n          Consultar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-datos-pago [pago]=\"pago\"></app-datos-pago>\r\n  \r\n</ion-content>");

/***/ }),

/***/ "xr98":
/*!*************************************************************!*\
  !*** ./src/app/pages/consultar-pago/consultar-pago.page.ts ***!
  \*************************************************************/
/*! exports provided: ConsultarPagoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarPagoPage", function() { return ConsultarPagoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_consultar_pago_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./consultar-pago.page.html */ "nEYQ");
/* harmony import */ var _consultar_pago_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consultar-pago.page.scss */ "XLhW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_consulta_pago_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/consulta-pago.model */ "dNaG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _helpers_config_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/config.helper */ "5Ez/");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/config.model */ "oRqo");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_configuracion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/configuracion.service */ "Hpqp");
/* harmony import */ var src_app_services_offline_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/offline.service */ "DFAf");











var ConsultarPagoPage = /** @class */ (function () {
    function ConsultarPagoPage(http, alert, configuracionService, offline) {
        this.http = http;
        this.alert = alert;
        this.configuracionService = configuracionService;
        this.offline = offline;
        this.pago = null;
        this.config = new _models_config_model__WEBPACK_IMPORTED_MODULE_7__["ConfigModel"]();
    }
    ConsultarPagoPage.prototype.ngOnInit = function () {
        this.NroPago = "";
        var pago = new src_app_models_consulta_pago_model__WEBPACK_IMPORTED_MODULE_4__["ConsultaPagoModel"]();
        // pago.Contrato = 'IND485488';
        // pago.Cuota = 18560;
        // pago.Cedula = '2255448545';
        // pago.Nombre = 'Pepita Jimenez';
        // pago.FechaPago = 'Abril 21 2019';
        // pago.Total = 60220;
        // pago.PagoHasta = 'Julio 30 2019';
        // pago.NumeroDocumento = 'RC45488888';
        // pago.Usuario = 'holausuario';
        // pago.Terminal = 'kaskdnaudquwiu912';
        // pago.Observaciones = 'Un comentario de \n prueba que se hizo al realizar el pago';
        this.pago = pago;
    };
    ConsultarPagoPage.prototype.consultar = function () {
        var _this = this;
        this.statusOffline = localStorage.getItem("offlineMode") === "true" ? true : false;
        console.log("el estado es ", this.statusOffline);
        if (this.statusOffline) {
            console.log("entro 1 ");
            this.offline.createDatabase().then(function (res) {
                console.log("entro 2 ");
                _this.offline.getConsultarPagos(_this.NroPago).then(function (resPago) {
                    console.log("entro 3 ", resPago, " el contrato es", resPago[0].IDCONTRATO);
                    _this.pago.Contrato = resPago[0].IDCONTRATO;
                    _this.pago.Cuota = resPago[0].CUOTAMENSUAL;
                    _this.pago.Cedula = resPago[0].IDPERSONA;
                    _this.pago.Nombre = resPago[0].TITULAR;
                    _this.pago.FechaPago = resPago[0].FECHAPAGOR;
                    _this.pago.Total = resPago[0].VALOR - resPago[0].DESCUENTO;
                    _this.pago.Sincronizar = resPago[0].SINCRONIZAR;
                    _this.pago.PagoHasta = resPago[0].PagoHasta;
                    _this.pago.PagoDesde = resPago[0].PagoDesde;
                    _this.pago.NumeroDocumento = resPago[0].NumeroDocumento;
                    _this.pago.Usuario = resPago[0].USUARIO;
                    _this.pago.Terminal = resPago[0].MAQUINA;
                    _this.pago.Observaciones = resPago[0].OBSERVACIONES;
                    _this.pago.Concepto = resPago[0].Observaciones;
                    _this.pago.NROREF = resPago[0].NROREF;
                    _this.pago.PVisita = null;
                    _this.pago.Anulado = resPago[0].Anulado;
                    // this.pago.ValorLetras = resPago[0].ValorLetras;
                    _this.pago.Departamento = resPago[0].Departamento;
                    _this.pago.Ciudad = resPago[0].Ciudad;
                    //  this.pago.Vdesde ='';
                    _this.pago.VlrCto = resPago[0].CUOTAMENSUAL;
                    //  this.pago.Vhasta = '';
                    _this.pago.VlrDctoPago = resPago[0].DESCUENTO;
                    _this.pago.VlrIva = 0;
                    // this.pago.VlrSaldo = 0;
                    _this.pago.FormaPago = resPago[0].FORMAPAGO;
                    _this.pago.NROREF = resPago[0].NROREF;
                    console.log("la forma de pago es " + _this.pago.FormaPago);
                });
            });
        }
        else {
            console.log("no entro 1 ");
            var configHelper = new _helpers_config_helper__WEBPACK_IMPORTED_MODULE_6__["ConfigHelper"](this.configuracionService.config);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                    "Content-Type": "application/json",
                }),
            };
            this.http
                .post(configHelper.getApiUrl() + "/pago/searchpago?NroPago=" + this.NroPago, {}, httpOptions)
                .subscribe(function (res) {
                _this.pago.Contrato = res.Contrato;
                _this.pago.Cuota = res.Cuota;
                _this.pago.Cedula = res.Cedula;
                _this.pago.Nombre = res.Nombre;
                _this.pago.FechaPago = res.FechaPago;
                _this.pago.Total = res.Total;
                if (res.PagoHasta !== null) {
                    _this.pago.PagoHasta = res.PagoHasta;
                    console.log("el pago consulta hasta es " + _this.pago.PagoHasta);
                }
                else {
                    _this.pago.PagoHasta = null;
                }
                if (res.PagoDesde !== null) {
                    _this.pago.PagoDesde = res.PagoDesde;
                }
                else {
                    _this.pago.PagoDesde = null;
                }
                _this.pago.NumeroDocumento = res.NumeroDocumento;
                _this.pago.Sincronizar = 1;
                _this.pago.Usuario = res.Usuario;
                _this.pago.Terminal = res.Terminal;
                _this.pago.Observaciones = res.Observaciones;
                _this.pago.Concepto = res.Concepto;
                if (res.PVisita !== null) {
                    _this.pago.PVisita = res.PVisita;
                }
                else {
                    _this.pago.PVisita = null;
                }
                _this.pago.Anulado = res.Anulado;
                _this.pago.ValorLetras = res.Valorenletras;
                _this.pago.Departamento = res.Departamento;
                _this.pago.Ciudad = res.Municipio;
                _this.pago.Vdesde = res.Vdesde;
                _this.pago.VlrCto = res.VlrCto;
                _this.pago.Vhasta = res.Vhasta;
                _this.pago.VlrDctoPago = res.VlrDctoPago;
                _this.pago.VlrIva = res.VlrIva;
                _this.pago.VlrSaldo = res.VlrSaldo;
                _this.pago.FormaPago = res.FormaPago;
                _this.pago.NROREF = res.NROREF;
                console.log("la forma de pago es " + _this.pago.FormaPago);
            }, function (err) {
                _this.alert
                    .create({
                    header: "Error",
                    message: err.message,
                    buttons: ["Ok"],
                })
                    .then(function (obj) {
                    obj.present();
                });
            });
        }
    };
    ConsultarPagoPage.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
        { type: _services_configuracion_service__WEBPACK_IMPORTED_MODULE_9__["ConfiguracionService"] },
        { type: src_app_services_offline_service__WEBPACK_IMPORTED_MODULE_10__["OfflineService"] }
    ]; };
    ConsultarPagoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-consultar-pago",
            template: _raw_loader_consultar_pago_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_consultar_pago_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
            _services_configuracion_service__WEBPACK_IMPORTED_MODULE_9__["ConfiguracionService"],
            src_app_services_offline_service__WEBPACK_IMPORTED_MODULE_10__["OfflineService"]])
    ], ConsultarPagoPage);
    return ConsultarPagoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-consultar-pago-consultar-pago-module.js.map