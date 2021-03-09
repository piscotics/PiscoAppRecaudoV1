var ConfigHelper = /** @class */ (function () {
    function ConfigHelper(config) {
        this.config = config;
    }
    ConfigHelper.prototype.getApiUrl = function () {
        return "http://" + this.config.servidorIp + ":" + this.config.servidorPuerto + "/api";
    };
    return ConfigHelper;
}());
export { ConfigHelper };
//# sourceMappingURL=config.helper.js.map