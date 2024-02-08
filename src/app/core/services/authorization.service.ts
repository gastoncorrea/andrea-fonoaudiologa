import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http:HttpClient) {}

  URL = "http://localhost:8080/auth/save";

  nuevaAuth(auth: Auth):Observable<any>{
    return this.http.post(this.URL,auth,{responseType : 'text'});
  }

  listaDeAuth():Observable<Auth[]>{
    return this.http.get<Auth[]>(this.URL);
  }

  modificarAuth(auth:Auth):Observable<Auth>{
    return this.http.put<Auth>(this.URL,auth);
  }
}
