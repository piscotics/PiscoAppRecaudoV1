export class ConsultarRutaModel { 
    fecha: string;
    cantidadpagos: number;
    valor: number;
    cantidadanulados: number;
    cantidadnovedades: number;
}


export class ConsultarRutaRequesModel{
    Fecha: Date;
    Dato: string;

    constructor(usuario: string, fecha: Date){
        this.Fecha = fecha;
        this.Dato = usuario;
    }
};


export class ConsultarRutaResponseModel{
    FECHA: string;
    CANTIDADPAGOS: number;
    VALORPAGOS: number;
    CANTIDADANULADOS: number;
    CANTIDADNOVEDADES: number;
};
