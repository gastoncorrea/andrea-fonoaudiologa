import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { TurnosComponent } from './components/turnos/turnos.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';


const routes:Routes = [
  {path: '', component: CabeceraComponent},
  {path: 'turnos', component : TurnosComponent}
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
