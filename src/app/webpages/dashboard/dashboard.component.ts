import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(
    private authService: AuthorizationService
  ) { }
  blocksCount: number = 10;
  ngOnInit() {
  }
  onLogout(){
    this.authService.logout();
  }
}
