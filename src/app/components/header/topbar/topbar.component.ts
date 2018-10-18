import { Component, OnInit, DoCheck} from '@angular/core';
import * as $ from 'jquery';
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { urlPortService } from '../../../services/http/url-port.service';
import { Router } from '@angular/router';
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
    private authService: AuthenticationService,
    private router: Router,
    private porturl: urlPortService
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

  consecMethod() {
    return new Promise((resolve, reject) => {
      this.router.navigate(["/"]);
      resolve();
    });
  }

  consecMethod1() {
    return new Promise((resolve, reject) => {
      this.router.navigate(["/services"]);
      resolve();
    });
  }

  startTrialBtn() {
    this.consecMethod().then(
      () => {
        setTimeout(() => {
          $('html,body').animate({ scrollTop: $("#section-9").offset().top }, 'slow');
        }, 200);
      }
    );
  }


  ngDoCheck() {
    this.loginStatus = this.authService.getLoginStatus();
  }
  
  logout(){
    this.authService.doLogout();
    this.loginStatus = this.authService.getLoginStatus();
    console.log(this.loginStatus);
  }
}
