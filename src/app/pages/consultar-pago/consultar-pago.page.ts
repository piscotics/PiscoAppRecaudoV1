import { Component, OnInit } from '@angular/core';
import { ConsultaPagoModel } from 'src/app/models/consulta-pago.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigHelper } from '../../helpers/config.helper';
import { ConfigModel } from '../../models/config.model';
import { AlertController } from '@ionic/angular';
import { ConfiguracionService } from '../../services/configuracion.service';
import * as moment from 'moment';

@Component({
  selector: 'app-consultar-pago',
  templateUrl: './consultar-pago.page.html',
  styleUrls: ['./consultar-pago.page.scss'],
})
export class ConsultarPagoPage implements OnInit {

  pago: ConsultaPagoModel = null;
  terminoBusqueda: string;
  NroPago: string;
  config: ConfigModel = new ConfigModel();
  constructor(private http: HttpClient, 
    private alert: AlertController,
    private configuracionService: ConfiguracionService) { }

  ngOnInit() {
    this.NroPago = '';
    const pago = new ConsultaPagoModel();

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
  }

  consultar() {
    const configHelper = new ConfigHelper(this.configuracionService.config);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post(`${configHelper.getApiUrl()}/pago/searchpago?NroPago=${this.NroPago}`, { }, httpOptions).subscribe((res: any)=>{
      this.pago.Contrato = res.Contrato;
      this.pago.Cuota = res.Cuota;
      this.pago.Cedula = res.Cedula;
      this.pago.Nombre = res.Nombre;
      this.pago.FechaPago = moment(res.FechaPago).format('MMMM DD YYYY');
      this.pago.Total = res.Total;
      
      
      if(res.PagoHasta !== null)
      {
          this.pago.PagoHasta =   moment(res.PagoHasta).format('MMM DD, YYYY');
      }
      else{
        this.pago.PagoHasta = null;
      }
      if(res.PagoDesde !== null)
      {
        this.pago.PagoDesde =   moment(res.PagoDesde).format('MMMM DD YYYY');  
      }
      else{
        this.pago.PagoDesde = null;
      }
      this.pago.NumeroDocumento = res.NumeroDocumento;
      
      this.pago.Usuario = res.Usuario;
      this.pago.Terminal = res.Terminal;
      this.pago.Observaciones = res.Observaciones;
      this.pago.Concepto = res.Concepto;
      
      
      if(res.PVisita !== null){
        this.pago.PVisita = res.PVisita;
      }
      else{
        this.pago.PVisita = null;
      }


      this.pago.Anulado = res.Anulado;
      this.pago.ValorLetras = res.Valorenletras;
      this.pago.Departamento = res.Departamento;
      this.pago.Ciudad = res.Municipio;

      this.pago.Vdesde = res.Vdesde;
      this.pago.VlrCto = res.VlrCto;
      
      this.pago.Vhasta = res.Vhasta;
      this.pago.VlrDctoPago = res.VlrDctoPago;
      this.pago.VlrIva = res.VlrIva;
      this.pago.VlrSaldo = res.VlrSaldo;

      }, err=>{
      this.alert.create({
        header: 'Error',
        message: err.message,
        buttons: ['Ok']
      }).then(obj=>{
        obj.present();
      })
    });
  };

}
