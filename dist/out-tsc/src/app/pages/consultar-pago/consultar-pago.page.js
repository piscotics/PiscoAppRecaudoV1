import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ConsultaPagoModel } from 'src/app/models/consulta-pago.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigHelper } from '../../helpers/config.helper';
import { ConfigModel } from '../../models/config.model';
import { AlertController } from '@ionic/angular';
import { ConfiguracionService } from '../../services/configuracion.service';
import * as moment from 'moment';
var ConsultarPagoPage = /** @class */ (function () {
    function ConsultarPagoPage(http, alert, configuracionService) {
        this.http = http;
        this.alert = alert;
        this.configuracionService = configuracionService;
        this.pago = null;
        this.config = new ConfigModel();
    }
    ConsultarPagoPage.prototype.ngOnInit = function () {
        this.NroPago = '';
        var pago = new ConsultaPagoModel();
        // pago.Contrato = 'IND485488';
        // pago.Cuota = 18560;
        // pago.Cedula = '2255448545';
        // pago.Nombre = 'Pepita Jimenez';
        // pago.FechaPago = 'Abril 21 2019';
        // pago.Total = 60220;
        // pago.PagoHasta = 'Julio 30 2019';
        // pago.NumeroDocumento = 'RC45488888';
        // pago.Usuario = 'holausuario';
        // pago.Terminal = 'kaskdnaudquwiu912';
        // pago.Observaciones = 'Un comentario de \n prueba que se hizo al realizar el pago';
        this.pago = pago;
    };
    ConsultarPagoPage.prototype.consultar = function () {
        var _this = this;
        var configHelper = new ConfigHelper(this.configuracionService.config);
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.http.post(configHelper.getApiUrl() + "/pago/searchpago?NroPago=" + this.NroPago, {}, httpOptions).subscribe(function (res) {
            _this.pago.Contrato = res.Contrato;
            _this.pago.Cuota = res.Cuota;
            _this.pago.Cedula = res.Cedula;
            _this.pago.Nombre = res.Nombre;
            _this.pago.FechaPago = moment(res.FechaPago).format('MMMM DD YYYY');
            _this.pago.Total = res.Total;
            _this.pago.PagoHasta = moment(res.PagoHasta).format('MMM DD, YYYY');
            _this.pago.NumeroDocumento = res.NumeroDocumento;
            _this.pago.PagoDesde = moment(res.PagoDesde).format('MMMM DD YYYY');
            _this.pago.Usuario = res.Usuario;
            _this.pago.Terminal = res.Terminal;
            _this.pago.Observaciones = res.Observaciones;
            _this.pago.Concepto = res.Concepto;
        }, function (err) {
            _this.alert.create({
                header: 'Error',
                message: err.message,
                buttons: ['Ok']
            }).then(function (obj) {
                obj.present();
            });
        });
    };
    ;
    ConsultarPagoPage = tslib_1.__decorate([
        Component({
            selector: 'app-consultar-pago',
            templateUrl: './consultar-pago.page.html',
            styleUrls: ['./consultar-pago.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            AlertController,
            ConfiguracionService])
    ], ConsultarPagoPage);
    return ConsultarPagoPage;
}());
export { ConsultarPagoPage };
//# sourceMappingURL=consultar-pago.page.js.map