import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './features/public/components/navbar/navbar.component';
import { CabeceraComponent } from './features/public/components/cabecera/cabecera.component';
import { InicioComponent } from './features/public/components/inicio/inicio.component';
import { TurnosComponent } from './features/public/components/turnos/turnos.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './features/public/components/home/home.component';
import { UsuarioService } from './core/services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { FormUsuarioComponent } from './features/public/components/usuario/form-usuario/form-usuario.component';
import { TerapeutaComponent } from './features/public/components/terapeuta/terapeuta.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CabeceraComponent,
    InicioComponent,
    TurnosComponent,
    FormUsuarioComponent,
    HomeComponent,
    TerapeutaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
