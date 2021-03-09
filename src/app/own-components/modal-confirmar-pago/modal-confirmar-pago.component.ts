import { Component, OnInit } from '@angular/core';
import { RegistrarpagoModel } from 'src/app/models/registrar-pago.model';
import { SesionLocalModel } from 'src/app/models/sesion-local.model';
import { Platform, ModalController, NavParams } from '@ionic/angular';
import { SesionService } from 'src/app/services/sesion.service';

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
    private sesionService: SesionService
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
    this.modalController.dismiss(true);
  }

  cancelar() {
    this.modalController.dismiss(false);
  }

}
