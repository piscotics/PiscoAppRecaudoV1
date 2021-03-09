import { ActivatedRoute } from '@angular/router';
import { ConsultaPagoModel } from '../../models/consulta-pago.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-pago2',
  templateUrl: './registrar-pago2.page.html',
  styleUrls: ['./registrar-pago2.page.scss'],
})
export class RegistrarPago2Page implements OnInit {

  pago: ConsultaPagoModel = null;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    const pago = this.activatedRoute.snapshot.paramMap.get('pago');

    if (pago) {
      this.pago = JSON.parse(pago);
    }

  }

}
