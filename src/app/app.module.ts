import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
