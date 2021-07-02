(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "/rnz":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/own-components/own-components.module */ "9FvA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "hsj+");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_1__["OwnComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "eUf4":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Home\"></app-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n    <h3 *ngIf=\"sesionLocal.sesionIniciada\">Bienvenido {{ sesionLocal.sesionUsuario.NOMBRES }}</h3>\r\n    <!-- <h2>Haga click en los botones para ir a las respectivas pantallas</h2>\r\n  <ion-list>\r\n    <ion-item button routerLink=\"/config\">\r\n      <ion-label>Configuración</ion-label>\r\n    </ion-item>\r\n    <ion-item button routerLink=\"/login\">\r\n      <ion-label>Login</ion-label>\r\n    </ion-item>\r\n    <ion-item button routerLink=\"/\">\r\n      <ion-label>Menú</ion-label>\r\n    </ion-item>\r\n    <ion-item button routerLink=\"/consultar-contrato\">\r\n      <ion-label>Consultar contrato</ion-label>\r\n    </ion-item>\r\n    <ion-item button routerLink=\"/registrar-pago\">\r\n      <ion-label>Registrar Pago</ion-label>\r\n    </ion-item>\r\n    <ion-item button routerLink=\"/registrar-pago2\">\r\n      <ion-label>Registrar Pago 2</ion-label>\r\n    </ion-item>\r\n    <ion-item button routerLink=\"/consultar-pago\">\r\n      <ion-label>Consultar Pago</ion-label>\r\n    </ion-item>\r\n    <ion-item button routerLink=\"/registro-gestion\">\r\n      <ion-label>Registro Gestión</ion-label>\r\n    </ion-item>\r\n    <ion-item button routerLink=\"/registro-gestion2\">\r\n      <ion-label>Registro Gestión 2</ion-label>\r\n    </ion-item>\r\n    <ion-item button routerLink=\"/actualizar-datos\">\r\n      <ion-label>Actualizar datos</ion-label>\r\n    </ion-item>\r\n    <ion-item button routerLink=\"/cuadre-caja\">\r\n      <ion-label>Cuadre Caja</ion-label>\r\n    </ion-item>\r\n    <ion-item button routerLink=\"/geolocalizacion\">\r\n      <ion-label>Geolocalización</ion-label>\r\n    </ion-item>\r\n  </ion-list> -->\r\n</ion-content>");

/***/ }),

/***/ "hsj+":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "eUf4");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "/rnz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var src_app_models_sesion_local_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/sesion-local.model */ "IKtr");
/* harmony import */ var src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/sesion.service */ "PbBf");





// Modelos

// Servicios

var HomePage = /** @class */ (function () {
    function HomePage(platform, sesionService) {
        var _this = this;
        this.platform = platform;
        this.sesionService = sesionService;
        this.sesionLocal = new src_app_models_sesion_local_model__WEBPACK_IMPORTED_MODULE_5__["SesionLocalModel"]();
        this.platform.ready().then(function () {
            _this.sesionLocal = _this.sesionService.sesionLocal;
        });
    }
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_6__["SesionService"] }
    ]; };
    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_6__["SesionService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map