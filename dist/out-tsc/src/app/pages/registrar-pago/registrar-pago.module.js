import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegistrarPagoPage } from './registrar-pago.page';
import { OwnComponentsModule } from 'src/app/own-components/own-components.module';
var routes = [
    {
        path: '',
        component: RegistrarPagoPage
    }
];
var RegistrarPagoPageModule = /** @class */ (function () {
    function RegistrarPagoPageModule() {
    }
    RegistrarPagoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                OwnComponentsModule
            ],
            declarations: [RegistrarPagoPage]
        })
    ], RegistrarPagoPageModule);
    return RegistrarPagoPageModule;
}());
export { RegistrarPagoPageModule };
//# sourceMappingURL=registrar-pago.module.js.map