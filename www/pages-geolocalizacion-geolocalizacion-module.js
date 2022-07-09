(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-geolocalizacion-geolocalizacion-module"],{

/***/ "A1KY":
/*!*****************************************************************!*\
  !*** ./src/app/pages/geolocalizacion/geolocalizacion.module.ts ***!
  \*****************************************************************/
/*! exports provided: GeolocalizacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocalizacionPageModule", function() { return GeolocalizacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _geolocalizacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geolocalizacion.page */ "xrLi");
/* harmony import */ var src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/own-components/own-components.module */ "9FvA");








var routes = [
    {
        path: '',
        component: _geolocalizacion_page__WEBPACK_IMPORTED_MODULE_6__["GeolocalizacionPage"]
    }
];
var GeolocalizacionPageModule = /** @class */ (function () {
    function GeolocalizacionPageModule() {
    }
    GeolocalizacionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__["OwnComponentsModule"]
            ],
            declarations: [_geolocalizacion_page__WEBPACK_IMPORTED_MODULE_6__["GeolocalizacionPage"]]
        })
    ], GeolocalizacionPageModule);
    return GeolocalizacionPageModule;
}());



/***/ }),

/***/ "KS9a":
/*!*****************************************************************!*\
  !*** ./src/app/pages/geolocalizacion/geolocalizacion.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW9sb2NhbGl6YWNpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "xrLi":
/*!***************************************************************!*\
  !*** ./src/app/pages/geolocalizacion/geolocalizacion.page.ts ***!
  \***************************************************************/
/*! exports provided: GeolocalizacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocalizacionPage", function() { return GeolocalizacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_geolocalizacion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./geolocalizacion.page.html */ "yTE5");
/* harmony import */ var _geolocalizacion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geolocalizacion.page.scss */ "KS9a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var GeolocalizacionPage = /** @class */ (function () {
    function GeolocalizacionPage() {
    }
    GeolocalizacionPage.prototype.ngOnInit = function () {
    };
    GeolocalizacionPage.ctorParameters = function () { return []; };
    GeolocalizacionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-geolocalizacion',
            template: _raw_loader_geolocalizacion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_geolocalizacion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], GeolocalizacionPage);
    return GeolocalizacionPage;
}());



/***/ }),

/***/ "yTE5":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/geolocalizacion/geolocalizacion.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"geolocalización\"></app-header>\r\n\r\n<ion-content>\r\n  geolocalizacion\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=pages-geolocalizacion-geolocalizacion-module.js.map