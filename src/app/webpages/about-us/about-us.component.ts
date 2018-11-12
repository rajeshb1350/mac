import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.less']
})
export class AboutUsComponent implements OnInit {

  teamdata = [
    {
      name: 'Ravi Krovvidi',
      desg: 'Director - Strategic Planning',
      content: `Ravi is at the helm of Strategic Planning of MacTec. With an astounding career spanning over 20 years in the areas
      of Finance & Accounting and Project Management, he is a Chartered Accountant with a varied industry experience
      with global Pharma, IT and Service companies. He is a Subject Matter Expert on Financial Planning & Analysis
      process equipped with wide and extensive insight on F&A domain coupled with business acumen on Service Delivery
      and Process Transformation. Ravi is instrumental in building MacTec IT Solutions as a brand that envisions partnering
      for success.`,
      img: '/assets/images/icons/avatar1.png'
    },
    {
      name: 'Sumanthi Parakala',
      desg: 'Director',
      content: `Sumanthi has been associated with MacTec IT Solutions since the inception. She is the anchor of the ship. Having
      done everything with regards to HR operations, Recruitment, Products, Strategy and day-to-day operations, Sumanthi
      is instrumental in taking MacTec to a stature where the organisation is today, through her sheer competency to
      execute and accomplish. Sumanthi role entails Business Development, Product Development, Technical consultation
      and strategy. She holds a Masters Degree from Scotland in Information Technology with major specialization in
      Computer Aided Engineering.`,
      img: '/assets/images/icons/avatar2.png'
      
    },
    {
      name: 'Rajeev Dubey',
      desg: 'Chief Architect',
      content: `Rajeev is a certified expert in Adobe AEM with a strong experience in varied technological platforms for over
      17 years. As the Chief Architect, Rajeev is the key member of MacTec being the design head for the state-of-the-art
      products Order Ezi®, Campus Champs®, City Blaze® and SmartOpx®.Rajeev is chief contributor in expansion of the
      technology portfolio of MacTec for the client servicing businesses in the areas of product design and development.
      Being the lead, he is the mentor and the guide of the development team in MacTec.</p>`,
      img: '/assets/images/icons/avatar3.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
