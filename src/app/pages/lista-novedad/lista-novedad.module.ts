import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { ListaNovedadPage } from './lista-novedad.page';
import { RouterModule, Routes } from '@angular/router';
import { OwnComponentsModule } from 'src/app/own-components/own-components.module';


const routes: Routes = [
  {
    path: '',
    component: ListaNovedadPage
  }
];@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    OwnComponentsModule
  ],
  declarations: [ListaNovedadPage]
})
export class ListaNovedadPageModule {}
