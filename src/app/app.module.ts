import {LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

// regionalización español colombia
import { registerLocaleData } from '@angular/common';
import localCo from '@angular/common/locales/es-CO';


import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

registerLocaleData(localCo);


// plugins
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Device } from '@ionic-native/device/ngx';
import { Printer } from '@ionic-native/printer/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OwnComponentsModule } from './own-components/own-components.module';
import { PrintService } from './services/print.service';
import { TasksService } from './services/tasks-service.service';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './pages/login/login.page';
import { OfflineService } from './services/offline.service';

@NgModule({
  declarations: [AppComponent,LoginPage],
  entryComponents: [
  LoginPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OwnComponentsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    ImagePicker,
    File,
    WebView,
    Geolocation,
    AndroidPermissions,
    Diagnostic,
    Device,
    Printer,
    PrintService,
    BluetoothSerial,
    TasksService,
    SQLite,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
