import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { UsuarioService } from 'src/app/core/services/usuario.service';


@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
  userForm: FormGroup;

  constructor(private usuarioService : UsuarioService,private formBuilder:FormBuilder) {
    this.userForm = this.formBuilder.group({
      nombre: ["",[Validators.required, Validators.minLength(4)]],
      apellido:["",[Validators.required,Validators.minLength(2)]],
      nombre_usuario: ["",[Validators.required]],
      email: ["",[Validators.required]],
      password:["",[]],
      tipoUsuario: ["",[]]
    })
   }

  ngOnInit(): void {
  }

  guardarUsuario(){

    this.usuarioService.saveUser(this.userForm.value).subscribe((res)=>{
      alert(res);
      this.ngOnInit();
    })
  }
}
