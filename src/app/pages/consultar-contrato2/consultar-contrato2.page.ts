import { Platform } from '@ionic/angular';
import { ContratoService } from './../../services/contrato.service';
import { BeneficiariosComponent } from './../../own-components/beneficiarios/beneficiarios.component';
import { UltimoPagoModel } from '../../models/ultimo-pago.model';
import { ModoVisualizarContratoEnum } from '../../enums/modo-visualizar-contrato.enum';
import { ContratoModel } from 'src/app/models/contrato-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultaContratoResponseModel } from 'src/app/models/responses/consulta-contrato-response.model';
import { ModalController } from '@ionic/angular';
import { UltimosPagosComponent } from '../../own-components/ultimos-pagos/ultimos-pagos.component';

@Component({
  selector: 'app-consultar-contrato2',
  templateUrl: './consultar-contrato2.page.html',
  styleUrls: ['./consultar-contrato2.page.scss'],
})
export class ConsultarContrato2Page implements OnInit {

  contrato: ContratoModel = null;
  contratos: ContratoModel[] = [];
  consultandoContrato:boolean = true;
  modoVisualizarContrato: ModoVisualizarContratoEnum = ModoVisualizarContratoEnum.MODO_CONSULTA;
  mostrarUltimoPago: boolean = false;
  ultimoPago: UltimoPagoModel = null;

  criterioBusqueda: string = '';
  textoBusqueda: string = '';
  isOffline: boolean = false;

  constructor(
    private platform: Platform,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private contratoSevice: ContratoService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.criterioBusqueda = this.activatedRoute.snapshot.paramMap.get('criterioBusqueda');
    this.textoBusqueda = this.activatedRoute.snapshot.paramMap.get('textoBusqueda');
    this.platform.ready().then(() => {

      this.contrato = null;
      this.contratos = [];
      this.isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;

      if (this.criterioBusqueda === 'CONTRATO') {
        this.contratoSevice.consultarContratoPorNumero(this.textoBusqueda)
          .then((contratoResponse: ConsultaContratoResponseModel) => {
            const contrato = new ContratoModel();
            contrato.contrato = contratoResponse.IdContrato;
            contrato.cuota = contratoResponse.Cuota;
            contrato.fehaAfiliacion = contratoResponse.FechaAfiliacion;
            contrato.pagoHasta = contratoResponse.FechaCobertura;
            contrato.estado = contratoResponse.EstadoContrato;
            contrato.plan = contratoResponse.Plan;
            contrato.cedula = contratoResponse.Cedula;
            contrato.nombre = contratoResponse.Titular;
            localStorage.setItem('Dpto_Principal',contratoResponse.Departamento);
            contrato.departamento = contratoResponse.Departamento;
            contrato.ciudad = contratoResponse.Municipio;
            contrato.direccion = contratoResponse.Direccion;
            contrato.direccionCobro = contratoResponse.DireccionCobro;
            contrato.departamentocobro = contratoResponse.DepartamentoCobro;
            contrato.ciudadcobro = contratoResponse.MunicipioCobro;
            contrato.barrio = contratoResponse.Barrio;
            contrato.barriocobro = contratoResponse.BarrioCobro;
            contrato.telefono = contratoResponse.Telefono;
            contrato.movil = contratoResponse.Celular;
            contrato.email = contratoResponse.Email;
            contrato.Nota1 = contratoResponse.Nota1;

            this.contrato = contrato;
            this.consultandoContrato = false;
          })
          .catch(() => {
            this.consultandoContrato = false;
          });
      } else {
        this.contratoSevice.consultarContratoPorCedula(this.textoBusqueda)
          .then((contratoResponse: ConsultaContratoResponseModel[]) => {
            this.contratos = contratoResponse.map((c) => {
              const contrato = new ContratoModel();

              contrato.contrato = c.IdContrato;
              contrato.cuota = c.Cuota;
              contrato.fehaAfiliacion = c.FechaAfiliacion;
              contrato.pagoHasta = c.FechaCobertura;
              contrato.estado = c.EstadoContrato;
              contrato.plan = c.Plan;
              contrato.cedula = c.Cedula;
              contrato.nombre = c.Titular;
              contrato.departamento = c.Departamento;
              contrato.departamentocobro = c.DepartamentoCobro;
              contrato.ciudadcobro = c.MunicipioCobro;
              contrato.barrio = c.Barrio;
              contrato.barriocobro = c.BarrioCobro;
              contrato.ciudad = c.Municipio;
              contrato.direccion = c.Direccion;
              contrato.direccionCobro = c.DireccionCobro;
              contrato.telefono = c.Telefono;
              contrato.movil = c.Celular;
              contrato.email = c.Email;
              contrato.Nota1 = c.Nota1;
              return contrato;
            });

            this.consultandoContrato = false;
          })
          .catch(() => {
            this.consultandoContrato = false;
          });
      }

    });

    const ultimoPago = new UltimoPagoModel();

    ultimoPago.fechaUltimoPago = '2019-04-15';
    ultimoPago.numeroDocumento = '115544778855';
    ultimoPago.usuario = 'Pepita Jimenez';
    ultimoPago.valor = 55000;

    this.ultimoPago = ultimoPago;
  }

  seleccionarContrato(indice: number) {
    this.contrato = this.contratos[indice];
  }

  verpagos() {
    if (!this.contrato) {
      alert('Seleccione contrato');
      return;
    } else {
        this.contratoSevice.consultarUltimosPagos(this.contrato.contrato).then((pagos: string[]) => {
         console.log(JSON.stringify(pagos));
         this.modalController.create({
          component: UltimosPagosComponent,
          componentProps: {
            pagos
          },
        }).then((modal) => {
           modal.present();
        });
       });
    }
  }

   verbeneficiarios() {

    if (!this.contrato) {
      alert('Seleccione contrato');
      return;
    } else {
        this.contratoSevice.consultarBeneficiarrios(this.contrato.contrato).then((beneficiarios: string[]) => {
         console.log(JSON.stringify(beneficiarios));
         this.modalController.create({
          component: BeneficiariosComponent,
          componentProps: {
            beneficiarios
          },
        }).then((modal) => {
           modal.present();
        });
       });
    }
  }

  registrarGestion() {
    if (!this.contrato) {
      alert('Seleccione contrato');
      return;
    }

    this.router.navigate(['registro-gestion', JSON.stringify(this.contrato)]);

  }

  registrarPago() {
    if (!this.contrato) {
      alert('Seleccione contrato');
      return;
    }

    this.router.navigate(['registrar-pago', JSON.stringify(this.contrato)]);
  }

  actualizarContrato() {
    if (!this.contrato) {
      alert('Seleccione contrato');
      return;
    }

    this.router.navigate(['actualizar-datos', JSON.stringify(this.contrato)]);
  }

}
