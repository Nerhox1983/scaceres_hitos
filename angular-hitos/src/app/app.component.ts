import { Component } from '@angular/core';
import {HitoService} from './services/hito.service';
import {TipoService} from './services/tipo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'angular-hitos';
  constructor (private hitoService: HitoService, private tipoService: TipoService) 
  {    

  }

  getTodosHitos()
  {
    this.hitoService.getTodosHitos()
    .subscribe(hitos =>
    {
      console.log(hitos);
    });
  }
  
  getTodosTipos()
  {
    this.tipoService.getTodosTipos()
    .subscribe(tipos =>
    {
      console.log(tipos);
    });
}