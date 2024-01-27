import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Therapy } from '../models/usuario.model';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TherapyService {
  private updateTherapy = new BehaviorSubject<any>(null);
  editTherapy$:Observable<Therapy> = this.updateTherapy.asObservable();

  actualizarTerapia(terapia:Therapy){
    this.updateTherapy.next(terapia);
  }
  
  constructor(private http: HttpClient) { }
  URL:string = "http://localhost:8080/terapia/"

  saveTherapy(terapia:Therapy):Observable<string>{
    return this.http.post(this.URL+"save", terapia,{responseType:'text'});
  }

  getTherapy():Observable<any>{
    return this.http.get(this.URL+"all");
  }

  updateOneTherapy(id:number,therapy:Therapy):Observable<any>{
    return this.http.put(this.URL+"update/"+id,therapy)  
  }

  deleteOneTherapy(id:number):Observable<any>{
    return this.http.delete(this.URL+'delete/'+id,{responseType:'text'});
  }

}
