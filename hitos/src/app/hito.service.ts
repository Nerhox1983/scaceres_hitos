import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hito } from './Hito';
import { map } from 'rxjs/operators';
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
    return this.http.get(path);
  }
  
  getUnHito(id: string)
  {
    const path = 'http://localhost:5000/ApiGetHito/${i_hitid}';
    return this.http.get(path);
  }

  getTodosTipos()
  {    
    const path = 'http://localhost:5000/ApiGetTipos';
      return this.http.get(path);
  }
  
  getUnTipo()
  {    
    const path = 'http://localhost:5000/ApiGetTipo/${i_tipid}';
      return this.http.get(path);
  }
  
  postUnHito(hito: Hito)
  {    
    const path = 'http://localhost:5000/ApiInsertHito';
      return this.http.post(path, hito);
  }
}
