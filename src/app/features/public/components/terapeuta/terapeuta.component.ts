import { Component, OnInit } from '@angular/core';
import { Terapeuta } from 'src/app/core/models/usuario.model';
import { TerapeutaService } from 'src/app/core/services/terapeuta.service';

@Component({
  selector: 'app-terapeuta',
  templateUrl: './terapeuta.component.html',
  styleUrls: ['./terapeuta.component.css']
})
export class TerapeutaComponent implements OnInit {
  terapeutas?: Terapeuta[] = [];

  constructor(private terapeutaService: TerapeutaService) {

  }

  ngOnInit(): void {
    this.terapeutaService.listaDeTerapeutas().subscribe((data) => {
      console.log(data);
      if (data) {
        for (let terapeutaItem of data) {
          console.log(terapeutaItem.imagen_perfil);
          const imagenMin = "data:image/jpeg;base64," + terapeutaItem.imagen_perfil;
          console.log(imagenMin)
          terapeutaItem.imagen_perfil = imagenMin;
        }
        console.log("data procesado:", data);
        this.terapeutas = data;
      }
    })
  }


}
