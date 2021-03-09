import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigHelper } from '../helpers/config.helper';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
// plugins
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { IniciarSesionModel } from '../models/iniciar-sesion.model';
import { SesionLocalModel } from './../models/sesion-local.model';
// Servicios
import { ConfiguracionService } from './configuracion.service';
var SesionService = /** @class */ (function () {
    function SesionService(platform, http, router, loadingController, toastController, nativeStorage, configuracionService) {
        this.platform = platform;
        this.http = http;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.nativeStorage = nativeStorage;
        this.configuracionService = configuracionService;
        this.sesionLocalKey = 'SESION_LOCAL';
        this.sesionEmpresaKey = 'EMPRESA_LOCAL';
        this.sesionLocal = new SesionLocalModel();
    }
    // Obtiene la información acerca de la sesión actual
    SesionService.prototype.obtenerSesionLocal = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.platform.is('cordova')) {
                // Si estamos en un navegador entonces usamos el localStorage
                var sesionLocal = localStorage.getItem(_this.sesionLocalKey);
                if (sesionLocal) {
                    _this.sesionLocal = JSON.parse(sesionLocal);
                }
                resolve();
            }
            else {
                _this.nativeStorage.getItem(_this.sesionLocalKey)
                    .then(function (sesionLocal) {
                    _this.sesionLocal = sesionLocal;
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
    SesionService.prototype.guardarSesionLocal = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.platform.is('cordova')) {
                // Si estamos en un navegador entonces usamos el localStorage
                localStorage.setItem(_this.sesionLocalKey, JSON.stringify(_this.sesionLocal));
                resolve();
            }
            else {
                _this.nativeStorage.setItem(_this.sesionLocalKey, _this.sesionLocal)
                    .then(function () {
                    resolve();
                })
                    .catch(function (error) {
                    reject(error);
                });
            }
        });
    };
    SesionService.prototype.obtenerInfoEmpresa = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.platform.is('cordova')) {
                // Si estamos en un navegador entonces usamos el localStorage
                var sesionLocal = localStorage.getItem(_this.sesionEmpresaKey);
                if (sesionLocal) {
                    resolve(JSON.parse(sesionLocal));
                }
                else {
                    resolve(null);
                }
            }
            else {
                _this.nativeStorage.getItem(_this.sesionEmpresaKey)
                    .then(function (infoEmpresa) {
                    resolve(JSON.parse(infoEmpresa));
                })
                    .catch(function (error) {
                    if (error.code === 2) {
                        // No existe la key en el storage aún, no hay problema usamos el objeto con la data predeterminada
                        resolve(null);
                    }
                    else {
                        reject(error);
                    }
                });
            }
        });
    };
    SesionService.prototype.guardarInfoEmpresa = function (info) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.platform.is('cordova')) {
                // Si estamos en un navegador entonces usamos el localStorage
                localStorage.setItem(_this.sesionEmpresaKey, info);
                resolve();
            }
            else {
                _this.nativeStorage.setItem(_this.sesionEmpresaKey, info)
                    .then(function () {
                    resolve();
                })
                    .catch(function (error) {
                    reject(error);
                });
            }
        });
    };
    SesionService.prototype.iniciarSesion = function (usuario, contrasena) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadingController.create({
                message: 'Iniciando sesión',
                duration: 30000
            }).then(function (loading) {
                loading.present();
                var dataPost = new IniciarSesionModel(usuario, contrasena);
                var configHelper = new ConfigHelper(_this.configuracionService.config);
                var httpOptions = {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json'
                    })
                };
                _this.http.post(configHelper.getApiUrl() + "/login/authenticate", dataPost, httpOptions)
                    .subscribe(function (data) {
                    console.log(JSON.stringify(data));
                    _this.sesionLocal.sesionIniciada = true;
                    _this.sesionLocal.sesionUsuario = data;
                    _this.guardarSesionLocal()
                        .then(function () {
                        loading.textContent = 'Consultando información de empresa';
                        _this.http.get(configHelper.getApiUrl() + "/pago/funeraria", httpOptions).subscribe(function (res) {
                            _this.guardarInfoEmpresa(JSON.stringify(res)).then(function () {
                                loading.dismiss();
                                var extras = {
                                    replaceUrl: true
                                };
                                _this.router.navigate(['consultar-contrato'], extras);
                            }).catch(function (err) {
                                loading.dismiss();
                                _this.mostrarToast('Error guardando la sesión, intente de nuevo.');
                            });
                        }, function (err) {
                            loading.dismiss();
                            _this.mostrarToast('Error guardando la sesión, intente de nuevo.');
                            reject();
                        });
                    })
                        .catch(function (error) {
                        loading.dismiss();
                        _this.mostrarToast('Error guardando la sesión, intente de nuevo.');
                        reject();
                    });
                }, function (error) {
                    console.log(JSON.stringify(error));
                    _this.mostrarToast('Error autenticando en el servidor');
                    loading.dismiss();
                    reject();
                });
            });
        });
    };
    SesionService.prototype.cerrarSesion = function () {
        var _this = this;
        this.sesionLocal.sesionIniciada = false;
        this.sesionLocal.sesionUsuario = null;
        this.guardarSesionLocal()
            .then(function () {
            var extras = {
                replaceUrl: true
            };
            _this.router.navigate(['login'], extras);
        })
            .catch(function (error) {
            _this.mostrarToast('Error al cerrar la sesión, intente de nuevo');
        });
    };
    SesionService.prototype.mostrarToast = function (texto) {
        this.toastController.create({
            message: texto,
            duration: 2000
        }).then(function (toast) {
            toast.present();
        });
    };
    SesionService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            HttpClient,
            Router,
            LoadingController,
            ToastController,
            NativeStorage,
            ConfiguracionService])
    ], SesionService);
    return SesionService;
}());
export { SesionService };
//# sourceMappingURL=sesion.service.js.map