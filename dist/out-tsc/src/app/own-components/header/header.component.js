import * as tslib_1 from "tslib";
import { Platform } from '@ionic/angular';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
// Modelos
import { SesionLocalModel } from '../../models/sesion-local.model';
// Servicios
import { SesionService } from 'src/app/services/sesion.service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(platform, router, sesionService) {
        this.platform = platform;
        this.router = router;
        this.sesionService = sesionService;
        this.sesionLocal = new SesionLocalModel();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.sesionLocal = _this.sesionService.sesionLocal;
        });
    };
    HeaderComponent.prototype.mostrarMenu = function () {
        return !this.router.url.startsWith('/login') && !this.router.url.startsWith('/config');
    };
    HeaderComponent.prototype.mostrarBackButton = function () {
        return !this.router.url.startsWith('/login') && !this.router.url.startsWith('/home');
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], HeaderComponent.prototype, "titulo", void 0);
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            Router,
            SesionService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map