import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConsultarContrato2Page } from './consultar-contrato2.page';
import { OwnComponentsModule } from 'src/app/own-components/own-components.module';
var routes = [
    {
        path: '',
        component: ConsultarContrato2Page
    }
];
var ConsultarContrato2PageModule = /** @class */ (function () {
    function ConsultarContrato2PageModule() {
    }
    ConsultarContrato2PageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                OwnComponentsModule
            ],
            declarations: [ConsultarContrato2Page]
        })
    ], ConsultarContrato2PageModule);
    return ConsultarContrato2PageModule;
}());
export { ConsultarContrato2PageModule };
//# sourceMappingURL=consultar-contrato2.module.js.map