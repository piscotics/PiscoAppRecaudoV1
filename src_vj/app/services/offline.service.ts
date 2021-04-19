import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class OfflineService {
  db: SQLiteObject;
  constructor(public sqlite: SQLite) { 
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
    'CELULAR TEXT, PAGOHASTA TEXT, DEPTOC TEXT, MPIOC TEXT, BARRIOC TEXT, MOTIVO TEXT, FECHAPROGRAMADA TEXT, CODBARRIO TEXT, COBERTURA TEXT, ULTIMOSPAGOS TEXT, BENEFICIARIOS TEXT)';
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

    sql = 'CREATE TABLE IF NOT EXISTS PAGOS (ID INTEGER PRIMARY KEY AUTOINCREMENT, IDCONTRATO TEXT, IDPERSONA TEXT, VALOR FLOAT, DESCUENTO FLOAT, CANTIDADCUOTAS FLOAT, MAQUINA TEXT, USUARIO TEXT, OBSERVACIONES TEXT, CUOTAMENSUAL FLOAT, ESTADO TEXT, FORMAPAGO TEXT, FECHAPAGOR TEXT, POSX TEXT, POSY TEXT, TITULAR TEXT)';
    await this.db.executeSql(sql, []);

    sql = 'DROP TABLE IF EXISTS NOVEDAD';
    await this.db.executeSql(sql, []);

    sql = 'CREATE TABLE IF NOT EXISTS NOVEDAD (ID INTEGER PRIMARY KEY AUTOINCREMENT ,CONTRATO TEXT , FECHA TEXT , NOVEDAD INTEGER, DIAPOST INTEGER, USUARIO TEXT, IDCOBRADOR TEXT, MODULO TEXT, TRANSAC INTEGER, FECHAPROGRAMADA TEXT, POSX TEXT, POSY TEXT, OBSERVACIONES TEXT)';
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
      'CELULAR, PAGOHASTA, DEPTOC, MPIOC, BARRIOC, MOTIVO, FECHAPROGRAMADA, CODBARRIO, COBERTURA,ULTIMOSPAGOS, BENEFICIARIOS) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?, ?)'


      for(let d of data){
        await this.db.executeSql(sql, [d.USUARIO, d.IDCOBRADOR, d.IDCONTRATO, d.CEDULA, d.TITULAR, d.DIRECCION, d.TELEFONO, d.CIUDAD, 
          d.DIACOBRO1, d.DIACOBRO2, d.ESTADO, d.NOVEDAD, d.POSTFECHADODIA, d.INDICE, d.CUOTA, d.PENDIENTE, d.ESTADOCONTRATO, d.FECHAR, 
          d.BASEDATOS, d.EMPRESA, d.NIT, d.DIRECCIONCOBRO, d.BOXCONTRATANTE, d.VALORCARTERA, d.VALORSEGURO, d.CELULAR, d.PAGOHASTA, 
          d.DEPTOC, d.MPIOC, d.BARRIOC, d.MOTIVO, d.FECHAPROGRAMADA, d.CODBARRIO, d.COBERTURA, d.ULTIMOSPAGOS, d.BENEFICIARIOS]);
      }

    }catch(ex)
    {  
      throw ex;
    }
  }

  public async getConsultarRutas(fechar,estado) {

    

    try
    {
      let data = await this.db.executeSql("SELECT PAGOHASTA FROM RUTAS WHERE FECHAR = ? AND ESTADO = ? ", [fechar,estado]);
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

      let sql = 'INSERT INTO PAGOS (IDCONTRATO, IDPERSONA, VALOR, DESCUENTO, CANTIDADCUOTAS, MAQUINA, USUARIO, OBSERVACIONES, CUOTAMENSUAL, ESTADO, FORMAPAGO, FECHAPAGOR, POSX, POSY, TITULAR) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

      for(let d of data){
        await this.db.executeSql(sql, [d.IDCONTRATO, d.IDPERSONA, d.VALOR, d.DESCUENTO, d.CANTIDADCUOTAS, d.MAQUINA, d.USUARIO, d.OBSERVACIONES, d.CUOTAMENSUAL, d.ESTADO, d.FORMAPAGO, d.FECHAPAGOR, d.POSX, d.POSY, d.TITULAR]);
      }
    }catch(ex)
    {
      throw ex;
    }
  }

  public async guardarPagosLocal(d) {
    try
    {
      let id = 0;
        let sql = 'INSERT INTO PAGOS (IDCONTRATO, IDPERSONA, VALOR, DESCUENTO, CANTIDADCUOTAS, MAQUINA, USUARIO, OBSERVACIONES, CUOTAMENSUAL, ESTADO, FORMAPAGO, FECHAPAGOR, POSX, POSY, TITULAR) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
        await this.db.executeSql(sql, [d.IDCONTRATO, d.IDPERSONA, d.VALOR, d.DESCUENTO, d.CANTIDADCUOTAS, d.MAQUINA, d.USUARIO, d.OBSERVACIONES, d.CUOTAMENSUAL, d.ESTADO, d.FORMAPAGO,new Date(d.FECHAPAGOR).toDateString(), d.POSX, d.POSY, d.titular]).then((row: any) => {
        id =  row.insertId.toString();
      });
      
     


      return id;

    }catch(ex)
    {
      throw ex;
    }
  }

  public async guardarNovedadLocal(d) {
    try
    {
      // tslint:disable-next-line: max-line-length
      let sql = 'INSERT INTO NOVEDAD(CONTRATO, NOVEDAD, DIAPOST, USUARIO, IDCOBRADOR, MODULO, TRANSAC, FECHAPROGRAMADA, POSX, POSY,OBSERVACIONES,  FECHA) VALUES(?,?,?,?,?,?,?,?,?,?,?, ?)';
      // tslint:disable-next-line: max-line-length
      await this.db.executeSql(sql, [d.Contrato, d.Novedad, d.Diapos, d.Usuario, d.IdCobrador, d.Modulo, d.Transac, d.Fechaprogramada, d.Posx, d.Posy, d.Observaciones ,  new Date().toDateString()]);
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
      let data = await this.db.executeSql("SELECT * FROM PAGOS", [] );
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
      let data = await this.db.executeSql("SELECT * FROM NOVEDAD", [] );
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


}
