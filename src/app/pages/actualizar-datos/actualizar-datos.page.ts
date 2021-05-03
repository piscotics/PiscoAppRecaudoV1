import { Component, ElementRef, OnInit, ViewChild,ChangeDetectorRef  } from '@angular/core';
import { ContratoModel } from 'src/app/models/contrato-model';
import { ModoVisualizarContratoEnum } from 'src/app/enums/modo-visualizar-contrato.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratoService } from '../../services/contrato.service';
import { Platform, ToastController, AlertController, NavController,NavParams } from '@ionic/angular';

import { ContratoUpdateModel } from '../../models/contrato-update-model';
import { SesionLocalModel } from '../../models/sesion-local.model';
import { SesionService } from '../../services/sesion.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-datos',
  templateUrl: './actualizar-datos.page.html',
  styleUrls: ['./actualizar-datos.page.scss'],
})
export class ActualizarDatosPage implements OnInit {
  @ViewChild('wrapper') wrapper:ElementRef;
  
  ctr: ContratoModel = null;
  modoVisualizarContrato: ModoVisualizarContratoEnum = ModoVisualizarContratoEnum.MODO_CONCISO;
  departamento: string[];
  departamentoSeleccionado : string;
  nvoDpto: string ;
  nvoDptoCobro: string ;
  dispatchOrderForm: FormGroup;
  nvoCiudad : string;
  nvoCiudadCobro : string;
  municipio: string[];
  municipiocobro: string[];
  contrato: ContratoUpdateModel = null;
  sesionLocal: SesionLocalModel = null ;
  mailvalidate: boolean;

  constructor(private activatedRoute: ActivatedRoute, private contratoservice: ContratoService, 
              private alertController: AlertController, private sesion: SesionService,
              private router: Router,
             
             ) {

                this.dispatchOrderForm = new  FormGroup({
                'Dpto_Principal': new FormControl('', Validators.required)
                });


               }

  ngOnInit() {

    const contrato = this.activatedRoute.snapshot.paramMap.get('contrato');
    this.contrato = new ContratoUpdateModel();
    if (contrato) {
       this.ctr = JSON.parse(contrato);
       this.contrato.contrato = this.ctr.contrato;
       this.contrato.cuota = this.ctr.cuota;
       this.contrato.fehaAfiliacion = this.ctr.fehaAfiliacion;
       this.contrato.pagoHasta = this.ctr.pagoHasta;
       this.contrato.estado = this.ctr.estado;
       this.contrato.plan = this.ctr.plan;
       this.contrato.cedula = this.ctr.cedula;
       this.contrato.nombre = this.ctr.nombre;

       this.departamentoSeleccionado =  this.ctr.departamento;
       
       this.contrato.departamento = this.ctr.departamento;
       this.contrato.ciudad = this.ctr.ciudad;
       this.contrato.direccion = this.ctr.direccion;
       this.contrato.direccionCobro = this.ctr.direccionCobro;
       this.contrato.telefono = this.ctr.telefono;
       this.contrato.movil = this.ctr.movil;
       this.contrato.email = this.ctr.email;
       this.contrato.barrio = this.ctr.barrio;
       this.contrato.barriocobro = this.ctr.barriocobro;
       
       this.contrato.departamentocobro = this.ctr.departamentocobro;
       this.contrato.ciudadcobro  = this.ctr.ciudadcobro;
       this.contrato.formaPago =  this.ctr.formaPago;
    }

  
    this.contratoservice.cargarDepartamentos().then((departamentos: any[]) => {
      this.departamento = departamentos;

      if (this.contrato.departamento !== ''  && this.contrato.departamento !== undefined )
      {
       
        this.contrato.departamento = this.ctr.departamento;
        this.nvoDpto = this.contrato.departamento ;
       
        this.contratoservice.cargarMunicipios(this.contrato.departamento).then((municipios: any[]) => {
          this.municipio = municipios;
          this.contrato.ciudad  = this.ctr.ciudad;
          this.nvoCiudad = this.contrato.ciudad;

        });
      }

      if (this.contrato.departamentocobro !== '' && this.contrato.departamentocobro !== undefined)
      {

        this.contrato.departamentocobro = this.ctr.departamentocobro;
        this.nvoDptoCobro = this.contrato.departamentocobro ;

        this.contratoservice.cargarMunicipios(this.contrato.departamentocobro).then((municipios: any[]) => {
          this.municipiocobro = municipios;

          this.contrato.ciudadcobro  = this.ctr.ciudadcobro;
          this.nvoCiudadCobro = this.contrato.ciudadcobro ;

        });
      }
    });
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit - wrapper', this.wrapper);
    console.log("el dpt a seleccionar es: " + localStorage.getItem('Dpto_Principal') )

    this.dispatchOrderForm.get('Dpto_Principal').setValue(localStorage.getItem('Dpto_Principal'));
    
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit - wrapper', this.wrapper);
    console.log("el dpt a seleccionar es: " + localStorage.getItem('Dpto_Principal') )

    this.dispatchOrderForm.get('Dpto_Principal').setValue(localStorage.getItem('Dpto_Principal'));
    
  }
  actualizardpto(event) {
    console.log(event)
    this.contrato.departamento = event.target.value;

    this.contratoservice.cargarMunicipios(this.contrato.departamento).then((municipios: any[]) => {
      this.municipio = municipios;
    });


   

  }

  actualizardptocobro(event) {
    this.contrato.departamentocobro = event.target.value;
    this.contratoservice.cargarMunicipios(this.contrato.departamentocobro).then((municipios: any[]) => {
      this.municipiocobro = municipios;
    });
  }

  actualizarmuni(event) {
    this.contrato.ciudad = event.target.value;
  }

  actualizarmunicobro(event) {
    this.contrato.ciudadcobro = event.target.value;
  }

  emailvalidate(event) {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if(event.target.value !== undefined && event.target.value !== '')
    {
        if ( !EMAIL_REGEXP.test(event.target.value)) {
              this.mailvalidate = true;
        } else
        {
          this.mailvalidate = false;
        }
    }
  }



  guardar() {
    
    this.sesionLocal = this.sesion.sesionLocal;
    this.contratoservice.prepararRegistroContrato(this.contrato).then((registro: ContratoUpdateModel) => {
      registro.usuario = this.sesionLocal.sesionUsuario.USERNAME;
      this.contratoservice.actualizarContrato(registro)
         .then(() => {
            this.contrato = registro;
        });
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


