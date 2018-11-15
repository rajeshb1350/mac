import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-sbus-services',
  templateUrl: './sbus-services.component.html',
  styleUrls: ['./sbus-services.component.less']
})
export class SbusServicesComponent implements OnInit {
  currentsec: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      data => 
      {
        this.currentsec = data.path;
      }
    );

    const $controls = $(".sbus-controls");
    var position = $(window).scrollTop();
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      scroll > position ?
        $controls.removeClass('up').addClass('down'):
        $controls.removeClass('down').addClass('up');
      position = scroll;
    });
  }
}
