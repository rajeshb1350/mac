import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../services/digital-marketing/seo.service';

@Component({
  selector: 'app-sbus-strategy',
  templateUrl: './sbus-strategy.component.html',
  styleUrls: ['./sbus-strategy.component.less']
})
export class SbusStrategyComponent implements OnInit {

  constructor(    
    private seo: SeoService
  ) {  seo.setDmTags(window.location.pathname.slice(1));}

  ngOnInit() {
  }

}
