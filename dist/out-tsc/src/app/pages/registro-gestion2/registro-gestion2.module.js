import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegistroGestion2Page } from './registro-gestion2.page';
import { OwnComponentsModule } from 'src/app/own-components/own-components.module';
var routes = [
    {
        path: '',
        component: RegistroGestion2Page
    }
];
var RegistroGestion2PageModule = /** @class */ (function () {
    function RegistroGestion2PageModule() {
    }
    RegistroGestion2PageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                OwnComponentsModule
            ],
            declarations: [RegistroGestion2Page]
        })
    ], RegistroGestion2PageModule);
    return RegistroGestion2PageModule;
}());
export { RegistroGestion2PageModule };
//# sourceMappingURL=registro-gestion2.module.js.map