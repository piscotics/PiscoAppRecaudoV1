import * as tslib_1 from "tslib";
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
var RegistrarPago2Page = /** @class */ (function () {
    function RegistrarPago2Page(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.pago = null;
    }
    RegistrarPago2Page.prototype.ngOnInit = function () {
        var pago = this.activatedRoute.snapshot.paramMap.get('pago');
        if (pago) {
            this.pago = JSON.parse(pago);
        }
    };
    RegistrarPago2Page = tslib_1.__decorate([
        Component({
            selector: 'app-registrar-pago2',
            templateUrl: './registrar-pago2.page.html',
            styleUrls: ['./registrar-pago2.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
    ], RegistrarPago2Page);
    return RegistrarPago2Page;
}());
export { RegistrarPago2Page };
//# sourceMappingURL=registrar-pago2.page.js.map