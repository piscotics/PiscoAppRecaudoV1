import * as tslib_1 from "tslib";
import { ModoVisualizarContratoEnum } from '../../enums/modo-visualizar-contrato.enum';
import { CiudadModel } from '../../models/ciudad-model';
import { DepartamentoModel } from '../../models/departamento-model';
import { Component, Input } from '@angular/core';
import { ContratoModel } from 'src/app/models/contrato-model';
var DatosContratoComponent = /** @class */ (function () {
    function DatosContratoComponent() {
        this.contrato = null;
        this.modo = ModoVisualizarContratoEnum.MODO_CONSULTA;
        this.enumModo = ModoVisualizarContratoEnum;
        this.departamentos = [
            new DepartamentoModel(1, 'Huila'),
            new DepartamentoModel(2, 'Valle del Cauca'),
            new DepartamentoModel(3, 'Antioquia'),
            new DepartamentoModel(4, 'Cundinamarca'),
        ];
        this.ciudades = [
            new CiudadModel(1, 'Neiva', 1),
            new CiudadModel(2, 'Campoalegre', 1),
            new CiudadModel(3, 'Rivera', 1),
            new CiudadModel(4, 'Hobo', 1),
        ];
        this.compararDepartamento = function (o1, o2) {
            return (o1 && o2) && (o1.id === o2.id);
        };
    }
    DatosContratoComponent.prototype.ngOnInit = function () {
    };
    DatosContratoComponent.prototype.departamentoSeleccionado = function (event) {
        this.contrato.departamento = event.detail.value;
    };
    DatosContratoComponent.prototype.ciudadSeleccionada = function (event) {
        this.contrato.ciudad = event.detail.value;
    };
    DatosContratoComponent.prototype.departamentoPorId = function (id) {
        var departamento = this.departamentos.find(function (d) { return d.id === id; });
        return departamento ? departamento.nombre : '';
    };
    DatosContratoComponent.prototype.ciudadPorId = function (id) {
        var ciudad = this.ciudades.find(function (d) { return d.id === id; });
        return ciudad ? ciudad.nombre : '';
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", ContratoModel)
    ], DatosContratoComponent.prototype, "contrato", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], DatosContratoComponent.prototype, "modo", void 0);
    DatosContratoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-datos-contrato',
            templateUrl: './datos-contrato.component.html',
            styleUrls: ['./datos-contrato.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DatosContratoComponent);
    return DatosContratoComponent;
}());
export { DatosContratoComponent };
//# sourceMappingURL=datos-contrato.component.js.map