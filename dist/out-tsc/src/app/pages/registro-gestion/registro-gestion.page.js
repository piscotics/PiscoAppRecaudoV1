import * as tslib_1 from "tslib";
import { TiposGestionService } from './../../services/tipos-gestion.service';
import { GestionModel } from '../../models/gestion.model';
import { Component } from '@angular/core';
import { ModoVisualizarContratoEnum } from 'src/app/enums/modo-visualizar-contrato.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistroGestionModel } from '../../models/registro-gestion.model';
import { SesionService } from '../../services/sesion.service';
import { AlertController } from '@ionic/angular';
var RegistroGestionPage = /** @class */ (function () {
    function RegistroGestionPage(tiposGestionService, activatedRoute, sesion, router, alertController) {
        var _this = this;
        this.tiposGestionService = tiposGestionService;
        this.activatedRoute = activatedRoute;
        this.sesion = sesion;
        this.router = router;
        this.alertController = alertController;
        this.contrato = null;
        this.modoVisualizarContrato = ModoVisualizarContratoEnum.MODO_CONCISO;
        this.gestion = null;
        this.registrogestion = null;
        this.tiposGestion = [];
        this.textoBusqueda = new Date().setDate(new Date().getDate() + 1);
        this.sesionLocal = null;
        this.mostrarAlerta = function (mensaje) {
            _this.alertController.create({
                header: 'Informaciòn',
                message: mensaje,
                buttons: [{
                        role: 'cancel',
                        text: 'Ok',
                    }]
            }).then(function (alert) {
                alert.present();
            });
        };
    }
    RegistroGestionPage.prototype.ngOnInit = function () {
        var _this = this;
        var contrato = this.activatedRoute.snapshot.paramMap.get('contrato');
        if (contrato) {
            this.contrato = JSON.parse(contrato);
        }
        var gestion = new GestionModel();
        var registrogestion = new RegistroGestionModel();
        gestion.Observaciones = '';
        this.gestion = gestion;
        this.registrogestion = registrogestion;
        this.tiposGestionService.cargarTipoNovedad().then(function (tiponovedades) {
            _this.tiposGestion = tiponovedades;
        });
    };
    RegistroGestionPage.prototype.tipoGestion_Changed = function (event) {
        this.gestion.TipoGestion = event.detail.value;
    };
    RegistroGestionPage.prototype.observacion_Changed = function (event) {
        this.gestion.Observaciones = event.detail.value;
    };
    RegistroGestionPage.prototype.cambiofecha = function (event) {
        this.textoBusqueda = event.target.value;
    };
    RegistroGestionPage.prototype.onClick = function () {
        console.log(this.gestion.Observaciones);
        this.guardar();
    };
    RegistroGestionPage.prototype.guardar = function () {
        var _this = this;
        this.sesionLocal = this.sesion.sesionLocal;
        this.registrogestion.Novedad = this.gestion.TipoGestion;
        this.registrogestion.Observaciones = this.gestion.Observaciones;
        this.tiposGestionService.prepararRegistroNovedad(this.registrogestion).then(function (registro) {
            registro.Fechaprogramada = _this.textoBusqueda.toLocaleString();
            registro.Transac = 1;
            registro.Contrato = _this.contrato.contrato;
            registro.Diapos = 1;
            registro.Usuario = _this.sesionLocal.sesionUsuario.USERNAME;
            registro.IdCobrador = _this.sesionLocal.sesionUsuario.IDCOBRADOR;
            registro.Modulo = "1";
            _this.tiposGestionService.registrarNovedad(registro)
                .then(function () {
                _this.gestion.FechaProgramacion = new Date().toDateString();
                _this.gestion.Observaciones = '';
                _this.gestion.TipoGestion = 0;
            });
        });
    };
    RegistroGestionPage = tslib_1.__decorate([
        Component({
            selector: 'app-registro-gestion',
            templateUrl: './registro-gestion.page.html',
            styleUrls: ['./registro-gestion.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [TiposGestionService,
            ActivatedRoute,
            SesionService,
            Router,
            AlertController])
    ], RegistroGestionPage);
    return RegistroGestionPage;
}());
export { RegistroGestionPage };
//# sourceMappingURL=registro-gestion.page.js.map