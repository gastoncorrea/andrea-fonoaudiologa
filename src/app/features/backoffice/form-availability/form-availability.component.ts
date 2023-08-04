import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-availability',
  templateUrl: './form-availability.component.html',
  styleUrls: ['./form-availability.component.css']
})
export class FormAvailabilityComponent implements OnInit {
  availabilityForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.availabilityForm = this.formBuilder.group({
      id_disponibilidad:["",[]],
        dia: ["",[Validators.required]],
      hora_inicio: ["",[]],
      hora_fin: ["",[]],
      terapeuta: ["",[]]
    })
  }

  ngOnInit(): void {
  }


  sendAvailability(){

  }
}
