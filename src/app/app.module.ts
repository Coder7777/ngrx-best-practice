import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

const components = [
  AppComponent
];

const modules = [
  BrowserModule,
  IonicModule.forRoot(),
  AppRoutingModule
];

const provider = [
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
];

@NgModule({
  declarations: [...components],
  entryComponents: [],
  imports: [...modules],
  providers: [...provider],
  bootstrap: [...components],
})
export class AppModule { }
