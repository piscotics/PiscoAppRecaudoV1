import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SesionLocalModel } from 'src/app/models/sesion-local.model';
import { OfflineService } from 'src/app/services/offline.service';
import { SesionService } from 'src/app/services/sesion.service';
import { ConsultarRutaModel } from '../../models/consultar-ruta.model';
@Component({
  selector: 'app-consultar-ruta',
  templateUrl: './consultar-ruta.page.html',
  styleUrls: ['./consultar-ruta.page.scss'],
})
export class ConsultarRutaPage implements OnInit {
  textoBusqueda = new Date();
  consultarRuta: ConsultarRutaModel = null;
  sesionLocal: SesionLocalModel = null;
  rutas:any;
  criterioBusqueda: string = 'Sn';

  constructor( private sesionService: SesionService,
    private ofline: OfflineService,
    private offline: OfflineService,
    private datePipe: DatePipe,
    private router: Router
    ) { }

  ngOnInit() {
  }
  consultarCto(contrato : string){
    this.router.navigate(['consultar-contrato2', 'CONTRATO',contrato]);
  }
  cambiofecha( event )
  {
    this.textoBusqueda = event.target.value;
  }
  consultar(){
    if (!this.textoBusqueda) {
      alert('Por favor ingresa un criterio de búsqueda');
      return;
    }
    if (!this.criterioBusqueda) {
      alert('Por favor seleccione el estado');
      return;
    }
    
    this.sesionLocal = this.sesionService.sesionLocal;
    this.offline.createDatabase().then(res => {
        this.offline.getConsultarRutas(this.datePipe.transform(this.textoBusqueda,"yyyy-MM-dd"), this.sesionLocal.sesionUsuario.IDCOBRADOR,this.criterioBusqueda).then((res:any) => {
          this.rutas = res;
          console.log("las rutas son:***********", this.rutas)
        });
    });

  

   /*  this.rutaservice.lstRutas(this.datePipe.transform(this.textoBusqueda,"yyyy-MM-dd"), this.sesionLocal.sesionUsuario.USERNAME)
           .then((lsrutas: string[]) => {
              this.rutas = lsrutas;
          }); */
  }

}
