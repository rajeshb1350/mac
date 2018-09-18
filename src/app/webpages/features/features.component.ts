import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { ActivatedRoute, Data } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.less']
})
export class FeaturesComponent implements OnInit{
  slotBookData: any;
  servicesdata: any;

  constructor(
    private title: Title,
    private meta: Meta,
    private route: ActivatedRoute
  ) {
  }
  
  ngOnInit() {
    this.title.setTitle("Skill Passport");
    this.meta.updateTag({ name:"description", content: "Skill Passport is a platform for elearning and management for students, coorporates and colleges" });
    this.meta.updateTag({ name:"keywords", content: "skillpassport, skill passport, courses, elearning, platform, tool online, test platform" });
    
    this.route.data.subscribe(
      (data: Data)=>{
        this.slotBookData = data.server
        this.servicesdata = data.serviceData
      }
    );

    $(function() {
      (function(){
        $('a.downarr').on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
        });
      })();
      
      (function(){
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
        

      })();

      (function(){
        var start = 1;
        const sectionListLength = $("section[id^='section']").length;
        $(window).on("keyup", function(e){
          switch(e.which){
            case 38: {
              if(start < 1) start = 1;
              else{
                start==1? start: start--;
                scrollAnimation(start);
              } 
              break;
            }
            case 40:{
              if(start > sectionListLength) start = sectionListLength;
              else {
                start==sectionListLength ? start: start++;
                scrollAnimation(start);
              }
              break;
            } 
            default: return ;
          }
        });
        
        function scrollAnimation(newVal){
          $('html, body').animate({ scrollTop: $("#section-"+newVal).offset().top}, 300, 'linear');
        }
      })();
    });
  }
}