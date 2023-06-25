import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  URL:String="http://localhost:8080/paciente/";

  usuario = {
    id_usuario : 1,
    nombre: "gaston",
    apellido: "Correa",
    dni: 12312312,
    fecha_nac: "1990-05-16",
    email: "gaston@kasd.cis",
    obra_social: "sancor"
  }

  guardarUsuario(usuario:any):Observable<any>{
    return this.http.post(this.URL + "save",usuario);
  }
}
