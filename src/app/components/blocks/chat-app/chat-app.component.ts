import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.less']
})
export class ChatAppComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  showChatWindow(){
    let chatWin= document.querySelector('.chatWindow');
    chatWin.setAttribute("style",'display:block;');
  }

  closeChatWindow(){
    let closechatWin= document.querySelector('.chatWindow');
    closechatWin.setAttribute("style",'display:none');
  }
}
