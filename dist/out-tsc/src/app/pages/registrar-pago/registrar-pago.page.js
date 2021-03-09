import * as tslib_1 from "tslib";
import { ModalConfirmarPagoComponent } from './../../own-components/modal-confirmar-pago/modal-confirmar-pago.component';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, Platform, ToastController, ModalController } from '@ionic/angular';
// Enums
import { ModoVisualizarContratoEnum } from 'src/app/enums/modo-visualizar-contrato.enum';
// Modelos
import { ContratoModel } from 'src/app/models/contrato-model';
import { RegistrarpagoModel } from 'src/app/models/registrar-pago.model';
import { ConsultaPagoModel } from 'src/app/models/consulta-pago.model';
// Servicios
import { PagosService } from 'src/app/services/pagos.service';
import { SesionService } from 'src/app/services/sesion.service';
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
        this.modoVisualizarContrato = ModoVisualizarContratoEnum.MODO_CONCISO;
        this.registroPago = null;
        this.sesionLocal = null;
        this.tipopago = [];
        this.listCantidadCuotas = [];
    }
    RegistrarPagoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.sesionLocal = _this.sesionService.sesionLocal;
            _this.tipopago = [];
            // Crear datos selección de cuotas
            for (var i = 0; i < 12; i++) {
                _this.listCantidadCuotas.push((i + 1));
            }
            var contrato = _this.activatedRoute.snapshot.paramMap.get('contrato');
            if (contrato) {
                _this.contrato = JSON.parse(contrato);
                var registroPago = new RegistrarpagoModel();
                registroPago.CUOTAMENSUAL = _this.contrato.cuota;
                registroPago.ESTADO = _this.contrato.estado;
                registroPago.IDCONTRATO = _this.contrato.contrato;
                registroPago.IDPERSONA = _this.contrato.cedula;
                //registroPago.USUARIO = String(this.sesionLocal.sesionUsuario.ID);
                registroPago.USUARIO = _this.sesionLocal.sesionUsuario.USERNAME;
                registroPago.titular = _this.contrato.nombre;
                registroPago.VALOR = _this.contrato.cuota;
                _this.registroPago = registroPago;
            }
            _this.pagosService.cargarFormaPago().then(function (tipospagos) {
                _this.tipopago = tipospagos;
                console.log(JSON.stringify(_this.tipopago));
            });
        });
    };
    RegistrarPagoPage.prototype.actualizarCantidadCuotas = function (event) {
        this.registroPago.CANTIDADCUOTAS = event.target.value;
        this.registroPago.VALOR = this.contrato.cuota * this.registroPago.CANTIDADCUOTAS;
    };
    RegistrarPagoPage.prototype.actualizatipopago = function (event) {
        this.registroPago.FORMAPAGO = event.target.value;
    };
    RegistrarPagoPage.prototype.guardar = function () {
        var _this = this;
        this.pagosService.prepararRegistroPago(this.registroPago).then(function (registroPago) {
            registroPago.FORMAPAGO = registroPago.FORMAPAGO;
            console.log("Registro de pago a enviar al server: " + JSON.stringify(registroPago));
            _this.modalController.create({
                component: ModalConfirmarPagoComponent,
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
                            var registroBusqueda = new ConsultaPagoModel();
                            registroBusqueda.Cedula = _this.contrato.cedula;
                            registroBusqueda.Contrato = _this.registroPago.IDCONTRATO;
                            registroBusqueda.Cuota = _this.registroPago.VALOR;
                            registroBusqueda.FechaPago = _this.registroPago.FECHAPAGOR;
                            registroBusqueda.Nombre = _this.contrato.nombre;
                            registroBusqueda.NumeroDocumento = respuesta.NroRecibo;
                            registroBusqueda.Concepto = respuesta.Concepto;
                            registroBusqueda.PagoDesde = respuesta.Desde;
                            registroBusqueda.Observaciones = respuesta.DetallePago + '--' + _this.registroPago.OBSERVACIONES;
                            registroBusqueda.PagoHasta = _this.contrato.pagoHasta;
                            registroBusqueda.Terminal = _this.registroPago.MAQUINA;
                            registroBusqueda.Total = _this.registroPago.VALOR;
                            registroBusqueda.Usuario = _this.registroPago.USUARIO;
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", ContratoModel)
    ], RegistrarPagoPage.prototype, "contrato", void 0);
    RegistrarPagoPage = tslib_1.__decorate([
        Component({
            selector: 'app-registrar-pago',
            templateUrl: './registrar-pago.page.html',
            styleUrls: ['./registrar-pago.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            Platform,
            Router,
            AlertController,
            ModalController,
            ToastController,
            SesionService,
            PagosService])
    ], RegistrarPagoPage);
    return RegistrarPagoPage;
}());
export { RegistrarPagoPage };
//# sourceMappingURL=registrar-pago.page.js.map