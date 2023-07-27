import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './features/public/components/home/home.component';
import { TurnosComponent } from './features/public/components/turnos/turnos.component';
import { FormUsuarioComponent } from './features/public/components/usuario/form-usuario/form-usuario.component';
import { TerapeutaComponent } from './features/public/components/terapeuta/terapeuta.component';
import { FormTerapeutaComponent } from './features/backoffice/terapeuta/form-terapeuta/form-terapeuta.component';
import { ListTerapeutaComponent } from './features/backoffice/terapeuta/list-terapeuta/list-terapeuta.component';


const routes:Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'turnos', component : TurnosComponent},
  {path: 'nuevo-usuario', component: FormUsuarioComponent},
  {path: 'quienes-somos', component: TerapeutaComponent},
  {path: 'therapist/create', component: FormTerapeutaComponent},
  {path: 'therapist-list', component: ListTerapeutaComponent},
  {path: 'therapist-list/update/:id',component: FormTerapeutaComponent},
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
