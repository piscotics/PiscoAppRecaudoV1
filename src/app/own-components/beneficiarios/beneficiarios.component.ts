import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';



@Component({
  selector: 'app-beneficiarios',
  templateUrl: './beneficiarios.component.html',
  styleUrls: ['./beneficiarios.component.scss'],
})

export class BeneficiariosComponent implements OnInit {

  constructor(private modalctrl: ModalController, private navParams: NavParams) { }
  beneficiarios: string[] = [];


  ngOnInit() {}
  
  ionViewWillEnter() {
    this.beneficiarios = this.navParams.get('beneficiarios');
  }


  close() {
    this.modalctrl.dismiss(true);
  }
}
