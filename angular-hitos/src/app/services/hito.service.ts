import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hito } from './../interfaces/Hito';

@Injectable({
  providedIn: 'root'
})
export class HitoService 
{
  constructor(private http: HttpClient)
  {

  }
  getTodosHitos()
  {    
    const path = 'http://localhost:5000/ApiGetHitos';
    return this.http.get<Hito[]>(path);
  }
  
  getUnHito(id: string)
  {
    const path = 'http://localhost:5000/ApiGetHito/${id}';
    return this.http.get<Hito>(path);
  }
}