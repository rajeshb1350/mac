import { Component, OnInit, } from '@angular/core';


const newLocal: string = 'app-slider-banner';

@Component({
  selector: newLocal,
  templateUrl: './slider-banner.component.html',
  styleUrls: ['./slider-banner.component.less']
})
export class SliderBannerComponent implements OnInit {


  constructor() {  }






  ngOnInit() {





   



















    // (()=>{
    //   var $slides = document.querySelectorAll('.slide');
    //   var $controls = document.querySelectorAll('.slider__control');
    //   var numOfSlides = $slides.length;
    //   var slidingAT = 1300; // sync this with scss variable
    //   var slidingBlocked = false;
    
    //   [].slice.call($slides).forEach(function($el, index) {
    //     var i = index + 1;
    //     $el.classList.add('slide-' + i);
    //     $el.dataset.slide = i;
    //   });
    
    //   [].slice.call($controls).forEach(function($el) {
    //     $el.addEventListener('click', controlClickHandler);
    //   });
    
    //   function controlClickHandler() {
    //     if (slidingBlocked) return;
    //     slidingBlocked = true;
    
    //     var $control = this;
    //     var isRight = $control.classList.contains('m--right');
    //     var $curActive = <HTMLElement>document.querySelector('.slide.s--active');
    //     var index = +$curActive.dataset.slide;
    //     (isRight) ? index++ : index--;
    //     if (index < 1) index = numOfSlides;
    //     if (index > numOfSlides) index = 1;
    //     var $newActive = <HTMLElement>document.querySelector('.slide-' + index);
    
    //     $control.classList.add('a--rotation');
    //     $curActive.classList.remove('s--active', 's--active-prev');
    //     document.querySelector('.slide.s--prev').classList.remove('s--prev');
        
    //     $newActive.classList.add('s--active');
    //     if (!isRight) $newActive.classList.add('s--active-prev');
        
    
    //     var prevIndex = index - 1;
    //     if (prevIndex < 1) prevIndex = numOfSlides;
    
    //     document.querySelector('.slide-' + prevIndex).classList.add('s--prev');
    
    //     setTimeout(function() {
    //       $control.classList.remove('a--rotation');
    //       slidingBlocked = false;
    //     }, slidingAT*0.5);
    //   };




    // var $slides = document.querySelectorAll('.slide');

    //   var sliders =<HTMLFormElement>document.querySelector(".slider");
    //   window.onscroll = function() {
    //     Array.from($slides).forEach((slide: HTMLElement)=>{
    //       var windowx = window.scrollY;
    //       slide.style.borderRadius =  `0px 0px ${windowx}% ${windowx}%`;
    //     });
    //   };


    // })();

  }



}



