import { Component, OnInit } from '@angular/core';
import * as $ from  'jquery'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.less']
})
export class SupportComponent implements OnInit {

  current: number = 0;
  items: Array<any>;

  constructor() { }

  ngOnInit() {

  }

}
