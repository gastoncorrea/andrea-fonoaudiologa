import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  URL:String="http://localhost:8080/paciente/";

  

  saveUser(usuario: Usuario):Observable<any>{
    return this.http.post(this.URL + "save",usuario,{responseType : 'text'});
  }

  getAllUser():Observable<any>{
    return this.http.get(this.URL+"all")
  }

  getOneUser(id:number):Observable<any>{
    return this.http.get(this.URL+"find/"+id);
  }

  updateUser(id:number, usuario:Usuario):Observable<any>{
    return this.http.put(this.URL+"update/"+id,{nombre: usuario.nombre,
                                                apellido: usuario.apellido,
                                                fecha_nac: usuario.fecha_nac,
                                                dni: usuario.dni,
                                                email: usuario.email,
                                                telefono: usuario.telefono,
                                                obra_social: usuario.obra_social});
  }

  deleteUser(id:number): Observable<any>{
    return this.http.delete(this.URL+"delete/"+id);
  }
}
