import {
	Component,
	OnInit
} from '@angular/core';
import {
	ActivatedRoute
} from '@angular/router';
import { Router } from '@angular/router';
import { SeoService } from '../../../services/digital-marketing/seo.service';
import * as $ from 'jquery';

@Component({
	selector: 'app-sbus-services',
	templateUrl: './sbus-services.component.html',
	styleUrls: ['./sbus-services.component.less']
})
export class SbusServicesComponent implements OnInit {
	currentsec: string;

	constructor(
		private route: ActivatedRoute,
		private seo: SeoService
	  ) {
		seo.setDmTags("sbus-service");
	  }

	ngOnInit() {
		this.route.params.subscribe(
			data => {
				this.currentsec = data.path;
			}
		);            
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
		const $controls = $(".sbus-controls");
		var position = $(window).scrollTop();
		var footertop = $('.footer-3').offset().top - innerHeight;
		if($controls) {
			$(window).scroll(  debounce( function () {
				var scroll = $(window).scrollTop();
				scroll > position ?
				$controls.removeClass('up').addClass('down') :
				$controls.removeClass('down').addClass('up');
				position = scroll;

				scroll > footertop ? 
				$controls.addClass('fixed'):
				$controls.removeClass('fixed');
			}));
		}
		
		$(document).ready(() => {
			//   const $links = $('.sbus-controls .animated-link');
			//   const $pathbox = $('.tab-content');
			//   $links.on('click', function(e){
			//     $('html,body').animate({scrollTop: $pathbox.offset().top - 70},'slow');
			//   })
		});
	}
}