import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AccordianService } from '../../../../services/accordian.service';
import * as $ from "jquery";
import { $$ } from 'protractor';

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
      var $cardheaders = document.querySelectorAll("#accordion .card-header");

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
      
      function checkSlide(e){
        console.log(window.scrollY);
        Array.from($cardheaders).forEach((e: HTMLElement)=>{
          console.log(e.offsetTop);
        });
      }
      
      // $(document).on("scroll", debounce(checkSlide));
    });
  }
}
