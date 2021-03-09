import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConsultarContratoPage } from './consultar-contrato.page';
import { OwnComponentsModule } from 'src/app/own-components/own-components.module';
var routes = [
    {
        path: '',
        component: ConsultarContratoPage
    }
];
var ConsultarContratoPageModule = /** @class */ (function () {
    function ConsultarContratoPageModule() {
    }
    ConsultarContratoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                OwnComponentsModule
            ],
            declarations: [ConsultarContratoPage]
        })
    ], ConsultarContratoPageModule);
    return ConsultarContratoPageModule;
}());
export { ConsultarContratoPageModule };
//# sourceMappingURL=consultar-contrato.module.js.map