import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disponibilidad } from '../models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisponibilidadService {
  constructor(private http: HttpClient) { }
  URL: String = "http://localhost:8080/disponibilidad/";

  saveDisponibility(disponibilidad: Disponibilidad): Observable<any> {
    return this.http.post(this.URL + "save", disponibilidad, { responseType: 'text' });
  }

  getAllDisponibility(): Observable<any> {
    return this.http.get(this.URL + "all");
  }

  getOneDisponibility(id: number): Observable<any> {
    return this.http.get(this.URL + "find/" + id);
  }

  updateDisponibility(id: any, disponibilidad: Disponibilidad): Observable<any> {
    return this.http.put(this.URL + "update/" + id, {
      dia: disponibilidad.dia,
      hora_inicio: disponibilidad.hora_inicio,
      hora_fin: disponibilidad.hora_fin,
    });
  }

  deleteDisponibility(id: number): Observable<any> {
    return this.http.delete(this.URL + "delete/" + id, { responseType: 'text' });
  }
}
