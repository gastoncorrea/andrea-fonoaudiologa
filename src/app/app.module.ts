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
import { FormTerapeutaComponent } from './features/backoffice/terapeuta/form-terapeuta/form-terapeuta.component';
import { ListTerapeutaComponent } from './features/backoffice/terapeuta/list-terapeuta/list-terapeuta.component';
import { OurWorkComponent } from './features/public/components/our-work/our-work.component';
import { FormAvailabilityComponent } from './features/backoffice/form-availability/form-availability.component';
import { TherapyFormComponent } from './features/backoffice/therapy/therapy-form/therapy.component';
import { TherapyListComponent } from './features/backoffice/therapy/therapy-list/therapy-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './features/backoffice/admin/dashboard/dashboard.component';
import { UserListComponent } from './features/backoffice/admin/users/user-list/user-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CabeceraComponent,
    InicioComponent,
    TurnosComponent,
    FormUsuarioComponent,
    HomeComponent,
    TerapeutaComponent,
    FormTerapeutaComponent,
    ListTerapeutaComponent,
    OurWorkComponent,
    FormAvailabilityComponent,
    TherapyFormComponent,
    TherapyListComponent,
    DashboardComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
