import { Platform } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// Modelos
import { SesionLocalModel } from '../../models/sesion-local.model';

// Servicios
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string;

  sesionLocal: SesionLocalModel = new SesionLocalModel();

  constructor(
    private platform: Platform,
    private router: Router,
    private sesionService: SesionService
  ) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.sesionLocal = this.sesionService.sesionLocal;
    });
  }

  mostrar() {
    return !this.router.url.startsWith('/login') && !this.router.url.startsWith('/config');
  }

  mostrarMenu() {
    return !this.router.url.startsWith('/login') && !this.router.url.startsWith('/config');
  }

  mostrarBackButton() 
  {
    return !this.router.url.startsWith('/login') && !this.router.url.startsWith('/home') 
    && !this.router.url.startsWith('/registrar-pago')
    && !this.router.url.startsWith('/registrar-pago2')
    && !this.router.url.startsWith('/registro-gestion')
    && !this.router.url.startsWith('/registro-gestion2');
  }

}
