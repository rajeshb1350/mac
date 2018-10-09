import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.onscroll = function() {myFunction()};
    var header =<HTMLFormElement>document.querySelector(".header");

    var sticky = header.offsetTop;
    function myFunction() {
      if (window.pageYOffset > sticky) {
        var $slides = document.querySelectorAll('.carousel-inner');
        var sliders = document.querySelector('.carousel-item .sliderr');

        header.classList.add("sticky");
        Array.from(header.children).forEach(element=>(
            Array.from(element.children).forEach(
              element=> element.classList.add("sticky")
            )
        ));


          Array.from($slides).forEach((slide: HTMLElement) => {
            var windowx = (window.scrollY) ;
            slide.style.borderRadius = `0px 0px ${windowx/40}% ${windowx/40}%`;
          },500);


      } else {
        header.classList.remove("sticky");
        Array.from(header.children).forEach(element=>(
          Array.from(element.children).forEach(
            element=> element.classList.remove("sticky")
          )
        ))

      }
    }
    // function newFunction() {
    //   var $slides = document.querySelectorAll('.carousel-inner');
    //   var sliders = document.querySelector('.carousel-item .sliderr');
    //   window.onscroll = function () {
    //     Array.from($slides).forEach((slide: HTMLElement) => {
    //       var windowx = window.scrollY;
    //       slide.style.borderRadius = `0px 0px ${windowx}% ${windowx}%`;
    //     });
    //   };
    // }
  }



}
