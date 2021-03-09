(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registro-gestion2-registro-gestion2-module"],{

/***/ "UfyA":
/*!*********************************************************************!*\
  !*** ./src/app/pages/registro-gestion2/registro-gestion2.module.ts ***!
  \*********************************************************************/
/*! exports provided: RegistroGestion2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroGestion2PageModule", function() { return RegistroGestion2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _registro_gestion2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro-gestion2.page */ "Y3uj");
/* harmony import */ var src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/own-components/own-components.module */ "9FvA");








var routes = [
    {
        path: '',
        component: _registro_gestion2_page__WEBPACK_IMPORTED_MODULE_6__["RegistroGestion2Page"]
    }
];
var RegistroGestion2PageModule = /** @class */ (function () {
    function RegistroGestion2PageModule() {
    }
    RegistroGestion2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__["OwnComponentsModule"]
            ],
            declarations: [_registro_gestion2_page__WEBPACK_IMPORTED_MODULE_6__["RegistroGestion2Page"]]
        })
    ], RegistroGestion2PageModule);
    return RegistroGestion2PageModule;
}());



/***/ }),

/***/ "Y3uj":
/*!*******************************************************************!*\
  !*** ./src/app/pages/registro-gestion2/registro-gestion2.page.ts ***!
  \*******************************************************************/
/*! exports provided: RegistroGestion2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroGestion2Page", function() { return RegistroGestion2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registro_gestion2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registro-gestion2.page.html */ "uhgc");
/* harmony import */ var _registro_gestion2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registro-gestion2.page.scss */ "xR0M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





var RegistroGestion2Page = /** @class */ (function () {
    function RegistroGestion2Page(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.gestion = null;
    }
    RegistroGestion2Page.prototype.ngOnInit = function () {
        var gestion = this.activatedRoute.snapshot.paramMap.get('gestion');
        if (gestion) {
            this.gestion = JSON.parse(gestion);
        }
    };
    RegistroGestion2Page.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    RegistroGestion2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-registro-gestion2',
            template: _raw_loader_registro_gestion2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_registro_gestion2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], RegistroGestion2Page);
    return RegistroGestion2Page;
}());



/***/ }),

/***/ "uhgc":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro-gestion2/registro-gestion2.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"registrar novedad 2\"></app-header>\r\n\r\n<ion-content>\r\n    <app-datos-novedad [gestion]=\"gestion\" *ngIf=\"gestion\"></app-datos-novedad>\r\n</ion-content>");

/***/ }),

/***/ "xR0M":
/*!*********************************************************************!*\
  !*** ./src/app/pages/registro-gestion2/registro-gestion2.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Ryby1nZXN0aW9uMi5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-registro-gestion2-registro-gestion2-module.js.map