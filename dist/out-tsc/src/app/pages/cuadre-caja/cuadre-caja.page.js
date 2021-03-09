import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CuadreCajaModel } from '../../models/cuadre-caja.model';
import { PagosService } from '../../services/pagos.service';
import { SesionService } from 'src/app/services/sesion.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { PrintService } from '../../services/print.service';
import { ConfiguracionService } from '../../services/configuracion.service';
import * as moment from 'moment';
var CuadreCajaPage = /** @class */ (function() {
    function CuadreCajaPage(pagoservice, sesionService, toastController, print, loading, config, sesion) {
        this.pagoservice = pagoservice;
        this.sesionService = sesionService;
        this.toastController = toastController;
        this.print = print;
        this.loading = loading;
        this.config = config;
        this.sesion = sesion;
        this.textoBusqueda = new Date();
        this.cuadreCaja = null;
        this.sesionLocal = null;
    }
    CuadreCajaPage.prototype.cambiofecha = function(event) {
        this.textoBusqueda = event.target.value;
    };
    CuadreCajaPage.prototype.consultarCuadre = function() {
        var _this = this;
        if (!this.textoBusqueda) {
            alert('Por favor ingresa un criterio de búsqueda');
            return;
        }
        this.sesionLocal = this.sesionService.sesionLocal;
        this.pagoservice.cuadreCaja(this.textoBusqueda, this.sesionLocal.sesionUsuario.USERNAME)
            .then(function(cuadrecajaresponse) {
                var cuadreCaja = new CuadreCajaModel();
                cuadreCaja.fecha = cuadrecajaresponse.FECHA;
                cuadreCaja.cantidadpagos = cuadrecajaresponse.CANTIDADPAGOS;
                cuadreCaja.valor = cuadrecajaresponse.VALORPAGOS;
                cuadreCaja.cantidadanulados = cuadrecajaresponse.CANTIDADANULADOS;
                cuadreCaja.cantidadnovedades = cuadrecajaresponse.CANTIDADNOVEDADES;
                _this.cuadreCaja = cuadreCaja;
            });
    };
    CuadreCajaPage.prototype.imprimir = function() {
        var _this = this;
        this.loading.create({
            message: 'Obteniendo configuración de impresora'
        }).then(function(loading) {
            loading.present();
            _this.config.obtenerImpresora().then(function(address) {
                _this.sesion.obtenerInfoEmpresa().then(function(info) {
                    var printBody = '';
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_ALIGN_CT;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += _this.print.normailizeText(info.NOMBRE);
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.normailizeText(info.NIT);
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.normailizeText((info.CIUDAD == null ? '' : (info.CIUDAD + ' - ')) + info.DIRECCION);
                    printBody += _this.print.PosCommand.LF;
                    printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_ALIGN_LT;
                    printBody += _this.print.mapTextColumn('Fecha:', 'Cantidad Pagos:');
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += _this.print.mapTextColumn(moment(_this.cuadreCaja.fecha).format('MMM DD, YYYY'), _this.cuadreCaja.cantidadpagos + '');
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += _this.print.mapTextColumn('Valor Pagos:', 'Cant. Anulados:');
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += _this.print.mapTextColumn(_this.print.formatMoney(_this.cuadreCaja.valor, 0, '.', ',') + '', _this.cuadreCaja.cantidadanulados + '');
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Cantidad Novedades:';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += _this.cuadreCaja.cantidadnovedades + '';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Fecha/Hora Impresion';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += moment().format('DD/MM/YYYY HH:mm:ss');
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Usuario';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += _this.sesion.sesionLocal.sesionUsuario.NOMBRES; ///+ ' ' + _this.sesion.sesionLocal.sesionUsuario.APELLIDOS;
                    printBody += _this.print.PosCommand.LF;
                    printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.normailizeText(info.RESOLUCION);
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.LF;
                    var src = _this.config.generarRutaLogoReutilizable();
                    _this.print.print(address, printBody).then(function() {
                        loading.dismiss();
                    }).catch(function(err) {
                        loading.dismiss();
                    });
                }).catch(function(err) {});
            }).catch(function(err) {
                loading.dismiss();
                _this.toastController.create({ message: err.message, duration: 2000 }).then(function(obj) { obj.present(); });
            });
        });
    };
    CuadreCajaPage = tslib_1.__decorate([
        Component({
            selector: 'app-cuadre-caja',
            templateUrl: './cuadre-caja.page.html',
            styleUrls: ['./cuadre-caja.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [PagosService,
            SesionService,
            ToastController,
            PrintService,
            LoadingController,
            ConfiguracionService,
            SesionService
        ])
    ], CuadreCajaPage);
    return CuadreCajaPage;
}());
export { CuadreCajaPage };
//# sourceMappingURL=cuadre-caja.page.js.map