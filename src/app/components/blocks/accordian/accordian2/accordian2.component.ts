import { Component, OnInit } from '@angular/core';
import { AccordianService } from '../../../../services/accordian.service';

@Component({
  selector: 'app-accordian2',
  templateUrl: './accordian2.component.html',
  styleUrls: ['./accordian2.component.less']
})
export class Accordian2Component implements OnInit {

  constructor(
    private accService: AccordianService
  ) { }
  data = [];
  ngOnInit() {
    this.data = this.accService.getSupportData();
  }

}
