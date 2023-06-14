import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TurnosComponent } from './components/turnos/turnos.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormUsuarioComponent } from './backoffice/usuario/form-usuario/form-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CabeceraComponent,
    InicioComponent,
    TurnosComponent,
    FormUsuarioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
