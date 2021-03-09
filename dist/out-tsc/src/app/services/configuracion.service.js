import * as tslib_1 from "tslib";
import { ConfigModel } from './../models/config.model';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
// Plugins
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
var ConfiguracionService = /** @class */ (function () {
    function ConfiguracionService(platform, nativeStorage, webview) {
        this.platform = platform;
        this.nativeStorage = nativeStorage;
        this.webview = webview;
        this.configKey = 'recaudos-config';
        this.printKey = 'print-config';
        this.config = new ConfigModel();
    }
    // Obtiene la configuración de la aplicación
    ConfiguracionService.prototype.obtenerConfiguracion = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.platform.is('cordova')) {
                // Si estamos en un navegador entonces usamos el localStorage
                var config = localStorage.getItem(_this.configKey);
                if (config) {
                    _this.config = JSON.parse(config);
                }
                resolve();
            }
            else {
                _this.nativeStorage.getItem(_this.configKey)
                    .then(function (config) {
                    _this.config = config;
                    resolve();
                })
                    .catch(function (error) {
                    if (error.code === 2) {
                        // No existe la key en el storage aún, no hay problema usamos el objeto con la data predeterminada
                        resolve();
                    }
                    else {
                        reject(error);
                    }
                });
            }
        });
    };
    ConfiguracionService.prototype.generarRutaLogoReutilizable = function () {
        if (this.config.logoEmpresa) {
            this.config.logoEmpresaUtilizable = this.webview.convertFileSrc(this.config.logoEmpresa) + "?v=" + new Date().getTime();
        }
        else {
            this.config.logoEmpresaUtilizable = '';
        }
    };
    ConfiguracionService.prototype.guardarConfiguracion = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.generarRutaLogoReutilizable();
            if (!_this.platform.is('cordova')) {
                // Si estamos en un navegador entonces usamos el localStorage
                localStorage.setItem(_this.configKey, JSON.stringify(_this.config));
                resolve();
            }
            else {
                _this.nativeStorage.setItem(_this.configKey, _this.config)
                    .then(function () {
                    resolve();
                })
                    .catch(function (error) {
                    reject(error);
                });
            }
        });
    };
    ConfiguracionService.prototype.guardarImpresora = function (printAddress) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.platform.is('cordova')) {
                localStorage.setItem(_this.printKey, printAddress);
                resolve();
            }
            else {
                _this.nativeStorage.setItem(_this.printKey, printAddress)
                    .then(function () {
                    resolve();
                })
                    .catch(function (error) {
                    reject(error);
                });
            }
        });
    };
    ;
    ConfiguracionService.prototype.obtenerImpresora = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.platform.is('cordova')) {
                var config = localStorage.getItem('print-config');
                resolve(config);
            }
            else {
                _this.nativeStorage.getItem('print-config')
                    .then(function (config) {
                    resolve(config);
                })
                    .catch(function (error) {
                    if (error.code === 2) {
                        resolve(null);
                    }
                    else {
                        reject(error);
                    }
                });
            }
        });
    };
    ;
    ConfiguracionService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            NativeStorage,
            WebView])
    ], ConfiguracionService);
    return ConfiguracionService;
}());
export { ConfiguracionService };
//# sourceMappingURL=configuracion.service.js.map