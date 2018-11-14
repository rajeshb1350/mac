import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-development',
  templateUrl: './app-development.component.html',
  styleUrls: ['./app-development.component.less']
})
export class AppDevelopmentComponent implements OnInit {
  content = [
    {
      heading: 'Application Development & E-Commerce',
      subheading: 'Uberization of workforce and Connecting the world through technology',
      content: 'MacTec provides agile, cost effective design & development support services to our client’s product needs. Our services enable complex solutions in product development. ',
      content1: 'We have a unique blend of creative and technical skills and many years of product development and product development life cycle management expertise. We thrive on technically challenging projects. Our team specializes in finding elegant solutions to difficult problems and also provide the insight, tools, and expertise to bring their ambitions to market. ',
      content2: 'Our broad range of services provides clients with everything necessary for effective product development. We aim to produce work that exceeds our client’s expectations .Our expert team of UI designers / developers, Software developers, QA testers work on a broad range of projects, including Retail, Manufacturing, Pharmaceuticals, and Education and Entertainment sectors. ',
      content3: 'MacTec believes in product innovation that redefines user experience and transforms the way we are oriented with familiarity of certain services. By leveraging cutting edge technology and innovative approach, MacTec has been constantly pushing the boundaries to change and enhance ‘User Experience’. Our differentiation lies in having a pool of product development expertise and process excellence. We offer a range of services from technical consultancy to running projects and to product development partnership, taking full responsibility for certain parts of the customer’s portfolio and/or product development processes.',
      // secheading: 'Engage a Smart Employee in Any Domain',
      // seccontent: 'Just for Only $ 999 - $ 2999 per month or $ 9 - $ 18 per hour',
  
   
      type: 'page',
      link: 'appProducts',
      imagepath: '/assets/images/banner/slide-7.png'
    },
    {
      heading: 'E-Commerce',
    //  subheading: 'Reliable Solutions for all your Finance & Accounting Offshoring',
      content: 'MacTec is an expert in the evolving ITO marketplace. By using our proprietary methodology and knowledge base, we can develop and tailor your IT outsourcing strategy. ',
      content1: 'We are a specialized application development company rendering qualitative apps development solutions to enterprises across the globe. We have proven expertise in apps development that ensures value-added services to your mobile operations. Connecting the optimum potential of the complex platforms, our developers engage utilize top notch development tools to explore unlimited product development possibilities. ',
      content2: 'At MacTec, we have a technically-sound team of Android experts that has best-in-class skills and proven expertise in mobile application development by using the Android platform. Our programmers are dedicatedly engrossed in developing highly robust mobile applications and porting to distinct platforms. ',
     // secheading: 'Engage Finance & Accounting Resources',
    //  seccontent: 'Just for Only $ 999 - $ 2999 per month or $ 6 - $ 18 per hour',
   
      type: 'page',
      link: 'finance-accounts',
      imagepath: '/assets/images/banner/slide-5.png'
    },
    {
      heading: 'Products we developed to our B2B & B2C clients',
     // subheading: 'Cutting edge technology solutions and workforce for your business needs.',
      content: 'At MacTec we can deliver fully integrated solutions across all major platforms. We work alongside with you in the analysis and design phases recommending the right solutions to deliver results for our and their client’s needs.',
      content1: 'Our team of experts with varied wealth of experience have extensive experience in UI/UX design, development and testing. We know how to build successful B2B and B2C solutions for Education, Hospitality, Manufacturing, Pharmaceutical and Entertainment segments. We have experience working with successful mid and large sized successful companies/Institutions across many sectors for years.',
      // secheading: 'Engage Finance & Accounting Resources',
      // seccontent: 'Just for Only $ 999 - $ 2999 per month or $ 6 - $ 18 per hour',
   
      type: 'page',
      link: 'technoconsult',
      imagepath: '/assets/images/banner/slide-1.png'
    },
    {
      heading: 'Artificial Intelligence',
     // subheading: 'A platform that gives the touch of machine learning and a gate way for self-assessment, continues skilling and upskilling.',
     content: 'The next leap of technology innovation is already here and it’s not Humans, its Bots. Or we call it as embedded machine learning language or Artificial Intelligence. Of course, we ourselves wanted to adapt this change in very early stage so we can serve the industries with artificial intelligence and meet their business scenarios by automating human patterns into machine learning patterns. This is certainly going to bring a big impact and eventually going to address issues like big man power working for longer period to meet one business scenario. ',
     content1: 'To start with, we created an automated examiner sitting virtually and examining the candidates who are getting assessed through our Learning assessment module within our product Skill Passport along with Aadhar biometric authentication. To learn more please visit our product website. ',
     content2: 'We are even serving more of AI into the cloud and DevOps space where we use scripts rather humans to automate cloud operations. ',
     content3: 'Then take more advantages of AI and bring more automated features into our products wherein the scripts work with the voice command and operates the application as a human does with their hands. ',
     // secheading: 'We allow our clients to test the required skills through Skill Passport',

      type: 'web',
   //   link: 'https://www.skillpassport.in',
      imagepath: '/assets/images/banner/slide-4.png'
    },
    {
      heading: 'Our Strategy',
     // subheading: 'A platform that gives the touch of machine learning and a gate way for self-assessment, continues skilling and upskilling.',
    //  content: 'Our Smart Employee data factory is the resultant out come of skill passport. We diagnose, design and deliver the necessary skill for the workforce that we intend to engage for our client needs. Skill Passport is an intuitive digital platform that leverages result driven assessment and sustainable learning at every stage of employment.',
     // secheading: 'We allow our clients to test the required skills through Skill Passport',
      feature: [
        'Competent and motivated team',
        'End-to-End execution and ownership',
        'Robust Process Excellence model',
        'Recurring service support inducing repeatability and reliability '
      ],
      type: 'web',
   //   link: 'https://www.skillpassport.in',
      imagepath: '/assets/images/banner/slide-4.png'
    },
    {
      heading: 'How does it help you?',
     // subheading: 'A platform that gives the touch of machine learning and a gate way for self-assessment, continues skilling and upskilling.',
    //  content: 'Our Smart Employee data factory is the resultant out come of skill passport. We diagnose, design and deliver the necessary skill for the workforce that we intend to engage for our client needs. Skill Passport is an intuitive digital platform that leverages result driven assessment and sustainable learning at every stage of employment.',
     // secheading: 'We allow our clients to test the required skills through Skill Passport',
      feature: [
        'Efficient data visualisation',
        'Business intelligence through data',
        'Real time tracking of KPIs',
        'Health and hygiene',
        'Real time data analytics',
        'Improves controllership '
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
