import { Component } from '@angular/core';
import {HitoService} from './services/hito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'angular-hitos';
  constructor (private HitoService: HitoService) 
  {    
  }
}
