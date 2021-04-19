import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OwnComponentsModule } from 'src/app/own-components/own-components.module';
import { ConsultarRutaPage } from './consultar-ruta.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ConsultarRutaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    OwnComponentsModule
  ],
  declarations: [ConsultarRutaPage]
})
export class ConsultarRutaPageModule {}
