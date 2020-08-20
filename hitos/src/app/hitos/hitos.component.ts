import { Component, OnInit } from '@angular/core';
import { Hito } from '../hito';
import { Tipo } from '../tipo';
import { HITOS} from '../mock-hitos';
import { HitoService } from '../hito.service'

@Component({
  selector: 'app-hitos',
  templateUrl: './hitos.component.html',
  styleUrls: ['./hitos.component.css']
})
export class HitosComponent implements OnInit 
{
  hitos: any;
  selectedHito: Hito;
  
  tipos: any;
  selectedTipo: Tipo;
  constructor(hitoService: HitoService) 
  { 
    hitoService.getTodosHitos().subscribe((data:any)=>
    {
      console.log(data);
      this.hitos = data;
      console.log(data)
    })
    console.log(this.hitos);

    hitoService.getTodosTipos().subscribe((dataTipos:any)=>
    {
      console.log(dataTipos);
      this.tipos = dataTipos;
      console.log(dataTipos)
    })
    console.log(this.tipos);
  }  

  ngOnInit() 
  {    
  }

  onSelect (hito: Hito): void 
  {
    this.selectedHito = hito;
  }
}
