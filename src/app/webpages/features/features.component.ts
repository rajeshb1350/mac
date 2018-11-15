import { Component, OnInit } from '@angular/core';
// import * as $ from "jquery";
import { ActivatedRoute, Data } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
// import Typed from 'typed.js';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.less']
})
export class FeaturesComponent implements OnInit{
  slotBookData: any;
  servicesdata: any;

  constructor(
    private title: Title,
    private meta: Meta,
    private route: ActivatedRoute
  ) {
  }
  
  ngOnInit() {
    // var options = {
    //   strings: [
    //     "Simple and easy way to connect.",
    //     "We have rooms for new ideas.",
    //     "Are you ready to change?"
    //   ],
    //   typeSpeed: 100,
    //   loop: true,
    //   showCursor: false,
    //   backDelay: 200,
    //   backSpeed: 30
    // }
    
    // var typed = new Typed( '.bannertext', options );

    this.title.setTitle("MacTec IT Solutions");
    this.meta.updateTag({ name:"description", content: "We are global Smart Employee Services (SeS) provider with state-of-the-art technology and able human resources. Our spectrum of services branded as Smart" });
    this.meta.updateTag({ name:"keywords", content: "MacTec, Mac Tec, courses, elearning, platform, tool online, test platform" });
    
    // this.route.data.subscribe(
    //   (data: Data)=>{
    //     this.slotBookData = data.server
    //     this.servicesdata = data.serviceData
    //   }
    // );
  }
}
