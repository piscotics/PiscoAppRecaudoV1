(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-consultar-contrato2-consultar-contrato2-module"],{

/***/ "JYgH":
/*!***********************************************************************!*\
  !*** ./src/app/pages/consultar-contrato2/consultar-contrato2.page.ts ***!
  \***********************************************************************/
/*! exports provided: ConsultarContrato2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarContrato2Page", function() { return ConsultarContrato2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_consultar_contrato2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./consultar-contrato2.page.html */ "uxE6");
/* harmony import */ var _consultar_contrato2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consultar-contrato2.page.scss */ "WavN");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var _services_contrato_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/contrato.service */ "YjMO");
/* harmony import */ var _own_components_beneficiarios_beneficiarios_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../own-components/beneficiarios/beneficiarios.component */ "9L3W");
/* harmony import */ var _models_ultimo_pago_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/ultimo-pago.model */ "rxqv");
/* harmony import */ var _enums_modo_visualizar_contrato_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../enums/modo-visualizar-contrato.enum */ "7Ihc");
/* harmony import */ var src_app_models_contrato_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/contrato-model */ "81KG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _own_components_ultimos_pagos_ultimos_pagos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../own-components/ultimos-pagos/ultimos-pagos.component */ "IuA+");













var ConsultarContrato2Page = /** @class */ (function () {
    function ConsultarContrato2Page(platform, router, activatedRoute, contratoSevice, modalController) {
        this.platform = platform;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.contratoSevice = contratoSevice;
        this.modalController = modalController;
        this.contrato = null;
        this.contratos = [];
        this.consultandoContrato = true;
        this.modoVisualizarContrato = _enums_modo_visualizar_contrato_enum__WEBPACK_IMPORTED_MODULE_7__["ModoVisualizarContratoEnum"].MODO_CONSULTA;
        this.mostrarUltimoPago = false;
        this.ultimoPago = null;
        this.criterioBusqueda = '';
        this.textoBusqueda = '';
        this.isOffline = false;
    }
    ConsultarContrato2Page.prototype.ngOnInit = function () {
        var _this = this;
        this.criterioBusqueda = this.activatedRoute.snapshot.paramMap.get('criterioBusqueda');
        this.textoBusqueda = this.activatedRoute.snapshot.paramMap.get('textoBusqueda');
        this.platform.ready().then(function () {
            _this.contrato = null;
            _this.contratos = [];
            _this.isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;
            if (_this.criterioBusqueda === 'CONTRATO') {
                _this.contratoSevice.consultarContratoPorNumero(_this.textoBusqueda)
                    .then(function (contratoResponse) {
                    var contrato = new src_app_models_contrato_model__WEBPACK_IMPORTED_MODULE_8__["ContratoModel"]();
                    contrato.contrato = contratoResponse.IdContrato;
                    contrato.cuota = contratoResponse.Cuota;
                    contrato.fehaAfiliacion = contratoResponse.FechaAfiliacion;
                    contrato.pagoHasta = contratoResponse.FechaCobertura;
                    contrato.estado = contratoResponse.EstadoContrato;
                    contrato.plan = contratoResponse.Plan;
                    contrato.cedula = contratoResponse.Cedula;
                    contrato.nombre = contratoResponse.Titular;
                    localStorage.setItem('Dpto_Principal', contratoResponse.Departamento);
                    contrato.departamento = contratoResponse.Departamento;
                    contrato.ciudad = contratoResponse.Municipio;
                    contrato.direccion = contratoResponse.Direccion;
                    contrato.direccionCobro = contratoResponse.DireccionCobro;
                    contrato.departamentocobro = contratoResponse.DepartamentoCobro;
                    contrato.ciudadcobro = contratoResponse.MunicipioCobro;
                    contrato.barrio = contratoResponse.Barrio;
                    contrato.barriocobro = contratoResponse.BarrioCobro;
                    contrato.telefono = contratoResponse.Telefono;
                    contrato.movil = contratoResponse.Celular;
                    contrato.email = contratoResponse.Email;
                    contrato.Nota1 = contratoResponse.Nota1;
                    _this.contrato = contrato;
                    _this.consultandoContrato = false;
                })
                    .catch(function () {
                    _this.consultandoContrato = false;
                });
            }
            else {
                _this.contratoSevice.consultarContratoPorCedula(_this.textoBusqueda)
                    .then(function (contratoResponse) {
                    _this.contratos = contratoResponse.map(function (c) {
                        var contrato = new src_app_models_contrato_model__WEBPACK_IMPORTED_MODULE_8__["ContratoModel"]();
                        contrato.contrato = c.IdContrato;
                        contrato.cuota = c.Cuota;
                        contrato.fehaAfiliacion = c.FechaAfiliacion;
                        contrato.pagoHasta = c.FechaCobertura;
                        contrato.estado = c.EstadoContrato;
                        contrato.plan = c.Plan;
                        contrato.cedula = c.Cedula;
                        contrato.nombre = c.Titular;
                        contrato.departamento = c.Departamento;
                        contrato.departamentocobro = c.DepartamentoCobro;
                        contrato.ciudadcobro = c.MunicipioCobro;
                        contrato.barrio = c.Barrio;
                        contrato.barriocobro = c.BarrioCobro;
                        contrato.ciudad = c.Municipio;
                        contrato.direccion = c.Direccion;
                        contrato.direccionCobro = c.DireccionCobro;
                        contrato.telefono = c.Telefono;
                        contrato.movil = c.Celular;
                        contrato.email = c.Email;
                        contrato.Nota1 = c.Nota1;
                        return contrato;
                    });
                    _this.consultandoContrato = false;
                })
                    .catch(function () {
                    _this.consultandoContrato = false;
                });
            }
        });
        var ultimoPago = new _models_ultimo_pago_model__WEBPACK_IMPORTED_MODULE_6__["UltimoPagoModel"]();
        ultimoPago.fechaUltimoPago = '2019-04-15';
        ultimoPago.numeroDocumento = '115544778855';
        ultimoPago.usuario = 'Pepita Jimenez';
        ultimoPago.valor = 55000;
        this.ultimoPago = ultimoPago;
    };
    ConsultarContrato2Page.prototype.seleccionarContrato = function (indice) {
        this.contrato = this.contratos[indice];
    };
    ConsultarContrato2Page.prototype.verpagos = function () {
        var _this = this;
        if (!this.contrato) {
            alert('Seleccione contrato');
            return;
        }
        else {
            this.contratoSevice.consultarUltimosPagos(this.contrato.contrato).then(function (pagos) {
                console.log(JSON.stringify(pagos));
                _this.modalController.create({
                    component: _own_components_ultimos_pagos_ultimos_pagos_component__WEBPACK_IMPORTED_MODULE_11__["UltimosPagosComponent"],
                    componentProps: {
                        pagos: pagos
                    },
                }).then(function (modal) {
                    modal.present();
                });
            });
        }
    };
    ConsultarContrato2Page.prototype.verbeneficiarios = function () {
        var _this = this;
        if (!this.contrato) {
            alert('Seleccione contrato');
            return;
        }
        else {
            this.contratoSevice.consultarBeneficiarrios(this.contrato.contrato).then(function (beneficiarios) {
                console.log(JSON.stringify(beneficiarios));
                _this.modalController.create({
                    component: _own_components_beneficiarios_beneficiarios_component__WEBPACK_IMPORTED_MODULE_5__["BeneficiariosComponent"],
                    componentProps: {
                        beneficiarios: beneficiarios
                    },
                }).then(function (modal) {
                    modal.present();
                });
            });
        }
    };
    ConsultarContrato2Page.prototype.registrarGestion = function () {
        if (!this.contrato) {
            alert('Seleccione contrato');
            return;
        }
        this.router.navigate(['registro-gestion', JSON.stringify(this.contrato)]);
    };
    ConsultarContrato2Page.prototype.registrarPago = function () {
        if (!this.contrato) {
            alert('Seleccione contrato');
            return;
        }
        this.router.navigate(['registrar-pago', JSON.stringify(this.contrato)]);
    };
    ConsultarContrato2Page.prototype.actualizarContrato = function () {
        if (!this.contrato) {
            alert('Seleccione contrato');
            return;
        }
        this.router.navigate(['actualizar-datos', JSON.stringify(this.contrato)]);
    };
    ConsultarContrato2Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
        { type: _services_contrato_service__WEBPACK_IMPORTED_MODULE_4__["ContratoService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    ConsultarContrato2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
            selector: 'app-consultar-contrato2',
            template: _raw_loader_consultar_contrato2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_consultar_contrato2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _services_contrato_service__WEBPACK_IMPORTED_MODULE_4__["ContratoService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], ConsultarContrato2Page);
    return ConsultarContrato2Page;
}());



/***/ }),

/***/ "WavN":
/*!*************************************************************************!*\
  !*** ./src/app/pages/consultar-contrato2/consultar-contrato2.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25zdWx0YXItY29udHJhdG8yLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "rd9s":
/*!*************************************************************************!*\
  !*** ./src/app/pages/consultar-contrato2/consultar-contrato2.module.ts ***!
  \*************************************************************************/
/*! exports provided: ConsultarContrato2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarContrato2PageModule", function() { return ConsultarContrato2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "P4DM");
/* harmony import */ var _consultar_contrato2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consultar-contrato2.page */ "JYgH");
/* harmony import */ var src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/own-components/own-components.module */ "9FvA");








var routes = [
    {
        path: '',
        component: _consultar_contrato2_page__WEBPACK_IMPORTED_MODULE_6__["ConsultarContrato2Page"]
    }
];
var ConsultarContrato2PageModule = /** @class */ (function () {
    function ConsultarContrato2PageModule() {
    }
    ConsultarContrato2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__["OwnComponentsModule"]
            ],
            declarations: [_consultar_contrato2_page__WEBPACK_IMPORTED_MODULE_6__["ConsultarContrato2Page"]]
        })
    ], ConsultarContrato2PageModule);
    return ConsultarContrato2PageModule;
}());



/***/ }),

/***/ "rxqv":
/*!*********************************************!*\
  !*** ./src/app/models/ultimo-pago.model.ts ***!
  \*********************************************/
/*! exports provided: UltimoPagoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UltimoPagoModel", function() { return UltimoPagoModel; });
var UltimoPagoModel = /** @class */ (function () {
    function UltimoPagoModel() {
    }
    return UltimoPagoModel;
}());



/***/ }),

/***/ "uxE6":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/consultar-contrato2/consultar-contrato2.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"consultar contrato\"></app-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"ion-padding\" *ngIf=\"!consultandoContrato && ((criterioBusqueda === 'CEDULA' && contratos.length === 0)  || (criterioBusqueda === 'CONTRATO' && !contrato))\">\r\n        <ion-text color=\"danger\">\r\n            <p>No se encontró algùn contrato, intente nuevamente</p>\r\n        </ion-text>\r\n    </div>\r\n\r\n    <div class=\"ion-margin-bottom\" *ngIf=\"criterioBusqueda === 'CEDULA' && contratos.length > 0\">\r\n        <div class=\"ion-padding\">\r\n            <h3>Seleccione un contrato</h3>\r\n        </div>\r\n        <ion-list>\r\n            <ion-item button=\"true\" (click)=\"seleccionarContrato(i)\" *ngFor=\"let contrato of contratos; let i=index;\">\r\n                <ion-label>Nro. Contrato: {{ contrato.contrato }}</ion-label>\r\n            </ion-item>\r\n        </ion-list>\r\n    </div>\r\n\r\n    <app-datos-contrato [contrato]=\"contrato\" [modo]=\"modoVisualizarContrato\" *ngIf=\"!consultandoContrato && contrato\">\r\n    </app-datos-contrato>\r\n\r\n    <div class=\"ion-padding\" *ngIf=\"mostrarUltimoPago\">\r\n        <h5 class=\"semi-titulo\">Último pago</h5>\r\n    </div>\r\n    <ion-grid fixed *ngIf=\"mostrarUltimoPago\">\r\n        <ion-row>\r\n            <ion-col size=\"5\">Fecha último pago</ion-col>\r\n            <ion-col size=\"7\">{{ ultimoPago.fechaUltimoPago }}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col size=\"5\">Nro documento</ion-col>\r\n            <ion-col size=\"7\">{{ ultimoPago.numeroDocumento }}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col size=\"5\">Valor</ion-col>\r\n            <ion-col size=\"7\">{{ ultimoPago.valor }}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col size=\"5\">Usuario</ion-col>\r\n            <ion-col size=\"7\">{{ ultimoPago.usuario }}</ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <div class=\"ion-padding\">\r\n\r\n        <ion-button color=\"danger\" (click)=\"verpagos()\">\r\n            Ultimos Pagos\r\n        </ion-button>\r\n        <ion-button color=\"danger\" (click)=\"verbeneficiarios()\">\r\n            Grupo Reportado\r\n        </ion-button>\r\n        <ion-button color=\"danger\" (click)=\"registrarPago()\">\r\n            Pagar\r\n        </ion-button>\r\n        <ion-button color=\"danger\" (click)=\"registrarGestion()\">\r\n            Gestión\r\n        </ion-button>\r\n        <ion-button *ngIf=\"!isOffline\" color=\"danger\" (click)=\"actualizarContrato()\">\r\n            Actualizar\r\n        </ion-button>\r\n    </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-consultar-contrato2-consultar-contrato2-module.js.map