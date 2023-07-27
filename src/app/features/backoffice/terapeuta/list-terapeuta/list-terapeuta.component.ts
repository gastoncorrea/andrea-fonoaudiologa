import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Terapeuta } from 'src/app/core/models/usuario.model';
import { TerapeutaService } from 'src/app/core/services/terapeuta.service';

@Component({
  selector: 'app-list-terapeuta',
  templateUrl: './list-terapeuta.component.html',
  styleUrls: ['./list-terapeuta.component.css']
})
export class ListTerapeutaComponent implements OnInit {
  allTherapist?: Terapeuta[]=[];

  constructor(private therapistService: TerapeutaService, private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.therapistService.getAllTherapist().subscribe((data) => {
      if (data) {
        for (let terapeutaItem of data) {
          const imagenMin = "data:image/jpeg;base64," + terapeutaItem.imagen_perfil;
          terapeutaItem.imagen_perfil = imagenMin;
        }
        this.allTherapist = data;
      }
    })
  }

  deleteTherapist(id:number){
    this.therapistService.deleteTherapist(id).subscribe((data)=>{
      alert(data);
      this.ngOnInit();
    })
  }
}
