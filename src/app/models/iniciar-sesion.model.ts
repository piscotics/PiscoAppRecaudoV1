export class IniciarSesionModel {
    Username:string;
    Password:string;
    Serial: string;

    constructor(Username:string, Password:string, Serial:string ) {
        this.Username = Username;
        this.Password = Password;
        this.Serial = Serial;
    }
}