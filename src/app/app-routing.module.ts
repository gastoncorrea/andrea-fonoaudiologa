import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './features/public/components/home/home.component';
import { TurnosComponent } from './features/public/components/turnos/turnos.component';
import { FormUsuarioComponent } from './features/public/components/usuario/form-usuario/form-usuario.component';


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
