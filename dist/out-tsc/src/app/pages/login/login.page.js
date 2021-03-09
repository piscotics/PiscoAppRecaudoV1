import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ConfigModel } from 'src/app/models/config.model';
import { SesionLocalModel } from 'src/app/models/sesion-local.model';
// Servicios
import { ConfiguracionService } from 'src/app/services/configuracion.service';
import { SesionService } from './../../services/sesion.service';
var LoginPage = /** @class */ (function () {
    function LoginPage(platform, router, toastController, alertController, configuracionService, sesionService) {
        var _this = this;
        this.platform = platform;
        this.router = router;
        this.toastController = toastController;
        this.alertController = alertController;
        this.configuracionService = configuracionService;
        this.sesionService = sesionService;
        this.config = new ConfigModel();
        this.sesionLocal = new SesionLocalModel();
        this.usuario = '';
        this.clave = '';
        this.mostrarToast = function (mensaje) {
            _this.toastController.create({
                message: mensaje,
                duration: 2000
            }).then(function (toast) {
                toast.present();
            });
        };
        this.mostrarAlerta = function (mensaje) {
            _this.alertController.create({
                header: 'Informaciòn',
                message: mensaje,
                buttons: [{
                        role: 'cancel',
                        text: 'Ok',
                    }]
            }).then(function (alert) {
                alert.present();
            });
        };
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            /*
              Primero preguntamos si el usuario ya inicio sesión, si ya inició
              entonces lo redireccionamos al la pantalla de consulta de contrato
            */
            _this.sesionLocal = _this.sesionService.sesionLocal;
            _this.config = _this.configuracionService.config;
            if (_this.sesionLocal.sesionIniciada) {
                // this.mostrarToast('Ya inicio sesión');
                _this.router.navigate(['consultar-contrato'], { replaceUrl: true });
            }
        });
    };
    LoginPage.prototype.iniciarSesion = function () {
        if (this.usuario.replace(/\s+/g, '').length === 0) {
            this.mostrarAlerta('Por favor ingrese el usuario');
            return;
        }
        if (this.clave.replace(/\s+/g, '').length === 0) {
            this.mostrarAlerta('Por favor ingrese la clave');
            return;
        }
        this.sesionService.iniciarSesion(this.usuario, this.clave);
    };
    LoginPage.prototype.irAConfiguracion = function () {
        this.router.navigate(['config']);
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            Router,
            ToastController,
            AlertController,
            ConfiguracionService,
            SesionService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map