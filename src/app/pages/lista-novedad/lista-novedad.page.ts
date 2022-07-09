import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SesionLocalModel } from 'src/app/models/sesion-local.model';
import { PagosService } from 'src/app/services/pagos.service';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-lista-novedad',
  templateUrl: './lista-novedad.page.html',
  styleUrls: ['./lista-novedad.page.scss'],
})
export class ListaNovedadPage implements OnInit {

  textoBusqueda = new Date();
  novedades: string[];
  sesionLocal: SesionLocalModel = null;
  constructor( private sesionService: SesionService,
               private pagoservice: PagosService,
               private datePipe: DatePipe) { }

  ngOnInit() {
  }
  
  cambiofecha( event )
  {
    this.textoBusqueda = event.target.value;
  }


  consultarLstNovedades()
  {
    if (!this.textoBusqueda) {
      alert('Por favor ingresa un criterio de búsqueda');
      return;
    }

    this.sesionLocal = this.sesionService.sesionLocal;
    
    this.pagoservice.lstNovedades(this.datePipe.transform(this.textoBusqueda,"yyyy-MM-dd"), this.sesionLocal.sesionUsuario.USERNAME)
           .then((lsnovedades: string[]) => {
              this.novedades = lsnovedades;
          });
    }

}
