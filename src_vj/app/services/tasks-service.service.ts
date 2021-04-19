  import { Injectable } from '@angular/core';
  import { SQLiteObject } from '@ionic-native/sqlite';

  @Injectable()
export class TasksService {

  db: SQLiteObject = null;

  constructor() {}

  setDatabase(db: SQLiteObject){
    if(this.db === null){
      this.db = db;
    }
  }


  createTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS rutas(IDRUTA INTEGER PRIMARY KEY AUTOINCREMENT,  ' +
              'USUARIO TEXT, IDCOBRADOR TEXT, IDCONTRATO TEXT, CEDULA TEXT, TITULAR TEXT, DIRECCION TEXT, ' + 
              'TELEFONO TEXT, CIUDAD TEXT, DIACOBRO1 SMALLINT, DIACOBRO2 SMALLINT, ESTADO TEXT, NOVEDAD INTEGER , '+
              'POSTFECHADODIA SMALLINT, INDICE SMALLINT, CUOTA FLOAT, PENDIENTE SMALLINT, ESTADOCONTRATO TEXT, FECHAR TEXT, ' +
              'BASEDATOS TEXT, EMPRESA TEXT, NIT TEXT, DIRECCIONCOBRO TEXT, BOXCONTRATANTE TEXT, VALORCARTERA FLOAT, VALORSEGURO FLOAT, ' + 
              // tslint:disable-next-line: max-line-length
              'CELULAR TEXT, PAGOHASTA TEXT, DEPTOC TEXT, MPIOC TEXT, BARRIOC TEXT, MOTIVO TEXT, FECHAPROGRAMADA TEXT, CODBARRIO TEXT, COBERTURA TEXT)';
    return this.db.executeSql(sql, []);
  }

  create(task: any){
    let sql = 'INSERT INTO rutas(title, completed) VALUES(?,?)';
    return this.db.executeSql(sql, [task.title, task.completed]);
  }


  delete(ruta: any){
    let sql = 'DELETE FROM rutas WHERE id=?';
    return this.db.executeSql(sql, [ruta.id]);
  }
}
