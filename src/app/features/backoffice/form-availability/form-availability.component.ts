import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DisponibilidadService } from 'src/app/core/services/disponibilidad.service';

@Component({
  selector: 'app-form-availability',
  templateUrl: './form-availability.component.html',
  styleUrls: ['./form-availability.component.css']
})
export class FormAvailabilityComponent implements OnInit {
  availabilityForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private availabilityService: DisponibilidadService) {
    this.availabilityForm = this.formBuilder.group({
      id_disponibilidad:["",[]],
      dia: ["",[Validators.required]],
      hora_inicio: ["",[]],
      hora_fin: ["",[]],
      terapeuta: formBuilder.group({
        id_terapeuta:[1,[]]
      })
    })
  }

  ngOnInit(): void {
  }


  sendAvailability(){
    if(this.availabilityForm.valid){
      this.availabilityService.saveDisponibility(this.availabilityForm.value).subscribe((data)=>{
        alert(data);
      })
    }
  }
}
