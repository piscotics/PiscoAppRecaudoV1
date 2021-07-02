import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { AlertController, LoadingController, Platform, ToastController } from '@ionic/angular';
import { ConfigHelper } from '../helpers/config.helper';
import { CuadreCajaRequesModel } from '../models/cuadre-caja.model';
import { ConfiguracionService } from './configuracion.service';
import { OfflineService } from './offline.service';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  constructor(private platform: Platform,
    private http: HttpClient,
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private androidPermissions: AndroidPermissions,
    private diagnostic: Diagnostic,
    private geolocation: Geolocation,
    private device: Device,
    private configuracionService: ConfiguracionService,
    private offline: OfflineService) { }

    lstRutas(fecha: string, usuario: string) {
    return new Promise((resolve, reject) => {

      this.loadingController.create({
        message: 'Lista Rutas',
        duration: 30000
      }).then((loading) => {

        loading.present();

        const dataPost = new CuadreCajaRequesModel(usuario, fecha);
        const configHelper = new ConfigHelper(this.configuracionService.config);
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
        
        this.http.post(`${configHelper.getApiUrl()}/ruta/lstRutaUser`, dataPost, httpOptions)
        .subscribe((data: string[]) => {
            loading.dismiss();
            resolve(data);
          },
            (error: HttpErrorResponse) => {
              console.log(JSON.stringify(error))
              this.mostrarToastSimple('Error autenticando en el servidor');
              loading.dismiss();
              reject();
            });

      });

    });
  }
  private mostrarToastSimple(texto: string) {
    this.toastController.create({
      message: texto,
      duration: 2000
    }).then(toast => {
      toast.present();
    });
  }

}
