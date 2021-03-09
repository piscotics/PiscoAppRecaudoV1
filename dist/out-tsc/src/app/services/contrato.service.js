import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Platform, ToastController, LoadingController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ConfigHelper } from '../helpers/config.helper';
// Modelos
import { ConfigModel } from '../models/config.model';
// Servicios
import { ConfiguracionService } from './configuracion.service';
var ContratoService = /** @class */ (function () {
    function ContratoService(platform, http, toastController, loadingController, configuracionService) {
        this.platform = platform;
        this.http = http;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.configuracionService = configuracionService;
        this.config = new ConfigModel();
        this.config = this.configuracionService.config;
    }
    ContratoService.prototype.consultarContratoPorNumero = function (numeroContrato) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var params = new HttpParams().set('NumberContract', numeroContrato);
            var configHelper = new ConfigHelper(_this.config);
            var httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                }),
                params: params
            };
            _this.loadingController.create({
                message: 'Consultando contrato',
                duration: 30000
            }).then(function (loading) {
                loading.present();
                _this.http.post(configHelper.getApiUrl() + "/contrato/searchnumbercontract", null, httpOptions)
                    .subscribe(function (contrato) {
                    console.log(JSON.stringify(contrato));
                    if (!contrato.Cedula) {
                        loading.dismiss();
                        _this.mostrarToast('No se encontró el contrato, intente nuevamente.');
                        reject();
                    }
                    else {
                        loading.dismiss();
                        resolve(contrato);
                    }
                }, function (error) {
                    loading.dismiss();
                    console.log(JSON.stringify(error));
                    reject();
                    _this.mostrarToast('Error consultando contrato');
                });
            });
        });
    };
    ContratoService.prototype.consultarBeneficiarrios = function (cedula) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var params = new HttpParams().set('NumberId', cedula);
            var configHelper = new ConfigHelper(_this.config);
            var httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                }),
                params: params
            };
            _this.loadingController.create({
                message: 'Consultando Beneficiarios',
                duration: 30000
            }).then(function (loading) {
                loading.present();
                _this.http.post(configHelper.getApiUrl() + "/contrato/searchBene", null, httpOptions)
                    .subscribe(function (beneficiarios) {
                    console.log(JSON.stringify(beneficiarios));
                    if (beneficiarios.length === 0) {
                        loading.dismiss();
                        _this.mostrarToast('No se encontraron Beneficiarios, intente nuevamente.');
                        reject();
                    }
                    else {
                        loading.dismiss();
                        resolve(beneficiarios);
                    }
                }, function (error) {
                    loading.dismiss();
                    console.log(JSON.stringify(error));
                    reject();
                    _this.mostrarToast('Error consultando Beneficiarios');
                });
            });
        });
    };
    ;
    ContratoService.prototype.consultarContratoPorCedula = function (cedula) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var params = new HttpParams().set('NumberId', cedula);
            var configHelper = new ConfigHelper(_this.config);
            var httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                }),
                params: params
            };
            _this.loadingController.create({
                message: 'Consultando contratos',
                duration: 30000
            }).then(function (loading) {
                loading.present();
                _this.http.post(configHelper.getApiUrl() + "/contrato/searchnumberid", null, httpOptions)
                    .subscribe(function (contrato) {
                    console.log(JSON.stringify(contrato));
                    if (contrato.length === 0) {
                        loading.dismiss();
                        _this.mostrarToast('No se encontraron contratos, intente nuevamente.');
                        reject();
                    }
                    else {
                        loading.dismiss();
                        resolve(contrato);
                    }
                }, function (error) {
                    loading.dismiss();
                    console.log(JSON.stringify(error));
                    reject();
                    _this.mostrarToast('Error consultando contratos');
                });
            });
        });
    };
    ContratoService.prototype.mostrarToast = function (texto) {
        this.toastController.create({
            message: texto,
            duration: 2000
        }).then(function (toast) {
            toast.present();
        });
    };
    ContratoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            HttpClient,
            ToastController,
            LoadingController,
            ConfiguracionService])
    ], ContratoService);
    return ContratoService;
}());
export { ContratoService };
//# sourceMappingURL=contrato.service.js.map