import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
var BeneficiariosComponent = /** @class */ (function () {
    function BeneficiariosComponent(modalctrl, navParams) {
        this.modalctrl = modalctrl;
        this.navParams = navParams;
        this.beneficiarios = [];
    }
    BeneficiariosComponent.prototype.ngOnInit = function () { };
    BeneficiariosComponent.prototype.ionViewWillEnter = function () {
        this.beneficiarios = this.navParams.get('beneficiarios');
    };
    BeneficiariosComponent.prototype.close = function () {
        this.modalctrl.dismiss(true);
    };
    BeneficiariosComponent = tslib_1.__decorate([
        Component({
            selector: 'app-beneficiarios',
            templateUrl: './beneficiarios.component.html',
            styleUrls: ['./beneficiarios.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, NavParams])
    ], BeneficiariosComponent);
    return BeneficiariosComponent;
}());
export { BeneficiariosComponent };
//# sourceMappingURL=beneficiarios.component.js.map