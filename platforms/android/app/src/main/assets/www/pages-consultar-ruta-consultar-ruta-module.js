(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-consultar-ruta-consultar-ruta-module"],{

/***/ "bDQQ":
/*!***************************************************************!*\
  !*** ./src/app/pages/consultar-ruta/consultar-ruta.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25zdWx0YXItcnV0YS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "fmBR":
/*!*************************************************************!*\
  !*** ./src/app/pages/consultar-ruta/consultar-ruta.page.ts ***!
  \*************************************************************/
/*! exports provided: ConsultarRutaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarRutaPage", function() { return ConsultarRutaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_consultar_ruta_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./consultar-ruta.page.html */ "uM8y");
/* harmony import */ var _consultar_ruta_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consultar-ruta.page.scss */ "bDQQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_offline_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/offline.service */ "DFAf");
/* harmony import */ var src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/sesion.service */ "PbBf");







var ConsultarRutaPage = /** @class */ (function () {
    function ConsultarRutaPage(sesionService, ofline, offline, datePipe) {
        this.sesionService = sesionService;
        this.ofline = ofline;
        this.offline = offline;
        this.datePipe = datePipe;
        this.textoBusqueda = new Date();
        this.consultarRuta = null;
        this.sesionLocal = null;
        this.criterioBusqueda = 'Sn';
    }
    ConsultarRutaPage.prototype.ngOnInit = function () {
    };
    ConsultarRutaPage.prototype.cambiofecha = function (event) {
        this.textoBusqueda = event.target.value;
    };
    ConsultarRutaPage.prototype.consultar = function () {
        var _this = this;
        if (!this.textoBusqueda) {
            alert('Por favor ingresa un criterio de búsqueda');
            return;
        }
        if (!this.criterioBusqueda) {
            alert('Por favor seleccione el estado');
            return;
        }
        this.sesionLocal = this.sesionService.sesionLocal;
        this.offline.createDatabase().then(function (res) {
            _this.offline.getConsultarRutas(_this.datePipe.transform(_this.textoBusqueda, "yyyy-MM-dd"), _this.sesionLocal.sesionUsuario.IDCOBRADOR, _this.criterioBusqueda).then(function (res) {
                _this.rutas = res;
                console.log("las rutas son:***********", _this.rutas);
            });
        });
        /*  this.rutaservice.lstRutas(this.datePipe.transform(this.textoBusqueda,"yyyy-MM-dd"), this.sesionLocal.sesionUsuario.USERNAME)
                .then((lsrutas: string[]) => {
                   this.rutas = lsrutas;
               }); */
    };
    ConsultarRutaPage.ctorParameters = function () { return [
        { type: src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_6__["SesionService"] },
        { type: src_app_services_offline_service__WEBPACK_IMPORTED_MODULE_5__["OfflineService"] },
        { type: src_app_services_offline_service__WEBPACK_IMPORTED_MODULE_5__["OfflineService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }
    ]; };
    ConsultarRutaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-consultar-ruta',
            template: _raw_loader_consultar_ruta_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_consultar_ruta_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_6__["SesionService"],
            src_app_services_offline_service__WEBPACK_IMPORTED_MODULE_5__["OfflineService"],
            src_app_services_offline_service__WEBPACK_IMPORTED_MODULE_5__["OfflineService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
    ], ConsultarRutaPage);
    return ConsultarRutaPage;
}());



/***/ }),

/***/ "oDmx":
/*!***************************************************************!*\
  !*** ./src/app/pages/consultar-ruta/consultar-ruta.module.ts ***!
  \***************************************************************/
/*! exports provided: ConsultarRutaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarRutaPageModule", function() { return ConsultarRutaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/own-components/own-components.module */ "9FvA");
/* harmony import */ var _consultar_ruta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consultar-ruta.page */ "fmBR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








var routes = [
    {
        path: '',
        component: _consultar_ruta_page__WEBPACK_IMPORTED_MODULE_6__["ConsultarRutaPage"]
    }
];
var ConsultarRutaPageModule = /** @class */ (function () {
    function ConsultarRutaPageModule() {
    }
    ConsultarRutaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
                src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_5__["OwnComponentsModule"]
            ],
            declarations: [_consultar_ruta_page__WEBPACK_IMPORTED_MODULE_6__["ConsultarRutaPage"]]
        })
    ], ConsultarRutaPageModule);
    return ConsultarRutaPageModule;
}());



/***/ }),

/***/ "uM8y":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/consultar-ruta/consultar-ruta.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Consultar Ruta\"></app-header>\n<ion-content>\n    <div>\n        <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"4\">Fecha</ion-col>\n            <ion-col size=\"8\">\n                <ion-datetime displayFormat=\"YYYY MM DD\" value=\"{{ textoBusqueda | date:'yyyy-MM-dd'}}\" (ionChange)=\"cambiofecha($event)\" cancelText=\"Cancelar\"></ion-datetime>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"4\">Estado</ion-col>\n            <ion-col size=\"8\">\n                <ion-select #selectCriterio cancelText=\"Cancelar\" placeholder=\"Seleccione El Estado\" [value]=\"criterioBusqueda\" (ionChange)=\"criterioBusqueda = selectCriterio.value\">\n                    <ion-select-option value=\"Sn\">Sn</ion-select-option>\n                    <ion-select-option value=\"Pago\">Pago</ion-select-option>\n                    <ion-select-option value=\"Novedad\">Novedad</ion-select-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-margin-top\">\n            <ion-col>\n                <ion-button color=\"danger\" expand=\"block\" (click)=\"consultar()\">\n                    Consultar Ruta\n                </ion-button>\n            </ion-col>\n           \n        </ion-row>\n    </div>\n    <div>\n       <!--  <ion-grid>\n            <ion-row class=\"md5\" > -->\n                <ion-card *ngFor=\"let ruta of rutas\">\n                    <ion-card-header>\n                        <ion-card-title>  Contrato:  {{ruta.IDCONTRATO}}</ion-card-title>\n                      </ion-card-header>\n                    <ion-card-content>\n                       <ion-item text-wrap>Cedula:  {{ruta.CEDULA}}</ion-item>\n                       <ion-item text-wrap>Titular:  {{ruta.TITULAR}}</ion-item>\n                       <ion-item text-wrap>Direccion:  {{ruta.DIRECCION}}</ion-item>\n                       <ion-item text-wrap >Telefono:  {{ruta.TELEFONO}}</ion-item>\n                       <ion-item text-wrap>Pago Hasta:  {{ruta.PAGOHASTA | date :  \"yyyy-MM-dd\"}}</ion-item>\n                       <ion-item text-wrap >Estado: <b> {{ruta.ESTADO}}</b></ion-item>\n                    </ion-card-content>\n                </ion-card>\n                <!-- <ion-col>\n                <label *ngFor=\"let item of items\">\n            </ion-col> -->\n            <!-- </ion-row>\n        </ion-grid> -->\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-consultar-ruta-consultar-ruta-module.js.map