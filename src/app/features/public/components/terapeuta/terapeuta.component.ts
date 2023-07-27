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
  quienes_somos = {
    title : "Conocé quienes somos ...",
    description: ""//crear variable input para poder modificar el componente con otro componente
  }

  constructor(private terapeutaService: TerapeutaService) {

  }

  ngOnInit(): void {
    this.terapeutaService.getAllTherapist().subscribe((data) => {
      if (data) {
        for (let terapeutaItem of data) {
          const imagenMin = "data:image/jpeg;base64," + terapeutaItem.imagen_perfil;
          terapeutaItem.imagen_perfil = imagenMin;
        }
        this.terapeutas = data;
      }
    })
  }


}
