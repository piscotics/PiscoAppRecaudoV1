import { ConfigModel } from 'src/app/models/config.model';

export class ConfigHelper {
    constructor(private config: ConfigModel) { }

    getApiUrl() {
        return `http://${this.config.servidorIp}:${this.config.servidorPuerto}/api`;
    }
}