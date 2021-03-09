export class TipoGestionModel {
    Idnovedad: number;
    Novedad: string;

    constructor(Id: number, Nombre: string) {
        this.Idnovedad = Id;
        this.Novedad = Nombre;
    }
}