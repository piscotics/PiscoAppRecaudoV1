// Informaciòn que retorna el servidor al inicar sesión
export class PagoResponseModel {
    NroRecibo: string;
    Desde: string;
    Hasta: string;
    Concepto: string;
    DetallePago: string = '';
    Respuesta: string;
    Anulado: string;
    PVisita: string;
    Valorenletras: string;
    Vdesde: string;
    Vhasta: string;
    VlrCto: number;
    VlrSaldo: number;
    VlrDctoPago: number;
    VlrIva: number;
    FormaPago : string;
}