import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GeolocalizacionPage } from './geolocalizacion.page';
import { OwnComponentsModule } from 'src/app/own-components/own-components.module';
var routes = [
    {
        path: '',
        component: GeolocalizacionPage
    }
];
var GeolocalizacionPageModule = /** @class */ (function () {
    function GeolocalizacionPageModule() {
    }
    GeolocalizacionPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                OwnComponentsModule
            ],
            declarations: [GeolocalizacionPage]
        })
    ], GeolocalizacionPageModule);
    return GeolocalizacionPageModule;
}());
export { GeolocalizacionPageModule };
//# sourceMappingURL=geolocalizacion.module.js.map