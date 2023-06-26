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

  

  guardarUsuario(usuario: Usuario):Observable<any>{
    return this.http.post(this.URL + "save",usuario,{responseType : 'text'});
  }
}
