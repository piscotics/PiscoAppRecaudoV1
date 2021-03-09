export class CuadreCajaModel {
    fecha: string;
    cantidadpagos: number;
    valor: number;
    cantidadanulados: number;
    cantidadnovedades: number;
}


export class CuadreCajaRequesModel{
    Fecha: Date;
    Dato: string;

    constructor(usuario: string, fecha: Date){
        this.Fecha = fecha;
        this.Dato = usuario;
    }
};


export class CuadreCajaResponseModel{
    FECHA: string;
    CANTIDADPAGOS: number;
    VALORPAGOS: number;
    CANTIDADANULADOS: number;
    CANTIDADNOVEDADES: number;
};