import { Component, OnInit } from '@angular/core';
import { ConsultarRutaModel } from '../../models/consultar-ruta.model';
@Component({
  selector: 'app-consultar-ruta',
  templateUrl: './consultar-ruta.page.html',
  styleUrls: ['./consultar-ruta.page.scss'],
})
export class ConsultarRutaPage implements OnInit {
  textoBusqueda = new Date();
  consultarRuta: ConsultarRutaModel = null;
  constructor() { }

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
  }

}
