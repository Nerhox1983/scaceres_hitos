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

  pepeService: HitoService;
  constructor(private hitoService: HitoService) 
  { 
    hitoService.getTodosHitos().subscribe((data:any)=>
    {
      console.log(data);
      this.hitos = data;
      console.log(data)
    })
    console.log("hitos: " + this.hitos);

    /*hitoService.getTodosTipos().subscribe((data:any)=>
    {
      console.log(data);
      this.tipos = data;
      console.log(data)
    })
    console.log("tipos: " + this.tipos);*/
  }  

  ngOnInit(): void  
  {  
    this.hitoService.getTodosTipos().subscribe((data:any)=>
    {
      console.log(data);
      this.tipos = data;
      console.log(data)
    })
    console.log("tipos: " + this.tipos);  
  }

  onSelect (hito: Hito, tipo:Tipo): void 
  {
    this.selectedHito = hito;
    this.selectedTipo = tipo;
  }
}
