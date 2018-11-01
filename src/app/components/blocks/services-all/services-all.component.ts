import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

import { ApiService } from './../../../services/http/api.service';
import { Response } from '@angular/http';
import { ModuleService } from './../../../services/model/module.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Data } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';




@Component({
  selector: 'app-services-all',
  templateUrl: './services-all.component.html',
  styleUrls: ['./services-all.component.less']
})
export class ServicesAllComponent implements OnInit {



  @Input() services: any;
  responseStatus: string = "";
  status: boolean;

  constructor(
    private api: ApiService,
    private router: Router,
    private moduleser: ModuleService,
    private title: Title,
    private meta: Meta,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.title.setTitle("MacTec IT Solutions");
    this.meta.updateTag({ name: "description", content: "We are global Smart Employee Services (SeS) provider with state-of-the-art technology and able human resources. Our spectrum of services branded as Smart" });
    this.meta.updateTag({ name: "keywords", content: "MacTec, Mac Tec, courses, elearning, platform, tool online, test platform" });

    this.route.data.subscribe(
      (data: Data) => {

        this.services = data.serviceData
      }
    );

  }
  consecMethod() {
    return new Promise((resolve, reject) => {
      this.router.navigate(["/"]);
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
}
