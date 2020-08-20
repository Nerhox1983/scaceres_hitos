import { Component, OnInit, Input } from '@angular/core';
import { Hito } from '../hito';
import { Tipo } from '../tipo';
import { HitoService } from '../hito.service';

@Component({
  selector: 'app-hito-detail',
  templateUrl: './hito-detail.component.html',
  styleUrls: ['./hito-detail.component.css']
})
export class HitoDetailComponent implements OnInit 
{
  @Input() hito: Hito;
  hitos: any;
  selectedHito: Hito;
  
  tipos: any;
  selectedTipo: Tipo;
  constructor(private hitoService: HitoService) 
  {
  }

  InsertUnHito()
  {
    const abc =
    {
      i_hitid: 1,        
      s_nompro: 'SER',
      f_fecing: new Date(),
      i_tipo: 1,
      s_descri: 'test_12',
      f_feccum: new Date(),
      s_cumpli: 'N',
      s_obscum: 'prueba2020sep19'          
    };
    this.hitoService.postUnHito(abc)
    .subscribe((newHito)=>
    {
      console.log(newHito);  
    });
  }

  ngOnInit() 
  {
  }
}