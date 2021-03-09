import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegistrarPago2Page } from './registrar-pago2.page';
import { OwnComponentsModule } from 'src/app/own-components/own-components.module';
var routes = [
    {
        path: '',
        component: RegistrarPago2Page
    }
];
var RegistrarPago2PageModule = /** @class */ (function () {
    function RegistrarPago2PageModule() {
    }
    RegistrarPago2PageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                OwnComponentsModule
            ],
            declarations: [RegistrarPago2Page]
        })
    ], RegistrarPago2PageModule);
    return RegistrarPago2PageModule;
}());
export { RegistrarPago2PageModule };
//# sourceMappingURL=registrar-pago2.module.js.map