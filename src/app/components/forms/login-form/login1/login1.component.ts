import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../../../services/authentication/authentication.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.less']
})
export class Login1Component implements OnInit {
  tryonce: boolean = true;
  constructor(
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(form: NgForm){
    console.log(form.value);
    this.auth.doLogin(form.value);
  }

  tryAgain(){
    this.tryonce = !this.tryonce;
  }
}
