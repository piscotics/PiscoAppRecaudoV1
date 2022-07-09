import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-ultimos-servadicionales',
  templateUrl: './ultimos-servadicionales.component.html',
  styleUrls: ['./ultimos-servadicionales.component.scss'],
})
export class UltimosServadicionalesComponent implements OnInit {

  adicionales: string[] = [];

  constructor(private modalctrl: ModalController, private navParams: NavParams) { }

  ngOnInit() {}

  ionViewWillEnter() {
    
    this.adicionales = this.navParams.get('adicionales');
  }


  close() {
    this.modalctrl.dismiss(true);
  }

}
