import { ToastController, LoadingController } from '@ionic/angular';
import { ConsultaPagoModel } from '../../models/consulta-pago.model';
import { Component, OnInit, Input } from '@angular/core';

// Plugins
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';
import { PrintService } from '../../services/print.service';
import { ConfiguracionService } from '../../services/configuracion.service';
import { SesionService } from 'src/app/services/sesion.service';
import * as moment from 'moment';

@Component({
  selector: 'app-datos-pago',
  templateUrl: './datos-pago.component.html',
  styleUrls: ['./datos-pago.component.scss'],
})
export class DatosPagoComponent implements OnInit {

  @Input() pago: ConsultaPagoModel;

  constructor(
    private printer: Printer,
    private toastController: ToastController,
    private print: PrintService,
    private loading: LoadingController,
    private config: ConfiguracionService,
    private sesion: SesionService
  ) { }

  ngOnInit() { }

  imprimir() {
    /** Se comenta código anterior por inexistencia de lógica. */
    // this.printer.print('').catch(() => {
    //   this.mostrarToastSimple('Error al imprimir');
    // });

    /**
     * Se inicializa el código para realizar la impresión
     * 1) Se crea la cadena para el cuerpo del pos.
     */
     moment.locale('es');
     const tipodoc  = this.sesion.sesionLocal.sesionUsuario.APELLIDOS;
     const cobrador = this.sesion.sesionLocal.sesionUsuario.NOMBRES;

     this.loading.create({
       message: 'Obteniendo configuración de impresora'
     }).then(loading=>{
        loading.present();

        this.config.obtenerImpresora().then(address=>{

          this.sesion.obtenerInfoEmpresa().then((info: any)=>{
            let printBody = '';
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_ALIGN_CT;
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
            printBody += this.print.normailizeText(info.NOMBRE);
            printBody += this.print.PosCommand.LF;
            printBody += this.print.normailizeText(info.NIT);
            printBody += this.print.PosCommand.LF;
            printBody += this.print.normailizeText((info.CIUDAD == null ? '' : (info.CIUDAD + ' - ')) + info.DIRECCION);
            printBody += this.print.PosCommand.LF;
            printBody += this.print.normailizeText(info.TELEFONOS);
            printBody += this.print.PosCommand.LF;
            printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
            printBody += this.print.PosCommand.LF;
            
            if(this.pago.Observaciones.indexOf("COPIA") == -1)
            {
              printBody += '| | | | O R I G I N A L | | | |';
              printBody += this.print.PosCommand.LF;
            }
            else
            {
              printBody += '| | | | | | C O P I A  | | | | |';
              printBody += this.print.PosCommand.LF;
            }
            

            printBody += '| | | | REGISTRO DE PAGO| | | |';
            printBody += this.print.PosCommand.LF;

            printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
            printBody += this.print.PosCommand.LF;

            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
            

            printBody += tipodoc + ':';
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            if(this.pago.NumeroDocumento !== undefined)
            {
              printBody += this.pago.NumeroDocumento;
            }
            printBody += this.print.PosCommand.LF;


            printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
            printBody += this.print.PosCommand.LF;

            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_ALIGN_LT;
            printBody += this.print.mapTextColumn('Contrato:', 'Cuota:');
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            printBody += this.print.mapTextColumn(this.pago.Contrato, this.pago.Cuota + '');
            printBody += this.print.PosCommand.LF;

            if(this.pago.Departamento !== null &&  this.pago.Departamento !== undefined)
            {
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
              printBody += 'Departamento:';
              printBody += this.print.PosCommand.LF;
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
              printBody += this.pago.Departamento;
              printBody += this.print.PosCommand.LF;
            }

            if(this.pago.Ciudad !== null && this.pago.Ciudad !== undefined)
            {
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
              printBody += 'Ciudad:';
              printBody += this.print.PosCommand.LF;
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
              printBody += this.pago.Ciudad;
              printBody += this.print.PosCommand.LF;
            }



            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
            printBody += 'Nombre:';
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            printBody += this.pago.Nombre;
            printBody += this.print.PosCommand.LF;
            
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
            printBody += 'Cedula:';
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            printBody += this.pago.Cedula;
            printBody += this.print.PosCommand.LF;

            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
            printBody += this.print.mapTextColumn('Fecha Pago:', 'Total:');
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            printBody += this.print.mapTextColumn(moment(this.pago.FechaPago).format('MMM DD, YYYY'), this.pago.Total + '');
            printBody += this.print.PosCommand.LF;

            if(this.pago.PagoDesde !== null  && this.pago.PagoDesde !== undefined)
            {
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
              printBody += this.print.mapTextColumn('Pago Desde:', 'Pago Hasta:');
              printBody += this.print.PosCommand.LF;
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
              // tslint:disable-next-line: max-line-length
              console.log('el pago hasta es '+this.pago.PagoHasta );
              printBody += this.print.mapTextColumn(moment(this.pago.PagoDesde).format('MMM DD, YYYY'),moment( this.pago.PagoHasta).format('MMM DD, YYYY'));
              printBody += this.print.PosCommand.LF;
            }

           
            

            if(this.pago.PVisita !== null && this.pago.PVisita !== undefined)
            {
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
              printBody += this.print.mapTextColumn('Proxima Visi:', 'Anulado:');
              printBody += this.print.PosCommand.LF;
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
              if(this.pago.Anulado == "1"){
                printBody += this.print.mapTextColumn(moment(this.pago.PVisita).format('MMM DD, YYYY'), "Si");
              }else{
                printBody += this.print.mapTextColumn(moment(this.pago.PVisita).format('MMM DD, YYYY'), "No");
              }
              
              printBody += this.print.PosCommand.LF;
            }


            if(this.pago.Vdesde !== null && this.pago.Vdesde !== undefined )
            {
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
              printBody += this.print.mapTextColumn('V Desde:', 'v Hasta:');
              printBody += this.print.PosCommand.LF;
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
              printBody += this.print.mapTextColumn(moment(this.pago.Vdesde).format('MMM DD, YYYY'), moment(this.pago.Vhasta).format('MMM DD, YYYY'));
              printBody += this.print.PosCommand.LF;
            }

            if(this.pago.VlrCto !== null && this.pago.VlrCto !== undefined)
            {
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
              printBody += 'Valor Contrato:';
              printBody += this.print.PosCommand.LF;
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
              printBody += this.pago.VlrCto;
              printBody += this.print.PosCommand.LF;
            }

            if(this.pago.VlrSaldo !== null && this.pago.VlrSaldo !== undefined)
            {
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
              printBody += 'Saldo Contrato:';
              printBody += this.print.PosCommand.LF;
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
              printBody += this.pago.VlrSaldo;
              printBody += this.print.PosCommand.LF;
            }


            if(this.pago.VlrDctoPago !== null)
            {
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
              printBody += 'Descuento Contrato:';
              printBody += this.print.PosCommand.LF;
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
              printBody += this.pago.VlrDctoPago;
              printBody += this.print.PosCommand.LF;
            }

            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
            printBody += 'Forma De Pago:';
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            printBody += this.pago.FormaPago;
            printBody += this.print.PosCommand.LF;
            

            if(this.pago.VlrIva !== null)
            {
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
              printBody += 'Valor Iva:';
              printBody += this.print.PosCommand.LF;
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
              printBody += this.pago.VlrIva;
              printBody += this.print.PosCommand.LF;
            }

            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
            printBody += 'Cobrador:';
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            printBody += cobrador;
            printBody += this.print.PosCommand.LF;
          
            if( this.pago.ValorLetras !== undefined)
            {
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
              printBody += 'Valor en Letras:';
              printBody += this.print.PosCommand.LF;
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
              printBody += this.pago.ValorLetras;
              printBody += this.print.PosCommand.LF;
            }

            if(this.pago.Terminal !== null)
            {
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
              printBody += 'Terminal:';
              printBody += this.print.PosCommand.LF;
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
              printBody += this.pago.Terminal;
              printBody += this.print.PosCommand.LF;
            }

            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
            printBody += 'Usuario:';
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            printBody += this.pago.Usuario;
            printBody += this.print.PosCommand.LF;

            printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
            printBody += this.print.PosCommand.LF;

            if(this.pago.Observaciones !== null)
            {
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
              printBody += 'Observaciones:';
              printBody += this.print.PosCommand.LF;
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
              printBody += this.pago.Observaciones ;
              printBody += this.print.PosCommand.LF;
            }

            printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
            printBody += this.print.PosCommand.LF;
            
            if(this.pago.Concepto !== null &&  this.pago.Concepto !== undefined)
            {
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
              printBody += 'Concepto:';
              printBody += this.print.PosCommand.LF;
              printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
              printBody += this.pago.Concepto;
              printBody += this.print.PosCommand.LF;
              
              printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
              printBody += this.print.PosCommand.LF;
            }

            
            printBody += this.print.normailizeText(info.RESOLUCION);
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.LF;

            printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
            printBody += this.print.PosCommand.LF;

            printBody += '________________________';
            printBody += this.print.PosCommand.LF;
            printBody += 'F I R M A  C L I E N T E ';
            printBody += this.print.PosCommand.LF;

            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.LF;

            let src = this.config.generarRutaLogoReutilizable();

            this.print.print(address, printBody).then(()=>{
              loading.dismiss();
            }).catch(err=>{
              loading.dismiss();
            });
          }).catch(err=>{

          });
        }).catch(err=>{
          loading.dismiss();
          this.toastController.create({ message: err.message, duration: 2000}).then(obj=>{ obj.present()})
        });
     });
  }


  imprimirBloque() {
    this.printer.print(document.getElementById('bloqueImpresion').innerHTML).catch(() => {
      this.mostrarToastSimple('Error al imprimir bloque');
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

}
