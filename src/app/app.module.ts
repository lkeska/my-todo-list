import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {registerLocaleData} from '@angular/common';

import localePl from '@angular/common/locales/pl';
import localeBn from '@angular/common/locales/bn';

registerLocaleData(localePl);
registerLocaleData(localeBn);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    //{provide:LOCALE_ID, useValue:'pl-PL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
