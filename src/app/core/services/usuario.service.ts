import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/usuario.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private editUser = new BehaviorSubject<any>(null);
  editTherapy$:Observable<User> = this.editUser.asObservable();

  actualizarUsuario(user:User){
    this.editUser.next(user);
  }

  constructor(private http: HttpClient) { }
  URL:String="http://localhost:8080/usuario/";

  

  saveUser(usuario: User):Observable<any>{
    return this.http.post(this.URL + "save",usuario,{responseType : 'text'});
  }

  getAllUser():Observable<any>{
    return this.http.get(this.URL+"all")
  }

  getOneUser(id:number):Observable<any>{
    return this.http.get(this.URL+"find/"+id);
  }

  updateUser(id:number, usuario:User):Observable<any>{
    return this.http.put(this.URL+"update/"+id,{nombre: usuario.nombre,
                                                apellido: usuario.apellido,
                                                nombre_usuario: usuario.nombre_usuario,
                                                email: usuario.email,
                                                password: usuario.password
                                                });
  }

  deleteUser(id:number): Observable<any>{
    return this.http.delete(this.URL+"delete/"+id,{responseType:'text'});
  }
}
