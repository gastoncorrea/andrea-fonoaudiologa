import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Auth } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http:HttpClient) {}

  URL = "http://localhost:8080/auth";

  nuevaAuth(auth: Auth):Observable<any>{
    return this.http.post(this.URL+"/save",auth,{responseType : 'text'});
  }

  listaDeAuth():Observable<Auth[]>{
    return this.http.get<Auth[]>(this.URL+'/all');
  }

  modificarAuth(auth:Auth):Observable<Auth>{
    return this.http.put<Auth>(this.URL,auth);
  }

  eliminarAuth(id:number):Observable<any>{
    return this.http.delete(this.URL+'/delete/'+id,{responseType: 'text'});
  }

}
