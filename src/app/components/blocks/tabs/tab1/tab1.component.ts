import { Component, OnInit, Input } from '@angular/core';
import { AccordianService } from '../../../../services/accordian.service';
import * as $ from "jquery";

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.less']
})
export class Tab1Component implements OnInit {
  @Input() sectionData: string;

  constructor(
    private accService: AccordianService
  ) {}
  
  skilldata = [];
  ngOnInit() {
    this.skilldata = this.accService.getCoursesData();
    var section = this.sectionData;
    $(document).ready(function(){
      const $cardHeader = $(".tab1 .nav-pills");
      var eletop = $cardHeader.offset().top;
      function checkSlide(){
        var wintop = window.scrollY;
        if(wintop > ( eletop - 60 )){
          $cardHeader.addClass("sticky");
        }
        else {
          $cardHeader.removeClass("sticky");
        }
      }
      $(document).on("scroll", checkSlide);


      (()=>{
        const $navlink = $(".tab1 .nav-link");
        const $tabpane = $(".tab1 .tab-pane");

        if(section!=undefined){
          $navlink.each((id, element)=>{
            const $ele = $(element);
            $ele.removeClass("active");
            if($ele.attr('href')=='#'+section){
              $ele.addClass('active');
            }
          });
          $tabpane.each((id, element)=>{
            const $ele = $(element);
            $ele.removeClass("active");
            if($ele.attr('id')==section){
              $ele.removeClass("fade").addClass("active");
            }
          });
        }
        else return;
      })();
    });
  }
}
