import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActualizarDatosPage } from './actualizar-datos.page';
import { OwnComponentsModule } from 'src/app/own-components/own-components.module';
var routes = [
    {
        path: '',
        component: ActualizarDatosPage
    }
];
var ActualizarDatosPageModule = /** @class */ (function () {
    function ActualizarDatosPageModule() {
    }
    ActualizarDatosPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                OwnComponentsModule
            ],
            declarations: [ActualizarDatosPage]
        })
    ], ActualizarDatosPageModule);
    return ActualizarDatosPageModule;
}());
export { ActualizarDatosPageModule };
//# sourceMappingURL=actualizar-datos.module.js.map