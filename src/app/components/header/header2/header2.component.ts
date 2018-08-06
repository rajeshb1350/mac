import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ApiService } from "../../../services/http/api.service";
import { HeaderLink, SubLink, SublinkContent } from "../../../services/model/header.model";
import { Response } from '@angular/http';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./style/header2.component.less']
})

export class Header2Component implements OnInit {

  constructor(
    private api: ApiService
  ){}


  ngOnInit() {
    // this.
    // headerservice.
    // getHeaderData().
    // subscribe(
    //   ( data: Response )=> console.log(data.json()),
    //   error => console.log(error)
    // );

    $(document).ready(function(){
      (function(){
        window.onscroll = function() {myFunction()};
        var header =<HTMLFormElement>document.querySelector("header nav.navbar");
        var sticky = header.offsetTop;
        function myFunction() {
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
        }
        
        $(".add-dropdown .dropdown-menu a").on("mouseover", function(e){
          var $this = $(this);
          $this.siblings(".list-item-screen").children("[ class^='list-item-screen-']").addClass("d-none");
          $this.siblings(".list-item-screen").children(".list-item-screen-"+ $this.attr("data-screen")).removeClass("d-none");
          $this.parent().children().removeClass("active");
          $this.addClass("active");
          // e.target.classList.toggle("active");
        });
      })();
    });  
  }
}
