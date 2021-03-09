var RegistrarpagoModel = /** @class */ (function () {
    function RegistrarpagoModel() {
        this.IDCONTRATO = '';
        this.IDPERSONA = '';
        this.VALOR = 0;
        this.DESCUENTO = 0;
        this.CANTIDADCUOTAS = 1;
        this.MAQUINA = '';
        this.USUARIO = '';
        this.OBSERVACIONES = '';
        this.CUOTAMENSUAL = 0;
        this.ESTADO = '';
        this.FORMAPAGO = 'Efectivo';
        this.FECHAPAGOR = new Date().toISOString();
        this.POSX = '';
        this.POSY = '';
        this.titular = '';
    }
    return RegistrarpagoModel;
}());
export { RegistrarpagoModel };
//# sourceMappingURL=registrar-pago.model.js.map