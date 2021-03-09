import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CuadreCajaPage } from './cuadre-caja.page';
import { OwnComponentsModule } from 'src/app/own-components/own-components.module';
var routes = [
    {
        path: '',
        component: CuadreCajaPage
    }
];
var CuadreCajaPageModule = /** @class */ (function () {
    function CuadreCajaPageModule() {
    }
    CuadreCajaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                OwnComponentsModule
            ],
            declarations: [CuadreCajaPage]
        })
    ], CuadreCajaPageModule);
    return CuadreCajaPageModule;
}());
export { CuadreCajaPageModule };
//# sourceMappingURL=cuadre-caja.module.js.map