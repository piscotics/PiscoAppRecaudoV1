import { TiposGestionService } from './../../services/tipos-gestion.service';
import { TipoGestionModel } from '../../models/tipo-gestion.model';
import { GestionModel } from '../../models/gestion.model';
import { Component, OnInit } from '@angular/core';
import { ContratoModel } from 'src/app/models/contrato-model';
import { ModoVisualizarContratoEnum } from 'src/app/enums/modo-visualizar-contrato.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistroGestionModel } from '../../models/registro-gestion.model';
import { SesionService } from '../../services/sesion.service';
import { SesionLocalModel } from '../../models/sesion-local.model';
import { Platform, ToastController, AlertController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-registro-gestion',
  templateUrl: './registro-gestion.page.html',
  styleUrls: ['./registro-gestion.page.scss'],
})
export class RegistroGestionPage implements OnInit {
  

  contrato: ContratoModel = null;
  modoVisualizarContrato: ModoVisualizarContratoEnum = ModoVisualizarContratoEnum.MODO_CONCISO;
  gestion: GestionModel = null;
  registrogestion: RegistroGestionModel = null;
  tiposGestion: TipoGestionModel[] = [];
  tipogestionselect: TipoGestionModel;
  textoBusqueda =  new Date(new Date().setDate( new Date().getDate() + 1)).toString();
  sesionLocal: SesionLocalModel = null ;

  constructor(
    private tiposGestionService: TiposGestionService,
    private activatedRoute: ActivatedRoute,
    private sesion: SesionService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    const contrato = this.activatedRoute.snapshot.paramMap.get('contrato');
    if (contrato) {
       this.contrato = JSON.parse(contrato);
    }
    const gestion = new GestionModel();
    const registrogestion = new RegistroGestionModel();
    gestion.Observaciones = '';
    this.gestion = gestion;
    this.registrogestion = registrogestion;
    this.tiposGestionService.cargarTipoNovedad().then((tiponovedades: TipoGestionModel[]) => {
       this.tiposGestion = tiponovedades;
    });

  }

  tipoGestion_Changed(event: any) {
    this.tipogestionselect = event.detail.value;
    
  }

  observacion_Changed(event: any) {
    this.gestion.Observaciones = event.detail.value;
  }

  cambiofecha( event )
  {
      this.textoBusqueda = event.target.value;
  }

  onClick() {
    console.log(this.gestion.Observaciones);
    this.guardar();
  }


  guardar() {

     this.sesionLocal = this.sesion.sesionLocal;
     this.registrogestion.Novedad = this.tipogestionselect.Idnovedad;
     this.registrogestion.Observaciones = this.gestion.Observaciones;
     this.tiposGestionService.prepararRegistroNovedad(this.registrogestion).then((registro: RegistroGestionModel) => {
    
      registro.Fechaprogramada = this.textoBusqueda.toString();
      registro.Transac = 1;
      registro.Contrato = this.contrato.contrato;
      registro.Diapos = 1;
      registro.Usuario = this.sesionLocal.sesionUsuario.USERNAME;
      registro.IdCobrador = this.sesionLocal.sesionUsuario.IDCOBRADOR;
      registro.Modulo = '1';
      registro.NovedadDesc = this.tipogestionselect.Novedad;
      registro.PagoHasta = this.contrato.pagoHasta;
      registro.Titular = this.contrato.nombre;
      this.tiposGestionService.registrarNovedad(registro)
         .then(() => {
            this.router.navigate(['registro-gestion2', JSON.stringify(registro)]);
            this.gestion.FechaProgramacion = new Date().toDateString();
            this.gestion.Observaciones = '';
            this.gestion.TipoGestion = 0;
        });
     });
    }


    mostrarAlerta = (mensaje: string) => {
      this.alertController.create({
        header: 'Informaciòn',
        message: mensaje,
        buttons: [{
          role: 'cancel',
          text: 'Ok',
        }]
      }).then((alert) => {
        alert.present();
      });
    }
}
