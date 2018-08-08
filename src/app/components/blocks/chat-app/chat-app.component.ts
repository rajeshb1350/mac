import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.less']
})
export class ChatAppComponent implements OnInit {
  
  constructor() { 
  }
  
  ngOnInit() {
    $(document).ready(function(){
      $(".chatIcon i").on("click", function(){
        $(".chatWindow").toggleClass("d-none");
      });
      $(".closeChat").on("click", function(){
        $(".chatWindow").addClass("d-none");
      });
    });
  }
  
}
