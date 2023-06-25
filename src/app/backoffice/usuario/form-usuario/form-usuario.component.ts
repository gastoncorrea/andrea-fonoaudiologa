import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: ["",[Validators.required, Validators.minLength(4)]],
      apellido:["",[Validators.required,Validators.minLength(2)]],
      fecha_nac: ["",[Validators.required]]
    })
   }

  ngOnInit(): void {
  }

}
