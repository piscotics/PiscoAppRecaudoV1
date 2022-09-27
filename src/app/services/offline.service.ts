import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { EmailComposer} from '@ionic-native/email-composer/ngx';
import {File} from '@ionic-native/file/ngx';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class OfflineService {

  public pagosLocales: any = [];

  db: SQLiteObject;
  constructor(public sqlite: SQLite,
    private file: File,
    private emailComposer: EmailComposer,
    ) { 
  }

  sendTest(){
    //traemos el listado de pagos
    this.testEmail(this.pagosLocales)
    let email = {
      to: 'info@piscotics.com',
      app: 'gmail',
      attachments: [
        this.file.dataDirectory + 'pagos.txt'
      ],

      subject: 'Archivo Pagos Usuario ' ,
      body: 'Se anexa el archivo con los pagos realizados en ' + moment().format('MMMM Do YYYY, h:mm:ss a') ,
      isHtml: true
     
    };
    this.emailComposer.addAlias('gmail', 'com.google.android.gm');
    this.emailComposer.open(email);
   


    console.log("******** entro a crear archivo 3 **********")
  }

  testEmail(content : string ) {
    console.log("******** entro a crear archivo **********",content)
    this.file.createFile(this.file.dataDirectory, 'pagos.txt',false).then(() =>{ 

       
         //si no existe lo cre
              this.file.writeFile(this.file.dataDirectory, 'pagos.txt', content, {replace: true})
              .then(() => {      
                console.log("******** entro a crear archivo 555 **********")
                
              })
              .catch((err) => {
                console.error(err);
                console.log("******** entro a crear archivo 6666 **********")
              });
   
       }).catch((err) => {
            //si existe lo sobre escribo
          this.file.writeExistingFile(this.file.dataDirectory, 'pagos.txt', content)
          .then(() => {      
            console.log("******** entro a crear archivo 22 **********")
            
          })
          .catch((err) => {
            console.error(err);
            console.log("******** entro a crear archivo 444 **********")
          });
  
        });


     
   
    }

  public async createDatabase(){
    try
    {
      this.db = await this.sqlite.create({ name: 'developers.db', location: 'default'});
    }catch(ex){
      throw ex;
    }
  }

  public async createTables(){
    let sql = "";

    

    sql = 'DROP TABLE IF EXISTS USUARIOS';
    await this.db.executeSql(sql, []);

    sql = 'CREATE TABLE IF NOT EXISTS USUARIOS (ID INTEGER, USERNAME TEXT, CLAVE TEXT, ESTADO TEXT, FECHAINICIAL TEXT, FECHAFINAL TEXT, HORAINICIAL TEXT, HORAFINAL TEXT, IDCOBRADOR TEXT, NOMBRES TEXT, APELLIDOS TEXT, MAQUINA TEXT, NIT TEXT,PREFIJO TEXT, IDCAJAIND INTEGER, IDCAJAEMP INTEGER, IDCAJAPAR INTEGER, IDCAJA INTEGER, IDCAJAANT INTEGER)';    
    await this.db.executeSql(sql, []);

    sql = 'DROP TABLE IF EXISTS LICENCIAS';
    await this.db.executeSql(sql, []);

    sql = 'CREATE TABLE IF NOT EXISTS LICENCIAS (CODIGOLICENCIA TEXT PRIMARY KEY, FECHANOW TEXT)';
    await this.db.executeSql(sql, []);

   

    sql = 'DROP TABLE IF EXISTS EMPRESA';
    await this.db.executeSql(sql, []);

    sql = 'CREATE TABLE IF NOT EXISTS EMPRESA (NIT TEXT, NOMBRE TEXT, TELEFONOS TEXT, DIRECCION TEXT, CIUDAD TEXT, LOGO TEXT, PREFIJO TEXT, DOCUMENTO TEXT, RESOLUCION TEXT)';
    await this.db.executeSql(sql, []);

   

   
  }

  //si hay pagos sin sincronizar retorna true 
  public async comprobarEstadoPagosNovedad(): Promise<boolean> {
    try
    {
      console.log("ejecuto el metodo cat pagos sincronizados")
      let data = await this.db.executeSql("SELECT * FROM PAGOS WHERE SINCRONIZAR = 0", [] );
      //let res = await this.db.executeSql("SELECT * FROM PAGOS WHERE SINCRONIZAR = 0")
      console.log("pagos sincronizados", data)
      if(data.rows.length > 0){
        console.log("cat pagos sincronizados encontro")
        return true;
      }else{

        let data2 = await this.db.executeSql("SELECT * FROM NOVEDAD WHERE SINCRONIZAR = 0", [] );
        if(data2.rows.length > 0){
          console.log("cat pagos sincronizados encontro")
          return true;
        }else{
          return false;
        }
      }
    }catch(ex){
      console.log("err pagos sincronizados", ex)
      return false;
      
    }
  }

  public async createTablesRutas(){
    let sql = "";

    sql = 'DROP TABLE IF EXISTS RUTAS';
    await this.db.executeSql(sql, []);

    sql = 'CREATE TABLE IF NOT EXISTS RUTAS(IDRUTA INTEGER PRIMARY KEY AUTOINCREMENT,  ' +
    'USUARIO TEXT, IDCOBRADOR TEXT, IDCONTRATO TEXT, CEDULA TEXT, TITULAR TEXT, DIRECCION TEXT, ' + 
    'TELEFONO TEXT, CIUDAD TEXT, DIACOBRO1 SMALLINT, DIACOBRO2 SMALLINT, ESTADO TEXT, NOVEDAD INTEGER , '+
    'POSTFECHADODIA SMALLINT, INDICE SMALLINT, CUOTA FLOAT, PENDIENTE SMALLINT, ESTADOCONTRATO TEXT, FECHAR TEXT, ' +
    'BASEDATOS TEXT, EMPRESA TEXT, NIT TEXT, DIRECCIONCOBRO TEXT, BOXCONTRATANTE TEXT, VALORCARTERA FLOAT, VALORSEGURO FLOAT, ' + 
    // tslint:disable-next-line: max-line-length
    'CELULAR TEXT, PAGOHASTA TEXT, DEPTOC TEXT, MPIOC TEXT, BARRIOC TEXT, MOTIVO TEXT, FECHAPROGRAMADA TEXT, CODBARRIO TEXT, COBERTURA TEXT, ULTIMOSPAGOS TEXT,BENEFICIARIOS TEXT, BANDERA INTEGER,FECHAAFILIACION TEXT,PLAN TEXT, NOTA1 TEXT,ULTIMASGESTIONES TEXT,SERVADICIONALES TEXT)';
    await this.db.executeSql(sql, []);

   

    sql = 'DROP TABLE IF EXISTS FORMAPAGO';
    await this.db.executeSql(sql, []);

    sql = 'CREATE TABLE IF NOT EXISTS FORMAPAGO (IdTipoPago INTEGER, NombreTipoPago TEXT)';
    await this.db.executeSql(sql, []);

    
  }

  public async createTablesPgosNovedad(){
    let sql = "";

    

    sql = 'DROP TABLE IF EXISTS PAGOS';
    await this.db.executeSql(sql, []);

    sql = 'CREATE TABLE IF NOT EXISTS PAGOS (ID INTEGER PRIMARY KEY AUTOINCREMENT, IDCONTRATO TEXT, IDPERSONA TEXT, VALOR FLOAT, DESCUENTO FLOAT, CANTIDADCUOTAS FLOAT, MAQUINA TEXT, TRANSAC TEXT, USUARIO TEXT, OBSERVACIONES TEXT, CUOTAMENSUAL FLOAT, ESTADO TEXT, FORMAPAGO TEXT, FECHAPAGOR TEXT, POSX TEXT, POSY TEXT, IDENTIFICADORBASE TEXT, TITULAR TEXT,  SINCRONIZAR TEXT , NRORECIBO TEXT, PagoDesde TEXT, PagoHasta TEXT,ValorLetras TEXT, NROREF TEXT, RESPUESTA TEXT )';
    await this.db.executeSql(sql, []);

    sql = 'DROP TABLE IF EXISTS NOVEDAD';
    await this.db.executeSql(sql, []);

    sql = 'CREATE TABLE IF NOT EXISTS NOVEDAD (ID INTEGER PRIMARY KEY AUTOINCREMENT ,CONTRATO TEXT , FECHA TEXT , NOVEDAD INTEGER, DIAPOST INTEGER, USUARIO TEXT, IDCOBRADOR TEXT, MODULO TEXT, TRANSAC INTEGER, FECHAPROGRAMADA TEXT, POSX TEXT, POSY TEXT, OBSERVACIONES TEXT,  SINCRONIZAR TEXT)';
    await this.db.executeSql(sql, []);

    sql = 'DROP TABLE IF EXISTS TIPONOVEDAD';
    await this.db.executeSql(sql, []);

    sql = 'CREATE TABLE IF NOT EXISTS TIPONOVEDAD (Idnovedad INTEGER, Novedad TEXT)';
    await this.db.executeSql(sql, []);
  }

  public async sincronizarRutas(data) {
    try
    {
      await this.db.executeSql("DELETE FROM RUTAS", []);

      let sql = 'INSERT INTO RUTAS (USUARIO, IDCOBRADOR, IDCONTRATO,CEDULA, TITULAR, DIRECCION , ' + 
      'TELEFONO, CIUDAD, DIACOBRO1, DIACOBRO2, ESTADO, NOVEDAD, POSTFECHADODIA, INDICE, CUOTA, PENDIENTE, ESTADOCONTRATO, FECHAR, ' +
      'BASEDATOS, EMPRESA, NIT, DIRECCIONCOBRO, BOXCONTRATANTE, VALORCARTERA, VALORSEGURO,' + 
      'CELULAR, PAGOHASTA, DEPTOC, MPIOC, BARRIOC, MOTIVO, FECHAPROGRAMADA, CODBARRIO, COBERTURA,ULTIMOSPAGOS, BENEFICIARIOS,BANDERA,FECHAAFILIACION,PLAN,NOTA1,ULTIMASGESTIONES,SERVADICIONALES) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?, ?,?,?,?,?,?,?)'


      for(let d of data){
        await this.db.executeSql(sql, [d.USUARIO, d.IDCOBRADOR, d.IDCONTRATO, d.CEDULA, d.TITULAR, d.DIRECCION, d.TELEFONO, d.CIUDAD, 
          d.DIACOBRO1, d.DIACOBRO2, d.ESTADO, d.NOVEDAD, d.POSTFECHADODIA, d.INDICE, d.CUOTA, d.PENDIENTE, d.ESTADOCONTRATO, d.FECHAR, 
          d.BASEDATOS, d.EMPRESA, d.NIT, d.DIRECCIONCOBRO, d.BOXCONTRATANTE, d.VALORCARTERA, d.VALORSEGURO, d.CELULAR, d.PAGOHASTA, 
          d.DEPTOC, d.MPIOC, d.BARRIOC, d.MOTIVO, d.FECHAPROGRAMADA, d.CODBARRIO, d.COBERTURA, d.ULTIMOSPAGOS, d.BENEFICIARIOS,0, d.FECHAAFILIACION,d.PLAN, d.NOTA1,d.ULTIMASGESTIONES, d.SERVADICIONALES ]);
      }

    }catch(ex)
    {  
      throw ex;
    }
  }

  public async getConsultarPagos(NroPago: string) { 
    try
    {
     console.log("los datos que se envian son",NroPago)
     let data;
      data = await this.db.executeSql("SELECT IDCONTRATO, IDPERSONA, VALOR, DESCUENTO, CANTIDADCUOTAS, MAQUINA, USUARIO, OBSERVACIONES, CUOTAMENSUAL, ESTADO, FORMAPAGO, FECHAPAGOR, POSX, POSY, TITULAR, SINCRONIZAR, NRORECIBO NumeroDocumento, PagoDesde, PagoHasta,ValorLetras, NROREF, RESPUESTA  FROM PAGOS R  WHERE  R.NRORECIBO = ? ", [NroPago]);
      console.log("la consulta a ejecutar es ", data)
      if(data.rows.length > 0){
        let todos = [];
        for (let i = 0; i < data.rows.length ; i++) {
          
          todos.push(data.rows.item(i));
    
        }
        return todos;
      }
      else{
        return [];
      }
    } catch(ex){
      throw ex;
    }
  }

  public async getConsultarRutas(fechar,idcobrador,estado, sincronizado ) {

    try
    {
     console.log("los datos que se envian son",fechar,idcobrador,estado, sincronizado)
     let data;

     if(estado == "Sn"){
       data = await this.db.executeSql("SELECT R.IDCONTRATO,R.CEDULA, R.TITULAR, R.PAGOHASTA, R.DIRECCION, R.TELEFONO, R.ESTADO,R.CUOTA, R.VALORCARTERA, R.NOTA1  FROM RUTAS R  WHERE R.FECHAR = ? AND R.IDCOBRADOR = ? AND R.ESTADO = ? ", [fechar+"T00:00:00",idcobrador,estado]);
     }else   if(estado == "Pago"){
       data = await this.db.executeSql("SELECT R.IDCONTRATO,R.CEDULA, R.TITULAR, R.PAGOHASTA, R.DIRECCION, R.TELEFONO, R.ESTADO,R.CUOTA, R.VALORCARTERA, P.VALOR, P.SINCRONIZAR, P.DESCUENTO , R.NOTA1 FROM RUTAS R LEFT JOIN PAGOS P ON P.IDCONTRATO = R.IDCONTRATO  WHERE R.FECHAR = ? AND R.IDCOBRADOR = ? AND R.ESTADO = ? AND P.SINCRONIZAR = ?  ", [fechar+"T00:00:00",idcobrador,estado, sincronizado]);
     }else   if(estado == "Novedad"){
       console.log("si llego aqui a novedad")
       data = await this.db.executeSql("SELECT R.IDCONTRATO,R.CEDULA, R.TITULAR, R.PAGOHASTA, R.DIRECCION, R.TELEFONO, R.ESTADO,R.CUOTA, R.VALORCARTERA,  T.NOVEDAD NOVEDADES, N.OBSERVACIONES, N.SINCRONIZAR , R.NOTA1 FROM RUTAS R INNER JOIN NOVEDAD N ON R.IDCONTRATO = N.CONTRATO INNER JOIN TIPONOVEDAD T ON T.Idnovedad = N.NOVEDAD WHERE R.FECHAR = ? AND R.IDCOBRADOR = ? AND R.ESTADO = ? AND N.SINCRONIZAR = ? ", [fechar+"T00:00:00",idcobrador,estado,sincronizado]);
     }

      console.log("la consulta a ejecutar es ", data)
      if(data.rows.length > 0){
        let todos = [];
        for (let i = 0; i < data.rows.length ; i++) {
          
          todos.push(data.rows.item(i));
    
        }
        return todos;
      }
      else{
        return [];
      }
    } catch(ex){
      throw ex;
    }
  }

  public async sincronizarLicencias(data) {
    try
    {
      await this.db.executeSql("DELETE FROM LICENCIAS", []);

      let sql = 'INSERT INTO LICENCIAS (CODIGOLICENCIA, FECHANOW) VALUES(?,?)';


      for(let d of data){
        await this.db.executeSql(sql, [d, new Date()]);
      }

    }catch(ex)
    {
      throw ex;
    }
  }

  public async sincronizarUsuarios(data) {
    try
    {

      

      await this.db.executeSql("DELETE FROM USUARIOS", []);

      let sql = 'INSERT INTO USUARIOS (ID, USERNAME, CLAVE, ESTADO, FECHAINICIAL, FECHAFINAL, HORAINICIAL, HORAFINAL, IDCOBRADOR, NOMBRES, APELLIDOS, MAQUINA, NIT,PREFIJO, IDCAJAIND, IDCAJAEMP, IDCAJAPAR, IDCAJA, IDCAJAANT) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?)';


      for(let d of data){
        await this.db.executeSql(sql, [d.ID, d.USERNAME, d.CLAVE, d.ESTADO, d.FECHAINICIAL, d.FECHAFINAL, d.HORAINICIAL, d.HORAFINAL, d.IDCOBRADOR, d.NOMBRES, d.APELLIDOS, d.MAQUINA, d.NIT,d.PREFIJO, d.IDCAJAIND, d.IDCAJAEMP, d.IDCAJAPAR, d.IDCAJA, d.IDCAJAANT]);
      }

    }catch(ex)
    {
      throw ex;
    }
  }

  public async sincronizarPagos(data) {
    try
    {
      await this.db.executeSql("DELETE FROM PAGOS", []);

      let sql = 'INSERT INTO PAGOS (IDCONTRATO, IDPERSONA, VALOR, DESCUENTO, CANTIDADCUOTAS, MAQUINA, USUARIO, OBSERVACIONES, CUOTAMENSUAL, ESTADO, FORMAPAGO, FECHAPAGOR, POSX, POSY, TITULAR, NROREF, RESPUESTA) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?, ?)';

      for(let d of data){
        await this.db.executeSql(sql, [d.IDCONTRATO, d.IDPERSONA, d.VALOR, d.DESCUENTO, d.CANTIDADCUOTAS, d.MAQUINA, d.USUARIO, d.OBSERVACIONES, d.CUOTAMENSUAL, d.ESTADO, d.FORMAPAGO, d.FECHAPAGOR, d.POSX, d.POSY, d.TITULAR, d.NROREF, d.RESPUESTA]);
      }
    }catch(ex)
    {
      throw ex;
    }
  }

  public async guardarPagosLocal(d) {

    console.log("pago a almacenar",d)
    try
    {
      let id = 0;
        let sql = 'INSERT INTO PAGOS (IDCONTRATO, IDPERSONA, VALOR, DESCUENTO, CANTIDADCUOTAS, MAQUINA,TRANSAC,  USUARIO, OBSERVACIONES, CUOTAMENSUAL, ESTADO, FORMAPAGO, FECHAPAGOR, POSX, POSY,IDENTIFICADORBASE, TITULAR, SINCRONIZAR, NRORECIBO, PagoDesde, PagoHasta,ValorLetras,NROREF,RESPUESTA ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?,?,?,?,?,?,?, ?)';
        await this.db.executeSql(sql, [d.IDCONTRATO, d.IDPERSONA, d.VALOR, d.DESCUENTO, d.CANTIDADCUOTAS, d.MAQUINA, d.TRANSAC,  d.USUARIO, d.OBSERVACIONES, d.CUOTAMENSUAL, d.ESTADO, d.FORMAPAGO,new Date(d.FECHAPAGOR).toDateString(), d.POSX, d.POSY,'OffLine', d.titular,0, d.NRORECIBO, d.PagoDesde, d.PagoHasta,d.ValorLetras,d.NROREF, d.RESPUESTA]).then((row: any) => {
          this.pagosLocales.push(d);
          id =  row.insertId.toString();
      });
      
       //cambiar el estado de la ruta local
        try
        {
          // tslint:disable-next-line: max-line-length
          let data = await this.db.executeSql('UPDATE RUTAS SET  ESTADO = ?  WHERE IDCONTRATO = ? AND CEDULA = ?', ['Pago' , d.IDCONTRATO, d.IDPERSONA]);
        } catch(ex){
          throw ex;
        }
    

      return id;

    }catch(ex)
    {
      throw ex;
    }


  }

  public  actualizarSincronizadoPago(IDCONTRATO: string, IDPERSONA: string) {
    //cambiar el sincronizado a 1
    try
    {
      console.log("sincronizo el pago del cto",IDCONTRATO, IDPERSONA)
      // tslint:disable-next-line: max-line-length
      let data =  this.db.executeSql('UPDATE PAGOS SET SINCRONIZAR = 1  WHERE IDCONTRATO = ? AND IDPERSONA = ?', [ IDCONTRATO, IDPERSONA]);
    } catch(ex){
      throw ex;
    }
  }
  public async actualizarSincronizadoNovedad(ID: string) {
    //cambiar el estado de la ruta local
    try
    {
      // tslint:disable-next-line: max-line-length
      let data = await this.db.executeSql('UPDATE NOVEDAD SET SINCRONIZAR = 1  WHERE ID = ?', [ ID]);
    } catch(ex){
      throw ex;
    }
  }

  public async guardarNovedadLocal(d) {
    try
    {

      console.log("va a guardar la novedad local")

      // tslint:disable-next-line: max-line-length
      let sql = 'INSERT INTO NOVEDAD(CONTRATO, NOVEDAD, DIAPOST, USUARIO, IDCOBRADOR, MODULO, TRANSAC, FECHAPROGRAMADA, POSX, POSY,OBSERVACIONES,  FECHA, SINCRONIZAR) VALUES(?,?,?,?,?,?,?,?,?,?,?, ?,?)';
      // tslint:disable-next-line: max-line-length
      await this.db.executeSql(sql, [d.Contrato, d.Novedad, d.Diapos, d.Usuario, d.IdCobrador, d.Modulo, d.Transac, d.Fechaprogramada, d.Posx, d.Posy, d.Observaciones ,  new Date().toDateString(), 0]);
   
     //cambiar el estado de la ruta local
      try
      {
        console.log("va a cambiar la ruta a novedad",  d.Contrato)
        let data = await this.db.executeSql('UPDATE RUTAS SET  ESTADO = ?  WHERE IDCONTRATO = ? ', ['Novedad' , d.Contrato]);
      } catch(ex){
        console.log("error estado ruta novedad")
        throw ex;
      }
   
    }catch(ex)
    {
      throw ex;
    }

   

  }

  public async sincronizarNovedades(data) {
    try
    {
      await this.db.executeSql("DELETE FROM NOVEDAD", []);

      let sql = 'INSERT INTO NOVEDAD(CONTRATO, NOVEDAD, DIAPOST, USUARIO, IDCOBRADOR, MODULO, TRANSAC, FECHAPROGRAMADA, POSX, POSY, OBSERVACIONES) VALUES(?,?,?,?,?,?,?,?,?,?)';

      for(let d of data){
        await this.db.executeSql(sql, [d.CONTRATO, d.NOVEDAD, d.DIAPOST, d.USUARIO, d.IDCOBRADOR, d.MODULO, d.TRANSAC, d.FECHAPROGRAMADA, d.POSX, d.POSY, d.OBSERVACIONES]);
      }
    }catch(ex)
    {
      throw ex;
    }
  }

  public async sincronizarEmpresas(d){
    try
    {
      await this.db.executeSql("DELETE FROM EMPRESA", []);

      let sql = 'INSERT INTO EMPRESA (NIT,NOMBRE,TELEFONOS,DIRECCION,CIUDAD,LOGO,PREFIJO,DOCUMENTO,RESOLUCION) VALUES (?,?,?,?,?,?,?,?,?)'
      
      await this.db.executeSql(sql, [d.NIT, d.NOMBRE, d.TELEFONOS, d.DIRECCION, d.CIUDAD, d.LOGO, d.PREFIJO, d.DOCUMENTO, d.RESOLUCION]);
      
    } catch (ex){
      throw ex;
    }
  }

  public async sincronizarFormaPago(data) {
    try
    {
      await this.db.executeSql('DELETE FROM FORMAPAGO', []);

      let sql = 'INSERT INTO FORMAPAGO (IdTipoPago, NombreTipoPago) VALUES(?,?)';


      for(let d of data){
        await this.db.executeSql(sql, [d.IdTipoPago , d.NombreTipoPago]);
      }

    }catch(ex)
    {
      throw ex;
    }
  }

  public async SincronizarListaNovedades(data) {
    try
    {
      await this.db.executeSql('DELETE FROM TIPONOVEDAD', []);

      let sql = 'INSERT INTO TIPONOVEDAD (Idnovedad, Novedad) VALUES(?,?)';


      for(let d of data){
        await this.db.executeSql(sql, [d.Idnovedad , d.Novedad]);
      }

    }catch(ex)
    {
      throw ex;
    }
  }

  public async loginOffline(usuario, contrasena){
    try
    {
      let res = await this.db.executeSql("SELECT * FROM USUARIOS WHERE USERNAME = ? AND CLAVE = ? ", [usuario, contrasena])
      let data = [];
      if(res.rows.length > 0){
        return res.rows.item(0);
      }else{
        throw null;
      }
    }catch(ex){
      throw ex;
    }
  }

  public async getInfoEmpresa(){
    try
    {
      let data = await this.db.executeSql("SELECT * FROM EMPRESA", []);
      if(data.rows.length > 0){
        return data.rows.item(0);
      }else{
        return {};
      }
    } catch(ex){
      throw ex;
    }
  }

  public async getPagoHasta(contrato)
  {
    try
    {
      let data = await this.db.executeSql("SELECT PAGOHASTA FROM RUTAS WHERE IDCONTRATO = ?", [contrato]);
      if(data.rows.length > 0){
        return data.rows.item(0);
      }
    } catch(ex){
      throw ex;
    }
  }

  public async updatePagoHasta(Pagohasta, contrato)
  {
    try
    {
      // tslint:disable-next-line: max-line-length
      let data = await this.db.executeSql('UPDATE RUTAS SET  PAGOHASTA = ?  WHERE IDCONTRATO = ?', [new Date(Pagohasta).toDateString() , contrato]);
    } catch(ex){
      throw ex;
    }
  }

  
  public async fechasPagos(Pagodesde,Pagohasta, Nrorecibo)
  {
    try
    {
      // tslint:disable-next-line: max-line-length
      let data = await this.db.executeSql('UPDATE PAGOS SET  PagoDesde  = ?, PagoHasta  = ?  WHERE  NRORECIBO  = ?', [new Date(Pagodesde).toDateString(),new Date(Pagohasta).toDateString() , Nrorecibo]);
    } catch(ex){
      throw ex;
    }
  }


  public async getInfoContrato(contrato){
    try
    {
      let data = await this.db.executeSql("SELECT * FROM RUTAS WHERE IDCONTRATO = ? ", [contrato]);
      if(data.rows.length > 0){
        return data.rows.item(0);
      }else{
        return {};
      }
    } catch(ex){
      throw ex;
    }
  }

  public async getInfoCedula(cedula){
    try
    {
      let data = await this.db.executeSql("SELECT * FROM RUTAS WHERE CEDULA = ? ", [cedula]);
      if(data.rows.length > 0){
        let todos = [];
        for (let i = 0; i < data.rows.length ; i++) {
          
          todos.push(data.rows.item(i));
        }
        return todos;
      }
      else{
        return [];
      }
    } catch(ex){
      throw ex;
    }
  }
  
  public async getBeneficiarios(contrato){
    try
    {
      let data = await this.db.executeSql("SELECT BENEFICIARIOS FROM RUTAS WHERE IDCONTRATO = ? ", [contrato]);
      if(data.rows.length > 0){
        let bene = data.rows.item(0).BENEFICIARIOS.toString().split('*');
        
        return bene;
      }else{
        return {};
      }
    } catch(ex){
      throw ex;
    }
  }

  public async getUltimospagos(contrato){
    try
    {
      let data = await this.db.executeSql("SELECT ULTIMOSPAGOS FROM RUTAS WHERE IDCONTRATO = ? ", [contrato]);
      if(data.rows.length > 0){
        let pagos = data.rows.item(0).ULTIMOSPAGOS.toString().split('*');
        return pagos;
      }else{
        return {};
      }
    } catch(ex){
      throw ex;
    }
  }

  
  public async getUltimasNovedades(contrato){
    try
    {
      let data = await this.db.executeSql("SELECT ULTIMASGESTIONES FROM RUTAS WHERE IDCONTRATO = ? ", [contrato]);
      if(data.rows.length > 0){
        let novedades = data.rows.item(0).ULTIMASGESTIONES.toString().split('*');
        return novedades;
      }else{
        return {};
      }
    } catch(ex){
      throw ex;
    }
  }

  public async getUltimosAdicionales(contrato){
    try
    {
      let data = await this.db.executeSql("SELECT SERVADICIONALES FROM ADICIONALES WHERE IDCONTRATO = ? ", [contrato]);
      if(data.rows.length > 0){
        let adicionales = data.rows.item(0).SERVADICIONALES.toString().split('*');
        return adicionales;
      }else{
        return {};
      }
    } catch(ex){
      throw ex;
    }
  }

  public async getFormaPago(){
    try
    {
      let data = await this.db.executeSql("SELECT * FROM FORMAPAGO ", [] );
      if(data.rows.length > 0){
        let todos = [];
        for (let i = 0; i < data.rows.length ; i++) {
          
          todos.push(data.rows.item(i));
        }
        return todos;
      }
      else{
        return [];
      }
    } catch(ex){
      throw ex;
    }
  }

  public async getNovedades(){
    try
    {
      let data = await this.db.executeSql("SELECT * FROM TIPONOVEDAD ", [] );
      if(data.rows.length > 0){
        let todos = [];
        for (let i = 0; i < data.rows.length ; i++) {
          
          todos.push(data.rows.item(i));
        }
        return todos;
      }
      else{
        return [];
      }
    } catch(ex){
      throw ex;
    }
  }

  public async getCuadreCaja(usuario, fecha){
    try
    {
      var m = new Date(fecha)
      let data = await this.db.executeSql("SELECT ? AS FECHA ,COUNT(P.IDCONTRATO) AS CANTIDADPAGOS , IFNULL(SUM(P.VALOR) - SUM(P.DESCUENTO), 0) AS VALORPAGOS , 0 AS CANTIDADANULADOS, (SELECT COUNT(N.CONTRATO ) FROM NOVEDAD N WHERE N.FECHA >= ? ) AS CANTIDADNOVEDADES FROM PAGOS P WHERE P.FECHAPAGOR >= ?   ", [fecha , new Date(fecha).toDateString() , new Date(fecha).toDateString()] );
      if(data.rows.length > 0) {
        return data.rows.item(0);
      }
      else{
        return [];
      }
    } catch(ex){
      throw ex;
    }
  }

  public async getListapago(){
    try
    {
      let data = await this.db.executeSql("SELECT * FROM PAGOS WHERE SINCRONIZAR = 0 ORDER BY  TRANSAC ", [] );
      if(data.rows.length > 0){
        let todos = [];
        for (let i = 0; i < data.rows.length ; i++) {
          
          todos.push(data.rows.item(i));
        }
        return todos;
      }
      else{
        return [];
      }
    } catch(ex){
      throw ex;
    }
  }
  public async getListaNovedades(){
    try
    {
      console.log("llego  a la consulta de la lista de novedades")
      let data = await this.db.executeSql("SELECT * FROM NOVEDAD WHERE SINCRONIZAR = 0 ORDER BY ID ", [] );
      if(data.rows.length > 0){
        console.log("la cantidad a sincronizar es:" + data.rows.length)
        let todos = [];
        for (let i = 0; i < data.rows.length ; i++) {
          
          todos.push(data.rows.item(i));
        }
        return todos;
      }
      else{
        console.log("la cantidad a sincronizar es: 0" )
        return [];
      }
    } catch(ex){
      throw ex;
    }
  }


}
