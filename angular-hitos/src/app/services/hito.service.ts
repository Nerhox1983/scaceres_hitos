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
}
