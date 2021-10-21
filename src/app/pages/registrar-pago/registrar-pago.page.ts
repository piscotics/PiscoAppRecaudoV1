import { ModalConfirmarPagoComponent } from './../../own-components/modal-confirmar-pago/modal-confirmar-pago.component';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AlertController, Platform, ToastController, ModalController } from '@ionic/angular';


// Enums
import { ModoVisualizarContratoEnum } from 'src/app/enums/modo-visualizar-contrato.enum';

// Modelos
import { ContratoModel } from 'src/app/models/contrato-model';
import { RegistrarpagoModel } from 'src/app/models/registrar-pago.model';
import { SesionLocalModel } from 'src/app/models/sesion-local.model';
import { ConsultaPagoModel } from 'src/app/models/consulta-pago.model';

// Servicios
import { PagosService } from 'src/app/services/pagos.service';
import { SesionService } from 'src/app/services/sesion.service';
import { OverlayEventDetail } from '@ionic/core';
import { stringify } from '@angular/compiler/src/util';
import { PagoResponseModel } from '../../models/responses/pago-response.model';

@Component({
  selector: 'app-registrar-pago',
  templateUrl: './registrar-pago.page.html',
  styleUrls: ['./registrar-pago.page.scss'],
})
export class RegistrarPagoPage implements OnInit {

  @Input() contrato: ContratoModel = null;
  modoVisualizarContrato: ModoVisualizarContratoEnum = ModoVisualizarContratoEnum.MODO_CONCISO;
  registroPago: RegistrarpagoModel = null;
  sesionLocal: SesionLocalModel = null;
  tipopago: any[] = [];
  isDisabled: any = true;
  listCantidadCuotas: number[] = [];
  ngTipoPago: string;
  nvoFormaPago: string ;

  constructor(
    private activatedRoute: ActivatedRoute,
    private platform: Platform,
    private router: Router,
    private alertController: AlertController,
    private modalController: ModalController,
    private toastController: ToastController,
    private sesionService: SesionService,
    private pagosService: PagosService
  ){
  
    // [value]="registroPago.FORMAPAGO" 
  }

 // ionViewDidEnter(){
   // this.registroPago.FORMAPAGO ="Efectivo";
  //}


  ngOnInit() {
    this.platform.ready().then(() => {
      this.sesionLocal = this.sesionService.sesionLocal;
      this.tipopago = [];

      // Crear datos selección de cuotas
      for (let i = 0; i <= 12; i++) {
        this.listCantidadCuotas.push((i));
      }
    
      const contrato = this.activatedRoute.snapshot.paramMap.get('contrato');

      if (contrato) {
        this.contrato = JSON.parse(contrato);
        const registroPago = new RegistrarpagoModel();
        registroPago.CUOTAMENSUAL = this.contrato.cuota ;
        registroPago.ESTADO = this.contrato.estado;
        registroPago.IDCONTRATO = this.contrato.contrato;
        registroPago.IDPERSONA = this.contrato.cedula;
        //registroPago.USUARIO = String(this.sesionLocal.sesionUsuario.ID);
        registroPago.USUARIO = this.sesionLocal.sesionUsuario.USERNAME;
        registroPago.titular = this.contrato.nombre;
        registroPago.VALOR = this.contrato.cuota;
        registroPago.PLAN = this.contrato.plan;
        registroPago.FORMAPAGO = this.contrato.formaPago;
        registroPago.Departamento = this.contrato.departamento;
        registroPago.Ciudad = this.contrato.ciudad;
       
        this.registroPago = registroPago;
        
      }

      this.pagosService.cargarFormaPago().then((tipospagos: any[]) => {
        this.tipopago = tipospagos;
        this.nvoFormaPago = 'Efectivo';//this.tipopago[3].NombreTipoPago ;

        console.log("el tipo de pgo es " + this.nvoFormaPago ); //JSON.stringify(tipospagos[3].NombreTipoPago)
        
        //this.ngTipoPago = JSON.stringify(tipospagos[3]); 
       console.log(JSON.stringify(this.tipopago));
      });
    });

  }

  actualizarCantidadCuotas(event) {
    this.registroPago.CANTIDADCUOTAS = event.target.value;
    if(this.registroPago.CANTIDADCUOTAS > 0) {
      this.isDisabled = true;
      this.registroPago.VALOR = this.contrato.cuota * this.registroPago.CANTIDADCUOTAS;
    } else {
      this.isDisabled = false;
    }
  }


  actualizatipopago(event) {
    this.registroPago.FORMAPAGO = event.target.value;
  }

  guardar() {

    this.pagosService.prepararRegistroPago(this.registroPago).then((registroPago: RegistrarpagoModel) => {

      //registroPago.FORMAPAGO = registroPago.FORMAPAGO;
      console.log(`Registro de pago a enviar al server: ${JSON.stringify(registroPago)}`);
    

      this.modalController.create({
        component: ModalConfirmarPagoComponent,
        componentProps: {
          registroPago
        },
        backdropDismiss: false,
        cssClass: 'modal-confirmar-pago'
      }).then((modal) => {

        modal.onDidDismiss().then((detail: OverlayEventDetail) => {

          if (detail.data) {
            // El usuario confirma realizar el pago

            this.pagosService.registrarPago(registroPago).then((respuesta: PagoResponseModel) => {
              const extras: NavigationExtras = {
                replaceUrl: true
              };
              
              console.log("la respuesta de pago a enviar al server:", respuesta);
              const registroBusqueda = new ConsultaPagoModel();

              registroBusqueda.Cedula = this.contrato.cedula;
              registroBusqueda.Contrato = this.registroPago.IDCONTRATO;
              registroBusqueda.Cuota = this.registroPago.CUOTAMENSUAL;
              registroBusqueda.FechaPago = this.registroPago.FECHAPAGOR;
              registroBusqueda.Nombre = this.contrato.nombre;
              registroBusqueda.NumeroDocumento = respuesta.NroRecibo;
              registroBusqueda.Concepto = respuesta.Concepto;
              registroBusqueda.PagoDesde = respuesta.Desde;
              registroBusqueda.Observaciones = respuesta.DetallePago + '--' +  this.registroPago.OBSERVACIONES;
              registroBusqueda.PagoHasta = respuesta.Hasta;
              registroBusqueda.Terminal = this.registroPago.MAQUINA;
              registroBusqueda.Total = this.registroPago.VALOR - this.registroPago.DESCUENTO;
              registroBusqueda.Usuario = this.registroPago.USUARIO;
              registroBusqueda.PVisita = respuesta.PVisita;
              registroBusqueda.Anulado = respuesta.Anulado;
              registroBusqueda.ValorLetras = respuesta.Valorenletras;
              registroBusqueda.Ciudad = this.contrato.ciudad;
              registroBusqueda.Departamento = this.contrato.departamento;
              //Campos adicionales
              registroBusqueda.Vdesde = respuesta.Vdesde;
              registroBusqueda.Vhasta = respuesta.Vhasta;
              registroBusqueda.VlrCto = respuesta.VlrCto;
              registroBusqueda.VlrSaldo = respuesta.VlrSaldo;
              registroBusqueda.VlrDctoPago  = respuesta.VlrDctoPago;
              registroBusqueda.VlrIva = respuesta.VlrIva;
              registroBusqueda.FormaPago = registroPago.FORMAPAGO;
              registroBusqueda.NROREF = registroPago.NROREF;
              
              console.log("la forma de pago al guardar es :" + registroPago.FORMAPAGO)


              this.router.navigate(['registrar-pago2', JSON.stringify(registroBusqueda)], extras);
            });

          }

        });

        modal.present();

      });

    });
  }

  mostrarToastSimple(mensaje: string) {
    this.toastController.create({
      message: mensaje,
      duration: 2000
    }).then(toast => {
      toast.present();
    });
  }

  mostrarAlertSimple(titulo: string, texto: string) {
    this.alertController.create({
      header: titulo,
      message: texto,
      buttons: [{
        role: 'cancel',
        text: 'Ok'
      }]
    }).then((myAlert) => {
      myAlert.present();
    });
  }
}