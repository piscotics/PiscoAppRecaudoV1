import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegistroGestionPage } from './registro-gestion.page';
import { OwnComponentsModule } from 'src/app/own-components/own-components.module';
var routes = [
    {
        path: '',
        component: RegistroGestionPage
    }
];
var RegistroGestionPageModule = /** @class */ (function () {
    function RegistroGestionPageModule() {
    }
    RegistroGestionPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                OwnComponentsModule
            ],
            declarations: [RegistroGestionPage]
        })
    ], RegistroGestionPageModule);
    return RegistroGestionPageModule;
}());
export { RegistroGestionPageModule };
//# sourceMappingURL=registro-gestion.module.js.map