import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
// Modelos
import { SesionLocalModel } from 'src/app/models/sesion-local.model';
// Servicios
import { SesionService } from 'src/app/services/sesion.service';
var HomePage = /** @class */ (function () {
    function HomePage(platform, sesionService) {
        var _this = this;
        this.platform = platform;
        this.sesionService = sesionService;
        this.sesionLocal = new SesionLocalModel();
        this.platform.ready().then(function () {
            _this.sesionLocal = _this.sesionService.sesionLocal;
        });
    }
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SesionService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map