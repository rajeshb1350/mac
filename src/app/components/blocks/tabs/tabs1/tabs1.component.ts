import { Component, OnInit } from '@angular/core';
// import * as $ from "jquery";
// import {Power1, Bounce} from 'gsap/all';

// declare var TweenMax: any;

@Component({
  selector: 'app-tabs1',
  templateUrl: './tabs1.component.html',
  styleUrls: ['./tabs1.component.less']
})
export class Tabs1Component implements OnInit {
  constructor() { }
  ngOnInit() {
    // $(document).ready(function(){
    //   const $tabsimg = $(".tab-sp .tab-content .tab-pane img");
    //   const $tabsheading = $(".tab-sp .tab-content .tab-pane .heading");
    //   const $tablinks = $(".tab-sp .nav-pills a");
    //   $tablinks.on("click", function(e){
    //     TweenMax.from($tabsimg, 0.5, {top: 75, opacity: 0});
    //     TweenMax.to($tabsimg, 0.5, {top: 0, opacity: 1, delay: 0.4});
    //   })
    // });
  }
}
