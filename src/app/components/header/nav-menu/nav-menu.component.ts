import { 
    Component,
    OnInit,
    ViewEncapsulation,
    AfterContentInit,
    DoCheck
  } from '@angular/core';
import * as $ from 'jquery';
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./style/nav-sp.component.less']
})
export class NavMenuComponent implements OnInit, AfterContentInit, DoCheck {
  [x: string]: any;
  
  constructor( 
    private auth: AuthenticationService,
    private router: Router
  ) {}
  loginStatus: boolean = false;
  data: any;

  ngOnInit() {

    $(document).ready(function () {
      $('.appdropdown').hover(function () {
      $(this).find('.sm-menu').first().stop(true, true).slideDown(150).addClass("show");
  }, function () {
      $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
  });
    });
  }
  
    

  ngDoCheck() {
    this.loginStatus = this.auth.getLoginStatus();
  }
  
  consecMethod(){
    return new Promise((resolve, reject)=>{
      this.router.navigate(["/"]);
      resolve();
    });
  }

    
  consecMethod1(){
    return new Promise((resolve, reject)=>{
      this.router.navigate(["/services"]);
      resolve();
    });
  }

  startTrialBtn(){
    this.consecMethod().then(
      ()=>{
        setTimeout(() => {
          $('html,body').animate({scrollTop: $("#section-9").offset().top},'slow');
        }, 200);
      }
    );
  }
  sms(){
    this.consecMethod1().then(
      ()=>{

        $(".card .card-header").removeClass("sticky");
        var $smscardHeader = $("#smsmain .card-header");
          var $ele =  $smscardHeader.children("a.card-link.active").parent();

        setTimeout(() => {
          $('html,body').animate({scrollTop: $("#smsmain").offset().top},'slow');
        }, 200);
      
   

        $ele.removeClass("collapse");
        var slect = $("#smsmain .content");
        slect.addClass("show");
        $smscardHeader.addClass("sticky");
      
      }
    );
  }
  rgov(){
    this.consecMethod1().then(
      ()=>{

        $(".card .card-header").removeClass("sticky");
        var $egocardHeader = $("#egovmain .card-header");
          var $ele =  $egocardHeader.children("a.card-link.active").parent();

        setTimeout(() => {
          $('html,body').animate({scrollTop: $("#egovmain").offset().top},'slow');
        }, 200);
     
    

        $ele.removeClass("collapse");
        var slect = $("#egovmain .content");
        slect.addClass("show");
        $egocardHeader.addClass("sticky");

     
      }
    );
  }
  ts(){
    this.consecMethod1().then(
      ()=>{
        $(".card .card-header").removeClass("sticky");
        var $tcscardHeader = $("#tcsmain .card-header");
          var $ele =  $tcscardHeader.children("a.card-link.active").parent();

        setTimeout(() => {
          $('html,body').animate({scrollTop: $("#tcsmain").offset().top},'slow');
        }, 200);


        $ele.removeClass("collapse");
        var slect = $("#tcsmain .content");
        slect.addClass("show");
        $tcscardHeader.addClass("sticky");

      }
    );
  }
  aps(){
    this.consecMethod1().then(
      ()=>{

        $(".card .card-header").removeClass("sticky");
        var $apscardHeader = $("#apsmain .card-header");
          var $ele =  $apscardHeader.children("a.card-link.active").parent();

        setTimeout(() => {
          $('html,body').animate({scrollTop: $("#apsmain").offset().top},'slow');
        }, 200);


        $ele.removeClass("collapse");
        var slect = $("#apsmain .content");
        slect.addClass("show");
        $apscardHeader.addClass("sticky");

       
      }
    );
  }
  bres(){
 
    this.consecMethod1().then(
      ()=>{
        
      $(".card .card-header").removeClass("sticky");
      var $bcardHeader = $("#bresmain .card-header");
        var $ele =  $bcardHeader.children("a.card-link.active").parent();
        setTimeout(() => {
          $('html,body').animate({scrollTop: $("#bresmain").offset().top},'slow');
        }, 200);

             
        $ele.removeClass("collapse");
        var slect = $("#bresmain .content");
        slect.addClass("show");
        $bcardHeader.addClass("sticky");

 
      }
    );
  }
  fas(){
    this.consecMethod1().then(
      ()=>{
        $(".card .card-header").removeClass("sticky");
        var $fcardHeader = $("#fasmain .card-header");
        var $ele =  $fcardHeader.children("a.card-link.active").parent();
        setTimeout(() => {
          $('html,body').animate({scrollTop: $("#fasmain").offset().top},'slow');
        }, 200);
     
      
        $ele.removeClass("collapse");
        var slect = $("#fasmain .content");
        slect.addClass("show");
        $fcardHeader.addClass("sticky");

      }
    );
  }

  ngAfterContentInit() {    
    (function(){
      $('[id^="nav-icon"]').on("click", function(){
        $(this).toggleClass('open');
        $(this).siblings(".nav-menu").toggleClass("active");
      });

      $('.header-sp .nav-item a').on("click", function(){
        $(".header-sp .nav-menu").toggleClass("active");
        $(".header-sp .burger-icon").toggleClass("open");
      });

      $(".add-dropdown .dropdown-menu a").on("mouseover", function(e){
        var $this = $(this);
        $this.siblings(".list-item-screen").children("[ class^='list-item-screen-']").addClass("d-none");
        $this.siblings(".list-item-screen").children(".list-item-screen-"+ $this.attr("data-screen")).removeClass("d-none");
        $this.parent().children().removeClass("active");
        $this.addClass("active");
        // e.target.classList.toggle("active");
      });

    })();






      $(document).ready(function(){
        const $cardHeader = $(".accordion2 .card .card-header");
        var $ele =  $cardHeader.children("a.card-link.active").parent();
        var eletop = $ele.offset().top;
        
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
        
        function checkSlide(){
          var wintop = window.scrollY;
          if(wintop > eletop){
            $ele.addClass("sticky");
          }
          else {
            $ele.removeClass("sticky");
          }
        }
        
        $(document).on("scroll", debounce(checkSlide));
        
        $cardHeader.each(function(val, element){
          $(this).on("click", ()=>{ 
            $ele =  $(this);
            eletop = $ele.offset().top;
            console.log(eletop);
            setTimeout(animatehead, 700);
          });
        });
        
        function animatehead(){
          $cardHeader.removeClass("sticky").children("a.card-link").removeClass("active");
          $ele.children("a.card-link").addClass("active");
          eletop = $ele.offset().top;
          console.log(eletop);
          checkSlide();
          $('html,body').animate({scrollTop: $ele.offset().top - 70},'slow');
        }
      });









  }



}
// $(document).ready(function(){
//   $(".dropdown").hover(            
//       function() {
//           $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
//           $(this).toggleClass('open');        
//       },
//       function() {
//           $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
//           $(this).toggleClass('open');       
//       }
//   );
// });