import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistroGestionPage } from './registro-gestion.page';
import { OwnComponentsModule } from 'src/app/own-components/own-components.module';

const routes: Routes = [
  {
    path: '',
    component: RegistroGestionPage
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
  declarations: [RegistroGestionPage]
})
export class RegistroGestionPageModule {}
