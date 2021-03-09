import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var ConsultarContratoPage = /** @class */ (function () {
    function ConsultarContratoPage(router) {
        this.router = router;
        this.criterioBusqueda = 'CEDULA';
        this.textoBusqueda = '';
    }
    ConsultarContratoPage.prototype.ngOnInit = function () {
    };
    ConsultarContratoPage.prototype.consultarContrato = function () {
        if (!this.criterioBusqueda) {
            alert('Por favor indique el tipo de búsqueda');
            return;
        }
        if (!this.textoBusqueda) {
            alert('Por favor ingresa un criterio de búsqueda');
            return;
        }
        this.router.navigate(['consultar-contrato2', this.criterioBusqueda, this.textoBusqueda]);
    };
    ConsultarContratoPage.prototype.cuadrecaja = function () {
        this.router.navigate(['cuadre-caja']);
    };
    ConsultarContratoPage = tslib_1.__decorate([
        Component({
            selector: 'app-consultar-contrato',
            templateUrl: './consultar-contrato.page.html',
            styleUrls: ['./consultar-contrato.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ConsultarContratoPage);
    return ConsultarContratoPage;
}());
export { ConsultarContratoPage };
//# sourceMappingURL=consultar-contrato.page.js.map