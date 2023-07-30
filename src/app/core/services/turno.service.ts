import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Turno } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {
  constructor(private http: HttpClient) { }
  URL: String = "http://localhost:8080/turno/";



  saveUser(turno: Turno): Observable<any> {
    return this.http.post(this.URL + "save", turno, { responseType: 'text' });
  }

  getAllUser(): Observable<any> {
    return this.http.get(this.URL + "all")
  }

  getOneUser(id: number): Observable<any> {
    return this.http.get(this.URL + "find/" + id);
  }

  updateUser(id: number, turno: Turno): Observable<any> {
    return this.http.put(this.URL + "update/" + id, {
      fecha: turno.fecha,
      dia: turno.dia,
      hora_inicio: turno.hora_inicio,
      tiempo_consulta: turno.tiempo_consulta,
      usuario: turno.usuario.id_usuario,
      terapeuta: turno.terapeuta.id_terapeuta
    });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.URL + "delete/" + id);
  }
}
