import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthorizationService } from '../../../services/authorization.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./style/topbar-sp.component.less']
})
export class TopbarComponent implements OnInit, AfterViewInit {
  loginStatus: boolean;
  constructor(
    private authService: AuthorizationService
  ) { }
  
    
  currentTime: any;
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  ngOnInit() {
    function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
    }
    setInterval(
      ()=>{
        const today = new Date();
        var D = today.getDate();
        var d = today.getDay();
        var M = today.getMonth();
        var Y = today.getFullYear();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        this.currentTime = `${this.days[d]} ${D}/${M}/${Y} ${h}:${m}:${s}`;
      }
    ,1000);

    
    this.loginStatus = this.authService.loginStatus;
    console.log(this.loginStatus);
  }

  ngAfterViewInit(){

  }

  logIn(){
    this.authService.logout();
  }
}
