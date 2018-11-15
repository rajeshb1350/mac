import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-governence',
  templateUrl: './e-governence.component.html',
  styleUrls: ['./e-governence.component.less']
})
export class EGovernenceComponent implements OnInit {
  content = [
    {
      heading: 'Real Time Governance',
      subheading: 'Uberization of workforce and Connecting the world through technology',
      content: 'In this evolving era of information and data, the privilege no longer lies in data repository and future leverage. It’s imperative to have a system which engages dynamic function for real time usage. ',
      content1: 'Our technology solutions offer seamless functionality and control for Real Time Governance (RTG) where the CXOs of an organization gain an absolute control on processes and data inflow. The system also allows the stakeholders to monitor every aspect of workflow and monitor those who certify them. Our indigenous technology solutions not only automates the granular aspect of organizational process but also brings the critical aspect of Controllership and Accountability into the process DNA by creating possibilities to govern and scrutinize. Build with a firm belief on ‘Zero Surprise Philosophy’, our RTG system is already designed and operational in 2 key products – SBuS ERP and Skill Passport.',
      secheading: 'Engage a Smart Employee in Any Domain',
      seccontent: 'Just for Only $ 999 - $ 2999 per month or $ 9 - $ 18 per hour',
      seclist: [
        {
        heading: 'Reduce your cost',
        content: 'Save 70% per employee cost, improve your core business.'
        },
        {
        heading: 'Operation Excellence',
        content: 'Benchmark excellence engage skilled talent across.'
        },
        {
        heading: 'Increase your profit margins',
        content: 'Focus on business development, no employee over heads, no operational challenges.'
        }
      ],
   
      type: 'page',
      link: 'appProducts',
      imagepath: '/assets/images/banner/slide-7.png'
    },
    {
      heading: 'How does it help you?',
    //  subheading: 'Reliable Solutions for all your Finance & Accounting Offshoring',
     // content: 'Begun the ideology of offshoring the operations with finance and accounting, with rich experience in end to end process of finance and accounting we aim at managing the vertical through our robust operations. We have certified and qualified accounts for each process and function in finance and accounting.',
     // secheading: 'Engage Finance & Accounting Resources',
    //  seccontent: 'Just for Only $ 999 - $ 2999 per month or $ 6 - $ 18 per hour',
      feature: [
        'Dynamic data sychronisation',
        'Real time data management',
        'Effective leverage of information',
        'Zero Surprise operations',
        'Improves controllership',
        'Builds accountability',
      ],
      type: 'page',
      link: 'finance-accounts',
      imagepath: '/assets/images/banner/slide-5.png'
    },
    {
      heading: 'Digitizaton of offices',
      subheading: 'Cutting edge technology solutions and workforce for your business needs.',
      content: 'The essence of a secured data management process is the ability to convert massive chunk of data into practical and portable size and more importantly ability to access it regardless of geographical location. In this era of technology, Digitization is a critical aspect of operational excellence that plays a significant role in business transformation. Our Office Digitization product harps on the need to eliminate manual process and replace them with automation which not only reduces the cycle time but also improves accuracy which is a key for any robust operations. Our digitization solution is not just about cliched ‘Paperless office’ but its beyond that. The solution focuses on process transformation and creating business impact.',
      content1: 'Our RiteERP product offers digital solution for all SMEs, colleges & institutes. This is our complete suite where you get complete campus digitized, and also get the centralized digitally signed document repository.',
      secheading: 'Engage Finance & Accounting Resources',
      seccontent: 'Just for Only $ 999 - $ 2999 per month or $ 6 - $ 18 per hour',
   
      type: 'page',
      link: 'technoconsult',
      imagepath: '/assets/images/banner/slide-1.png'
    },
    {
      heading: 'How does it help you?',
     // subheading: 'A platform that gives the touch of machine learning and a gate way for self-assessment, continues skilling and upskilling.',
    //  content: 'Our Smart Employee data factory is the resultant out come of skill passport. We diagnose, design and deliver the necessary skill for the workforce that we intend to engage for our client needs. Skill Passport is an intuitive digital platform that leverages result driven assessment and sustainable learning at every stage of employment.',
     // secheading: 'We allow our clients to test the required skills through Skill Passport',
      feature: [
        'Process Automation',
        'Business Transformation',
        'Cost Benefit',
       'Business impact throught cycle time improvement',
        'Significant improvement in accuracy',
       'Elimination of recurring cost',
        'Anytime-Anywhere access',
        'Enhanced Controllership and Accountability '
      ],
      type: 'web',
   //   link: 'https://www.skillpassport.in',
      imagepath: '/assets/images/banner/slide-4.png'
    },
  
  ];
  constructor() { }

  ngOnInit() {
  }

}
