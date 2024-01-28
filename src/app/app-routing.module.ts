import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './features/public/components/home/home.component';
import { TurnosComponent } from './features/public/components/turnos/turnos.component';
import { FormUsuarioComponent } from './features/public/components/usuario/form-usuario/form-usuario.component';
import { TerapeutaComponent } from './features/public/components/terapeuta/terapeuta.component';
import { FormTerapeutaComponent } from './features/backoffice/terapeuta/form-terapeuta/form-terapeuta.component';
import { ListTerapeutaComponent } from './features/backoffice/terapeuta/list-terapeuta/list-terapeuta.component';
import { TherapyFormComponent } from './features/backoffice/therapy/therapy-form/therapy.component';
import { TherapyListComponent } from './features/backoffice/therapy/therapy-list/therapy-list.component';
import { DashboardComponent } from './features/backoffice/admin/dashboard/dashboard.component';
import { UserListComponent } from './features/backoffice/admin/users/user-list/user-list.component';


const routes:Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'turnos', component : TurnosComponent},
  {path: 'usuario/create', component: FormUsuarioComponent},
  {path: 'admin/dashboard/usuario/list', component: UserListComponent },
  {path: 'usuario/update/:id', component: FormUsuarioComponent},
  {path: 'quienes-somos', component: TerapeutaComponent},
  {path: 'therapy/create', component: TherapyFormComponent},
  {path: 'admin/dashboard/therapy/list', component: TherapyListComponent},
  {path: 'therapy/update/:id', component: TherapyFormComponent},
  {path: 'therapist/create', component: FormTerapeutaComponent},
  {path: 'admin/dashboard/therapist-list', component: ListTerapeutaComponent},
  {path: 'therapist-list/update/:id',component: FormTerapeutaComponent},
  {path: 'admin/dashboard',component: DashboardComponent},
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
