import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SesionLocalModel } from 'src/app/models/sesion-local.model';
import { PagosService } from 'src/app/services/pagos.service';
import { RutasService } from 'src/app/services/rutas.service';
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
  rutas: string[];

  constructor( private sesionService: SesionService,
    private rutaservice: RutasService,
    private datePipe: DatePipe) { }

  ngOnInit() {
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
    
    this.sesionLocal = this.sesionService.sesionLocal;
    
    this.rutaservice.lstRutas(this.datePipe.transform(this.textoBusqueda,"yyyy-MM-dd"), this.sesionLocal.sesionUsuario.USERNAME)
           .then((lsrutas: string[]) => {
              this.rutas = lsrutas;
          });
  }

}
