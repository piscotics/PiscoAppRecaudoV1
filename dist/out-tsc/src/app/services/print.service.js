import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { AlertController } from '@ionic/angular';
var PrintService = /** @class */ (function () {
    function PrintService(btSerial, alertCtrl) {
        this.btSerial = btSerial;
        this.alertCtrl = alertCtrl;
        this.PosCommand = {
            LF: '\x0a',
            EOL: '\n',
            FEED_CONTROL_SEQUENCES: {
                CTL_LF: '\x0a',
                CTL_FF: '\x0c',
                CTL_CR: '\x0d',
                CTL_HT: '\x09',
                CTL_VT: '\x0b',
            },
            LINE_SPACING: {
                LS_DEFAULT: '\x1b\x32',
                LS_SET: '\x1b\x33' //Spacing
            },
            HARDWARE: {
                HW_INIT: '\x1b\x40',
                HW_SELECT: '\x1b\x3d\x01',
                HW_RESET: '\x1b\x3f\x0a\x00',
            },
            CASH_DRAWER: {
                CD_KICK_2: '\x1b\x70\x00',
                CD_KICK_5: '\x1b\x70\x01',
            },
            MARGINS: {
                BOTTOM: '\x1b\x4f',
                LEFT: '\x1b\x6c',
                RIGHT: '\x1b\x51',
            },
            PAPER: {
                PAPER_FULL_CUT: '\x1d\x56\x00',
                PAPER_PART_CUT: '\x1d\x56\x01',
                PAPER_CUT_A: '\x1d\x56\x41',
                PAPER_CUT_B: '\x1d\x56\x42',
            },
            TEXT_FORMAT: {
                TXT_NORMAL: '\x1b\x21\x00',
                TXT_2HEIGHT: '\x1b\x21\x10',
                TXT_2WIDTH: '\x1b\x21\x20',
                TXT_4SQUARE: '\x1b\x21\x30',
                TXT_CUSTOM_SIZE: function (width, height) {
                    var widthDec = (width - 1) * 16;
                    var heightDec = height - 1;
                    var sizeDec = widthDec + heightDec;
                    return '\x1d\x21' + String.fromCharCode(sizeDec);
                },
                TXT_HEIGHT: {
                    1: '\x00',
                    2: '\x01',
                    3: '\x02',
                    4: '\x03',
                    5: '\x04',
                    6: '\x05',
                    7: '\x06',
                    8: '\x07'
                },
                TXT_WIDTH: {
                    1: '\x00',
                    2: '\x10',
                    3: '\x20',
                    4: '\x30',
                    5: '\x40',
                    6: '\x50',
                    7: '\x60',
                    8: '\x70'
                },
                TXT_UNDERL_OFF: '\x1b\x2d\x00',
                TXT_UNDERL_ON: '\x1b\x2d\x01',
                TXT_UNDERL2_ON: '\x1b\x2d\x02',
                TXT_BOLD_OFF: '\x1b\x45\x00',
                TXT_BOLD_ON: '\x1b\x45\x01',
                TXT_ITALIC_OFF: '\x1b\x35',
                TXT_ITALIC_ON: '\x1b\x34',
                TXT_FONT_A: '\x1b\x4d\x00',
                TXT_FONT_B: '\x1b\x4d\x01',
                TXT_FONT_C: '\x1b\x4d\x02',
                TXT_ALIGN_LT: '\x1b\x61\x00',
                TXT_ALIGN_CT: '\x1b\x61\x01',
                TXT_ALIGN_RT: '\x1b\x61\x02',
            },
            BARCODE_FORMAT: {
                BARCODE_TXT_OFF: '\x1d\x48\x00',
                BARCODE_TXT_ABV: '\x1d\x48\x01',
                BARCODE_TXT_BLW: '\x1d\x48\x02',
                BARCODE_TXT_BTH: '\x1d\x48\x03',
                BARCODE_FONT_A: '\x1d\x66\x00',
                BARCODE_FONT_B: '\x1d\x66\x01',
                BARCODE_HEIGHT: function (height) {
                    return '\x1d\x68' + String.fromCharCode(height);
                },
                // Barcode Width  [2-6]
                BARCODE_WIDTH: {
                    1: '\x1d\x77\x02',
                    2: '\x1d\x77\x03',
                    3: '\x1d\x77\x04',
                    4: '\x1d\x77\x05',
                    5: '\x1d\x77\x06',
                },
                BARCODE_HEIGHT_DEFAULT: '\x1d\x68\x64',
                BARCODE_WIDTH_DEFAULT: '\x1d\x77\x01',
                BARCODE_UPC_A: '\x1d\x6b\x00',
                BARCODE_UPC_E: '\x1d\x6b\x01',
                BARCODE_EAN13: '\x1d\x6b\x02',
                BARCODE_EAN8: '\x1d\x6b\x03',
                BARCODE_CODE39: '\x1d\x6b\x04',
                BARCODE_ITF: '\x1d\x6b\x05',
                BARCODE_NW7: '\x1d\x6b\x06',
                BARCODE_CODE93: '\x1d\x6b\x48',
                BARCODE_CODE128: '\x1d\x6b\x49',
            },
            CODE2D_FORMAT: {
                TYPE_PDF417: '\x1b\x5a\x00',
                TYPE_DATAMATRIX: '\x1b\x5a\x01',
                TYPE_QR: '\x1b\x5a\x02',
                CODE2D: '\x1b\x5a',
            },
            IMAGE_FORMAT: {
                S_RASTER_N: '\x1d\x76\x30\x00',
                S_RASTER_2W: '\x1d\x76\x30\x01',
                S_RASTER_2H: '\x1d\x76\x30\x02',
                S_RASTER_Q: '\x1d\x76\x30\x03',
            },
            BITMAP_FORMAT: {
                BITMAP_S8: '\x1b\x2a\x00',
                BITMAP_D8: '\x1b\x2a\x01',
                BITMAP_S24: '\x1b\x2a\x20',
                BITMAP_D24: '\x1b\x2a\x21'
            },
            GSV0_FORMAT: {
                GSV0_NORMAL: '\x1d\x76\x30\x00',
                GSV0_DW: '\x1d\x76\x30\x01',
                GSV0_DH: '\x1d\x76\x30\x02',
                GSV0_DWDH: '\x1d\x76\x30\x03'
            }
        };
    }
    PrintService.prototype.searchBt = function () {
        return this.btSerial.list();
    };
    PrintService.prototype.connectBT = function (address) {
        return this.btSerial.connect(address);
    };
    PrintService.prototype.print = function (address, text) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var printEvent = _this.connectBT(address).subscribe(function (data) {
                _this.btSerial.write(text).then(function (dataz) {
                    _this.alertCtrl.create({
                        header: "Información",
                        message: 'Impresión realizada satisfactoriamente',
                        buttons: ['Aceptar']
                    }).then(function (res) {
                        res.present();
                    });
                    printEvent.unsubscribe();
                    resolve();
                }, function (errx) {
                    _this.alertCtrl.create({
                        header: "Error",
                        message: "Se ha presentado un error al realizar la impresión, el detalle del error se encuentra a continuación <br> " + errx,
                        buttons: ['Aceptar']
                    }).then(function (res) {
                        res.present();
                    });
                    reject();
                });
            }, function (err) {
                reject();
                var errorAlert = _this.alertCtrl.create({
                    header: "Error",
                    message: "Se ha presentado un error al realiza la conexión con su impresora, por favor revise su conexión e intentelo de nuevo.",
                    buttons: ['Aceptar']
                }).then(function (res) {
                    res.present();
                });
            });
        });
    };
    PrintService.prototype.mapTextColumn = function (text1, text2) {
        text1 = this.normailizeText(text1);
        text2 = this.normailizeText(text2);
        var text1a = [], text2a = [], tmpText = '';
        var tmpLength = 0, tmpRows = 0;
        if (text1.length === 15) {
            text1a.push(text1);
        }
        else if (text1.length < 15) {
            tmpLength = 15 - text1.length;
            tmpText = text1;
            for (var i = 0; i < tmpLength; i++) {
                tmpText = tmpText + ' ';
            }
            text1a.push(tmpText);
        }
        else {
            tmpRows = Math.ceil(text1.length / 15);
            for (var i = 0; i < tmpRows; i++) {
                tmpText = text1.substring((i * 15), ((i + 1) * 15));
                if (tmpText.length === 15) {
                    text1a.push(tmpText);
                }
                else {
                    tmpLength = 16 - text1.length;
                    for (var h = 0; h < tmpLength; h++) {
                        tmpText = tmpText + ' ';
                    }
                    text1a.push(tmpText);
                }
            }
        }
        if (text2.length === 15) {
            text2a.push(text2);
        }
        else if (text2.length < 15) {
            tmpLength = 15 - text2.length;
            tmpText = text2;
            for (var i = 0; i < tmpLength; i++) {
                tmpText = tmpText + ' ';
            }
            text2a.push(tmpText);
        }
        else {
            tmpRows = Math.ceil(text2.length / 15);
            for (var i = 0; i < tmpRows; i++) {
                tmpText = text2.substring((i * 15), ((i + 1) * 15));
                if (tmpText.length === 15) {
                    text2a.push(tmpText);
                }
                else {
                    tmpText = text2.substring((i * 15), ((i + 1) * 15));
                    tmpLength = 15 - tmpText.length;
                    for (var h = 0; h < tmpLength; h++) {
                        tmpText = tmpText + ' ';
                    }
                    text2a.push(tmpText);
                }
            }
        }
        tmpLength = text2a.length > text1a.length ? text2a.length : text1a.length;
        tmpText = '';
        for (var i = 0; i < tmpLength; i++) {
            if (text1a.length >= tmpLength) {
                tmpText += text1a[i] + ' ';
            }
            else {
                tmpText += '                ';
            }
            if (text2a.length >= tmpLength) {
                tmpText += text2a[i] + ' ';
            }
            else {
                tmpText += '                ';
            }
        }
        return tmpText;
    };
    PrintService.prototype.normailizeText = function (str) {
        str = str.replace(/\s+/g, " ");
        str = str.trim();
        var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc", mapping = {};
        for (var i = 0, j = from.length; i < j; i++)
            mapping[from.charAt(i)] = to.charAt(i);
        var ret = [];
        for (var i = 0, j = str.length; i < j; i++) {
            var c = str.charAt(i);
            if (mapping.hasOwnProperty(str.charAt(i)))
                ret.push(mapping[c]);
            else
                ret.push(c);
        }
        return ret.join('');
    };
    ;
    PrintService.prototype.formatMoney = function (n, c, d, t) {
        var c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "." : d, t = t == undefined ? "," : t, s = n < 0 ? "-" : "", i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - Number(i)).toFixed(c).slice(2) : "");
    };
    ;
    PrintService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [BluetoothSerial, AlertController])
    ], PrintService);
    return PrintService;
}());
export { PrintService };
//# sourceMappingURL=print.service.js.map