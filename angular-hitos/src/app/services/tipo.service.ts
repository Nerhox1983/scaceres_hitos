import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tipo } from './../interfaces/tipo';

@Injectable({
  providedIn: 'root'
})
export class TipoService 
{
  constructor(private http: HttpClient)
  {

  }  
}
