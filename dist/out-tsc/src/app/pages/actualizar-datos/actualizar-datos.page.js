import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ContratoModel } from 'src/app/models/contrato-model';
import { ModoVisualizarContratoEnum } from 'src/app/enums/modo-visualizar-contrato.enum';
var ActualizarDatosPage = /** @class */ (function () {
    function ActualizarDatosPage() {
        this.contrato = null;
        this.modoVisualizarContrato = ModoVisualizarContratoEnum.MODO_EDICION;
    }
    ActualizarDatosPage.prototype.ngOnInit = function () {
        var contrato = new ContratoModel();
        contrato.contrato = 'IND1236548';
        contrato.cuota = 10500.45;
        contrato.fehaAfiliacion = '2018-05-21';
        contrato.pagoHasta = '2019-09-12';
        contrato.estado = 'Activo';
        contrato.plan = 'Superior';
        contrato.cedula = '1144558877';
        contrato.nombre = 'Juan Miguel Calderon';
        contrato.departamento = 1;
        contrato.ciudad = 2;
        contrato.direccion = 'Calle 18 # 8 - 38, El Cocuyo';
        contrato.direccionCobro = 'ay no me la sé';
        contrato.telefono = '81847878';
        contrato.movil = '301548787';
        contrato.email = 'alguncorreo@hotmail.com';
        this.contrato = contrato;
    };
    ActualizarDatosPage = tslib_1.__decorate([
        Component({
            selector: 'app-actualizar-datos',
            templateUrl: './actualizar-datos.page.html',
            styleUrls: ['./actualizar-datos.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ActualizarDatosPage);
    return ActualizarDatosPage;
}());
export { ActualizarDatosPage };
//# sourceMappingURL=actualizar-datos.page.js.map