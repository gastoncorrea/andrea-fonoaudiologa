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
}
