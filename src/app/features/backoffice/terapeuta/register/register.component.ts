import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rol } from 'src/app/core/models/usuario.model';
import { RegisterService } from 'src/app/core/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  codigoTerapeuta: boolean = false;
  authReg:any;
  codigo:any;
  receiveRol?:Rol;
  codigoForm:FormGroup;  
  emailForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private regServ:RegisterService) {
    
    this.codigoForm = this.formBuilder.group({
      id:["",[]],
      email:["",[]],
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
      console.log(this.emailForm.value);
      this.regServ.verificarAuth(this.emailForm.value.email).subscribe((resp)=>{
        this.authReg = resp;
      })
    }{
      this.emailForm.touched;
    }    
  }

  enviarCodigo(){
    this.codigoForm.patchValue(this.authReg);
    console.log(this.codigoForm.value);
    if(this.codigoForm.valid){
      this.regServ.enviarCodigo(this.codigoForm.value).subscribe((resp)=>{
        this.receiveRol = resp;
        console.log(resp);
      })
    }
  }

}
