import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AccordianService } from '../../../../services/accordian.service';
import * as $ from "jquery";

@Component({
  selector: 'app-accordian2',
  templateUrl: './accordian2.component.html',
  styleUrls: ['./accordian2.component.less']
})
export class Accordian2Component implements OnInit, AfterViewInit {

  constructor(
    private accService: AccordianService
  ) { }
  data = [];
  ngOnInit() {

    this.data = this.accService.getSupportData();
  }
    ngAfterViewInit(){

    $(document).ready(function(){
      const $cardHeader = $(".accordion2 .card .card-header");
      var $ele =  $cardHeader.children("a.card-link.active").parent();
      var eletop = $ele.offset().top;
      
      function debounce(func){
        var wait = 10;
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
          $ele.addClass("sticky");
        }
        else {
          $ele.removeClass("sticky");
        }
      }
      
      $(document).on("scroll", debounce(checkSlide));
      
      $cardHeader.each(function(val, element){
        $(this).on("click", ()=>{ 
          $ele = $(this);
          eletop = $ele.offset().top;
          console.log(eletop);
          setTimeout(animatehead, 700);
          return true;
        });
      });
      
      function animatehead(){
        $cardHeader.removeClass("sticky").children("a.card-link").removeClass("active");
        $ele.children("a.card-link").addClass("active");
        eletop = $ele.offset().top;
        checkSlide();
        $('html,body').animate({scrollTop: $ele.offset().top - 70},'slow');
      }
    });
  }
  }

