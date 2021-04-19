import { Component, OnInit } from '@angular/core';
import { ToastController, Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

// plugins
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

// Modelos
import { ErrorNativeStorage } from 'src/app/interfaces/error-native-storage';
import { ConfigModel } from './../../models/config.model';

// Servicios
import { ConfiguracionService } from './../../services/configuracion.service';
import { PrintService } from '../../services/print.service';

import { SesionService } from './../../services/sesion.service';


@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  config: ConfigModel = new ConfigModel();
  mostrarRuta: boolean = false;

  constructor(
    private platform: Platform,
    private router: Router,
    private toastController: ToastController,
    private webview: WebView,
    private file: File,
    private imagePicker: ImagePicker,
    private configuracionService: ConfiguracionService,
    private print: PrintService,
    private alert: AlertController,
    private sesionService: SesionService,
  ) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      // Cargamos la configuración en pantalla

      this.config = this.configuracionService.config;
    });
  }

  actualizarcampoConfig = (campo: string, valor: string) => {
    this.config[campo] = valor;
  }

  cambiarLogoEmpresaClick() {

    if (!this.platform.is('cordova')) {
      this.mostrarToast('Esta funcionalidad sólo es permitida en Android o IOS');
      return;
    }

    const options: ImagePickerOptions = {
      maximumImagesCount: 1
    }

    this.imagePicker.getPictures(options)
      .then((results) => {

        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < results.length; i++) {

          const rutaArchivoActual = results[i];
          const directorioActual = rutaArchivoActual.substr(0, rutaArchivoActual.lastIndexOf('/'));
          const nombreArchivo = rutaArchivoActual.substr((rutaArchivoActual.lastIndexOf('/') + 1));
          const extensionArchivo = nombreArchivo.substr(nombreArchivo.lastIndexOf('.'));
          const nuevoDirectorio = `${this.file.dataDirectory}logos/`;
          const nuevoNombreArchivo = `logo_empresa${extensionArchivo}`;

          this.file.resolveDirectoryUrl(this.file.dataDirectory)
            .then((directoryEntry) => {

              directoryEntry.getDirectory('logos', { create: true }, (logosEntry) => {

                this.file.moveFile(directorioActual, nombreArchivo, nuevoDirectorio, nuevoNombreArchivo)
                  .then((archivoMovido) => {

                    this.config.logoEmpresa = archivoMovido.toURL();
                    this.actualizaLogoEmpresa();

                    console.log(`El archivo se movio desde ${rutaArchivoActual} a ${archivoMovido.toURL()}`);

                  })
                  .catch((error) => {
                    this.mostrarToast('Error moviendo el archivo');
                  });

              }, (error) => {
                this.mostrarToast('Error obteniendo diectorio de logos');
              });

            })
            .catch((error) => {
              this.mostrarToast('Error resolviendo el directorio de dataDirectory');
            });

        }
      }, (err) => {
        this.mostrarToast('Error obteniendo la galería');
      });

  }

  actualizaLogoEmpresa() {
    setTimeout(() => {
      this.configuracionService.generarRutaLogoReutilizable();
    }, 500);
  }

  guardarConfiguracionClick = () => {
    if (!this.config.servidorIp) {
      this.mostrarToast('Por favor ingrese la IP del servidor');
      return;
    }

    if (this.config.servidorIp.split('.').length !== 4 && this.config.servidorIp.toLocaleLowerCase() !== 'localhost') {
      this.mostrarToast('Por favor ingrese una IP válida');
      return;
    }

    if (!this.config.servidorPuerto) {
      this.mostrarToast('Por favor ingrese el puerto del servidor');
      return;
    }

    this.configuracionService.guardarConfiguracion()
      .then(() => {
        this.mostrarToast('Configuración guardada');
      })
      .catch((error: ErrorNativeStorage) => {
        this.mostrarToast(`Error guardando la configuración: ${error.exception}`);
      });
  }


  async ValidarLicencia() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar Licencia!',
      message: 'Desea Validar La <strong>Licencia</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            if (this.config.servidorIp !== null && this.config.servidorIp !== undefined && this.config.servidorIp !== ''){
              this.sesionService.agregarLicencia(this.config);
            }
          }
        }
      ]
    });

    await alert.present();
  }

  configurarImpresoraClick() {
    /**
     * Se genera lógica para consulta de dispositivos bluetooth.
     */

    this.print.searchBt().then(res=>{
      let inputs = [];
      for(let item of res){
        inputs.push({
          name: item.address,
          type: 'radio',
          value: item.address,
          label: item.name
        });
      }

      let modalPrint;
      this.alert.create({
        header: 'Dispositivos',
        inputs: inputs,
        buttons:[
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass:'secondary'
          },
          {
            text: 'Aceptar',
            handler: data=>{
              this.configuracionService.guardarImpresora(data).then(res=>{
                this.toastController.create({
                  message: 'Impresora configurada satisfactoriamente',
                  duration: 2000
                }).then(res=>{
                  res.present();
                })
              }).catch(err=>{
                  this.toastController.create({ message: err.message, duration: 2000}).then(obj=>{ obj.present()});
              })
            }
          }
        ]
      }).then(res=>{
        modalPrint = res;
        res.present();
      });
    }).catch(err=>{
      this.alert.create({
        header: 'Error',
        message: 'Se ha presentado un error al conectarnos con sus dispositivos Bluetooth, por favor revise su conexión',
        buttons: ['Ok']
      }).then((res)=>{
        res.present();
      })
    })
  }

  mostrarToast = (mensaje: string) => {
    this.toastController.create({
      message: mensaje,
      duration: 2000
    }).then(toast => {
      toast.present();
    });
  }

}
