import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../../../../services/digital-marketing/seo.service';

@Component({
  selector: 'app-operational-excellence',
  templateUrl: './operational-excellence.component.html',
  styleUrls: ['./operational-excellence.component.less']
})
export class OperationalExcellenceComponent implements OnInit {

  constructor(
    private router: Router,
    private seo: SeoService
  ) {   seo.setDmTags("operation-excellence");}

  ngOnInit() {
  }

}
