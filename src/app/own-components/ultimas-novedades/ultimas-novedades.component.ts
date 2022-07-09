import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-ultimas-novedades',
  templateUrl: './ultimas-novedades.component.html',
  styleUrls: ['./ultimas-novedades.component.scss'],
})
export class UltimasNovedadesComponent implements OnInit {

  novedades: string[] = [];

  constructor(private modalctrl: ModalController, private navParams: NavParams) { }

  ngOnInit() {}

  ionViewWillEnter() {
    
    this.novedades = this.navParams.get('novedades');
  }


  close() {
    this.modalctrl.dismiss(true);
  }

}
