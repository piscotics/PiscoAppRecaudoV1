import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-ultimos-pagos',
  templateUrl: './ultimos-pagos.component.html',
  styleUrls: ['./ultimos-pagos.component.scss'],
})



export class UltimosPagosComponent implements OnInit {
  pagos: string[] = [];

  constructor(private modalctrl: ModalController, private navParams: NavParams) { }

  ngOnInit() {}

  ionViewWillEnter() {
    
    this.pagos = this.navParams.get('pagos');
  }


  close() {
    this.modalctrl.dismiss(true);
  }
}

  