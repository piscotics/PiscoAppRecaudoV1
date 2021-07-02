import { Component, OnInit } from '@angular/core';
import { RegistrarpagoModel } from 'src/app/models/registrar-pago.model';
import { SesionLocalModel } from 'src/app/models/sesion-local.model';
import { Platform, ModalController, NavParams, ToastController } from '@ionic/angular';
import { SesionService } from 'src/app/services/sesion.service';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-modal-confirmar-pago',
  templateUrl: './modal-confirmar-pago.component.html',
  styleUrls: ['./modal-confirmar-pago.component.scss'],
})
export class ModalConfirmarPagoComponent implements OnInit {

  registroPago: RegistrarpagoModel = null;

  sesionLocal: SesionLocalModel = new SesionLocalModel();

  constructor(
    private platform: Platform,
    private navParams: NavParams,
    private modalController: ModalController,
    private sesionService: SesionService,
    private network: Network,
    private toastController: ToastController,
  ) { }

  ionViewWillEnter() {
    this.registroPago = this.navParams.get('registroPago');
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.sesionLocal = this.sesionService.sesionLocal;
    });
  }

  aceptar() {
    // watch network for a disconnection
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.mostrarToast('Pago No registrado No Hay Conexion A Internet');
      this.modalController.dismiss(false);
    });

    // stop disconnect watch
    disconnectSubscription.unsubscribe();

    this.modalController.dismiss(true);
  }

  cancelar() {
    this.modalController.dismiss(false);
  }
  private mostrarToast(texto: string) {
    this.toastController.create({
      message: texto,
      duration: 2000
    }).then(toast => {
      toast.present();
    });
  }

}
