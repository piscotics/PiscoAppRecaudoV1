(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registrar-pago2-registrar-pago2-module"],{

/***/ "BGfF":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registrar-pago2/registrar-pago2.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"registrar pago 2\"></app-header>\r\n\r\n<ion-content>\r\n    <app-datos-pago [pago]=\"pago\" *ngIf=\"pago\"></app-datos-pago>\r\n</ion-content>");

/***/ }),

/***/ "MPfm":
/*!*****************************************************************!*\
  !*** ./src/app/pages/registrar-pago2/registrar-pago2.module.ts ***!
  \*****************************************************************/
/*! exports provided: RegistrarPago2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarPago2PageModule", function() { return RegistrarPago2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _registrar_pago2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registrar-pago2.page */ "aWp8");
/* harmony import */ var src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/own-components/own-components.module */ "9FvA");








var routes = [
    {
        path: '',
        component: _registrar_pago2_page__WEBPACK_IMPORTED_MODULE_6__["RegistrarPago2Page"]
    }
];
var RegistrarPago2PageModule = /** @class */ (function () {
    function RegistrarPago2PageModule() {
    }
    RegistrarPago2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__["OwnComponentsModule"]
            ],
            declarations: [_registrar_pago2_page__WEBPACK_IMPORTED_MODULE_6__["RegistrarPago2Page"]]
        })
    ], RegistrarPago2PageModule);
    return RegistrarPago2PageModule;
}());



/***/ }),

/***/ "aWp8":
/*!***************************************************************!*\
  !*** ./src/app/pages/registrar-pago2/registrar-pago2.page.ts ***!
  \***************************************************************/
/*! exports provided: RegistrarPago2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarPago2Page", function() { return RegistrarPago2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registrar_pago2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registrar-pago2.page.html */ "BGfF");
/* harmony import */ var _registrar_pago2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registrar-pago2.page.scss */ "ak8j");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





var RegistrarPago2Page = /** @class */ (function () {
    function RegistrarPago2Page(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.pago = null;
    }
    RegistrarPago2Page.prototype.ngOnInit = function () {
        var pago = this.activatedRoute.snapshot.paramMap.get('pago');
        if (pago) {
            this.pago = JSON.parse(pago);
        }
    };
    RegistrarPago2Page.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    RegistrarPago2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-registrar-pago2',
            template: _raw_loader_registrar_pago2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_registrar_pago2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RegistrarPago2Page);
    return RegistrarPago2Page;
}());



/***/ }),

/***/ "ak8j":
/*!*****************************************************************!*\
  !*** ./src/app/pages/registrar-pago2/registrar-pago2.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyYXItcGFnbzIucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=pages-registrar-pago2-registrar-pago2-module.js.map