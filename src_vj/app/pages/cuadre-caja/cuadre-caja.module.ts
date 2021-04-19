import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CuadreCajaPage } from './cuadre-caja.page';
import { OwnComponentsModule } from 'src/app/own-components/own-components.module';

const routes: Routes = [
  {
    path: '',
    component: CuadreCajaPage
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
  declarations: [CuadreCajaPage]
})
export class CuadreCajaPageModule {}
