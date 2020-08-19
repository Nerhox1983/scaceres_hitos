import { Component, OnInit, Input } from '@angular/core';
import { Hito } from '../hito';

@Component({
  selector: 'app-hitp-detail',
  templateUrl: './hito-detail.component.html',
  styleUrls: ['./hito-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hito;

  constructor() 
  {
  }

  ngOnInit() 
  {
  }
}
