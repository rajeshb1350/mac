import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from './services/http/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})


export class AppComponent implements OnInit {


    constructor(
        private router: Router,
        // private apiservice: ApiService
    ) {
        // this.propertyColor = this.apiservice.getApiData();
    }
    // title = 'Look jQuery Animation working in action!';
    // propertyColor = [];

    public ngOnInit(){
        // var changeTheme = () =>{
        //     const documentpath = document.documentElement.style;
        //     this.propertyColor.forEach(function(element){
        //     var property = `--${element.color}-color`;
        //     var propertybg = `--${element.color}-background-color`;
        //     var propertyborder = `--${element.color}-border-color`;
        //     var value = `rgb(${element.value.r},${element.value.g},${element.value.b})`;
        //     documentpath.setProperty( property, value);
        //     documentpath.setProperty( propertybg, value);
        //     documentpath.setProperty( propertyborder, value);
        //     console.log(property+":"+value);
        //     });
        // }
        // setTimeout( changeTheme, 5000 );
        
            
        $(document).ready(function(){
        $(".filter-button").click(function(){
            var value = $(this).attr('data-filter');
            
            if(value == "all")
            {
            //  $('.filter').removeClass('hidden');
                $('.filter').show('1000');
            }
            else
            {
            //  $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //  $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                $(".filter").not('.'+value).hide('3000');
                $('.filter').filter('.'+value).show('3000');
                
            }
        });
        var toggleAffix = function(affixElement, scrollElement, wrapper) {
    
        var height = affixElement.outerHeight(),
            top = wrapper.offset().top;
        
        if (scrollElement.scrollTop() >= top){
            wrapper.height(height);
            affixElement.addClass("affix");
        }
        else {
            affixElement.removeClass("affix");
            wrapper.height('auto');
        }
            
        };
        
    
        $('[data-toggle="affix"]').each(function() {
        var ele = $(this),
            wrapper = $('<div></div>');
        
        ele.before(wrapper);
        $(window).on('scroll resize', function() {
            toggleAffix(ele, $(this), wrapper);
        });
        
        // init
        toggleAffix(ele, $(window), wrapper);
        });

    });


    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });

  }
}



