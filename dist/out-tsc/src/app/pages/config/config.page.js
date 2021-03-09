import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ToastController, Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
// plugins
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ConfigModel } from './../../models/config.model';
// Servicios
import { ConfiguracionService } from './../../services/configuracion.service';
import { PrintService } from '../../services/print.service';
var ConfigPage = /** @class */ (function () {
    function ConfigPage(platform, router, toastController, webview, file, imagePicker, configuracionService, print, alert) {
        var _this = this;
        this.platform = platform;
        this.router = router;
        this.toastController = toastController;
        this.webview = webview;
        this.file = file;
        this.imagePicker = imagePicker;
        this.configuracionService = configuracionService;
        this.print = print;
        this.alert = alert;
        this.config = new ConfigModel();
        this.mostrarRuta = false;
        this.actualizarcampoConfig = function (campo, valor) {
            _this.config[campo] = valor;
        };
        this.guardarConfiguracionClick = function () {
            if (!_this.config.servidorIp) {
                _this.mostrarToast('Por favor ingrese la IP del servidor');
                return;
            }
            if (_this.config.servidorIp.split('.').length !== 4 && _this.config.servidorIp.toLocaleLowerCase() !== 'localhost') {
                _this.mostrarToast('Por favor ingrese una IP válida');
                return;
            }
            if (!_this.config.servidorPuerto) {
                _this.mostrarToast('Por favor ingrese el puerto del servidor');
                return;
            }
            _this.configuracionService.guardarConfiguracion()
                .then(function () {
                _this.mostrarToast('Configuración guardada');
            })
                .catch(function (error) {
                _this.mostrarToast("Error guardando la configuraci\u00F3n: " + error.exception);
            });
        };
        this.mostrarToast = function (mensaje) {
            _this.toastController.create({
                message: mensaje,
                duration: 2000
            }).then(function (toast) {
                toast.present();
            });
        };
    }
    ConfigPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Cargamos la configuración en pantalla
            _this.config = _this.configuracionService.config;
        });
    };
    ConfigPage.prototype.cambiarLogoEmpresaClick = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            this.mostrarToast('Esta funcionalidad sólo es permitida en Android o IOS');
            return;
        }
        var options = {
            maximumImagesCount: 1
        };
        this.imagePicker.getPictures(options)
            .then(function (results) {
            var _loop_1 = function () {
                var rutaArchivoActual = results[i];
                var directorioActual = rutaArchivoActual.substr(0, rutaArchivoActual.lastIndexOf('/'));
                var nombreArchivo = rutaArchivoActual.substr((rutaArchivoActual.lastIndexOf('/') + 1));
                var extensionArchivo = nombreArchivo.substr(nombreArchivo.lastIndexOf('.'));
                var nuevoDirectorio = _this.file.dataDirectory + "logos/";
                var nuevoNombreArchivo = "logo_empresa" + extensionArchivo;
                _this.file.resolveDirectoryUrl(_this.file.dataDirectory)
                    .then(function (directoryEntry) {
                    directoryEntry.getDirectory('logos', { create: true }, function (logosEntry) {
                        _this.file.moveFile(directorioActual, nombreArchivo, nuevoDirectorio, nuevoNombreArchivo)
                            .then(function (archivoMovido) {
                            _this.config.logoEmpresa = archivoMovido.toURL();
                            _this.actualizaLogoEmpresa();
                            console.log("El archivo se movio desde " + rutaArchivoActual + " a " + archivoMovido.toURL());
                        })
                            .catch(function (error) {
                            _this.mostrarToast('Error moviendo el archivo');
                        });
                    }, function (error) {
                        _this.mostrarToast('Error obteniendo diectorio de logos');
                    });
                })
                    .catch(function (error) {
                    _this.mostrarToast('Error resolviendo el directorio de dataDirectory');
                });
            };
            for (var i = 0; i < results.length; i++) {
                _loop_1();
            }
        }, function (err) {
            _this.mostrarToast('Error obteniendo la galería');
        });
    };
    ConfigPage.prototype.actualizaLogoEmpresa = function () {
        var _this = this;
        setTimeout(function () {
            _this.configuracionService.generarRutaLogoReutilizable();
        }, 500);
    };
    ConfigPage.prototype.configurarImpresoraClick = function () {
        /**
         * Se genera lógica para consulta de dispositivos bluetooth.
         */
        var _this = this;
        this.print.searchBt().then(function (res) {
            var inputs = [];
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var item = res_1[_i];
                inputs.push({
                    name: item.address,
                    type: 'radio',
                    value: item.address,
                    label: item.name
                });
            }
            var modalPrint;
            _this.alert.create({
                header: 'Dispositivos',
                inputs: inputs,
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary'
                    },
                    {
                        text: 'Aceptar',
                        handler: function (data) {
                            _this.configuracionService.guardarImpresora(data).then(function (res) {
                                _this.toastController.create({
                                    message: 'Impresora configurada satisfactoriamente',
                                    duration: 2000
                                }).then(function (res) {
                                    res.present();
                                });
                            }).catch(function (err) {
                                _this.toastController.create({ message: err.message, duration: 2000 }).then(function (obj) { obj.present(); });
                            });
                        }
                    }
                ]
            }).then(function (res) {
                modalPrint = res;
                res.present();
            });
        }).catch(function (err) {
            _this.alert.create({
                header: 'Error',
                message: 'Se ha presentado un error al conectarnos con sus dispositivos Bluetooth, por favor revise su conexión',
                buttons: ['Ok']
            }).then(function (res) {
                res.present();
            });
        });
    };
    ConfigPage = tslib_1.__decorate([
        Component({
            selector: 'app-config',
            templateUrl: './config.page.html',
            styleUrls: ['./config.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            Router,
            ToastController,
            WebView,
            File,
            ImagePicker,
            ConfiguracionService,
            PrintService,
            AlertController])
    ], ConfigPage);
    return ConfigPage;
}());
export { ConfigPage };
//# sourceMappingURL=config.page.js.map