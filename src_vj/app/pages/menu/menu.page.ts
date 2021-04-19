import { Component, OnInit } from '@angular/core';
import { ImagenModel } from 'src/app/models/imagen.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  logoEmpresa: ImagenModel = null;

  constructor() { }

  ngOnInit() {
  }

  consultarContrato() {
    alert('consultarContrato');
  }
  consultarPago() {
    alert('consultarPago');
  }
  cuadreCaja() {
    alert('cuadreCaja');
  }
  geolicalizacion() {
    alert('geolicalizacion');
  }
  configurarImpresora() {
    alert('configurarImpresora');
  }
  consultarRuta() {
    alert('consultarRuta');
  }

} 
