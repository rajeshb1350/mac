import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AccordianService } from '../../../../services/accordian.service';
import * as $ from "jquery";

@Component({
  selector: 'app-accordian1',
  templateUrl: './accordian1.component.html',
  styleUrls: ['./accordian1.component.less']
})
export class Accordian1Component implements OnInit, AfterViewInit {

  constructor(
    private accService: AccordianService
  ) {}
  
  skilldata = [];
  ngOnInit() {
    this.skilldata = this.accService.getCoursesData();
  }

  ngAfterViewInit(){
    $(document).ready(function(){
      const $cardHeader = $(".accordion1 .card .card-header");
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
          $ele =  $(this);
          eletop = $ele.offset().top;
          console.log(eletop);
          setTimeout(animatehead, 700);
        });
      });
      
      function animatehead(){
        $cardHeader.removeClass("sticky").children("a.card-link").removeClass("active");
        $ele.children("a.card-link").addClass("active");
        eletop = $ele.offset().top;
        console.log(eletop);
        checkSlide();
        $('html,body').animate({scrollTop: $ele.offset().top - 70},'slow');
      }
    });
  }
}
