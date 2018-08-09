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
      var $ele =  $(".accordion2 .card .card-header a.card-link.active");
      var eletop = $ele.offset().top;
      function debounce(func){
        var wait = 20;
        var immediate = true;
        var timeout;
        return function() {
          var context = this, args = arguments;
          var later = function(){
            timeout =  null;
            if( !immediate ) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout( timeout );
          timeout = setTimeout(later, wait);
          if( callNow ) func.apply(context, args);
        }
      }
      
      function checkSlide(){
        var wintop = window.scrollY;
        if(wintop > eletop){
          $ele.parents(".card-header").addClass("sticky");
        }
        else {
          $ele.parents(".card-header").removeClass("sticky");
        }
      }
      
      $(document).on("scroll", debounce(checkSlide));
      
      var $head = $(".accordion2 .card .card-header a");
      $head.each(function(){
        $(this).on("click", function(){
          $head.removeClass("active");
          $ele = $(this);
          eletop = $ele.offset().top;
          $(this).addClass("active");
        });
      });
    });
  }
}
