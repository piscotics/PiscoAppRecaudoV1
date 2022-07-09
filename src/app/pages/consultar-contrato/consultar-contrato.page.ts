import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-contrato',
  templateUrl: './consultar-contrato.page.html',
  styleUrls: ['./consultar-contrato.page.scss'],
})
export class ConsultarContratoPage implements OnInit {

  criterioBusqueda: string = 'CEDULA';
  textoBusqueda: string = '';
  isOffline: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;
  }

  consultarContrato() {
    if (!this.criterioBusqueda) {
      alert('Por favor indique el tipo de búsqueda');
      return;
    }

    if (!this.textoBusqueda) {
      alert('Por favor ingresa un criterio de búsqueda');
      return;
    }

    this.router.navigate(['consultar-contrato2', this.criterioBusqueda, this.textoBusqueda]);
  }

  listaPagos() {
    this.router.navigate(['lista-pagos']);
  }

  listaNovedades() {
    this.router.navigate(['lista-novedades']);
  }

  cuadrecaja() {
    this.router.navigate(['cuadre-caja']);
  }

 consultarruta() {
    this.router.navigate(['consultar-ruta']);
  }

}
