import { ConfigModel } from './../models/config.model';
import { Injectable } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';

// Modelos
import { ErrorNativeStorage } from '../interfaces/error-native-storage';

// Plugins
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  private configKey: string = 'recaudos-config';
  private printKey: string = 'print-config';
  config: ConfigModel = new ConfigModel();

  constructor(
    private platform: Platform,
    private nativeStorage: NativeStorage,
    private webview: WebView
  ) { }

  // Obtiene la configuración de la aplicación
  obtenerConfiguracion() {
    return new Promise((resolve, reject) => {

      if (!this.platform.is('cordova')) {
        // Si estamos en un navegador entonces usamos el localStorage

        let config = localStorage.getItem(this.configKey);

        if (config) {
          this.config = JSON.parse(config);
        }

        resolve( this.config);
      } else {

        this.nativeStorage.getItem(this.configKey)
          .then((config: ConfigModel) => {
            this.config = config;
            resolve(config);
          })
          .catch((error: ErrorNativeStorage) => {

            if (error.code === 2) {
              // No existe la key en el storage aún, no hay problema usamos el objeto con la data predeterminada
              resolve(error.exception);
            } else {
              reject(error);
            }

          });
      }

    });
  }

  generarRutaLogoReutilizable() {
    if (this.config.logoEmpresa) {
      this.config.logoEmpresaUtilizable = `${this.webview.convertFileSrc(this.config.logoEmpresa)}?v=${new Date().getTime()}`;
    } else {
      this.config.logoEmpresaUtilizable = '';
    }
  }

  guardarConfiguracion() {
    return new Promise((resolve, reject) => {

      this.generarRutaLogoReutilizable();

      if (!this.platform.is('cordova')) {
        // Si estamos en un navegador entonces usamos el localStorage

        localStorage.setItem(this.configKey, JSON.stringify(this.config));
        resolve(null);
      } else {
        this.nativeStorage.setItem(this.configKey, this.config)
          .then(() => {
            resolve(null);
          })
          .catch((error: ErrorNativeStorage) => {
            reject(error);
          });
      }

    });
  }

  guardarImpresora(printAddress){
    return new Promise((resolve, reject)=>{
      if(!this.platform.is('cordova')){
        localStorage.setItem(this.printKey, printAddress);
        resolve(null);
      }else{
        this.nativeStorage.setItem(this.printKey, printAddress)
          .then(() => {
            resolve(null);
          })
          .catch((error: ErrorNativeStorage) => {
            reject(error);
          });
      }
    })
  };

  obtenerImpresora() {
    return new Promise((resolve, reject) => {

      if (!this.platform.is('cordova')) {
        let config = localStorage.getItem('print-config');
        resolve(config);
      } else {

        this.nativeStorage.getItem('print-config')
          .then((config: string) => {
            resolve(config);
          })
          .catch((error: ErrorNativeStorage) => {
            if (error.code === 2) {
              resolve(null);
            } else {
              reject(error);
            }

          });
      }

    });
  };
}
