import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header4',
  templateUrl: './header4.component.html',
  styleUrls: ['./header4.component.less']
})
export class Header4Component implements OnInit {

  constructor() { }

  ngOnInit() {
    const $menubox = document.querySelector('.menu-section');
    const $burgerbox = document.querySelector('.burger');
    const $burger = document.querySelector('.menuSix')
    const $btnlinks = document.querySelectorAll('.menu-list a');
    
    Array.from($btnlinks).forEach(function(e){
        e.addEventListener('click', function () {
            $burger.classList.toggle("clickMenuSix");
            $menubox.classList.toggle("open");
        });
    })
    $burgerbox.addEventListener('click', function () {
        $burger.classList.toggle("clickMenuSix");
        $menubox.classList.toggle("open");
    });

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

    const $controls = $(".header4");
		var position = $(window).scrollTop();
		if($controls) {
			$(window).scroll(  debounce( function () {
				var scroll = $(window).scrollTop();
				scroll > position ?
				$controls.removeClass('up').addClass('down') :
				$controls.removeClass('down').addClass('up');
				position = scroll;
			}));
		}
		
  }
}
