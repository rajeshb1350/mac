import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../../services/digital-marketing/seo.service';

@Component({
  selector: 'app-sbus',
  templateUrl: './sbus.component.html',
  styleUrls: ['./sbus.component.less']
})
export class SbusComponent implements OnInit {

  constructor(    private router: Router,
    private seo: SeoService
  ) {
    seo.setDmTags(window.location.pathname.slice(1));
  }
  ngOnInit() {
  }

}
