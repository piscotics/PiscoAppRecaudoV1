import { Component, OnInit } from "@angular/core";
import { ConsultaPagoModel } from "src/app/models/consulta-pago.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ConfigHelper } from "../../helpers/config.helper";
import { ConfigModel } from "../../models/config.model";
import { AlertController } from "@ionic/angular";
import { ConfiguracionService } from "../../services/configuracion.service";
import * as moment from "moment";
import { OfflineService } from "src/app/services/offline.service";

@Component({
  selector: "app-consultar-pago",
  templateUrl: "./consultar-pago.page.html",
  styleUrls: ["./consultar-pago.page.scss"],
})
export class ConsultarPagoPage implements OnInit {
  pago: ConsultaPagoModel = null;
  terminoBusqueda: string;
  statusOffline: boolean;
  NroPago: string;
  config: ConfigModel = new ConfigModel();
  constructor(
    private http: HttpClient,
    private alert: AlertController,
    private configuracionService: ConfiguracionService,
    private offline: OfflineService,
  ) {}

  ngOnInit() {
    this.NroPago = "";
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
    this.statusOffline = localStorage.getItem("offlineMode") === "true" ? true : false;

    console.log("el estado es ", this.statusOffline)
    if (this.statusOffline) {
      console.log("entro 1 ")
      this.offline.createDatabase().then(res => {
        console.log("entro 2 ")
        this.offline.getConsultarPagos(this.NroPago).then((resPago:any) => {
          console.log("entro 3 ", resPago," el contrato es", resPago[0].IDCONTRATO)
           
          this.pago.Contrato = resPago[0].IDCONTRATO;
            this.pago.Cuota = resPago[0].CUOTAMENSUAL;
            this.pago.Cedula = resPago[0].IDPERSONA;
            this.pago.Nombre = resPago[0].TITULAR;
            this.pago.FechaPago = resPago[0].FECHAPAGOR;
            this.pago.Total = resPago[0].VALOR - resPago[0].DESCUENTO;

           this.pago.Sincronizar = resPago[0].SINCRONIZAR;

            this.pago.PagoHasta = resPago[0].PagoHasta;
            
            
            this.pago.PagoDesde = resPago[0].PagoDesde;
            
            this.pago.NumeroDocumento = resPago[0].NumeroDocumento;

            this.pago.Usuario = resPago[0].USUARIO;
            this.pago.Terminal = resPago[0].MAQUINA;
            this.pago.Observaciones = resPago[0].OBSERVACIONES;
            this.pago.Concepto =resPago[0].Observaciones;

            
              this.pago.PVisita = null;
            

            this.pago.Anulado = resPago[0].Anulado;
           // this.pago.ValorLetras = resPago[0].ValorLetras;
            this.pago.Departamento = resPago[0].Departamento;
            this.pago.Ciudad =resPago[0].Ciudad;

          //  this.pago.Vdesde ='';
            this.pago.VlrCto = resPago[0].CUOTAMENSUAL;

          //  this.pago.Vhasta = '';
            this.pago.VlrDctoPago = resPago[0].DESCUENTO;
            this.pago.VlrIva = 0;
           // this.pago.VlrSaldo = 0;
            this.pago.FormaPago = resPago[0].FORMAPAGO;
            console.log("la forma de pago es " + this.pago.FormaPago);
        });
    });


    } else {
      console.log("no entro 1 ")
      const configHelper = new ConfigHelper(this.configuracionService.config);
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      };
      this.http
        .post(
          `${configHelper.getApiUrl()}/pago/searchpago?NroPago=${this.NroPago}`,
          {},
          httpOptions
        )
        .subscribe(
          (res: any) => {
            this.pago.Contrato = res.Contrato;
            this.pago.Cuota = res.Cuota;
            this.pago.Cedula = res.Cedula;
            this.pago.Nombre = res.Nombre;
            this.pago.FechaPago = res.FechaPago;
            this.pago.Total = res.Total;

            if (res.PagoHasta !== null) {
              this.pago.PagoHasta = res.PagoHasta;
              console.log("el pago consulta hasta es " + this.pago.PagoHasta);
            } else {
              this.pago.PagoHasta = null;
            }
            if (res.PagoDesde !== null) {
              this.pago.PagoDesde = res.PagoDesde;
            } else {
              this.pago.PagoDesde = null;
            }
            this.pago.NumeroDocumento = res.NumeroDocumento;
            this.pago.Sincronizar = 1;

            this.pago.Usuario = res.Usuario;
            this.pago.Terminal = res.Terminal;
            this.pago.Observaciones = res.Observaciones;
            this.pago.Concepto = res.Concepto;

            if (res.PVisita !== null) {
              this.pago.PVisita = res.PVisita;
            } else {
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
            this.pago.FormaPago = res.FormaPago;
            console.log("la forma de pago es " + this.pago.FormaPago);
          },
          (err) => {
            this.alert
              .create({
                header: "Error",
                message: err.message,
                buttons: ["Ok"],
              })
              .then((obj) => {
                obj.present();
              });
          }
        );
    }
  }
}
