import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { Rol, User } from 'src/app/core/models/usuario.model';
import { UsuarioService } from 'src/app/core/services/usuario.service';


@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
  @Input() receiveRol?:Rol;
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
                  nombreUsuario: ["",[Validators.required]],
                  email: ["",[Validators.required]],
                  password:["",[]],
                  rol:this.formBuilder.group(
                    {
                      id:[null,[]]
                    }
                  )
                })
   }

  ngOnInit(): void {

    this.editarUsuario();
    console.log(this.receiveRol);

    if (this.receiveRol != null) {
      this.userForm.get('rol.id')?.setValue(this.receiveRol.id);
    }
  }

  guardarUsuario(){
    if(!this.updateMode){
      console.log(this.userForm.value);
      this.usuarioService.saveUser(this.userForm.value).subscribe((res)=>{
        alert(res);
        console.log(res.error);
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
