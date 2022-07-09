(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registrar-pago-registrar-pago-module"],{

/***/ "Gg34":
/*!*************************************************************!*\
  !*** ./src/app/pages/registrar-pago/registrar-pago.page.ts ***!
  \*************************************************************/
/*! exports provided: RegistrarPagoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarPagoPage", function() { return RegistrarPagoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registrar_pago_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registrar-pago.page.html */ "Lw73");
/* harmony import */ var _registrar_pago_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registrar-pago.page.scss */ "WaoN");
/* harmony import */ var _own_components_modal_confirmar_pago_modal_confirmar_pago_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../own-components/modal-confirmar-pago/modal-confirmar-pago.component */ "uaSe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_enums_modo_visualizar_contrato_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/enums/modo-visualizar-contrato.enum */ "7Ihc");
/* harmony import */ var src_app_models_contrato_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/contrato-model */ "81KG");
/* harmony import */ var src_app_models_registrar_pago_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/registrar-pago.model */ "MpXC");
/* harmony import */ var src_app_models_consulta_pago_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/consulta-pago.model */ "dNaG");
/* harmony import */ var src_app_services_pagos_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/pagos.service */ "tDkB");
/* harmony import */ var src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/sesion.service */ "PbBf");







// Enums

// Modelos



// Servicios


var RegistrarPagoPage = /** @class */ (function () {
    function RegistrarPagoPage(activatedRoute, platform, router, alertController, modalController, toastController, sesionService, pagosService) {
        this.activatedRoute = activatedRoute;
        this.platform = platform;
        this.router = router;
        this.alertController = alertController;
        this.modalController = modalController;
        this.toastController = toastController;
        this.sesionService = sesionService;
        this.pagosService = pagosService;
        this.contrato = null;
        this.modoVisualizarContrato = src_app_enums_modo_visualizar_contrato_enum__WEBPACK_IMPORTED_MODULE_7__["ModoVisualizarContratoEnum"].MODO_CONCISO;
        this.registroPago = null;
        this.sesionLocal = null;
        this.tipopago = [];
        this.isDisabled = true;
        this.listCantidadCuotas = [];
        // [value]="registroPago.FORMAPAGO" 
    }
    // ionViewDidEnter(){
    // this.registroPago.FORMAPAGO ="Efectivo";
    //}
    RegistrarPagoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.sesionLocal = _this.sesionService.sesionLocal;
            _this.tipopago = [];
            // Crear datos selección de cuotas
            for (var i = 0; i <= 12; i++) {
                _this.listCantidadCuotas.push((i));
            }
            var contrato = _this.activatedRoute.snapshot.paramMap.get('contrato');
            if (contrato) {
                _this.contrato = JSON.parse(contrato);
                var registroPago = new src_app_models_registrar_pago_model__WEBPACK_IMPORTED_MODULE_9__["RegistrarpagoModel"]();
                registroPago.CUOTAMENSUAL = _this.contrato.cuota;
                registroPago.ESTADO = _this.contrato.estado;
                registroPago.IDCONTRATO = _this.contrato.contrato;
                registroPago.IDPERSONA = _this.contrato.cedula;
                //registroPago.USUARIO = String(this.sesionLocal.sesionUsuario.ID);
                registroPago.USUARIO = _this.sesionLocal.sesionUsuario.USERNAME;
                registroPago.titular = _this.contrato.nombre;
                registroPago.VALOR = _this.contrato.cuota;
                registroPago.PLAN = _this.contrato.plan;
                registroPago.FORMAPAGO = _this.contrato.formaPago;
                registroPago.Departamento = _this.contrato.departamento;
                registroPago.Ciudad = _this.contrato.ciudad;
                _this.registroPago = registroPago;
            }
            _this.pagosService.cargarFormaPago().then(function (tipospagos) {
                _this.tipopago = tipospagos;
                _this.nvoFormaPago = 'Efectivo'; //this.tipopago[3].NombreTipoPago ;
                console.log("el tipo de pgo es " + _this.nvoFormaPago); //JSON.stringify(tipospagos[3].NombreTipoPago)
                //this.ngTipoPago = JSON.stringify(tipospagos[3]); 
                console.log(JSON.stringify(_this.tipopago));
            });
        });
    };
    RegistrarPagoPage.prototype.actualizarCantidadCuotas = function (event) {
        this.registroPago.CANTIDADCUOTAS = event.target.value;
        if (this.registroPago.CANTIDADCUOTAS > 0) {
            this.isDisabled = true;
            this.registroPago.VALOR = this.contrato.cuota * this.registroPago.CANTIDADCUOTAS;
        }
        else {
            this.isDisabled = false;
        }
    };
    RegistrarPagoPage.prototype.actualizatipopago = function (event) {
        this.registroPago.FORMAPAGO = event.target.value;
    };
    RegistrarPagoPage.prototype.guardar = function () {
        var _this = this;
        this.pagosService.prepararRegistroPago(this.registroPago).then(function (registroPago) {
            //registroPago.FORMAPAGO = registroPago.FORMAPAGO;
            console.log("Registro de pago a enviar al server: " + JSON.stringify(registroPago));
            _this.modalController.create({
                component: _own_components_modal_confirmar_pago_modal_confirmar_pago_component__WEBPACK_IMPORTED_MODULE_3__["ModalConfirmarPagoComponent"],
                componentProps: {
                    registroPago: registroPago
                },
                backdropDismiss: false,
                cssClass: 'modal-confirmar-pago'
            }).then(function (modal) {
                modal.onDidDismiss().then(function (detail) {
                    if (detail.data) {
                        // El usuario confirma realizar el pago
                        _this.pagosService.registrarPago(registroPago).then(function (respuesta) {
                            var extras = {
                                replaceUrl: true
                            };
                            console.log("la respuesta de pago a enviar al server:", respuesta);
                            var registroBusqueda = new src_app_models_consulta_pago_model__WEBPACK_IMPORTED_MODULE_10__["ConsultaPagoModel"]();
                            registroBusqueda.Cedula = _this.contrato.cedula;
                            registroBusqueda.Contrato = _this.registroPago.IDCONTRATO;
                            registroBusqueda.Cuota = _this.registroPago.CUOTAMENSUAL;
                            registroBusqueda.FechaPago = _this.registroPago.FECHAPAGOR;
                            registroBusqueda.Nombre = _this.contrato.nombre;
                            registroBusqueda.NumeroDocumento = respuesta.NroRecibo;
                            registroBusqueda.Concepto = respuesta.Concepto;
                            registroBusqueda.PagoDesde = respuesta.Desde;
                            registroBusqueda.Observaciones = respuesta.DetallePago + '--' + _this.registroPago.OBSERVACIONES;
                            registroBusqueda.PagoHasta = respuesta.Hasta;
                            registroBusqueda.Terminal = _this.registroPago.MAQUINA;
                            registroBusqueda.Total = _this.registroPago.VALOR - _this.registroPago.DESCUENTO;
                            registroBusqueda.Usuario = _this.registroPago.USUARIO;
                            registroBusqueda.PVisita = respuesta.PVisita;
                            registroBusqueda.Anulado = respuesta.Anulado;
                            registroBusqueda.ValorLetras = respuesta.Valorenletras;
                            registroBusqueda.Ciudad = _this.contrato.ciudad;
                            registroBusqueda.Departamento = _this.contrato.departamento;
                            //Campos adicionales
                            registroBusqueda.Vdesde = respuesta.Vdesde;
                            registroBusqueda.Vhasta = respuesta.Vhasta;
                            registroBusqueda.VlrCto = respuesta.VlrCto;
                            registroBusqueda.VlrSaldo = respuesta.VlrSaldo;
                            registroBusqueda.VlrDctoPago = respuesta.VlrDctoPago;
                            registroBusqueda.VlrIva = respuesta.VlrIva;
                            registroBusqueda.FormaPago = registroPago.FORMAPAGO;
                            registroBusqueda.NROREF = registroPago.NROREF;
                            console.log("la forma de pago al guardar es :" + registroPago.FORMAPAGO);
                            _this.router.navigate(['registrar-pago2', JSON.stringify(registroBusqueda)], extras);
                        });
                    }
                });
                modal.present();
            });
        });
    };
    RegistrarPagoPage.prototype.mostrarToastSimple = function (mensaje) {
        this.toastController.create({
            message: mensaje,
            duration: 2000
        }).then(function (toast) {
            toast.present();
        });
    };
    RegistrarPagoPage.prototype.mostrarAlertSimple = function (titulo, texto) {
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
    RegistrarPagoPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
        { type: src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_12__["SesionService"] },
        { type: src_app_services_pagos_service__WEBPACK_IMPORTED_MODULE_11__["PagosService"] }
    ]; };
    RegistrarPagoPage.propDecorators = {
        contrato: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    RegistrarPagoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-registrar-pago',
            template: _raw_loader_registrar_pago_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_registrar_pago_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            src_app_services_sesion_service__WEBPACK_IMPORTED_MODULE_12__["SesionService"],
            src_app_services_pagos_service__WEBPACK_IMPORTED_MODULE_11__["PagosService"]])
    ], RegistrarPagoPage);
    return RegistrarPagoPage;
}());



/***/ }),

/***/ "Lw73":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registrar-pago/registrar-pago.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"registrar pago\"></app-header>\r\n\r\n<ion-content>\r\n    <app-datos-contrato [contrato]=\"contrato\" [modo]=\"modoVisualizarContrato\"></app-datos-contrato>\r\n    <div class=\"ion-padding\">\r\n        <h5 class=\"semi-titulo\">Datos del pago</h5>\r\n    </div>\r\n    <ion-grid fixed *ngIf=\"registroPago\">\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">Cuotas a pagar</ion-col>\r\n            <ion-col size=\"2\">\r\n                <ion-select class=\"select-full-width\" cancelText=\"Cancelar\" placeholder=\"Seleccione cantidad de cuotas\" [value]=\"registroPago.CANTIDADCUOTAS\" (ionChange)=\"actualizarCantidadCuotas($event)\">\r\n                    <ion-select-option *ngFor=\"let cuota of listCantidadCuotas\" [value]=\"cuota\">{{ cuota }}</ion-select-option>\r\n                </ion-select>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">Total</ion-col>\r\n            <ion-col size=\"3\">\r\n                <ion-input #valorInput color=\"danger\" value=\"{{ registroPago.VALOR }}\" disabled=\"{{ isDisabled }}\" (ionChange)=\"registroPago.VALOR = valorInput.value\"> </ion-input>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">Descuento</ion-col>\r\n            <ion-input #descuentoInput color=\"danger\" value=\"{{ registroPago.DESCUENTO }}\" (ionChange)=\"registroPago.DESCUENTO = descuentoInput.value\"> </ion-input>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">Forma de pago</ion-col>\r\n            <ion-col size=\"8\">\r\n\r\n               <ion-select  #selectFormaPago cancelText=\"Cancelar\" placeholder=\"Seleccione El Tipo De Pago\" [value]=\"nvoFormaPago\" (ionChange)=\"actualizatipopago($event)\">\r\n                    <ion-select-option *ngFor=\"let tipo of tipopago\" [value]=\"tipo.NombreTipoPago\"> {{tipo.NombreTipoPago}}</ion-select-option>\r\n                </ion-select>\r\n            </ion-col>\r\n        </ion-row>\r\n       \r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">Fecha pago</ion-col>\r\n            <ion-col size=\"8\">\r\n                <ion-text class=\"ion-text-capitalize\" color=\"danger\">\r\n                    <span>{{ registroPago.FECHAPAGOR | date:'MMMM dd yyyy':'':'es-Co' }}</span></ion-text>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">Observaciones</ion-col>\r\n            <ion-col size=\"8\">\r\n                <ion-textarea #observacionesInput rows=\"4\" placeholder=\"Ingresa alguna observación\" [value]=\"registroPago.OBSERVACIONES\" (ionChange)=\"registroPago.OBSERVACIONES = observacionesInput.value\">\r\n                </ion-textarea>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"4\">Nro. Referencia</ion-col>\r\n            <ion-col size=\"8\">\r\n                <ion-textarea #referenciaInput rows=\"4\" placeholder=\"Ingresa la referencia\" [value]=\"registroPago.NROREF\" (ionChange)=\"registroPago.NROREF = referenciaInput.value\">\r\n                </ion-textarea>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"contrato\">\r\n            <ion-col size=\"12\">\r\n                <ion-button color=\"danger\" (click)=\"guardar()\">\r\n                    Guardar\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "MpXC":
/*!************************************************!*\
  !*** ./src/app/models/registrar-pago.model.ts ***!
  \************************************************/
/*! exports provided: RegistrarpagoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarpagoModel", function() { return RegistrarpagoModel; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

var RegistrarpagoModel = /** @class */ (function () {
    function RegistrarpagoModel() {
        this.OBSERVACIONES = '';
        this.FORMAPAGO = 'Efectivo';
        this.IDCONTRATO = '';
        this.IDPERSONA = '';
        this.VALOR = 0;
        this.DESCUENTO = 0;
        this.CANTIDADCUOTAS = 1;
        this.MAQUINA = '';
        this.TRANSAC = moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYYMMDDhhmmss');
        this.USUARIO = '';
        this.OBSERVACIONES = '';
        this.CUOTAMENSUAL = 0;
        this.ESTADO = '';
        this.FORMAPAGO = 'Efectivo';
        this.FECHAPAGOR = new Date().toISOString();
        this.POSX = '';
        this.POSY = '';
        this.IDENTIFICADORBASE = '';
        this.titular = '';
        this.PLAN = '';
        this.NRORECIBO = moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYYMMDDhhmmss');
        this.PagoDesde = '';
        this.PagoHasta = '';
        this.Departamento = '';
        this.Ciudad = '';
        this.ValorLetras = '';
        this.NROREF = '';
        this.RESPUESTA = '';
    }
    return RegistrarpagoModel;
}());



/***/ }),

/***/ "SMe6":
/*!***************************************************************!*\
  !*** ./src/app/pages/registrar-pago/registrar-pago.module.ts ***!
  \***************************************************************/
/*! exports provided: RegistrarPagoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarPagoPageModule", function() { return RegistrarPagoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _registrar_pago_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registrar-pago.page */ "Gg34");
/* harmony import */ var src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/own-components/own-components.module */ "9FvA");








var routes = [
    {
        path: '',
        component: _registrar_pago_page__WEBPACK_IMPORTED_MODULE_6__["RegistrarPagoPage"]
    }
];
var RegistrarPagoPageModule = /** @class */ (function () {
    function RegistrarPagoPageModule() {
    }
    RegistrarPagoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_own_components_own_components_module__WEBPACK_IMPORTED_MODULE_7__["OwnComponentsModule"]
            ],
            declarations: [_registrar_pago_page__WEBPACK_IMPORTED_MODULE_6__["RegistrarPagoPage"]]
        })
    ], RegistrarPagoPageModule);
    return RegistrarPagoPageModule;
}());



/***/ }),

/***/ "WaoN":
/*!***************************************************************!*\
  !*** ./src/app/pages/registrar-pago/registrar-pago.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".select-full-width {\n  max-width: 100% !important;\n  width: 100% !important;\n  padding-left: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3RyYXItcGFnby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUFDRiIsImZpbGUiOiJyZWdpc3RyYXItcGFnby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0LWZ1bGwtd2lkdGgge1xyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-registrar-pago-registrar-pago-module.js.map