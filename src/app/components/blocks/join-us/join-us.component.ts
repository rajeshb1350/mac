import { Component, OnInit } from '@angular/core';
import   * as $ from 'jquery';
@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.less']
})
export class JoinUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("input.form-control").on("focusin", function(e){
        e.preventDefault();
        const element = $(this).next(".floating-label");
        element.addClass("active");
      });
      $("input.form-control").on("focusout", function(e){
        e.preventDefault();
        const element = $(this).next(".floating-label");
        if(element.val()) element.removeClass("active");
      });
    });
  }
}
