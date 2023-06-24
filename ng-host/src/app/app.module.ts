import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { startsWith } from './router.utils';
import { WrapperComponent } from './wrapper/wrapper.component';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    WrapperComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
