import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.less']
})
export class CoursesCardComponent implements OnInit {

  carddata = [
    {
      heading: "Finance &amp; Accounting",
      content: "MacTec allows you to focus on your Core Business, while we assure Cost Effective Offshore Support – Optimum Resource Utilization – Best in Class Delivery Model – Benchmarked Accounting Processes.",
      img: "/assets/images/coursesImages/accounting.jpg",
      link: "/sbus-service/finance-accounting",
      readLink:'Learn more',
      type:'page'
    },
    {
      heading: "Technology Services",
      content: "Make your business an “Experience Business” Personalization has been the buzzword for years yet failed to make significant impact on your audience.",
      img: "/assets/images/coursesImages/web_t3.jpg",
      link: "/sbus-service/technology-services",
      readLink:'Learn more',
      type:'page'
    },
    {
      heading: "Operation Excellence",
      content: "Business process re-engineering (BPR) is the analysis and redesign of workflows within and between enterprice in order to optimize end-to-end process and automate non-value-added tasks.",
      img: "/assets/images/coursesImages/software_t4.jpg",
      link: "/sbus-service/operation-excellence",
      readLink:'Learn more',
      type:'page'
    },
    {
      heading: "Skill Passport",
      content: "Skill Passport<sup>®</sup> is the gateway to a career that every student aspires for. It’s an intuitive digital platform that leverages result driven assessment and sustainable learning.",
      img: "/assets/images/coursesImages/sales_t5.jpg",
      link: "https://www.skillpassport.in/",
      redirect:'/assets/images/banner/external-link.svg',
      readLink:'Learn more',
      type:'web'
    },
    {
      heading: "SBuS Product",
      content: "Digitise your business processes with fully integrated stack of operations and applications – Smart Business Solutions.",
      img: "/assets/images/coursesImages/admin_t2.jpg",
      link: "/allProducts",
      readLink:'Learn more',
      type:'page'
    },
    {
      heading: "SPpL",
      content: "Coming Soon...",
      img: "/assets/images/coursesImages/speople.png",
      type:'none'
    }
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
