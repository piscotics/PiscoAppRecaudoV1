import { Component, OnInit } from '@angular/core';
import { RegistroGestionModel } from 'src/app/models/registro-gestion.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro-gestion2',
  templateUrl: './registro-gestion2.page.html',
  styleUrls: ['./registro-gestion2.page.scss'],
})
export class RegistroGestion2Page implements OnInit {

  gestion: RegistroGestionModel = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const gestion =  this.activatedRoute.snapshot.paramMap.get('gestion');

    if (gestion) {
      this.gestion = JSON.parse(gestion);
    }
  }

}
