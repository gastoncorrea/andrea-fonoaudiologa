import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  
loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private userService:UsuarioService) {
    this.loginForm = this.formBuilder.group({
      nombreEmailUsuario:["",[]],
      password:["",[]]
    })
   }

  ngOnInit(): void {
  }

  enviarForm(){
    this.userService.loginUser(this.loginForm.value).subscribe((resp)=>{
      console.log(resp);
      if(resp){
        alert("usted tiene acceso");
      }else{
        alert("usuario o contraseña incorrecta, verifique sus credenciales");
      }
    })
  }
}
