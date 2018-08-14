import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.less']
})
export class SoftwareComponent implements OnInit {
  constructor(
    private erpdata: DashboardService
  ) {}
  erplist: any;
  
  ngOnInit() {
    this.erplist = this.erpdata.getSoftwareStatus();
    console.log( this.erpdata.getSoftwareStatus());
  }
}
