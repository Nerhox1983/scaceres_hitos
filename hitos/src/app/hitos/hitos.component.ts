import { Component, OnInit } from '@angular/core';
import { Hito } from '../hito';

@Component({
  selector: 'app-hitos',
  templateUrl: './hitos.component.html',
  styleUrls: ['./hitos.component.css']
})
export class HitosComponent implements OnInit 
{
  hito: Hito = 
  {
    i_hitid: 1,
    s_nompro: 'Z8',
    f_fecing: new Date(),
    i_tipo: 11,
    s_descri: 'ABC',
    f_feccum: new Date(),
    s_cumpli: "N",
    s_obscum: "BCD"
  };

  constructor() 
  {
  }

  ngOnInit() 
  {
  }
}
