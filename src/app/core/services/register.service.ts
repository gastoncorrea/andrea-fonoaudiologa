import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  URL = "http://localhost:8080/auth/";

  verificarAuth(email:string):Observable<any>{
    return this.http.get(this.URL+"autorization/"+email);
  }

  enviarCodigo(codigo:any):Observable<any>{
    return this.http.post(this.URL+"authorization/codigo",codigo);
  }
}
