import { Component, OnInit, Input } from '@angular/core';
import { RegistroGestionModel } from '../../models/registro-gestion.model';
import { ToastController, LoadingController } from '@ionic/angular';


// Plugins
import { Printer } from '@ionic-native/printer/ngx';
import { PrintService } from '../../services/print.service';
import { ConfiguracionService } from '../../services/configuracion.service';
import { SesionService } from 'src/app/services/sesion.service';
import * as moment from 'moment';


@Component({
  selector: 'app-datos-novedad',
  templateUrl: './datos-novedad.component.html',
  styleUrls: ['./datos-novedad.component.scss'],
})
export class DatosNovedadComponent implements OnInit {


  
  @Input() gestion: RegistroGestionModel;
  constructor(
    private printer: Printer,
    private toastController: ToastController,
    private print: PrintService,
    private loading: LoadingController,
    private config: ConfiguracionService,
    private sesion: SesionService
    ) { }

  ngOnInit() {}

  imprimir() {

    const cobrador = this.sesion.sesionLocal.sesionUsuario.NOMBRES;
    moment.locale('es');
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
           
            printBody += '| | | | O R I G I N A L | | | |';
            printBody += this.print.PosCommand.LF;

            printBody += '| | | | N O V E D A D | | | |';
            printBody += this.print.PosCommand.LF;

            printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
            printBody += this.print.PosCommand.LF;


            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
            printBody += 'Fecha / Hora Novedad:';
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            printBody += moment().format('DD/MMM/YYYY HH:mm:ss');
            printBody += this.print.PosCommand.LF;
            
            
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
            printBody += 'Contrato: ' + this.gestion.Contrato;
            printBody += this.print.PosCommand.LF;
            // printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            // printBody += this.gestion.Contrato;
            // printBody += this.print.PosCommand.LF;
            
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
            printBody += 'Titular:';
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            printBody += this.gestion.Titular;
            printBody += this.print.PosCommand.LF;

            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
            printBody += 'Pago Hasta:';
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            printBody += moment(this.gestion.PagoHasta).format('DD/MMM/YYYY');
            printBody += this.print.PosCommand.LF;


            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
            printBody += 'Novedad:';
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            printBody += this.gestion.NovedadDesc;
            printBody += this.print.PosCommand.LF;

            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
            printBody += 'Proxima Visita:';
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            //let newDate = new Date(this.gestion.Fechaprogramada +  'T00:00:00');
            //const formattedDate = newDate.toLocaleDateString('es-ES', {
            //  day: 'numeric', month: 'short', year: 'numeric'
           // }).replace('.', '');
            printBody += moment(this.gestion.Fechaprogramada).format('DD/MMM/YYYY');
            printBody += this.print.PosCommand.LF;

            printBody += this.print.PosCommand.LF;
            printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
            printBody += this.print.PosCommand.LF;

            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
            printBody += 'Observaciones:';
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            printBody += this.gestion.Observaciones + ' NO ES VALIDO COMO RECIBO DE PAGO' ;
            printBody += this.print.PosCommand.LF;
            printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
            printBody += this.print.PosCommand.LF;

            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
            printBody += 'Nota:';
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            printBody += this.gestion.Nota1 ;
            printBody += this.print.PosCommand.LF;
            printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
            printBody += this.print.PosCommand.LF;

            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
            printBody += 'Cobrador:';
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            printBody += cobrador;
            printBody += this.print.PosCommand.LF;
            
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
            printBody += 'Usuario: ' + this.gestion.Usuario;
            printBody += this.print.PosCommand.LF;
            // printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            // printBody += this.gestion.Usuario;
            // printBody += this.print.PosCommand.LF;
            
            printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
            printBody += this.print.PosCommand.LF;
            
            // printBody += '';
            // printBody += this.print.PosCommand.LF;
            // printBody += '';
            // printBody += this.print.PosCommand.LF;
            // printBody += '________________________';
            // printBody += this.print.PosCommand.LF;
            // printBody += 'F I R M A  C L I E N T E ';
            // printBody += this.print.PosCommand.LF;

            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.LF;

            
            // let src = this.config.generarRutaLogoReutilizable();
            // printBody += this.print.PosCommand.BITMAP_FORMAT.BITMAP_S8;
            // printBody += src;
            // printBody += this.print.PosCommand.LF;



            this.print.print(address, printBody).then(()=>{
              loading.dismiss();
            }).catch(err=>{
              loading.dismiss();
            });
          }).catch(err=>{
            loading.dismiss();
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
