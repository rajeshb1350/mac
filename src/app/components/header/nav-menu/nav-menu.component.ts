import { Component, OnInit, ViewEncapsulation, AfterContentInit } from '@angular/core';
import * as $ from 'jquery';
import { ApiService } from '../../../services/http/api.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./style/nav-sp.component.less']
})
export class NavMenuComponent implements OnInit, AfterContentInit {
  constructor( private apidata: ApiService ) {
    this.apidata.getHeaderData().subscribe(
      (data: any) => data , 
      error => console.error(error)
    );
  }

  ngOnInit() {
  }

  ngAfterContentInit() {    
    (function(){
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').on("click", function(){
        $(this).toggleClass('open');
        $(this).siblings(".nav-menu").toggleClass("active");
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
