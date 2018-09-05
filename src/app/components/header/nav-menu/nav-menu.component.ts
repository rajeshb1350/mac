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
  
  constructor( 
    private auth: AuthenticationService,
    private router: Router
  ) {}
  loginStatus: boolean = false;
  data: any;

  ngOnInit() {
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

  startTrialBtn(){
    this.consecMethod().then(
      ()=>{
        setTimeout(() => {
          $('html,body').animate({scrollTop: $("#section-9").offset().top},'slow');
        }, 200);
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
  }
}
