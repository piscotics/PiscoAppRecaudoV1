import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SesionLocalModel } from 'src/app/models/sesion-local.model';
import { Platform, ModalController, NavParams } from '@ionic/angular';
import { SesionService } from 'src/app/services/sesion.service';
var ModalConfirmarPagoComponent = /** @class */ (function () {
    function ModalConfirmarPagoComponent(platform, navParams, modalController, sesionService) {
        this.platform = platform;
        this.navParams = navParams;
        this.modalController = modalController;
        this.sesionService = sesionService;
        this.registroPago = null;
        this.sesionLocal = new SesionLocalModel();
    }
    ModalConfirmarPagoComponent.prototype.ionViewWillEnter = function () {
        this.registroPago = this.navParams.get('registroPago');
    };
    ModalConfirmarPagoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.sesionLocal = _this.sesionService.sesionLocal;
        });
    };
    ModalConfirmarPagoComponent.prototype.aceptar = function () {
        this.modalController.dismiss(true);
    };
    ModalConfirmarPagoComponent.prototype.cancelar = function () {
        this.modalController.dismiss(false);
    };
    ModalConfirmarPagoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-modal-confirmar-pago',
            templateUrl: './modal-confirmar-pago.component.html',
            styleUrls: ['./modal-confirmar-pago.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            NavParams,
            ModalController,
            SesionService])
    ], ModalConfirmarPagoComponent);
    return ModalConfirmarPagoComponent;
}());
export { ModalConfirmarPagoComponent };
//# sourceMappingURL=modal-confirmar-pago.component.js.map