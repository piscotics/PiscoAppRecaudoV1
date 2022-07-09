import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginPage } from './pages/login/login.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'login', component: LoginPage },
  { path: 'config', loadChildren: './pages/config/config.module#ConfigPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'consultar-contrato', loadChildren: './pages/consultar-contrato/consultar-contrato.module#ConsultarContratoPageModule' },
  // tslint:disable-next-line: max-line-length
  { path: 'consultar-contrato2/:criterioBusqueda/:textoBusqueda', loadChildren: './pages/consultar-contrato2/consultar-contrato2.module#ConsultarContrato2PageModule' },
  { path: 'registrar-pago/:contrato', loadChildren: './pages/registrar-pago/registrar-pago.module#RegistrarPagoPageModule' },
  { path: 'registrar-pago2/:pago', loadChildren: './pages/registrar-pago2/registrar-pago2.module#RegistrarPago2PageModule' },
  { path: 'consultar-pago', loadChildren: './pages/consultar-pago/consultar-pago.module#ConsultarPagoPageModule' },
  { path: 'registro-gestion/:contrato', loadChildren: './pages/registro-gestion/registro-gestion.module#RegistroGestionPageModule' },
  { path: 'registro-gestion2/:gestion', loadChildren: './pages/registro-gestion2/registro-gestion2.module#RegistroGestion2PageModule' },
  { path: 'actualizar-datos/:contrato', loadChildren: './pages/actualizar-datos/actualizar-datos.module#ActualizarDatosPageModule' },
  { path: 'cuadre-caja', loadChildren: './pages/cuadre-caja/cuadre-caja.module#CuadreCajaPageModule' },
  { path: 'consultar-ruta', loadChildren: './pages/consultar-ruta/consultar-ruta.module#ConsultarRutaPageModule' },
  { path: 'lista-pagos', loadChildren: './pages/lista-pago/lista-pago.module#ListaPagoPageModule' },
  { path: 'geolocalizacion', loadChildren: './pages/geolocalizacion/geolocalizacion.module#GeolocalizacionPageModule' },
  { path: 'lista-pago', loadChildren: './pages/lista-pago/lista-pago.module#ListaPagoPageModule' },
  { path: 'lista-novedades', loadChildren: './pages/lista-novedad/lista-novedad.module#ListaNovedadPageModule' },
  { path: 'pruebas', loadChildren: './pages/pruebas/pruebas.module#PruebasPageModule' },
  

  
  

 



  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
