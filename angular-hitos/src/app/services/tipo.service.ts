import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tipo } from './../interfaces/Tipo';

@Injectable({
  providedIn: 'root'
})
export class TipoService 
{
  constructor(private http: HttpClient)
  {
  }
  getTodosTipos()
  {    
    const path = 'http://localhost:5000/ApiProfileGet';
      return this.http.get<Tipo[]>(path);
  }  
}  

