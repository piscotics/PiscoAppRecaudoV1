import { Injectable } from '@angular/core';
import { Platform, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { ConfigHelper } from '../helpers/config.helper';

// Modelos
import { ConfigModel } from '../models/config.model';
import { ConsultaContratoResponseModel } from '../models/responses/consulta-contrato-response.model';

// Servicios
import { ConfiguracionService } from './configuracion.service';
import { ContratoModel } from '../models/contrato-model';


// Plugins
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Device } from '@ionic-native/device/ngx';
import { ContratoUpdateModel } from '../models/contrato-update-model';
import { OfflineService } from './offline.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  config: ConfigModel = new ConfigModel();

  constructor(
    private platform: Platform,
    private http: HttpClient,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private configuracionService: ConfiguracionService,
    private alertController: AlertController,
    private androidPermissions: AndroidPermissions,
    private diagnostic: Diagnostic,
    private geolocation: Geolocation,
    private offline: OfflineService
  ) {
    this.config = this.configuracionService.config;
  }

  consultarContratoPorNumero(numeroContrato: string) {
    return new Promise((resolve, reject) => {

      const params = new HttpParams().set('NumberContract', numeroContrato);
      const configHelper = new ConfigHelper(this.config);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        params
      };

      let isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;
      console.log("isOffline",isOffline)
      if(!isOffline){

        this.loadingController.create({
          message: 'Consultando contrato',
          duration: 30000
        }).then((loading) => {
  
          loading.present();
  
          this.http.post(`${configHelper.getApiUrl()}/contrato/searchnumbercontract`, null, httpOptions)
            .subscribe((contrato: ConsultaContratoResponseModel) => {
  
              console.log(JSON.stringify(contrato));
  
              if (!contrato.Cedula) {
                loading.dismiss();
                this.mostrarToast('No se encontró el contrato, intente nuevamente.');
                
                reject();
              } else {
                loading.dismiss();
                resolve(contrato);
              }
  
            },
              (error: HttpErrorResponse) => {
  
                loading.dismiss();
                console.log(JSON.stringify(error))
                reject();
                this.mostrarToast('Error consultando contrato');
  
              });
  
        });
      }
      else{
        this.loadingController.create({
          message: 'Consultando contrato',
          duration: 30000
        }).then((loading) => {
          this.offline.createDatabase().then(res => {
              // tslint:disable-next-line: no-shadowed-variable
              this.offline.getInfoContrato(numeroContrato).then((res: any) => {
                const contrato: ConsultaContratoResponseModel = new ConsultaContratoResponseModel();
                contrato.IdContrato =  res.IDCONTRATO;
                contrato.FechaAfiliacion = res.FECHAAFILIACION;
                contrato.FechaCobertura = res.PAGOHASTA;
                // contrato.FechaCobertura  = res.FECHACOERTURA;
                contrato.EstadoContrato = res.ESTADOCONTRATO;
                contrato.Cedula = res.CEDULA;
                contrato.Titular = res.TITULAR ;
                contrato.Direccion = res.DIRECCION;
                contrato.DireccionCobro = res.DIRECCIONCOBRO;
                contrato.Telefono = res.TELEFONO ;
                contrato.Celular = res.CELULAR;
                contrato.Plan = res.PLAN;
                contrato.Cuota = res.CUOTA ;
                contrato.FechaUltimoPago = res.FECHAULTIMOPAGO;
                contrato.NoRecibo = res.NORECIBO;
                contrato.Valor = res.VALOR;
                contrato.Departamento = res.DEPARTAMENTO;
                contrato.DepartamentoCobro = res.DEPARTAMENTOCOBRO;
                contrato.Municipio = res.MUNICIPIO;
                contrato.MunicipioCobro = res.MUNICIPIOCOBRO;
                contrato.Barrio = res.BARRIO;
                contrato.BarrioCobro = res.BARRIOCOBRO;
                contrato.Email = res.EMAIL;
                contrato.Nota1 = res.Nota1;
                

                if (!contrato.Cedula) {
                  loading.dismiss();
                  this.mostrarToast('No se encontró el contrato, intente nuevamente.');
                  
                  reject();
                } else {
                  loading.dismiss();
                  resolve(contrato);
                }
                
              });
          });
        });
        
      }
    })
  }

 
  consultarContratoPorEmpresa(empresa: string) {
    return new Promise((resolve, reject) => {

      const params = new HttpParams().set('NumberEmpresa', empresa);
      const configHelper = new ConfigHelper(this.config);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        params
      };
  
      const isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;
      if(!isOffline)
      {
          this.loadingController.create({
            message: 'Consultando empresa',
            duration: 30000
          }).then((loading) => {
    
            loading.present();
    
            this.http.post(`${configHelper.getApiUrl()}/contrato/searchnumberempresa`, null, httpOptions)
              .subscribe((contrato: ConsultaContratoResponseModel[]) => {
    
                console.log(JSON.stringify(contrato));
    
                if (contrato.length === 0) {
                  loading.dismiss();
                  this.mostrarToast('No se encontraron datos, intente nuevamente.');
                  reject();
                } else {
                  loading.dismiss();
                  resolve(contrato);
                }

              },
                (error: HttpErrorResponse) => {
    
                  loading.dismiss();
                  console.log(JSON.stringify(error))
                  reject();
                  this.mostrarToast('Error consultando datos');
    
                });
    
          });
      }
     /* else{
        this.loadingController.create({
          message: 'Consultando Empresa',
          duration: 30000
        }).then((loading) => {
          this.offline.createDatabase().then(res => {
              // tslint:disable-next-line: no-shadowed-variable
              this.offline.getInfoCedula(empresa).then((res: any[]) => {
                const  returncontrato: ConsultaContratoResponseModel[] = [];
                const contrato: ConsultaContratoResponseModel = new ConsultaContratoResponseModel();
                for (let i = 0; i < res.length ; i++) {
                  contrato.IdContrato =  res[i].IDCONTRATO;
                  contrato.FechaAfiliacion = res[i].FECHAAFILIACION;
                  //contrato.FechaCobertura  = res[i].FECHACOERTURA;
                  contrato.EstadoContrato = res[i].ESTADOCONTRATO;
                  contrato.Cedula = res[i].CEDULA;
                  contrato.FechaCobertura = res[i].PAGOHASTA;
                  contrato.Titular = res[i].TITULAR ;
                  contrato.Direccion = res[i].DIRECCION;
                  contrato.DireccionCobro = res[i].DIRECCIONCOBRO;
                  contrato.Telefono = res[i].TELEFONO ;
                  contrato.Celular = res[i].CELULAR;
                  contrato.Plan = res[i].PLAN;
                  contrato.Cuota = res[i].CUOTA ;
                  contrato.FechaUltimoPago = res[i].FECHAULTIMOPAGO;
                  contrato.NoRecibo = res[i].NORECIBO;
                  contrato.Valor = res[i].VALOR;
                  contrato.Departamento = res[i].DEPARTAMENTO;
                  contrato.DepartamentoCobro = res[i].DEPARTAMENTOCOBRO;
                  contrato.Municipio = res[i].MUNICIPIO;
                  contrato.MunicipioCobro = res[i].MUNICIPIOCOBRO;
                  contrato.Barrio = res[i].BARRIO;
                  contrato.BarrioCobro = res[i].BARRIOCOBRO;
                  contrato.Email = res[i].EMAIL;
                  contrato.Nota1 = res[i].NOTA1;
                  returncontrato.push(contrato);
                }
                if (returncontrato.length === 0) {
                  loading.dismiss();
                  this.mostrarToast('No se encontraron datos, intente nuevamente.');
                  reject();
                } else {
                  loading.dismiss();
                  resolve(returncontrato);
                }
              });
          });
        });
      }*/
    });
  }


  consultarContratoPorNit(nit: string) {
    return new Promise((resolve, reject) => {

      const params = new HttpParams().set('NumberNit', nit);
      const configHelper = new ConfigHelper(this.config);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        params
      };
  
      const isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;
      if(!isOffline)
      {
          this.loadingController.create({
            message: 'Consultando nit',
            duration: 30000
          }).then((loading) => {
    
            loading.present();
    
            this.http.post(`${configHelper.getApiUrl()}/contrato/searchnumbernit`, null, httpOptions)
              .subscribe((contrato: ConsultaContratoResponseModel[]) => {
    
                console.log(JSON.stringify(contrato));
    
                if (contrato.length === 0) {
                  loading.dismiss();
                  this.mostrarToast('No se encontraron datos, intente nuevamente.');
                  reject();
                } else {
                  loading.dismiss();
                  resolve(contrato);
                }

              },
                (error: HttpErrorResponse) => {
    
                  loading.dismiss();
                  console.log(JSON.stringify(error))
                  reject();
                  this.mostrarToast('Error consultando datos');
    
                });
    
          });
      }
     /* else{
        this.loadingController.create({
          message: 'Consultando Empresa',
          duration: 30000
        }).then((loading) => {
          this.offline.createDatabase().then(res => {
              // tslint:disable-next-line: no-shadowed-variable
              this.offline.getInfoCedula(empresa).then((res: any[]) => {
                const  returncontrato: ConsultaContratoResponseModel[] = [];
                const contrato: ConsultaContratoResponseModel = new ConsultaContratoResponseModel();
                for (let i = 0; i < res.length ; i++) {
                  contrato.IdContrato =  res[i].IDCONTRATO;
                  contrato.FechaAfiliacion = res[i].FECHAAFILIACION;
                  //contrato.FechaCobertura  = res[i].FECHACOERTURA;
                  contrato.EstadoContrato = res[i].ESTADOCONTRATO;
                  contrato.Cedula = res[i].CEDULA;
                  contrato.FechaCobertura = res[i].PAGOHASTA;
                  contrato.Titular = res[i].TITULAR ;
                  contrato.Direccion = res[i].DIRECCION;
                  contrato.DireccionCobro = res[i].DIRECCIONCOBRO;
                  contrato.Telefono = res[i].TELEFONO ;
                  contrato.Celular = res[i].CELULAR;
                  contrato.Plan = res[i].PLAN;
                  contrato.Cuota = res[i].CUOTA ;
                  contrato.FechaUltimoPago = res[i].FECHAULTIMOPAGO;
                  contrato.NoRecibo = res[i].NORECIBO;
                  contrato.Valor = res[i].VALOR;
                  contrato.Departamento = res[i].DEPARTAMENTO;
                  contrato.DepartamentoCobro = res[i].DEPARTAMENTOCOBRO;
                  contrato.Municipio = res[i].MUNICIPIO;
                  contrato.MunicipioCobro = res[i].MUNICIPIOCOBRO;
                  contrato.Barrio = res[i].BARRIO;
                  contrato.BarrioCobro = res[i].BARRIOCOBRO;
                  contrato.Email = res[i].EMAIL;
                  contrato.Nota1 = res[i].NOTA1;
                  returncontrato.push(contrato);
                }
                if (returncontrato.length === 0) {
                  loading.dismiss();
                  this.mostrarToast('No se encontraron datos, intente nuevamente.');
                  reject();
                } else {
                  loading.dismiss();
                  resolve(returncontrato);
                }
              });
          });
        });
      }*/
    });
  }

  consultarBeneficiarrios(cedula: string){


    let isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;

    
    return new Promise((resolve, reject) => {

      const params = new HttpParams().set('NumberId', cedula);
      const configHelper = new ConfigHelper(this.config);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        params
      };

      if(!isOffline)
      {
          
      
          this.loadingController.create({
            message: 'Consultando Beneficiarios',
            duration: 30000
          }).then((loading) => {
    
            loading.present();
    
            this.http.post(`${configHelper.getApiUrl()}/contrato/searchBene`, null, httpOptions)
              .subscribe((beneficiarios: string[]) => {
    
                console.log(JSON.stringify(beneficiarios));
    
                if (beneficiarios.length === 0) {
                  loading.dismiss();
                  this.mostrarToast('No se encontraron Beneficiarios, intente nuevamente.');
                  reject();
                } else {
                  loading.dismiss();
                  resolve(beneficiarios);
                }
    
              },
                (error: HttpErrorResponse) => {
    
                  loading.dismiss();
                  console.log(JSON.stringify(error))
                  reject();
                  this.mostrarToast('Error consultando Beneficiarios');
    
                });
    
          });
        }
        else{
          this.loadingController.create({
            message: 'Consultando Beneficiarios',
            duration: 30000
          }).then((loading) => {
            loading.present();
            this.offline.getBeneficiarios(cedula).then((beneficiarios: string[]) => {
                loading.dismiss();
                resolve(beneficiarios);
            });
          });
    
        }

    });
  }
 
  
  consultarFacturasPendientes(cedula: string){


    let isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;

    
    return new Promise((resolve, reject) => {

      const params = new HttpParams().set('NumberId', cedula);
      const configHelper = new ConfigHelper(this.config);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        params
      };

      if(!isOffline)
      {
          
      
          this.loadingController.create({
            message: 'Consultando Facturas',
            duration: 30000
          }).then((loading) => {
    
            loading.present();
    
            this.http.post(`${configHelper.getApiUrl()}/contrato/searchFacturas`, null, httpOptions)
              .subscribe((facturas: string[]) => {
    
                console.log(JSON.stringify(facturas));
    
                if (facturas.length === 0) {
                  loading.dismiss();
                  this.mostrarToast('No se encontraron facuras, intente nuevamente.');
                  reject();
                } else {
                  loading.dismiss();
                  resolve(facturas);
                }
    
              },
                (error: HttpErrorResponse) => {
    
                  loading.dismiss();
                  console.log(JSON.stringify(error))
                  reject();
                  this.mostrarToast('Error consultando facturas');
    
                });
    
          });
        }
        /*else{
          this.loadingController.create({
            message: 'Consultando Facturas',
            duration: 30000
          }).then((loading) => {
            loading.present();
            this.offline.getBeneficiarios(cedula).then((facturas: string[]) => {
                loading.dismiss();
                resolve(facturas);
            });
          });
    
        }*/

    });
  }
  
  consultarUltimosPagos(contrato: string){
    let isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;


    return new Promise((resolve, reject) => {

      const params = new HttpParams().set('NumberId', contrato);
      const configHelper = new ConfigHelper(this.config);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        params
      };

      if(!isOffline)
      {

      this.loadingController.create({
        message: 'Consultando Ultimos Pagos',
        duration: 30000
      }).then((loading) => {

        loading.present();

        this.http.post(`${configHelper.getApiUrl()}/pago/searcPays`, null, httpOptions)
          .subscribe((pagos: string[]) => {

            console.log(JSON.stringify(pagos));

            if (pagos.length === 0) {
              loading.dismiss();
              this.mostrarToast('No se encontraron Pagos, intente nuevamente.');
              reject();
            } else {
              loading.dismiss();
              resolve(pagos);
            }

          },
            (error: HttpErrorResponse) => {

              loading.dismiss();
              console.log(JSON.stringify(error))
              reject();
              this.mostrarToast('Error consultando Pagos');

            });

      });
    }
    else{
      this.loadingController.create({
        message: 'Consultando Beneficiarios',
        duration: 30000
      }).then((loading) => {
        loading.present();
        this.offline.getUltimospagos(contrato).then((pagos: string[]) => {
            loading.dismiss();
            resolve(pagos);
        });
      });

    }

    });
  }

  consultarUltimasNovedades(contrato: string){
    let isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;


    return new Promise((resolve, reject) => {

      const params = new HttpParams().set('NumberId', contrato);
      const configHelper = new ConfigHelper(this.config);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        params
      };

      if(!isOffline)
      {

      this.loadingController.create({
        message: 'Consultando Ultimas Novedades',
        duration: 30000
      }).then((loading) => {

        loading.present();

        this.http.post(`${configHelper.getApiUrl()}/pago/searcNovedades`, null, httpOptions)
          .subscribe((novedades: string[]) => {

            console.log(JSON.stringify(novedades));

            if (novedades.length === 0) {
              loading.dismiss();
              this.mostrarToast('No se encontraron Novedades, intente nuevamente.');
              reject();
            } else {
              loading.dismiss();
              resolve(novedades);
            }

          },
            (error: HttpErrorResponse) => {

              loading.dismiss();
              console.log(JSON.stringify(error))
              reject();
              this.mostrarToast('Error consultando Novedades');

            });

      });
    }
    else{
      this.loadingController.create({
        message: 'Consultando Novedades',
        duration: 30000
      }).then((loading) => {
        loading.present();
        this.offline.getUltimasNovedades(contrato).then((novedades: string[]) => {
            loading.dismiss();
            resolve(novedades);
        });
      });

    }

    });
  }

  consultarUltimosAdicionales(contrato: string){
    let isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;


    return new Promise((resolve, reject) => {

      const params = new HttpParams().set('NumberId', contrato);
      const configHelper = new ConfigHelper(this.config);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        params
      };

      if(!isOffline)
      {

      this.loadingController.create({
        message: 'Consultando Servicios Adicionales',
        duration: 30000
      }).then((loading) => {

        loading.present();

        this.http.post(`${configHelper.getApiUrl()}/pago/searcAdicionales`, null, httpOptions)
          .subscribe((adicionales: string[]) => {

            console.log(JSON.stringify(adicionales));

            if (adicionales.length === 0) {
              loading.dismiss();
              this.mostrarToast('No se encontraron Servicios Adicionales, intente nuevamente.');
              reject();
            } else {
              loading.dismiss();
              resolve(adicionales);
            }

          },
            (error: HttpErrorResponse) => {

              loading.dismiss();
              console.log(JSON.stringify(error))
              reject();
              this.mostrarToast('Error consultando Servicios Adicionales');

            });

      });
    }
    else{
      this.loadingController.create({
        message: 'Consultando Servicios Adicionales',
        duration: 30000
      }).then((loading) => {
        loading.present();
        this.offline.getUltimosAdicionales(contrato).then((adicionales: string[]) => {
            loading.dismiss();
            resolve(adicionales);
        });
      });

    }

    });
  }
  cargarDepartamentos() {
    return new Promise((resolve, reject) => {

      const configHelper = new ConfigHelper(this.config);
      this.http.get(`${configHelper.getApiUrl()}/contrato/departamentos`)
        .subscribe((result: any[]) => {
          console.log(JSON.stringify(result));
          resolve(result);
      },
      (error: HttpErrorResponse) => {
        console.log(JSON.stringify(error))
        reject();
        this.mostrarToast('Error realizando la consulta De departamentos');

      });
    });
  }


  cargarMunicipios(departamento: string) {
    return new Promise((resolve, reject) => {

      const params = new HttpParams().set('Departamento', departamento);
      const configHelper = new ConfigHelper(this.config);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        params
      };

      this.loadingController.create({
        message: 'Consultando Municipios',
        duration: 30000
      }).then((loading) => {

        loading.present();
        this.http.post(`${configHelper.getApiUrl()}/contrato/municipios`, null, httpOptions)
        //this.http.post('http://localhost:5008/api/contrato/municipios', null, httpOptions)
          .subscribe((municipios: string[]) => {

            console.log(JSON.stringify(municipios));

            if (municipios.length === 0) {
              loading.dismiss();
              this.mostrarToast('No se encontraron Municipios, intente nuevamente.');
              reject();
            } else {
              loading.dismiss();
              resolve(municipios);
            }

          },
            (error: HttpErrorResponse) => {

              loading.dismiss();
              console.log(JSON.stringify(error))
              reject();
              this.mostrarToast('Error consultando Municipios');

            });

      });

    })
  }

  consultarContratoPorCedula(cedula: string) {
    return new Promise((resolve, reject) => {

      const params = new HttpParams().set('NumberId', cedula);
      const configHelper = new ConfigHelper(this.config);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        params
      };
  
      const isOffline = localStorage.getItem('offlineMode') === 'true' ? true : false;
      if(!isOffline)
      {
          this.loadingController.create({
            message: 'Consultando contratos',
            duration: 30000
          }).then((loading) => {
    
            loading.present();
    
            this.http.post(`${configHelper.getApiUrl()}/contrato/searchnumberid`, null, httpOptions)
              .subscribe((contrato: ConsultaContratoResponseModel[]) => {
    
                console.log(JSON.stringify(contrato));
    
                if (contrato.length === 0) {
                  loading.dismiss();
                  this.mostrarToast('No se encontraron contratos, intente nuevamente.');
                  reject();
                } else {
                  loading.dismiss();
                  resolve(contrato);
                }

              },
                (error: HttpErrorResponse) => {
    
                  loading.dismiss();
                  console.log(JSON.stringify(error))
                  reject();
                  this.mostrarToast('Error consultando contratos');
    
                });
    
          });
      }
      else{
        this.loadingController.create({
          message: 'Consultando contrato',
          duration: 30000
        }).then((loading) => {
          this.offline.createDatabase().then(res => {
              // tslint:disable-next-line: no-shadowed-variable
              this.offline.getInfoCedula(cedula).then((res: any[]) => {
                const  returncontrato: ConsultaContratoResponseModel[] = [];
                const contrato: ConsultaContratoResponseModel = new ConsultaContratoResponseModel();
                for (let i = 0; i < res.length ; i++) {
                  contrato.IdContrato =  res[i].IDCONTRATO;
                  contrato.FechaAfiliacion = res[i].FECHAAFILIACION;
                  //contrato.FechaCobertura  = res[i].FECHACOERTURA;
                  contrato.EstadoContrato = res[i].ESTADOCONTRATO;
                  contrato.Cedula = res[i].CEDULA;
                  contrato.FechaCobertura = res[i].PAGOHASTA;
                  contrato.Titular = res[i].TITULAR ;
                  contrato.Direccion = res[i].DIRECCION;
                  contrato.DireccionCobro = res[i].DIRECCIONCOBRO;
                  contrato.Telefono = res[i].TELEFONO ;
                  contrato.Celular = res[i].CELULAR;
                  contrato.Plan = res[i].PLAN;
                  contrato.Cuota = res[i].CUOTA ;
                  contrato.FechaUltimoPago = res[i].FECHAULTIMOPAGO;
                  contrato.NoRecibo = res[i].NORECIBO;
                  contrato.Valor = res[i].VALOR;
                  contrato.Departamento = res[i].DEPARTAMENTO;
                  contrato.DepartamentoCobro = res[i].DEPARTAMENTOCOBRO;
                  contrato.Municipio = res[i].MUNICIPIO;
                  contrato.MunicipioCobro = res[i].MUNICIPIOCOBRO;
                  contrato.Barrio = res[i].BARRIO;
                  contrato.BarrioCobro = res[i].BARRIOCOBRO;
                  contrato.Email = res[i].EMAIL;
                  contrato.Nota1 = res[i].NOTA1;
                  returncontrato.push(contrato);
                }
                if (returncontrato.length === 0) {
                  loading.dismiss();
                  this.mostrarToast('No se encontraron contratos, intente nuevamente.');
                  reject();
                } else {
                  loading.dismiss();
                  resolve(returncontrato);
                }
              });
          });
        });
      }
    });
  }

  actualizarContrato(contrato: ContratoUpdateModel) {
    console.log("los datos del contrato son")
    console.log(contrato)
    return new Promise((resolve, reject) => {

      const configHelper = new ConfigHelper(this.config);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
    
      this.loadingController.create({
        message: 'Actualizando Contrato',
        duration: 30000
      }).then((loading) => {
        loading.present();
        /// this.http.post('http://localhost:5008/api/contrato/updatecontract', contrato, httpOptions)
        this.http.post(`${configHelper.getApiUrl()}/contrato/updatecontract`, contrato, httpOptions)
          .subscribe((result: string) => {
            if (result === '-1'){
              this.mostrarAlerta('Actualizando Contrato' , 'No se pudo Actualizar el Contrato.');
              loading.dismiss();
            } else {
              this.mostrarAlerta('Actualizando Contrato' , result );
              loading.dismiss();
              resolve(null);
            }
          },
            (error: HttpErrorResponse) => {

              loading.dismiss();
              reject();
              this.mostrarToastSimple('Error Actualizando el Contrato');
          });

      });
    });
  }

  mostrarAlertSimple(titulo: string, texto: string) {
    this.alertController.create({
      header: titulo,
      message: texto,
      buttons: [{
        role: 'cancel',
        text: 'Ok'
      }]
    }).then((myAlert) => {
      myAlert.present();
    });
  }


  mostrarAlerta = (titulo: string , mensaje: string) => {
    this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: [{
        role: 'cancel',
        text: 'Ok',
      }]
    }).then((alert) => {
      alert.present();
    });
  }

  prepararRegistroContrato(contratoModel: ContratoUpdateModel) {
    return new Promise((resolve, reject) => {

      if (!contratoModel.contrato) {
        this.mostrarToastSimple('Por favor seleccione el Contrato');
        reject();
        return;
      }

      
      if (!this.platform.is('android')) {
        contratoModel.posx = '';
        contratoModel.posy = '';
        resolve(contratoModel);

      } else {

        // Validaciones de permisos en Android

        this.validarAccesoGPS().then(() => {

          this.validarGPSActivo().then(() => {

            this.validarAccesoDispositivo().then(() => {

              this.loadingController.create({
                message: 'Obteniendo geolocalización',
                duration: 5300
              }).then((loading) => {

                loading.present();

                // Obtenemos la geolocalización
                this.geolocation.getCurrentPosition({
                  timeout: 5000, 
                  enableHighAccuracy: true
                }).then((resp) => {
                  loading.dismiss();

                  contratoModel.posx = String(resp.coords.latitude);
                  contratoModel.posy = String(resp.coords.longitude);

                  // Mostrar modal de confirmación
                  resolve(contratoModel);

                }).catch((error) => {
                  loading.dismiss();
                  this.mostrarToastSimple('Error obteniendo la geolocalización, intente de nuevo');
                  //reject();
                  contratoModel.posx = '';
                  contratoModel.posy = '';

                  // Mostrar modal de confirmación
                  resolve(contratoModel);
                });

              });

            }).catch(() => {
              reject();
            });

          }).catch(() => {
            reject();
          });

        }).catch(() => {
          reject();
        });

      }

    });
  }

  private validarAccesoGPS() {
    return new Promise((resolve, reject) => {
      this.diagnostic.isLocationAuthorized().then((authorized) => {

        console.log(`¿Autorizado permiso de GPS?: ${authorized ? 'SI' : 'NO'}`);

        if (!authorized) {
          // No está autorizada la app

          this.alertController.create({
            header: 'Permiso uso de GPS',
            message: 'Necesitamos su permiso para acceder al GPS antes de continuar.',
            buttons: [{
              role: 'cancel',
              text: 'Cancelar',
              handler: () => {
                reject();
              }
            }, {
              text: 'De acuerdo',
              handler: () => {

                this.diagnostic.requestLocationAuthorization().then(() => {
                  resolve(null);
                }).catch(() => {
                  this.mostrarToastSimple('No se concedió acceso al GPS');
                  reject();
                });

              }
            }]
          }).then((myAlert) => {
            myAlert.present();
          });

        } else {
          resolve(null);
        }

      }).catch((error) => {
        this.mostrarToastSimple('Error comprobando autorizaciòn de GPS');
        reject();
      })
    });
  }

  private validarGPSActivo() {
    return new Promise((resolve, reject) => {
      this.diagnostic.isGpsLocationAvailable().then((enabled) => {

        console.log(`¿Esta activado GPS?: ${enabled ? 'SI' : 'NO'}`);

        if (!enabled) {
          // No está activo el GPS

          this.alertController.create({
            header: 'Activar GPS',
            message: 'Por favor active el GPS en el modo Alta precisión antes de continuar.',
            buttons: [{
              role: 'cancel',
              text: 'Cancelar',
              handler: () => {
                reject();
              }
            }, {
              text: 'De acuerdo',
              handler: () => {
                this.diagnostic.switchToLocationSettings();
                reject();
              }
            }]
          }).then((myAlert) => {
            myAlert.present();
          });

        } else {
          resolve(null);
        }

      }).catch((error) => {
        this.mostrarToastSimple('Error comprobando GPS activo');
        reject();
      })
    });
  }

// Para consultar el IMEI
private validarAccesoDispositivo() {
  return new Promise((resolve, reject) => {

    this.androidPermissions.checkPermission(
      this.androidPermissions.PERMISSION.READ_PHONE_STATE
    ).then((hasPermission) => {

      console.log(`¿Autorizado permiso de estado de dispositivo?: ${hasPermission ? 'SI' : 'NO'}`);

      if (!hasPermission) {

        this.alertController.create({
          header: 'Permiso estado dispositivo',
          message: 'Necesitamos consultar el estado del dispositivo, por favor concedanos el permiso antes de continuar.',
          buttons: [{
            role: 'cancel',
            text: 'Cancelar',
            handler: () => {
              reject();
            }
          }, {
            text: 'De acuerdo',
            handler: () => {

              // Solicitar permiso
              this.androidPermissions.requestPermission(
                this.androidPermissions.PERMISSION.READ_PHONE_STATE
              ).then(() => {

                resolve(null);

              }).catch(() => {

                reject();

              });

            }
          }]
        }).then((myAlert) => {
          myAlert.present();
        });

      } else {

        resolve(null);

      }

    }).catch((error) => {
      this.mostrarToastSimple('Error comprobando autorizaciòn de estado de dispositivo');
      reject();
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
  private mostrarToast(texto: string) {
    this.toastController.create({
      message: texto,
      duration: 2000
    }).then(toast => {
      toast.present();
    });
  }
}
