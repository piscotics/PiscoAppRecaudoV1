import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RegistroGestionModel } from 'src/app/models/registro-gestion.model';
var RegistroGestion2Page = /** @class */ (function () {
    function RegistroGestion2Page() {
        this.gestion = null;
    }
    RegistroGestion2Page.prototype.ngOnInit = function () {
        var gestion = new RegistroGestionModel();
        gestion.Contrato = 'IND5151514';
        // gestion.Cuota = 32500;
        // gestion.Cedula = '998877662';
        // gestion.Nombre = 'Emiliano Rojas S';
        // gestion.FechaGestion = 'Junio 4 2019';
        // gestion.Reprogramado = 'Agosto 25 2019';
        // gestion.Gestion = 'No tiene dinero';
        gestion.Observaciones = 'Hola como estas\nespero que bien';
        this.gestion = gestion;
    };
    RegistroGestion2Page = tslib_1.__decorate([
        Component({
            selector: 'app-registro-gestion2',
            templateUrl: './registro-gestion2.page.html',
            styleUrls: ['./registro-gestion2.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RegistroGestion2Page);
    return RegistroGestion2Page;
}());
export { RegistroGestion2Page };
//# sourceMappingURL=registro-gestion2.page.js.map