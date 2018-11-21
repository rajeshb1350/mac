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
export class FeaturesComponent implements OnInit {
  slotBookData: any;
  servicesdata: any;

  testmonialdata =
    {
      id: 'testmonial1',
      height: 'small',
      listdata:
        [
          {
            heading: 'AM PM Electronics',
            content: `Providing a differentiated
      customer experience has been a key driver for us. We continuously keep upgrading our systems to leverage
      the latest technologies, and MacTec has been our trusted partner in this digital transformation journey.
      SOpX (Smart Operations) developed by MacTec helped us redefine customer experience; achieve business
      agility, enabling higher operational efficiencies and distinct competitive advantage.`
          },
          {
            heading: 'APSSDC (Skill Development Corporation)',
            content: `We express our gratitude
      for the marvellous services and support we got from MacTec. Their L&D expertise helped us bridge the
      gap between academic career and professional career for the students through impeccable skill development
      programs. The program design and delivery has been quite consistent and really helpful for our audience.`
          },
          {
            heading: 'DLF',
            content: `Employee development
      is an essential growth factor for us and that’s where MacTec’s contribution helped us a lot. Their expertise
      in Learning & Development is well appreciated across the bands. The program was well received by the
      management team and they got to learn some critical nuances with regards to behavioural aspects.`
          },
          {
            heading: 'Sony Electronics',
            content: `MacTec helped us streamline
      our HR and Operations. The Operational Excellence model was quite a game changer for us understanding
      our erstwhile process. They accurately identified the pain areas and put together a robust yet simple
      process in place to gain maximum benefits. We were dealing with massive challenges with our process scattered
      around and no effective ways to gain control over it. MacTec helped is in the greatest possible way.`
          }
        ]
    };


  constructor(
    private title: Title,
    private meta: Meta,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.title.setTitle("MacTec IT Solutions");
    this.meta.updateTag({ name: "description", content: "We are global Smart Employee Services (SeS) provider with state-of-the-art technology and able human resources. Our spectrum of services branded as Smart" });
    this.meta.updateTag({ name: "keywords", content: "MacTec, Mac Tec, courses, elearning, platform, tool online, test platform" });
  }
}
