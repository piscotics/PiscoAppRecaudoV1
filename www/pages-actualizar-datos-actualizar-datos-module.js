(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-actualizar-datos-actualizar-datos-module"],{

/***/ "/8/F":
/*!*******************************************************************!*\
  !*** ./src/app/pages/actualizar-datos/actualizar-datos.module.ts ***!
  \*******************************************************************/
/*! exports provided: ActualizarDatosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualizarDatosPageModule", function() { return ActualizarDatosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _actualizar_datos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actualizar-datos.page */ "IveY");
/* harmony import */ var src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/own-components/own-components.module */ "9FvA");








var routes = [
    {
        path: '',
        component: _actualizar_datos_page__WEBPACK_IMPORTED_MODULE_6__["ActualizarDatosPage"]
    }
];
var ActualizarDatosPageModule = /** @class */ (function () {
    function ActualizarDatosPageModule() {
    }
    ActualizarDatosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__["OwnComponentsModule"]
            ],
            declarations: [_actualizar_datos_page__WEBPACK_IMPORTED_MODULE_6__["ActualizarDatosPage"]],
            entryComponents: [_actualizar_datos_page__WEBPACK_IMPORTED_MODULE_6__["ActualizarDatosPage"]]
        })
    ], ActualizarDatosPageModule);
    return ActualizarDatosPageModule;
}());



/***/ }),

/***/ "IveY":
/*!*****************************************************************!*\
  !*** ./src/app/pages/actualizar-datos/actualizar-datos.page.ts ***!
  \*****************************************************************/
/*! exports provided: ActualizarDatosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualizarDatosPage", function() { return ActualizarDatosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_actualizar_datos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./actualizar-datos.page.html */ "WUG4");
/* harmony import */ var _actualizar_datos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actualizar-datos.page.scss */ "PK/N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_enums_modo_visualizar_contrato_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/enums/modo-visualizar-contrato.enum */ "7Ihc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_contrato_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/contrato.service */ "YjMO");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _models_contrato_update_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/contrato-update-model */ "iapu");
/* harmony import */ var _services_sesion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/sesion.service */ "PbBf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











var ActualizarDatosPage = /** @class */ (function () {
    function ActualizarDatosPage(activatedRoute, contratoservice, alertController, sesion, router) {
        this.activatedRoute = activatedRoute;
        this.contratoservice = contratoservice;
        this.alertController = alertController;
        this.sesion = sesion;
        this.router = router;
        this.ctr = null;
        this.modoVisualizarContrato = src_app_enums_modo_visualizar_contrato_enum__WEBPACK_IMPORTED_MODULE_4__["ModoVisualizarContratoEnum"].MODO_CONCISO;
        this.contrato = null;
        this.sesionLocal = null;
        this.dispatchOrderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroup"]({
            'Dpto_Principal': new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required)
        });
    }
    ActualizarDatosPage.prototype.ngOnInit = function () {
        var _this = this;
        var contrato = this.activatedRoute.snapshot.paramMap.get('contrato');
        this.contrato = new _models_contrato_update_model__WEBPACK_IMPORTED_MODULE_8__["ContratoUpdateModel"]();
        if (contrato) {
            this.ctr = JSON.parse(contrato);
            this.contrato.contrato = this.ctr.contrato;
            this.contrato.cuota = this.ctr.cuota;
            this.contrato.fehaAfiliacion = this.ctr.fehaAfiliacion;
            this.contrato.pagoHasta = this.ctr.pagoHasta;
            this.contrato.estado = this.ctr.estado;
            this.contrato.plan = this.ctr.plan;
            this.contrato.cedula = this.ctr.cedula;
            this.contrato.nombre = this.ctr.nombre;
            this.departamentoSeleccionado = this.ctr.departamento;
            this.contrato.departamento = this.ctr.departamento;
            this.contrato.ciudad = this.ctr.ciudad;
            this.contrato.direccion = this.ctr.direccion;
            this.contrato.direccionCobro = this.ctr.direccionCobro;
            this.contrato.telefono = this.ctr.telefono;
            this.contrato.movil = this.ctr.movil;
            this.contrato.email = this.ctr.email;
            this.contrato.barrio = this.ctr.barrio;
            this.contrato.barriocobro = this.ctr.barriocobro;
            this.contrato.departamentocobro = this.ctr.departamentocobro;
            this.contrato.ciudadcobro = this.ctr.ciudadcobro;
            this.contrato.formaPago = this.ctr.formaPago;
        }
        this.contratoservice.cargarDepartamentos().then(function (departamentos) {
            _this.departamento = departamentos;
            if (_this.contrato.departamento !== '' && _this.contrato.departamento !== undefined) {
                _this.contrato.departamento = _this.ctr.departamento;
                _this.nvoDpto = _this.contrato.departamento;
                _this.contratoservice.cargarMunicipios(_this.contrato.departamento).then(function (municipios) {
                    _this.municipio = municipios;
                    _this.contrato.ciudad = _this.ctr.ciudad;
                    _this.nvoCiudad = _this.contrato.ciudad;
                });
            }
            if (_this.contrato.departamentocobro !== '' && _this.contrato.departamentocobro !== undefined) {
                _this.contrato.departamentocobro = _this.ctr.departamentocobro;
                _this.nvoDptoCobro = _this.contrato.departamentocobro;
                _this.contratoservice.cargarMunicipios(_this.contrato.departamentocobro).then(function (municipios) {
                    _this.municipiocobro = municipios;
                    _this.contrato.ciudadcobro = _this.ctr.ciudadcobro;
                    _this.nvoCiudadCobro = _this.contrato.ciudadcobro;
                });
            }
        });
    };
    ActualizarDatosPage.prototype.ngAfterContentInit = function () {
        console.log('ngAfterContentInit - wrapper', this.wrapper);
        console.log("el dpt a seleccionar es: " + localStorage.getItem('Dpto_Principal'));
        this.dispatchOrderForm.get('Dpto_Principal').setValue(localStorage.getItem('Dpto_Principal'));
    };
    ActualizarDatosPage.prototype.ngAfterViewInit = function () {
        console.log('ngAfterViewInit - wrapper', this.wrapper);
        console.log("el dpt a seleccionar es: " + localStorage.getItem('Dpto_Principal'));
        this.dispatchOrderForm.get('Dpto_Principal').setValue(localStorage.getItem('Dpto_Principal'));
    };
    ActualizarDatosPage.prototype.actualizardpto = function (event) {
        var _this = this;
        console.log(event);
        this.contrato.departamento = event.target.value;
        this.contratoservice.cargarMunicipios(this.contrato.departamento).then(function (municipios) {
            _this.municipio = municipios;
        });
    };
    ActualizarDatosPage.prototype.actualizardptocobro = function (event) {
        var _this = this;
        this.contrato.departamentocobro = event.target.value;
        this.contratoservice.cargarMunicipios(this.contrato.departamentocobro).then(function (municipios) {
            _this.municipiocobro = municipios;
        });
    };
    ActualizarDatosPage.prototype.actualizarmuni = function (event) {
        this.contrato.ciudad = event.target.value;
    };
    ActualizarDatosPage.prototype.actualizarmunicobro = function (event) {
        this.contrato.ciudadcobro = event.target.value;
    };
    ActualizarDatosPage.prototype.emailvalidate = function (event) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (event.target.value !== undefined && event.target.value !== '') {
            if (!EMAIL_REGEXP.test(event.target.value)) {
                this.mailvalidate = true;
            }
            else {
                this.mailvalidate = false;
            }
        }
    };
    ActualizarDatosPage.prototype.guardar = function () {
        var _this = this;
        this.sesionLocal = this.sesion.sesionLocal;
        this.contratoservice.prepararRegistroContrato(this.contrato).then(function (registro) {
            registro.usuario = _this.sesionLocal.sesionUsuario.USERNAME;
            _this.contratoservice.actualizarContrato(registro)
                .then(function () {
                _this.contrato = registro;
            });
        });
    };
    ActualizarDatosPage.prototype.mostrarAlertSimple = function (titulo, texto) {
        this.alertController.create({
            header: titulo,
            message: texto,
            buttons: [{
                    role: 'cancel',
                    text: 'Ok'
                }]
        }).then(function (myAlert) {
            myAlert.present();
        });
    };
    ActualizarDatosPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _services_contrato_service__WEBPACK_IMPORTED_MODULE_6__["ContratoService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
        { type: _services_sesion_service__WEBPACK_IMPORTED_MODULE_9__["SesionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    ActualizarDatosPage.propDecorators = {
        wrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['wrapper',] }]
    };
    ActualizarDatosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-actualizar-datos',
            template: _raw_loader_actualizar_datos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_actualizar_datos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_contrato_service__WEBPACK_IMPORTED_MODULE_6__["ContratoService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _services_sesion_service__WEBPACK_IMPORTED_MODULE_9__["SesionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ActualizarDatosPage);
    return ActualizarDatosPage;
}());



/***/ }),

/***/ "PK/N":
/*!*******************************************************************!*\
  !*** ./src/app/pages/actualizar-datos/actualizar-datos.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3R1YWxpemFyLWRhdG9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "WUG4":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/actualizar-datos/actualizar-datos.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"actualizar datos\"></app-header>\r\n\r\n<ion-content>\r\n    <form [formGroup]=\"dispatchOrderForm\" novalidate>\r\n    <app-datos-contrato [contrato]=\"contrato\" [modo]=\"modoVisualizarContrato\"></app-datos-contrato>\r\n\r\n\r\n    <div class=\"ion-padding\">\r\n        <h5 class=\"semi-titulo\">Datos Para Actualizar</h5>\r\n    </div>\r\n    <ion-grid fixed>\r\n\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">Telefono</ion-col>\r\n            <ion-col size=\"8\">\r\n                <ion-input #telefonoInput rows=\"4\" maxlength=\"10\" placeholder=\"Ingrese Telefono\" [value]=\"contrato.telefono\" (ionChange)=\"contrato.telefono = telefonoInput.value\">\r\n                </ion-input>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">Celular</ion-col>\r\n            <ion-col size=\"8\">\r\n                <ion-input #movilInput rows=\"4\" maxlength=\"10\" placeholder=\"Ingrese Celular\" [value]=\"contrato.movil\" (ionChange)=\"contrato.movil = movilInput.value\">\r\n                </ion-input>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">Email</ion-col>\r\n            <ion-col size=\"8\">\r\n                <ion-input #emailInput ngControl=\"email\" rows=\"4\" placeholder=\"Ingresa Email valido\" [value]=\"contrato.email\" (ionChange)=\"contrato.email = emailInput.value\" (focusout)=\"emailvalidate($event)\" type=\"email\"></ion-input>\r\n            </ion-col>\r\n            <ion-col color=\"danger\" expand=\"block\" size=\"12\">\r\n                <ion-text color=\"danger\">\r\n                    <span *ngIf=\"mailvalidate\">Email Es Incorrecto!</span>\r\n                </ion-text>\r\n            </ion-col>\r\n\r\n\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">Departamento</ion-col>\r\n            <ion-col size=\"8\">\r\n                <ion-select   #selectDpto cancelText=\"Cancelar\" placeholder=\"Seleccione un Departamento\"   (ionChange)=\"actualizardpto($event)\" [value]=\"nvoDpto\">\r\n                    <ion-select-option *ngFor=\"let dpto of departamento\" [value]=\"dpto\" >{{ dpto }}</ion-select-option>\r\n                </ion-select>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">Ciudad</ion-col>\r\n            <ion-col size=\"8\">\r\n                <ion-select #selectMunicipio cancelText=\"Cancelar\" placeholder=\"Seleccione un Municipio\" [value]=\"nvoCiudad\" (ionChange)=\"actualizarmuni($event)\">\r\n                    <ion-select-option *ngFor=\"let muni of municipio\" [value]=\"muni\" >{{ muni }}</ion-select-option>\r\n                </ion-select>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">Barrio</ion-col>\r\n            <ion-col size=\"8\">\r\n                <ion-input #barrioInput rows=\"4\" placeholder=\"Ingrese Barrio\" [value]=\"contrato.barrio\" (ionChange)=\"contrato.barrio = barrioInput.value\">\r\n                </ion-input>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">Direccion</ion-col>\r\n            <ion-col size=\"8\">\r\n                <ion-input #direccionInput rows=\"4\" placeholder=\"Ingresa Direccion\" [value]=\"contrato.direccion\" (ionChange)=\"contrato.direccion = direccionInput.value\">\r\n                </ion-input>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">Departamento Cobro</ion-col>\r\n            <ion-col size=\"8\">\r\n\r\n              \r\n\r\n                <ion-select  #selectDptoCobro cancelText=\"Cancelar\"  placeholder=\"Seleccione Departamento Cobro\" [value]=\"nvoDptoCobro\" (ionChange)=\"actualizardptocobro($event)\">\r\n                    <ion-select-option *ngFor=\"let dpto of departamento\" [value]=\"dpto\">{{ dpto }}</ion-select-option>\r\n                </ion-select>\r\n\r\n\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">Ciudad Cobro</ion-col>\r\n            <ion-col size=\"8\">\r\n                <ion-select #selectMunicipioCobro cancelText=\"Cancelar\" placeholder=\"Seleccione Ciudad de Cobro\" [value]=\"nvoCiudadCobro\" (ionChange)=\"actualizarmunicobro($event)\">\r\n                    <ion-select-option *ngFor=\"let muni of municipiocobro\" [value]=\"muni\">{{ muni }}</ion-select-option>\r\n                </ion-select>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">Barrio Cobro</ion-col>\r\n            <ion-col size=\"8\">\r\n                <ion-input #barriocobroInput rows=\"4\" placeholder=\"Ingrese Barrio Cobro\" [value]=\"contrato.barriocobro\" (ionChange)=\"contrato.barriocobro = barriocobroInput.value\">\r\n                </ion-input>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">Direccion Cobro</ion-col>\r\n            <ion-col size=\"8\">\r\n                <ion-input #direccioncobroInput rows=\"4\" placeholder=\"Ingresa Direccion Cobro\" [value]=\"contrato.direccionCobro\" (ionChange)=\"contrato.direccionCobro = direccioncobroInput.value\">\r\n                </ion-input>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col size=\"12\">\r\n                <ion-button color=\"danger\" (click)=\"guardar()\">\r\n                    Guardar\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n    </form>\r\n</ion-content>");

/***/ }),

/***/ "iapu":
/*!*************************************************!*\
  !*** ./src/app/models/contrato-update-model.ts ***!
  \*************************************************/
/*! exports provided: ContratoUpdateModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContratoUpdateModel", function() { return ContratoUpdateModel; });
var ContratoUpdateModel = /** @class */ (function () {
    function ContratoUpdateModel() {
    }
    return ContratoUpdateModel;
}());



/***/ })

}]);
//# sourceMappingURL=pages-actualizar-datos-actualizar-datos-module.js.map