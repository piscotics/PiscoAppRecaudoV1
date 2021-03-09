import { ModoVisualizarContratoEnum } from '../../enums/modo-visualizar-contrato.enum';
import { CiudadModel } from '../../models/ciudad-model';
import { DepartamentoModel } from '../../models/departamento-model';
import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { ContratoModel } from 'src/app/models/contrato-model';

@Component({
  selector: 'app-datos-contrato',
  templateUrl: './datos-contrato.component.html',
  styleUrls: ['./datos-contrato.component.scss'],
})
export class DatosContratoComponent implements OnInit {

  @Input() contrato: ContratoModel = null;
  @Input() modo: ModoVisualizarContratoEnum = ModoVisualizarContratoEnum.MODO_CONSULTA;

  enumModo = ModoVisualizarContratoEnum;

  departamentos: DepartamentoModel[] = [
    new DepartamentoModel(1, 'Huila'),
    new DepartamentoModel(2, 'Valle del Cauca'),
    new DepartamentoModel(3, 'Antioquia'),
    new DepartamentoModel(4, 'Cundinamarca'),
  ];

  ciudades: CiudadModel[] = [
    new CiudadModel(1, 'Neiva', 1),
    new CiudadModel(2, 'Campoalegre', 1),
    new CiudadModel(3, 'Rivera', 1),
    new CiudadModel(4, 'Hobo', 1),
  ]

  constructor() { }

  ngOnInit() {

  }


  compararDepartamento = (o1: DepartamentoModel, o2: DepartamentoModel) => {
    return (o1 && o2) && (o1.id === o2.id);
  };

  departamentoSeleccionado(event: any) {
    this.contrato.departamento = event.detail.value;
  }

  ciudadSeleccionada(event: any) {
    this.contrato.ciudad = event.detail.value;
  }

  departamentoPorId(id: number) {
    const departamento = this.departamentos.find(d => d.id === id);
    return departamento ? departamento.nombre : '';
  }

  ciudadPorId(id: number) {
    const ciudad = this.ciudades.find(d => d.id === id);
    return ciudad ? ciudad.nombre : '';
  }

}
