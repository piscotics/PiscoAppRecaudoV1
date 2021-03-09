import { Component, OnInit } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';

// Modelos
import { ConfigModel } from 'src/app/models/config.model';

// Servicios
import { ConfiguracionService } from 'src/app/services/configuracion.service';

@Component({
  selector: 'app-logo-empresa',
  templateUrl: './logo-empresa.component.html',
  styleUrls: ['./logo-empresa.component.scss'],
})
export class LogoEmpresaComponent implements OnInit {

  config: ConfigModel = new ConfigModel();
  logoEmpresaSrc: string = null;

  constructor(
    private platform: Platform,
    private configuracionService: ConfiguracionService
  ) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.config = this.configuracionService.config;
    });
  }

}
