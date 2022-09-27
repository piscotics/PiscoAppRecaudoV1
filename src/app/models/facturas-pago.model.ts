export class FacturasPagosModel {
    FACTURA : string;
    VALOR : number;
}


export class FacturasPagosRequesModel{
    contrato: string;
    

    constructor(contrato: string){
        this.contrato = contrato;
        
    }
};


export class FacturasPagosResponseModel{
    FACTURA : string;
    VALOR : number;
    
};