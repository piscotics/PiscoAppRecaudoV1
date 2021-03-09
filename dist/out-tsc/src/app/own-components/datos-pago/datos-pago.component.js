import * as tslib_1 from "tslib";
import { ToastController, LoadingController } from '@ionic/angular';
import { ConsultaPagoModel } from '../../models/consulta-pago.model';
import { Component, Input } from '@angular/core';
// Plugins
import { Printer } from '@ionic-native/printer/ngx';
import { PrintService } from '../../services/print.service';
import { ConfiguracionService } from '../../services/configuracion.service';
import { SesionService } from 'src/app/services/sesion.service';
import * as moment from 'moment';
var DatosPagoComponent = /** @class */ (function () {
    function DatosPagoComponent(printer, toastController, print, loading, config, sesion) {
        this.printer = printer;
        this.toastController = toastController;
        this.print = print;
        this.loading = loading;
        this.config = config;
        this.sesion = sesion;
    }
    DatosPagoComponent.prototype.ngOnInit = function () { };
    DatosPagoComponent.prototype.imprimir = function () {
        /** Se comenta código anterior por inexistencia de lógica. */
        // this.printer.print('').catch(() => {
        //   this.mostrarToastSimple('Error al imprimir');
        // });
        var _this = this;
        /**
         * Se inicializa el código para realizar la impresión
         * 1) Se crea la cadena para el cuerpo del pos.
         */
        this.loading.create({
            message: 'Obteniendo configuración de impresora'
        }).then(function (loading) {
            loading.present();
            _this.config.obtenerImpresora().then(function (address) {
                _this.sesion.obtenerInfoEmpresa().then(function (info) {
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
                    printBody += '| | | | O R I G I N A L | | | |';
                    printBody += _this.print.PosCommand.LF;
                    printBody += '| | | | REGISTRO DE PAGO| | | |';
                    printBody += _this.print.PosCommand.LF;
                    printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'FACTURA DE VENTA:';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += _this.pago.NumeroDocumento;
                    printBody += _this.print.PosCommand.LF;
                    printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_ALIGN_LT;
                    printBody += _this.print.mapTextColumn('Contrato:', 'Cuota:');
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += _this.print.mapTextColumn(_this.pago.Contrato, _this.pago.Cuota + '');
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += _this.print.mapTextColumn('Cedula:', 'Nombre:');
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += _this.print.mapTextColumn("asasd", _this.pago.Nombre);
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += _this.print.mapTextColumn('Fecha Pago:', 'Total:');
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += _this.print.mapTextColumn(moment(_this.pago.FechaPago).format('MMM DD, YYYY'), _this.pago.Total + '');
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += _this.print.mapTextColumn('Pago Desde:', 'Pago Hasta:');
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += _this.print.mapTextColumn(moment(_this.pago.PagoDesde).format('MMM DD, YYYY'), moment(_this.pago.PagoHasta).format('MMM DD, YYYY'));
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += _this.print.mapTextColumn('Usuario:', 'Terminal:');
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += _this.print.mapTextColumn(_this.pago.Usuario.toString(), _this.pago.Terminal);
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.LF;
                    printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Observaciones:';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += _this.pago.Observaciones;
                    printBody += _this.print.PosCommand.LF;
                    printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
                    printBody += 'Concepto:';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
                    printBody += _this.pago.Concepto;
                    printBody += _this.print.PosCommand.LF;
                    printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.normailizeText(info.RESOLUCION);
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.LF;
                    printBody += _this.print.PosCommand.LF;
                    var src = _this.config.generarRutaLogoReutilizable();
                    _this.print.print(address, printBody).then(function () {
                        loading.dismiss();
                    }).catch(function (err) {
                        loading.dismiss();
                    });
                }).catch(function (err) {
                });
            }).catch(function (err) {
                loading.dismiss();
                _this.toastController.create({ message: err.message, duration: 2000 }).then(function (obj) { obj.present(); });
            });
        });
    };
    DatosPagoComponent.prototype.imprimirBloque = function () {
        var _this = this;
        this.printer.print(document.getElementById('bloqueImpresion').innerHTML).catch(function () {
            _this.mostrarToastSimple('Error al imprimir bloque');
        });
    };
    DatosPagoComponent.prototype.mostrarToastSimple = function (mensaje) {
        this.toastController.create({
            message: mensaje,
            duration: 2000
        }).then(function (toast) {
            toast.present();
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", ConsultaPagoModel)
    ], DatosPagoComponent.prototype, "pago", void 0);
    DatosPagoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-datos-pago',
            templateUrl: './datos-pago.component.html',
            styleUrls: ['./datos-pago.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Printer,
            ToastController,
            PrintService,
            LoadingController,
            ConfiguracionService,
            SesionService])
    ], DatosPagoComponent);
    return DatosPagoComponent;
}());
export { DatosPagoComponent };
//# sourceMappingURL=datos-pago.component.js.map