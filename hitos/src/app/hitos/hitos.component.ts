import { Component, OnInit } from '@angular/core';
import { Hito } from '../hito';
import { HITOS} from '../mock-hitos';

@Component({
  selector: 'app-hitos',
  templateUrl: './hitos.component.html',
  styleUrls: ['./hitos.component.css']
})
export class HitosComponent implements OnInit 
{
  hitos = HITOS;
  selectedHito: Hito;
  constructor() 
  {
  }

  ngOnInit() 
  {    
  }

  onSelect (hito: Hito): void 
  {
    this.selectedHito = hito;
  }
}
