import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
// Modelos
import { ConfigModel } from 'src/app/models/config.model';
// Servicios
import { ConfiguracionService } from 'src/app/services/configuracion.service';
var LogoEmpresaComponent = /** @class */ (function () {
    function LogoEmpresaComponent(platform, configuracionService) {
        this.platform = platform;
        this.configuracionService = configuracionService;
        this.config = new ConfigModel();
        this.logoEmpresaSrc = null;
    }
    LogoEmpresaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.config = _this.configuracionService.config;
        });
    };
    LogoEmpresaComponent = tslib_1.__decorate([
        Component({
            selector: 'app-logo-empresa',
            templateUrl: './logo-empresa.component.html',
            styleUrls: ['./logo-empresa.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            ConfiguracionService])
    ], LogoEmpresaComponent);
    return LogoEmpresaComponent;
}());
export { LogoEmpresaComponent };
//# sourceMappingURL=logo-empresa.component.js.map