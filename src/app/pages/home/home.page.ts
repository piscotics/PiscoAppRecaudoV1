import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

// Modelos
import { SesionLocalModel } from 'src/app/models/sesion-local.model';

// Servicios
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  sesionLocal: SesionLocalModel = new SesionLocalModel();
  fechaRuta: string;

  constructor(
    private platform: Platform,
    private sesionService: SesionService
  ) {
    this.platform.ready().then(() => {
      this.sesionLocal = this.sesionService.sesionLocal;
      this.fechaRuta =localStorage.getItem('fechaRuta') ;
    });
  }

}
