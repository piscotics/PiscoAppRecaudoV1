import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform, MenuController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// Modelos
import { SesionLocalModel } from './models/sesion-local.model';
// Servicios
import { ConfiguracionService } from 'src/app/services/configuracion.service';
import { SesionService } from './services/sesion.service';
import { Router } from '@angular/router';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, router, menu, alertController, configService, sesionService, androidPermissions) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.menu = menu;
        this.alertController = alertController;
        this.configService = configService;
        this.sesionService = sesionService;
        this.androidPermissions = androidPermissions;
        this.mostrandoConfirmacionCerrarApp = false;
        this.sesionLocal = new SesionLocalModel();
        this.menuPrincipalId = 'menuPrincipal';
        this.initializeApp();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backButtonSubscription = this.platform.backButton.subscribe(function () {
            if (!_this.mostrandoConfirmacionCerrarApp && (_this.router.url.startsWith('/home') || _this.router.url.startsWith('/login'))) {
                _this.mostrandoConfirmacionCerrarApp = true;
                _this.mostrarConfirmacionCerrarApp();
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.backButtonSubscription.unsubscribe();
    };
    AppComponent.prototype.mostrarConfirmacionCerrarApp = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirmación',
                            message: '¿Quieres salir de la aplicación?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        alert.dismiss();
                                        _this.mostrandoConfirmacionCerrarApp = false;
                                    }
                                }, {
                                    text: 'Si',
                                    handler: function () {
                                        navigator['app'].exitApp();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Cargamos la configuración y el estado de la sesión
            Promise.all([
                _this.configService.obtenerConfiguracion(),
                _this.sesionService.obtenerSesionLocal()
            ]).then(function () {
                _this.sesionLocal = _this.sesionService.sesionLocal;
                if (_this.platform.is('ios')) {
                    _this.statusBar.overlaysWebView(true);
                }
                if (_this.platform.is('android')) {
                    _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.BLUETOOTH).then(function (res) {
                    }, function (err) {
                        _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.BLUETOOTH).then(function (res) {
                        }, function (err) {
                        });
                    });
                    _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.INTERNET).then(function (res) { }).catch(function (err) {
                        _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.INTERNET).then(function (res) { }).catch(function (err) { });
                    });
                }
                // this.statusBar.styleDefault();
                _this.statusBar.backgroundColorByName('lightGray');
                _this.splashScreen.hide();
            });
        });
    };
    AppComponent.prototype.mostrarMenu = function () {
        return !this.router.url.startsWith('/login') && !this.router.url.startsWith('/config');
    };
    AppComponent.prototype.consultarContrato = function () {
        this.router.navigate(['consultar-contrato']);
        this.menu.close(this.menuPrincipalId);
    };
    AppComponent.prototype.consultarPago = function () {
        this.router.navigate(['consultar-pago']);
        this.menu.close(this.menuPrincipalId);
    };
    AppComponent.prototype.cuadreCaja = function () {
        this.router.navigate(['cuadre-caja']);
        this.menu.close(this.menuPrincipalId);
    };
    AppComponent.prototype.geolicalizacion = function () {
        alert('Debe ir a la pantalla de golocalización (Pendiente)');
    };
    // configurarImpresora() {
    //   alert('Debe ir a la pantalla de configurar impresora (Pendiente)');
    // }
    AppComponent.prototype.cerrarSesion = function () {
        this.sesionService.cerrarSesion();
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            Router,
            MenuController,
            AlertController,
            ConfiguracionService,
            SesionService,
            AndroidPermissions])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map