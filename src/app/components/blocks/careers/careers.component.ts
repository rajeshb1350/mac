import { Component, OnInit } from '@angular/core';
import { AccordianService } from '../../../services/accordian.service';
import * as $ from "jquery";

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.less']
})
export class CareersComponent implements OnInit {

  data: { "title": string; "data": { "question": string; "description": string; }[]; }[];
  constructor() { }

  ngOnInit() {
  }

}
