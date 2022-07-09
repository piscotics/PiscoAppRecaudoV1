import { Component, OnInit } from '@angular/core';
import { Platform, ToastController, AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

// Modelos
import { ErrorNativeStorage } from 'src/app/interfaces/error-native-storage';
import { ConfigModel } from 'src/app/models/config.model';
import { SesionLocalModel } from 'src/app/models/sesion-local.model';

// Servicios
import { ConfiguracionService } from 'src/app/services/configuracion.service';
import { SesionService } from './../../services/sesion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  config: ConfigModel = new ConfigModel();
  sesionLocal: SesionLocalModel = new SesionLocalModel();

  usuario: string = '';
  clave: string = '';

  constructor(
    private platform: Platform,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    private configuracionService: ConfiguracionService,
    private sesionService: SesionService,
    private navCtrl: NavController
  ) { 
    
  }

  ngOnInit() {
   //Metodo Anterior Implementado alex
    // this.sesionLocal = this.sesionService.sesionLocal;
    // this.config = this.configuracionService.config;
    // this.navCtrl.pop();
    // if (this.sesionLocal.sesionIniciada) {
    //   // this.mostrarToast('Ya inicio sesión');
    //   this.router.navigate(['consultar-contrato'], { replaceUrl: true });
    // }

    this.platform.ready().then(() => {
      /*
        Primero preguntamos si el usuario ya inicio sesión, si ya inició 
        entonces lo redireccionamos al la pantalla de consulta de contrato
      */

      this.sesionLocal = this.sesionService.sesionLocal;
      this.config = this.configuracionService.config;

      if (this.sesionLocal.sesionIniciada) {
        // this.mostrarToast('Ya inicio sesión');
        this.router.navigate(['consultar-contrato'], { replaceUrl: true });
      }

    });
  }

  iniciarSesion() {
    if (this.usuario.replace(/\s+/g, '').length === 0) {
      this.mostrarAlerta('Por favor ingrese el usuario');
      return;
    }

    if (this.clave.replace(/\s+/g, '').length === 0) {
      this.mostrarAlerta('Por favor ingrese la clave');
      return;
    }

    this.sesionService.iniciarSesion(this.usuario, this.clave);
  }

  irAConfiguracion() {
    this.router.navigate(['config']);
  }

  mostrarToast = (mensaje: string) => {
    this.toastController.create({
      message: mensaje,
      duration: 2000
    }).then(toast => {
      toast.present();
    });
  }

  mostrarAlerta = (mensaje: string) => {
    this.alertController.create({
      header: 'Informaciòn',
      message: mensaje,
      buttons: [{
        role: 'cancel',
        text: 'Ok',
      }]
    }).then((alert) => {
      alert.present();
    });
  }

  doTermAccepted(){

  }
}
