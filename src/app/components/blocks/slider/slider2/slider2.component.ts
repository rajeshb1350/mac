import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.less']
})
export class Slider2Component implements OnInit {

  constructor() {  }

  ngOnInit() {

    $(document).ready(function($){
      //define store some initial variables
      var	halfWindowH = $(window).height()*0.5,
        halfWindowW = $(window).width()*0.5,
        //define a max rotation value (X and Y axises)
        maxRotationY = 5,
        maxRotationX = 3,
        aspectRatio;
    
      //detect if hero <img> has been loaded and evaluate its aspect-ratio
      $('div[class^="cd-floating-background"]').find('img').eq(0).on("load",function() {
        aspectRatio = $(this).width()/$(this).height();
          if( $('html').hasClass('preserve-3d') ) initBackground();
      }).each(function() {
        //check if image was previously load - if yes, trigger load event
          if(this.complete) $(this).trigger("load");
      });
      
      //detect mouse movement
      $('div[class^="cd-background-wrapper"]').each(function(){
        $(this).on('mousemove', function(event){
          var wrapperOffsetTop = $(this).offset().top;
          if( $('html').hasClass('preserve-3d') ) {
            window.requestAnimationFrame(function(){
              moveBackground(event, wrapperOffsetTop);
            });
          }
        });
      });
      
      //on resize - adjust .cd-background-wrapper and .cd-floating-background dimentions and position
      $(window).on('resize', function(){
        if( $('html').hasClass('preserve-3d') ) {
          window.requestAnimationFrame(function(){
            halfWindowH = $(window).height()*0.5,
            halfWindowW = $(window).width()*0.5;
            initBackground();
          });
        } else {
          $('div[class^="cd-background-wrapper"]').attr('style', '');
          $('div[class^="cd-floating-background"]').attr('style', '').removeClass('is-absolute');
        }
      });
    
      function initBackground() {
        var wrapperHeight = Math.ceil(halfWindowW*2/aspectRatio), 
          proportions = ( maxRotationY > maxRotationX ) ? 1.1/(Math.sin(Math.PI / 2 - maxRotationY*Math.PI/180)) : 1.1/(Math.sin(Math.PI / 2 - maxRotationX*Math.PI/180)),
          newImageWidth = Math.ceil(halfWindowW*2*proportions),
          newImageHeight = Math.ceil(newImageWidth/aspectRatio),
          newLeft = halfWindowW - newImageWidth/2,
          newTop = (wrapperHeight - newImageHeight)/2;
    
        //set dimentions and position of the .cd-background-wrapper		
        $('div[class^="cd-floating-background"]').addClass('is-absolute').css({
          'left' : newLeft,
          'top' : newTop,
          'width' : newImageWidth,
        });
      }
    
      function moveBackground(event, topOffset) {
        var rotateY = ((-event.pageX+halfWindowW)/halfWindowW)*maxRotationY,
          yPosition = event.pageY - topOffset,
          rotateX = ((yPosition-halfWindowH)/halfWindowH)*maxRotationX;
    
        if( rotateY > maxRotationY) rotateY = maxRotationY;
        if( rotateY < -maxRotationY ) rotateY = -maxRotationY;
        if( rotateX > maxRotationX) rotateX = maxRotationX;
        if( rotateX < -maxRotationX ) rotateX = -maxRotationX;
    
        $('div[class^="cd-floating-background"]').css({
          '-moz-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
            '-webkit-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
          '-ms-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
          '-o-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
          'transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
        });
      }
    });
    
    /* 	Detect "transform-style: preserve-3d" support, or update csstransforms3d for IE10 ? #762
      https://github.com/Modernizr/Modernizr/issues/762 */
    (function getPerspective(){
      var element = document.createElement('p'),
          html = document.getElementsByTagName('html')[0],
          body = document.getElementsByTagName('body')[0],
          propertys = {
            'webkitTransformStyle':'-webkit-transform-style',
            'MozTransformStyle':'-moz-transform-style',
            'msTransformStyle':'-ms-transform-style',
            'transformStyle':'transform-style'
          };
    
        body.insertBefore(element, null);
    
        for (var i in propertys) {
            if (element.style[i] !== undefined) {
                element.style[i] = "preserve-3d";
            }
        }
    
        var st = window.getComputedStyle(element, null),
            transform = st.getPropertyValue("-webkit-transform-style") ||
                        st.getPropertyValue("-moz-transform-style") ||
                        st.getPropertyValue("-ms-transform-style") ||
                        st.getPropertyValue("transform-style");
    
        if(transform!=='preserve-3d'){
          html.className += ' no-preserve-3d';
        } else {
          html.className += ' preserve-3d';
        }
        document.body.removeChild(element);
    })();

    $(document).ready((function(){
      (function(){
        var slides = $(".slidershow>div");
        var slideCount = 0;
        var totalSlides = slides.length;
        var $leftbtn = $(".sliderShowContainer .control-btn .btn-left");
        var $rightbtn = $(".sliderShowContainer .control-btn .btn-right");
        var timer = 10000;
        
        $leftbtn.on("click", function(){
          toggleFrame(slideCount);
          clearInterval(timeset);
        });

        $rightbtn.on("click", function(){
          toggleFrame(slideCount);
          clearInterval(timeset); 
        });

        var timeset = setInterval(function(){
          toggleFrame(slideCount);
          slideCount++;
          if( slideCount > totalSlides-1 ) slideCount = 0;
        },timer);
      })();

      var $basewrapper = $("[class^='cd-background-wrapper']");
      var $basewrapperbg = $(".cd-floating-background").children("img");
      var $bannertext = $(".cd-background-wrapper .banner-text");
      <HTMLElement>$basewrapperbg.addClass("comeastart");
      <HTMLElement>$basewrapperbg.addClass("hide");
      <HTMLElement>$bannertext.addClass("comeastart");

      function toggleFrame(val){
        <HTMLElement>$basewrapper
        .removeClass("active")
        .find(".banner-text, img")
        .delay(3500)
        .removeClass("comeastart");
        
        <HTMLElement>$basewrapper
        .eq(val)
        .addClass("active")
        .find(".banner-text, img")
        .delay(3500)
        .addClass("comeastart");
      };

    })());
    
  }

}
