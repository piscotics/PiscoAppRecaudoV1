export class CiudadModel {
    id: number;
    nombre: string;
    departamentoId: number;

    constructor(id: number, nombre: string, departamentoId: number) {
        this.id = id;
        this.nombre = nombre;
        this.departamentoId = departamentoId;
    }
}