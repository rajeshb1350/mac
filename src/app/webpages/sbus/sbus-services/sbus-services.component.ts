import {
	Component,
	OnInit
} from '@angular/core';
import {
	ActivatedRoute
} from '@angular/router';
import * as $ from 'jquery';

@Component({
	selector: 'app-sbus-services',
	templateUrl: './sbus-services.component.html',
	styleUrls: ['./sbus-services.component.less']
})
export class SbusServicesComponent implements OnInit {
	currentsec: string;

	constructor(
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.route.params.subscribe(
			data => {
				this.currentsec = data.path;
			}
		);            
		function debounce(func){
			var wait = 50;
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
		if($controls) {
			$(window).scroll(  debounce( function () {
				var scroll = $(window).scrollTop();
				scroll > position ?
				$controls.removeClass('up').addClass('down') :
				$controls.removeClass('down').addClass('up');
				position = scroll;
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