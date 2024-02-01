import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  codigoTerapeuta: boolean = false;
  isTherapist:boolean = false;
  codigoForm:FormGroup;  
  emailForm:FormGroup;

  constructor(private formBuilder:FormBuilder) {
    
    this.codigoForm = this.formBuilder.group({
      codigo:["",[Validators.required,Validators.min(0)]]
    })
    this.emailForm = this.formBuilder.group({
      email: ["",[Validators.required,Validators.email]]
    })
   }

  ngOnInit(): void {
  }

  enviarEmail(){
    if(this.emailForm.valid){
      this.codigoTerapeuta = true;
    }{
      this.emailForm.touched;
    }    
  }

  enviarCodigo(){
    if(this.codigoForm.valid){
      this.isTherapist = true;
      this.codigoTerapeuta = false;
    }
  }

}
