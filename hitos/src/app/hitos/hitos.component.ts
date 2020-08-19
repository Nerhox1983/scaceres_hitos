import { Component, OnInit } from '@angular/core';
import { Hito } from '../hito';
import { HITOS} from '../mock-hitos';
import {HitoService} from '../hito.service'

@Component({
  selector: 'app-hitos',
  templateUrl: './hitos.component.html',
  styleUrls: ['./hitos.component.css']
})
export class HitosComponent implements OnInit 
{
  hitos: any;
  selectedHito: Hito;
  constructor(hitoService: HitoService) 
  { 
    hitoService.getTodosHitos().subscribe((data:any)=>{
      console.log(data);
      this.hitos = data;
      console.log(data)
    })
    console.log(this.hitos);
  }  

  ngOnInit() 
  {    
  }

  onSelect (hito: Hito): void 
  {
    this.selectedHito = hito;
  }
}
