import { Component, OnInit, DoCheck} from '@angular/core';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./style/topbar-sp.component.less']
})

export class TopbarComponent implements OnInit, DoCheck {
  loginStatus: boolean;
  currentTime: any;
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  constructor(
    private authService: AuthenticationService
  ) { }
  
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
  }

  ngDoCheck() {
    this.loginStatus = this.authService.getLoginStatus();
  }
  
  login(){
    this.authService.doLogin();
    this.loginStatus = this.authService.getLoginStatus();
    console.log(this.loginStatus);
  }
  
  logout(){
    this.authService.doLogout();
    this.loginStatus = this.authService.getLoginStatus();
    console.log(this.loginStatus);
  }
}
