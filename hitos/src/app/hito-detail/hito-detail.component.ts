import { Component, OnInit, Input } from '@angular/core';
import { Hito } from '../hito';

@Component({
  selector: 'app-hito-detail',
  templateUrl: './hito-detail.component.html',
  styleUrls: ['./hito-detail.component.css']
})
export class HitoDetailComponent implements OnInit 
{
  @Input() hito: Hito;

  constructor() 
  {
  }

  ngOnInit() 
  {
  }
}