import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/models/usuario.model';
import { UsuarioService } from 'src/app/core/services/usuario.service';


@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
  userForm: FormGroup;
  updateMode: Boolean = false;
  editUser: any;
  titleForm: string = "Crear Usuario";
  idUpdate:any;

  constructor(private usuarioService : UsuarioService,private formBuilder:FormBuilder,
              private route:ActivatedRoute,private router: Router) {
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
    this.editarUsuario();
  }

  guardarUsuario(){
    if(!this.updateMode){
      this.usuarioService.saveUser(this.userForm.value).subscribe((res)=>{
        alert(res);
      })
    }else{
      console.log(this.idUpdate,this.userForm.value);

      this.usuarioService.updateUser(this.idUpdate,this.userForm.value).subscribe((resp)=>{
        alert(resp);
      })
    }
    this.router.navigate(['admin/dashboard/usuario/list']);
    
  }

  editarUsuario(){
    this.idUpdate = this.route.snapshot.paramMap.get('id');
    if(this.idUpdate){
      this.updateMode = true;
      this.usuarioService.editUser$.subscribe((resp)=>{
        this.cargarForm(resp);
        console.log(resp);
        this.titleForm = 'Modificar usuario';
      })
    }else{
      this.updateMode = false;
      this.titleForm= 'Crear Usuario';
      this.userForm.reset();
    }
  }

  cargarForm(user:User){
    this.userForm.patchValue(user);
  }
}
