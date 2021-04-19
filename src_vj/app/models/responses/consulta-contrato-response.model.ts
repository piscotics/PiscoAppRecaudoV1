// Informaciòn que retorna el servidor al consultar un contrato
export class ConsultaContratoResponseModel {
    IdContrato: string;
    FechaAfiliacion: string;
    FechaCobertura: string;
    EstadoContrato: string;
    Cedula: string;
    Titular: string;
    Direccion: string;
    DireccionCobro: string;
    Telefono: string;
    Celular: string;
    Plan: string;
    Cuota: number;
    FechaUltimoPago: string;
    NoRecibo: string;
    Valor: number;
    Departamento: string;
    DepartamentoCobro: string;
    Municipio: string;
    MunicipioCobro: string;
    Barrio: string;
    BarrioCobro: string;
    Email: string;
}