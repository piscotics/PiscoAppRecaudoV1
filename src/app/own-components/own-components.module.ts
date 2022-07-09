import { ModalConfirmarPagoComponent } from './modal-confirmar-pago/modal-confirmar-pago.component';
import { BeneficiariosComponent } from './beneficiarios/beneficiarios.component';
import { LogoEmpresaComponent } from './logo-empresa/logo-empresa.component';
import { DatosPagoComponent } from './datos-pago/datos-pago.component';
import { DatosContratoComponent } from './datos-contrato/datos-contrato.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DatosNovedadComponent } from './datos-novedad/datos-novedad.component';
import { UltimosPagosComponent } from './ultimos-pagos/ultimos-pagos.component';
import { UltimasNovedadesComponent } from './ultimas-novedades/ultimas-novedades.component';
import { UltimosServadicionalesComponent } from './ultimos-servadicionales/ultimos-servadicionales.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DatosContratoComponent,
    DatosPagoComponent,
    LogoEmpresaComponent,
    ModalConfirmarPagoComponent,
    BeneficiariosComponent,
    DatosNovedadComponent,
    UltimosPagosComponent,
    UltimasNovedadesComponent,
    UltimosServadicionalesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    DatosContratoComponent,
    DatosPagoComponent,
    LogoEmpresaComponent,
    DatosNovedadComponent
  ],
  entryComponents: [ModalConfirmarPagoComponent, BeneficiariosComponent, UltimosPagosComponent,UltimasNovedadesComponent,UltimosServadicionalesComponent]
})
export class OwnComponentsModule { }
