(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-consultar-contrato-consultar-contrato-module"],{

/***/ "HQ9G":
/*!***********************************************************************!*\
  !*** ./src/app/pages/consultar-contrato/consultar-contrato.module.ts ***!
  \***********************************************************************/
/*! exports provided: ConsultarContratoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarContratoPageModule", function() { return ConsultarContratoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _consultar_contrato_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consultar-contrato.page */ "PlFU");
/* harmony import */ var src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/own-components/own-components.module */ "9FvA");








var routes = [
    {
        path: '',
        component: _consultar_contrato_page__WEBPACK_IMPORTED_MODULE_6__["ConsultarContratoPage"]
    }
];
var ConsultarContratoPageModule = /** @class */ (function () {
    function ConsultarContratoPageModule() {
    }
    ConsultarContratoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__["OwnComponentsModule"]
            ],
            declarations: [_consultar_contrato_page__WEBPACK_IMPORTED_MODULE_6__["ConsultarContratoPage"]]
        })
    ], ConsultarContratoPageModule);
    return ConsultarContratoPageModule;
}());



/***/ }),

/***/ "PlFU":
/*!*********************************************************************!*\
  !*** ./src/app/pages/consultar-contrato/consultar-contrato.page.ts ***!
  \*********************************************************************/
/*! exports provided: ConsultarContratoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarContratoPage", function() { return ConsultarContratoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_consultar_contrato_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./consultar-contrato.page.html */ "ewXz");
/* harmony import */ var _consultar_contrato_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consultar-contrato.page.scss */ "rth0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





var ConsultarContratoPage = /** @class */ (function () {
    function ConsultarContratoPage(router) {
        this.router = router;
        this.criterioBusqueda = 'CEDULA';
        this.textoBusqueda = '';
        this.isOffline = false;
    }
    ConsultarContratoPage.prototype.ngOnInit = function () {
        this.isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;
    };
    ConsultarContratoPage.prototype.consultarContrato = function () {
        if (!this.criterioBusqueda) {
            alert('Por favor indique el tipo de búsqueda');
            return;
        }
        if (!this.textoBusqueda) {
            alert('Por favor ingresa un criterio de búsqueda');
            return;
        }
        this.router.navigate(['consultar-contrato2', this.criterioBusqueda, this.textoBusqueda]);
    };
    ConsultarContratoPage.prototype.listaPagos = function () {
        this.router.navigate(['lista-pagos']);
    };
    ConsultarContratoPage.prototype.listaNovedades = function () {
        this.router.navigate(['lista-novedades']);
    };
    ConsultarContratoPage.prototype.cuadrecaja = function () {
        this.router.navigate(['cuadre-caja']);
    };
    ConsultarContratoPage.prototype.consultarruta = function () {
        this.router.navigate(['consultar-ruta']);
    };
    ConsultarContratoPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ConsultarContratoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-consultar-contrato',
            template: _raw_loader_consultar_contrato_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_consultar_contrato_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ConsultarContratoPage);
    return ConsultarContratoPage;
}());



/***/ }),

/***/ "ewXz":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/consultar-contrato/consultar-contrato.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"consultar contrato\"></app-header>\r\n\r\n<ion-content>\r\n<div style=\"padding-left: 30px;padding-right: 30px;padding-top: 50px;\">\r\n    <ion-item style=\"border-radius: 20px;\" color=\"light\" class=\"ion-text-center\">        \r\n        <ion-icon name=\"search\"></ion-icon>\r\n        <ion-label text-wrap>Ingresa Los Datos A Consultar</ion-label>\r\n      </ion-item>\r\n    <ion-card style=\"padding-bottom: 20px;padding-top: 20px;\">\r\n       \r\n        <ion-item>\r\n            <ion-label color=\"primary\" position=\"floating\">Buscar Por</ion-label>\r\n               \r\n            <ion-select #selectCriterio cancelText=\"Cancelar\" placeholder=\"Seleccione Criterio Búsqueda\" [value]=\"criterioBusqueda\" (ionChange)=\"criterioBusqueda = selectCriterio.value\">\r\n                <ion-select-option value=\"CEDULA\">Cédula</ion-select-option>\r\n                <ion-select-option value=\"CONTRATO\">Contrato</ion-select-option>\r\n            </ion-select>\r\n\r\n           \r\n\r\n        </ion-item>\r\n        <ion-item style=\"padding-top: 20px;\">\r\n            <ion-label color=\"primary\" position=\"floating\">Dato A Consultar</ion-label>\r\n                         \r\n            <ion-input #valueCriterio placeholder=\"Contrato O Cedula\" [value]=\"textoBusqueda\" (ionChange)=\"textoBusqueda = valueCriterio.value\"></ion-input>\r\n\r\n        </ion-item>\r\n        <div style=\"padding-top: 20px;\">\r\n            <ion-button style=\"padding-left: 20px; padding-right: 20px;\" color=\"danger\" expand=\"block\" (click)=\"consultarContrato()\">\r\n                Consultar Contrato\r\n            </ion-button>\r\n        </div>\r\n\r\n      \r\n    </ion-card>\r\n</div>\r\n\r\n\r\n<div style=\"padding-left: 30px;padding-right: 30px;padding-top: 30px;\">\r\n    <ion-item style=\"border-radius: 20px;\" color=\"light\" class=\"ion-text-center\">        \r\n        <ion-icon name=\"search\"></ion-icon>\r\n        <ion-label text-wrap>Otras Operaciones</ion-label>\r\n      </ion-item>\r\n    <ion-card style=\"padding-bottom: 20px;padding-top: 20px;\">\r\n       \r\n        \r\n        <div >\r\n          \r\n            <ion-button style=\"padding-left: 20px; padding-right: 20px;\" color=\"danger\" expand=\"block\" (click)=\"cuadrecaja()\">\r\n                Cuadre Caja\r\n            </ion-button>\r\n        </div>\r\n\r\n        <div style=\"padding-top: 20px;\">\r\n          \r\n           \r\n            <ion-button style=\"padding-left: 20px; padding-right: 20px;\" *ngIf=\"!isOffline\" color=\"danger\" expand=\"block\" (click)=\"listaPagos()\">\r\n                Lista Pagos\r\n            </ion-button>\r\n        </div>\r\n\r\n       <!-- <div style=\"padding-top: 20px;\">\r\n          \r\n           \r\n            <ion-button style=\"padding-left: 20px; padding-right: 20px;\" *ngIf=\"!isOffline\" color=\"danger\" expand=\"block\" (click)=\"listaNovedades()\">\r\n                Novedades\r\n            </ion-button>\r\n        </div>-->\r\n\r\n      \r\n    </ion-card>\r\n</div>\r\n\r\n\r\n\r\n  \r\n</ion-content>\r\n<!-- <ion-footer>\r\n    <ion-toolbar>\r\n      <button ion-button>\r\n        <ion-icon name=\"search\"></ion-icon>\r\n        <ion-label text-wrap>Cuadre Caja</ion-label>\r\n\r\n        \r\n      </button>\r\n      <button ion-button>\r\n        <ion-icon name=\"search\"></ion-icon>\r\n        <ion-label text-wrap>Listado Pagos</ion-label>\r\n\r\n      </button>\r\n\r\n      <button ion-button>\r\n        <ion-icon name=\"search\"></ion-icon>\r\n        <ion-label text-wrap>Consulta Ruta</ion-label>\r\n\r\n      </button>\r\n     \r\n    </ion-toolbar>\r\n  </ion-footer> -->");

/***/ }),

/***/ "rth0":
/*!***********************************************************************!*\
  !*** ./src/app/pages/consultar-contrato/consultar-contrato.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25zdWx0YXItY29udHJhdG8ucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=pages-consultar-contrato-consultar-contrato-module.js.map