import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Terapeuta } from '../models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerapeutaService {

  constructor(private http: HttpClient) { }
  URL: String = "http://localhost:8080/terapeuta/";

  saveTherapist(terapeuta: Terapeuta): Observable<any> {
    return this.http.post(this.URL + "save", terapeuta, { responseType: 'text' });
  }

  getAllTherapist(): Observable<any> {
    return this.http.get(this.URL + "all");
  }

  getOneTherapist(id: number): Observable<any> {
    return this.http.get(this.URL + "find/" + id);
  }

  updateTherapist(id: any, therapist: Terapeuta): Observable<any> {
    return this.http.put(this.URL + "update/" + id, therapist);
  }

  deleteTherapist(id: number): Observable<any> {
    return this.http.delete(this.URL + "delete/" + id);
  }
}
