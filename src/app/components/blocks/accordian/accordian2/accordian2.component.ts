import { Component, OnInit } from '@angular/core';
import { AccordianService } from '../../../../services/accordian.service';
import * as $ from "jquery";

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
    $(document).ready(function(){
      var $head1 = $(".accordion2 .card .card-header a");
      $head1.each(function(){
        $(this).on("click", function(){
          $head1.removeClass("active");
          $(this).addClass("active");
        });
      });
    });
  }
}
