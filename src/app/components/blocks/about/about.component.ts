import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }   
}



  $(".accorHeading").click(function(){
     /* $(".accorBody").removeClass("active"); */
    /*  $(this).siblings().toggleClass("active");
    $(this).siblings().parent().sibling().removeClass("active");
    $(this).siblings().parent().sibling().removeClass("active");
    $("html, body").animate({scrollTop: 480}, 1000); */
    if($(this).siblings().hasClass("active")){
      $(this).siblings().removeClass("active");
      $("html, body").animate({scrollTop: 480}, 1000); 
    }
    else{
      $(this).parent().siblings().children().removeClass("active");
      $(this).siblings().toggleClass("active");
    }
    return false;
  });