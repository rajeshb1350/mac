import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-gotop',
  templateUrl: './gotop.component.html',
  styleUrls: ['./gotop.component.less']
})
export class GotopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        /* Back To Top  */
        if ($('.go-top').length) {
          var scrollTrigger = 100, // px
              backToTop = function () {
                  var scrollTop = $(window).scrollTop();
                  if (scrollTop > scrollTrigger) {
                      $('.go-top').addClass('active');
                  } else {
                      $('.go-top').removeClass('active');
                  }
              };
          backToTop();
          $(window).on('scroll', function () {
              backToTop();
          });
  
          $('.go-top').on('click', function (e) {
              e.preventDefault();
              $(this).blur();
              $('html,body').animate({
                  scrollTop: 0
              }, 500);
          });
      }
  }

}
