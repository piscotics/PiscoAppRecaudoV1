import { Component, OnInit } from '@angular/core';
import { CuadreCajaModel, CuadreCajaResponseModel } from '../../models/cuadre-caja.model';
import { PagosService } from '../../services/pagos.service';
import { SesionService } from 'src/app/services/sesion.service';
import { SesionLocalModel } from 'src/app/models/sesion-local.model';
import { ToastController, LoadingController } from '@ionic/angular';
import { PrintService } from '../../services/print.service';
import { ConfiguracionService } from '../../services/configuracion.service';
import * as moment from 'moment';


@Component({
  selector: 'app-cuadre-caja',
  templateUrl: './cuadre-caja.page.html',
  styleUrls: ['./cuadre-caja.page.scss'],
})
export class CuadreCajaPage {

  textoBusqueda = new Date();
  cuadreCaja: CuadreCajaModel = null;
  sesionLocal: SesionLocalModel = null;
  
  constructor(
    private pagoservice: PagosService, 
    private sesionService: SesionService,
    private toastController: ToastController,
    private print: PrintService,
    private loading: LoadingController,
    private config: ConfiguracionService,
    private sesion: SesionService
    ) { }
  
  cambiofecha( event )
  {
    this.textoBusqueda = event.target.value;
  }

  consultarCuadre()
  {
    if (!this.textoBusqueda) {
      alert('Por favor ingresa un criterio de búsqueda');
      return;
    }

    this.sesionLocal = this.sesionService.sesionLocal;
    
    this.pagoservice.cuadreCaja(this.textoBusqueda, this.sesionLocal.sesionUsuario.USERNAME)
           .then((cuadrecajaresponse: CuadreCajaResponseModel) => {
            
            const cuadreCaja = new CuadreCajaModel();
            cuadreCaja.fecha = cuadrecajaresponse.FECHA;
            cuadreCaja.cantidadpagos = cuadrecajaresponse.CANTIDADPAGOS;
            cuadreCaja.valor = cuadrecajaresponse.VALORPAGOS;
            cuadreCaja.cantidadanulados = cuadrecajaresponse.CANTIDADANULADOS;
            cuadreCaja.cantidadnovedades = cuadrecajaresponse.CANTIDADNOVEDADES;
            
            this.cuadreCaja = cuadreCaja;
          
          });
    }

  imprimir(){
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
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_ALIGN_LT;
            printBody += this.print.mapTextColumn('Fecha:', 'Cantidad Pagos:');
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            let newDate = new Date(this.cuadreCaja.fecha);
            const formattedDate = newDate.toLocaleDateString('es-ES', {
              day: 'numeric', month: 'short', year: 'numeric'
            }).replace('.', '');
            printBody += this.print.mapTextColumn(formattedDate, this.cuadreCaja.cantidadpagos + '');
            printBody += this.print.PosCommand.LF;

            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
            printBody += this.print.mapTextColumn('Valor Pagos:', 'Cant. Anulados:');
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            printBody += this.print.mapTextColumn( this.print.formatMoney(this.cuadreCaja.valor, 0, '.', ',') + '', this.cuadreCaja.cantidadanulados + '');
            printBody += this.print.PosCommand.LF;

            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
            printBody += 'Cantidad Novedades:'
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            printBody += this.cuadreCaja.cantidadnovedades + '';
            printBody += this.print.PosCommand.LF;

            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
            printBody += 'Fecha/Hora Impresion';
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            printBody += moment().format('DD/MM/YYYY HH:mm:ss');
            printBody += this.print.PosCommand.LF; 

            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_ON;
            printBody += 'Usuario';
            printBody += this.print.PosCommand.LF;
            printBody += this.print.PosCommand.TEXT_FORMAT.TXT_BOLD_OFF;
            printBody += this.sesion.sesionLocal.sesionUsuario.NOMBRES; // + ' ' + this.sesion.sesionLocal.sesionUsuario.APELLIDOS;
            printBody += this.print.PosCommand.LF;

            printBody += '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
            printBody += this.print.PosCommand.LF;
            printBody += this.print.normailizeText(info.RESOLUCION);
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
}
