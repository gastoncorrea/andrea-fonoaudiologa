import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Terapeuta } from '../models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerapeutaService {

  constructor(private http: HttpClient) { }
  URL:String="http://localhost:8080/terapeuta/";

  saveTherapist(terapeuta: Terapeuta): Observable<any>{
    return this.http.post(this.URL+"save", terapeuta, {responseType: 'text'});
  }

  getAllTherapist(): Observable<any>{
    return this.http.get(this.URL+"all");
  }

  getOneTherapist(id:number):Observable<any>{
    return this.http.get(this.URL+"find/"+id);
  }

  updateTherapist(id:number, therapist:Terapeuta):Observable<any>{
    return this.http.put(this.URL+"update/"+id,{nombre:therapist.nombre,
                                                apellido: therapist.apellido,
                                                descripcion_terapia: therapist.descripcion_terapia,
                                                imagen_perfil: therapist.imagen_perfil,
                                                email: therapist.email,
                                                terapia: therapist.terapia});
  }

  deleteTherapist(id:number):Observable<any>{
    return this.http.delete(this.URL+"delete/"+id);
  }
}
