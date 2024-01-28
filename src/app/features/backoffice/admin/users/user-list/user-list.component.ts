import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/usuario.model';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  listUsers?:User[]=[];
  constructor(private userService:UsuarioService,private router:Router) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((resp)=>{
      this.listUsers = resp;
      console.log(resp);
    })
  }

  editar(user:User){
    const idAModificar = user.id_usuario;
    console.log(idAModificar);
    this.userService.actualizarUsuario(user);
    this.router.navigate(['usuario/update/'+idAModificar]);
  }

  deleteTherapy(id:number){
    this.userService.deleteUser(id).subscribe((resp)=>{
      alert(resp);
      this.ngOnInit();
    })
  }
}
