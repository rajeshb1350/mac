import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from '../../../services/http/api.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./style/topbar-sp.component.less']
})
export class TopbarComponent implements OnInit, AfterViewInit {

  topbarData: any;
  constructor( private apiData: ApiService) { 
    this.apiData.getHeaderData().subscribe(
      (data: any) => this.topbarData = data.body.header.topbar , 
      error => console.error(error)
    );
  }

  ngOnInit() {

    console.log(this.topbarData);
  }

  ngAfterViewInit(){

  }
}
