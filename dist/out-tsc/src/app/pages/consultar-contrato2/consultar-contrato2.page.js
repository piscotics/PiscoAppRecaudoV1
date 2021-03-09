import * as tslib_1 from "tslib";
import { Platform } from '@ionic/angular';
import { ContratoService } from './../../services/contrato.service';
import { BeneficiariosComponent } from './../../own-components/beneficiarios/beneficiarios.component';
import { UltimoPagoModel } from '../../models/ultimo-pago.model';
import { ModoVisualizarContratoEnum } from '../../enums/modo-visualizar-contrato.enum';
import { ContratoModel } from 'src/app/models/contrato-model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
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
        this.modoVisualizarContrato = ModoVisualizarContratoEnum.MODO_CONSULTA;
        this.mostrarUltimoPago = false;
        this.ultimoPago = null;
        this.criterioBusqueda = '';
        this.textoBusqueda = '';
    }
    ConsultarContrato2Page.prototype.ngOnInit = function () {
        var _this = this;
        this.criterioBusqueda = this.activatedRoute.snapshot.paramMap.get('criterioBusqueda');
        this.textoBusqueda = this.activatedRoute.snapshot.paramMap.get('textoBusqueda');
        this.platform.ready().then(function () {
            _this.contrato = null;
            _this.contratos = [];
            if (_this.criterioBusqueda === 'CONTRATO') {
                _this.contratoSevice.consultarContratoPorNumero(_this.textoBusqueda)
                    .then(function (contratoResponse) {
                    var contrato = new ContratoModel();
                    contrato.contrato = contratoResponse.IdContrato;
                    contrato.cuota = contratoResponse.Cuota;
                    contrato.fehaAfiliacion = contratoResponse.FechaAfiliacion;
                    contrato.pagoHasta = contratoResponse.FechaCobertura;
                    contrato.estado = contratoResponse.EstadoContrato;
                    contrato.plan = contratoResponse.Plan;
                    contrato.cedula = contratoResponse.Cedula;
                    contrato.nombre = contratoResponse.Titular;
                    contrato.departamento = 1;
                    contrato.ciudad = 2;
                    contrato.direccion = contratoResponse.Direccion;
                    contrato.direccionCobro = contratoResponse.Direccion;
                    contrato.telefono = contratoResponse.Telefono;
                    contrato.movil = contratoResponse.Telefono;
                    contrato.email = '';
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
                        var contrato = new ContratoModel();
                        contrato.contrato = c.IdContrato;
                        contrato.cuota = c.Cuota;
                        contrato.fehaAfiliacion = c.FechaAfiliacion;
                        contrato.pagoHasta = c.FechaCobertura;
                        contrato.estado = c.EstadoContrato;
                        contrato.plan = c.Plan;
                        contrato.cedula = c.Cedula;
                        contrato.nombre = c.Titular;
                        contrato.departamento = 1;
                        contrato.ciudad = 2;
                        contrato.direccion = c.Direccion;
                        contrato.direccionCobro = c.Direccion;
                        contrato.telefono = c.Telefono;
                        contrato.movil = c.Telefono;
                        contrato.email = '';
                        return contrato;
                    });
                    _this.consultandoContrato = false;
                })
                    .catch(function () {
                    _this.consultandoContrato = false;
                });
            }
        });
        var ultimoPago = new UltimoPagoModel();
        ultimoPago.fechaUltimoPago = '2019-04-15';
        ultimoPago.numeroDocumento = '115544778855';
        ultimoPago.usuario = 'Pepita Jimenez';
        ultimoPago.valor = 55000;
        this.ultimoPago = ultimoPago;
    };
    ConsultarContrato2Page.prototype.seleccionarContrato = function (indice) {
        this.contrato = this.contratos[indice];
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
                    component: BeneficiariosComponent,
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
    ConsultarContrato2Page = tslib_1.__decorate([
        Component({
            selector: 'app-consultar-contrato2',
            templateUrl: './consultar-contrato2.page.html',
            styleUrls: ['./consultar-contrato2.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            Router,
            ActivatedRoute,
            ContratoService,
            ModalController])
    ], ConsultarContrato2Page);
    return ConsultarContrato2Page;
}());
export { ConsultarContrato2Page };
//# sourceMappingURL=consultar-contrato2.page.js.map