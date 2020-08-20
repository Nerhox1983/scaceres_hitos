import { Component, OnInit, Input } from '@angular/core';
import { Hito } from '../hito';
import { Tipo } from '../tipo';
import { HitoService } from '../hito.service';
import { ThrowStmt } from '@angular/compiler';

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

  s_nompro: string;
  constructor(private hitoService: HitoService) 
  {    
  }

  InsertUnHito(item)
  {    
    const nuevoHito =
    {
      i_hitid: this.hito.i_hitid,        
      s_nompro: this.hito.s_nompro,
      f_fecing: this.hito.f_fecing,
      i_tipo: this.hito.i_tipo,
      s_descri: this.hito.s_descri,
      f_feccum: this.hito.f_feccum,
      s_cumpli: this.hito.s_cumpli,
      s_obscum: this.hito.s_obscum          
    };
    this.hitoService.postUnHito(nuevoHito)
    .subscribe((newHito)=>
    {
      console.log(newHito);  
    });
  }

  UpdateUnHito()
  {
    alert(this.hito.s_cumpli);
    const nuevoHito =
    {
      i_hitid: this.hito.i_hitid,        
      s_nompro: this.hito.s_nompro,
      f_fecing: this.hito.f_fecing,
      i_tipo: this.hito.i_tipo,
      s_descri: this.hito.s_descri,
      f_feccum: this.hito.f_feccum,
      s_cumpli: this.hito.s_cumpli,
      s_obscum: this.hito.s_obscum          
    };
    this.hitoService.updateUnHito(nuevoHito)    
    .subscribe((newHito)=>
    {
      console.log(newHito);  
    });
  }

  ngOnInit() 
  {
  }
}