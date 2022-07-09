(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lista-novedad-lista-novedad-module"],{

/***/ "4xos":
/*!*************************************************************!*\
  !*** ./src/app/pages/lista-novedad/lista-novedad.module.ts ***!
  \*************************************************************/
/*! exports provided: ListaNovedadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaNovedadPageModule", function() { return ListaNovedadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _lista_novedad_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista-novedad.page */ "uVU3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/own-components/own-components.module */ "9FvA");








var routes = [
    {
        path: '',
        component: _lista_novedad_page__WEBPACK_IMPORTED_MODULE_5__["ListaNovedadPage"]
    }
];
var ListaNovedadPageModule = /** @class */ (function () {
    function ListaNovedadPageModule() {
    }
    ListaNovedadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__["OwnComponentsModule"]
            ],
            declarations: [_lista_novedad_page__WEBPACK_IMPORTED_MODULE_5__["ListaNovedadPage"]]
        })
    ], ListaNovedadPageModule);
    return ListaNovedadPageModule;
}());



/***/ }),

/***/ "8XGP":
/*!*************************************************************!*\
  !*** ./src/app/pages/lista-novedad/lista-novedad.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YS1ub3ZlZGFkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "Ewej":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lista-novedad/lista-novedad.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>Lista Novedades</ion-title>\r\n    </ion-toolbar>\r\n</ion-header> -->\r\n<app-header titulo=\"Lista Novedades\"></app-header>\r\n<ion-content>\r\n    <div>\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">Criterio</ion-col>\r\n            <ion-col size=\"8\">\r\n                <ion-datetime displayFormat=\"YYYY MMM DD\" monthShortNames=\"Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre\" value=\"{{ textoBusqueda | date:'yyyy-MM-dd'}}\" (ionChange)=\"cambiofecha($event)\" cancelText=\"Cancelar\"></ion-datetime>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-margin-top\">\r\n            <ion-col>\r\n                <ion-button color=\"danger\" expand=\"block\" (click)=\"consultarLstNovedades()\">\r\n                    Consultar Lista Novedades\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </div>\r\n\r\n    <div>\r\n        <ion-grid>\r\n            <ion-row class=\"md5\" *ngFor=\"let novedad of novedades\">\r\n                <ion-card>\r\n                    <ion-card-content>\r\n                        {{novedad}}\r\n                    </ion-card-content>\r\n                </ion-card>\r\n                <!-- <ion-col>\r\n                <label *ngFor=\"let item of items\">\r\n            </ion-col> -->\r\n            </ion-row>\r\n        </ion-grid>\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "uVU3":
/*!***********************************************************!*\
  !*** ./src/app/pages/lista-novedad/lista-novedad.page.ts ***!
  \***********************************************************/
/*! exports provided: ListaNovedadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaNovedadPage", function() { return ListaNovedadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_novedad_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista-novedad.page.html */ "Ewej");
/* harmony import */ var _lista_novedad_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista-novedad.page.scss */ "8XGP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_pagos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/pagos.service */ "tDkB");
/* harmony import */ var src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/sesion.service */ "PbBf");







var ListaNovedadPage = /** @class */ (function () {
    function ListaNovedadPage(sesionService, pagoservice, datePipe) {
        this.sesionService = sesionService;
        this.pagoservice = pagoservice;
        this.datePipe = datePipe;
        this.textoBusqueda = new Date();
        this.sesionLocal = null;
    }
    ListaNovedadPage.prototype.ngOnInit = function () {
    };
    ListaNovedadPage.prototype.cambiofecha = function (event) {
        this.textoBusqueda = event.target.value;
    };
    ListaNovedadPage.prototype.consultarLstNovedades = function () {
        var _this = this;
        if (!this.textoBusqueda) {
            alert('Por favor ingresa un criterio de búsqueda');
            return;
        }
        this.sesionLocal = this.sesionService.sesionLocal;
        this.pagoservice.lstNovedades(this.datePipe.transform(this.textoBusqueda, "yyyy-MM-dd"), this.sesionLocal.sesionUsuario.USERNAME)
            .then(function (lsnovedades) {
            _this.novedades = lsnovedades;
        });
    };
    ListaNovedadPage.ctorParameters = function () { return [
        { type: src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_6__["SesionService"] },
        { type: src_app_services_pagos_service__WEBPACK_IMPORTED_MODULE_5__["PagosService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }
    ]; };
    ListaNovedadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-lista-novedad',
            template: _raw_loader_lista_novedad_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_lista_novedad_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_6__["SesionService"],
            src_app_services_pagos_service__WEBPACK_IMPORTED_MODULE_5__["PagosService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
    ], ListaNovedadPage);
    return ListaNovedadPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-lista-novedad-lista-novedad-module.js.map