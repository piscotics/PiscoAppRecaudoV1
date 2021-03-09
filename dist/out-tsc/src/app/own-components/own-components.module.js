import * as tslib_1 from "tslib";
import { ModalConfirmarPagoComponent } from './modal-confirmar-pago/modal-confirmar-pago.component';
import { BeneficiariosComponent } from './beneficiarios/beneficiarios.component';
import { LogoEmpresaComponent } from './logo-empresa/logo-empresa.component';
import { DatosPagoComponent } from './datos-pago/datos-pago.component';
import { DatosContratoComponent } from './datos-contrato/datos-contrato.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
var OwnComponentsModule = /** @class */ (function () {
    function OwnComponentsModule() {
    }
    OwnComponentsModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                HeaderComponent,
                DatosContratoComponent,
                DatosPagoComponent,
                LogoEmpresaComponent,
                ModalConfirmarPagoComponent,
                BeneficiariosComponent
            ],
            imports: [
                CommonModule,
                IonicModule
            ],
            exports: [
                HeaderComponent,
                DatosContratoComponent,
                DatosPagoComponent,
                LogoEmpresaComponent
            ],
            entryComponents: [ModalConfirmarPagoComponent, BeneficiariosComponent]
        })
    ], OwnComponentsModule);
    return OwnComponentsModule;
}());
export { OwnComponentsModule };
//# sourceMappingURL=own-components.module.js.map