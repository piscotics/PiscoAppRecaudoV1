import { LoginResponseModel } from './responses/login-response.model';

export class SesionLocalModel {
    sesionIniciada: boolean = false;
    sesionUsuario: LoginResponseModel = null;
}