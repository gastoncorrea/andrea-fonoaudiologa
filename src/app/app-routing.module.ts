import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { TurnosComponent } from './components/turnos/turnos.component';
import { FormUsuarioComponent } from './backoffice/usuario/form-usuario/form-usuario.component';
import { HomeComponent } from './components/home/home.component';


const routes:Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'turnos', component : TurnosComponent},
  {path: 'nuevo-usuario', component: FormUsuarioComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
