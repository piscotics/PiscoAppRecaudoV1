import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var MenuPage = /** @class */ (function () {
    function MenuPage() {
        this.logoEmpresa = null;
    }
    MenuPage.prototype.ngOnInit = function () {
    };
    MenuPage.prototype.consultarContrato = function () {
        alert('consultarContrato');
    };
    MenuPage.prototype.consultarPago = function () {
        alert('consultarPago');
    };
    MenuPage.prototype.cuadreCaja = function () {
        alert('cuadreCaja');
    };
    MenuPage.prototype.geolicalizacion = function () {
        alert('geolicalizacion');
    };
    MenuPage.prototype.configurarImpresora = function () {
        alert('configurarImpresora');
    };
    MenuPage = tslib_1.__decorate([
        Component({
            selector: 'app-menu',
            templateUrl: './menu.page.html',
            styleUrls: ['./menu.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MenuPage);
    return MenuPage;
}());
export { MenuPage };
//# sourceMappingURL=menu.page.js.map