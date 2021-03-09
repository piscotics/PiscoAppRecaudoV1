import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConsultarPagoPage } from './consultar-pago.page';
import { OwnComponentsModule } from 'src/app/own-components/own-components.module';
var routes = [
    {
        path: '',
        component: ConsultarPagoPage
    }
];
var ConsultarPagoPageModule = /** @class */ (function () {
    function ConsultarPagoPageModule() {
    }
    ConsultarPagoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                OwnComponentsModule
            ],
            declarations: [ConsultarPagoPage]
        })
    ], ConsultarPagoPageModule);
    return ConsultarPagoPageModule;
}());
export { ConsultarPagoPageModule };
//# sourceMappingURL=consultar-pago.module.js.map