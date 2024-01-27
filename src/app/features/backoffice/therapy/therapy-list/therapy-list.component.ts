import { Component, OnInit } from '@angular/core';
import { Therapy } from 'src/app/core/models/usuario.model';
import { TherapyService } from 'src/app/core/services/therapy.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-therapy-list',
  templateUrl: './therapy-list.component.html',
  styleUrls: ['./therapy-list.component.css']
})
export class TherapyListComponent implements OnInit {

  listTherapy? : Therapy[] = [];
  constructor(private therapyService:TherapyService,private router: Router) { }

  ngOnInit(): void {
    this.getTherapy();
  }

  getTherapy(){
    this.therapyService.getTherapy().subscribe((resp)=>{
      this.listTherapy = resp;
      console.log(resp);
    })
  }

  editar(therapy:Therapy){
    const idAModificar = therapy.id;
    console.log(idAModificar);
    this.therapyService.actualizarTerapia(therapy);
    this.router.navigate(['/therapy/update/'+idAModificar]);
  }

  deleteTherapy(id:number){
    this.therapyService.deleteOneTherapy(id).subscribe((resp)=>{
      alert(resp);
      this.ngOnInit();
    })
  }
}
