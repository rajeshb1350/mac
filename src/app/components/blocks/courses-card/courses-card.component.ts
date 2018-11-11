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
      content: "We leverage our deep F&amp;A functional expertise through Operational Excellence and efficient delivery model.",
      img: "/assets/images/coursesImages/testing.png",
      link: "/finance-accounts"
    },
    {
      heading: "SBuS Products",
      content: "Collections of best SBuS Products",
      img: "/assets/images/coursesImages/testing.png",
      link: "/allProducts"
    },
    {
      heading: "Product Development",
      content: "Our technical expertise lies in state",
      img: "/assets/images/coursesImages/testing.png",
      link: "/appdevelopment"
    },
    {
      heading: "Business Process Re-engineering",
      content: " We’re a team of business process development and engineering ",
      img: "/assets/images/coursesImages/testing.png",
      link: "/technoconsult"
    },
    {
      heading: "Technology Support",
      content: "Team of experienced ...",
      img: "/assets/images/coursesImages/testing.png",
      link: "/business"
    },
    {
      heading: "SBuS Products",
      content: "Collections of best SBuS Products",
      img: "/assets/images/coursesImages/testing.png",
      link: "/allProducts"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
