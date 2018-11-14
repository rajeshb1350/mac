import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider3',
  templateUrl: './slider3.component.html',
  styleUrls: ['./slider3.component.less']
})
export class Slider3Component implements OnInit {

  constructor() { }

  sliderContent = [
      {
        heading: 'Smart Business Solutions SBuS<sup>®</sup>',
        subheading: 'Brand for uberization of workforce and Connecting the world through technology',
        content: 'Smart Business Solutions as service is a pivotal expertise service delivery and niche consulting service under the umbrella that caters Smart Employee Services and Smart Technology Products.<br><br>SBuS as service is a gamut strategic operation that provides smart workforce services to unleash the territorial boundaries and scarcity in talent. Our talent bank in leading service portfolios and skillset supports client’s operational and technological requirements.<br><br>“Uberization” of the workforce provides the flexibility many skilled workforces seek and helps lessen the cost of reskilling employees in an industry where technology is rapidly changing.',
        secheading: 'Engage a Smart Employee in Any Domain',
        seccontent: 'Hire for Only $ 999 - $ 2999 per month or $ 9 - $ 18 per hour',
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
        feature: [
          'Emphasis on Operational Excellence',
          'Choose and Employ Model',
          'Pre-scanned and Tested Resources',
          'New age digitized practices to enable rapid growth',
          'Best in class processes for accelerated success'
        ],
        type: 'page',
        link: 'allProducts',
        imagepath: '/assets/images/banner/slide-2.png',
        empSizeText:'Uberize IT & ITES Workforce Engage for Only $ 999 - $ 2999 per month or $ 6 - $ 18 per hour'
      },
      {
        heading: 'Finance and Accounting CoE Solutions',
        subheading: 'Reliable Solutions for all your Finance & Accounting Offshoring',
        content: 'Begun the ideology of offshoring the operations with finance and accounting, with rich experience in end to end process of finance and accounting we aim at managing the vertical through our robust operations. We have certified and qualified accounts for each process and function in finance and accounting.',
        secheading: 'Engage Finance & Accounting Resources',
        seccontent: 'Hire for Only $ 999 - $ 2999 per month or $ 6 - $ 18 per hour',
        feature: [
          'Choose and Employ',
          'Highly skilled employee repository',
          'Efficient F & A Operations',
          'Governance Framework',
          'Cross Functional and End to End Expertise'
        ],
        type: 'page',
        link: 'finance-accounts',
        imagepath: '/assets/images/banner/slide-5.png',
        empSizeText:'Uberize IT & ITES Workforce Engage for Only $ 999 - $ 2999 per month or $ 6 - $ 18 per hour'
      },
      {
        heading: 'IT and ITES CoE Solutions',
        subheading: 'Cutting edge technology solutions and workforce for your business needs.',
        content: 'Our foundation of efficiency is robust and apprised state of technological solutions that brings quantifiable value to our customers. We have more than 500+ highly skilled and certified resources supporting our IT and ITES CoE.  Ready to deploy for all your technology development support and resource engagement.',
        secheading: 'Engage Finance & Accounting Resources',
        seccontent: 'Hire for Only $ 999 - $ 2999 per month or $ 6 - $ 18 per hour',
        feature: [
          'Skilled to Work and Engaged to Deliver',
          'Certified and Experience Resources',
          'Work in modern cloud environment',
          'Secured access controls',
          'Data privacy and integrity established'
        ],
        type: 'page',
        link: 'technoconsult',
        imagepath: '/assets/images/banner/slide-1.png',
        empSizeText:'Uberize IT & ITES Workforce Engage for Only $ 999 - $ 2999 per month or $ 6 - $ 18 per hour'
      },
      {
        heading: 'Skill Passport',
        subheading: 'A platform that gives the touch of machine learning and a gate way for self-assessment, continues skilling and upskilling.',
        content: 'Skill Passport ® is a product of MacTec, which is the backbone of highly skilled workforce data bank. Since the Uberization of Workforce has evolved, we started identifying the need for skilling to meet the requirements of our global clients. Therefore, we have come up with an open source tool that helps the prospects to assess, coach and examine the skills as per the market.<br><br> Our Smart Employee data factory is the resultant out come of skill passport. We diagnose, design and deliver the necessary skill for the workforce that we intend to engage for our client needs. Skill Passport is an intuitive digital platform that leverages result driven assessment and sustainable learning at every stage of employment.',
        secheading: 'We allow our clients to test the required skills through Skill Passport',
        feature: [
          'Pre-assessments',
          'Learning Intervention',
          'Post-assessments',
          'Client specific skills',
          'Function specific skills',
          'General employable skills '
        ],
        type: 'web',
        link: 'https://www.skillpassport.in',
        imagepath: '/assets/images/banner/slide-4.png',
        empSizeText:'Early on we took the bold step of identifying the resources in open market to meet our client requirement, assess and evaluate the necessary skills through Skill Passport ® - setting a new industry standard in choosing employee and helping clients to pick right man at the right place.'
      },
      {
        heading: 'Smart Business Solutions Product.',
        content: 'Designing the future of work, SBuS as a Product helps to run your business with its 50+ integrated applications. SBuS provides anytime, anywhere access to your business processes. You can manage, customize and operate your operations easily. Integration of multiple applications coordinates with different teams and processes to work together to achieve operational excellence.',
        feature: [    
          'Integrated individual apps',
          'Cloud hoisting',
          'Simplified to upgrade',
          'Cost effective ',
          'Quality and Six Sigma Compliant ',
          'Dynamic BI and info access'
        ],
        type: 'page',
        link: 'allProducts',
        imagepath: '/assets/images/banner/slide-3.png',
        empSizeText:'Uberize IT & ITES Workforce Engage for Only $ 999 - $ 2999 per month or $ 6 - $ 18 per hour'
      },
    ];

  ngOnInit() {
  }

}
