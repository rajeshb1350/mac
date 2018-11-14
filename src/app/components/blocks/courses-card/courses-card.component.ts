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
      content: "We leverage our deep F & A functional expertise through Operational Excellence and efficient delivery model.",
      img: "/assets/images/coursesImages/accounting.jpg",
      link: "/finance-accounts",
      readLink:'Learn more',
      type:'page'
    },
    {
      heading: "Information Technology",
      content: "Our technology consulting service not only allows our customers implement strategies...",
      img: "/assets/images/coursesImages/web_t3.jpg",
      link: "/technoconsult",
      readLink:'Learn more',
      type:'page'
    },
    {
      heading: "Process Excellence",
      content: "Our technical expertise lies in state...",
      img: "/assets/images/coursesImages/software_t4.jpg",
      link: "/process-excellence",
      readLink:'Learn more',
      type:'page'
    },
    {
      heading: "Skill Passport",
      content: " Skill Passport ® is a product of MacTec, which is the backbone...  ",
      img: "/assets/images/coursesImages/sales_t5.jpg",
      link: "https://www.skillpassport.in/",
      redirect:'/assets/images/banner/external-link.svg',
      readLink:'Learn more',
      type:'web'
    },
    {
      heading: "SBuS Product",
      content: "Collections of best SBuS Products",
      img: "/assets/images/coursesImages/admin_t2.jpg",
      link: "/allProducts",
      readLink:'Learn more',
      type:'page'
    },
    {
      heading: "SPpl",
      content: "Coming Soon....",
      img: "/assets/images/coursesImages/technology_services.jpg",
      readLink:'Learn more',
      type:'page'
    }
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
