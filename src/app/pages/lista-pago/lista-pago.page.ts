import { Component, OnInit } from '@angular/core';
import { SesionLocalModel } from 'src/app/models/sesion-local.model';
import { SesionService } from 'src/app/services/sesion.service';
import { PagosService } from '../../services/pagos.service';

@Component({
  selector: 'app-lista-pago',
  templateUrl: './lista-pago.page.html',
  styleUrls: ['./lista-pago.page.scss'],
})
export class ListaPagoPage implements OnInit {

  textoBusqueda = new Date();
  pagos: string[];
  sesionLocal: SesionLocalModel = null;
  constructor( private sesionService: SesionService,
               private pagoservice: PagosService) { }

  ngOnInit() {
  }
  
  cambiofecha( event )
  {
    this.textoBusqueda = event.target.value;
  }


  consultarLstPagos()
  {
    if (!this.textoBusqueda) {
      alert('Por favor ingresa un criterio de búsqueda');
      return;
    }

    this.sesionLocal = this.sesionService.sesionLocal;
    
    this.pagoservice.lstPagos(this.textoBusqueda, this.sesionLocal.sesionUsuario.USERNAME)
           .then((lspagos: string[]) => {
              this.pagos = lspagos;
          });
    }


}
