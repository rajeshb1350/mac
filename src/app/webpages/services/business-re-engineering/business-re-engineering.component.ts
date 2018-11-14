import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-re-engineering',
  templateUrl: './business-re-engineering.component.html',
  styleUrls: ['./business-re-engineering.component.less']
})
export class BusinessReEngineeringComponent implements OnInit {
  content = [
    {
      heading: 'Business RE-Engineering',
      subheading: 'Uberization of workforce and Connecting the world through technology',
      content: 'Business process re-engineering (BPR) is the analysis and redesign of workflows within and between enterprises in order to optimize end-to-end processes and automate non-value-added tasks. Our team of experts bring core competency in the areas of Operational Excellence and Business Transformation through their core business insight and experience. Our methodology focuses on radical redesign and reorganization of an enterprise to lower costs and increase quality of service and that information technology is the key enabler for that radical change.',
       
      type: 'page',
      link: 'appProducts',
      imagepath: '/assets/images/banner/slide-7.png'
    },
    {
      heading: 'Our Key Methodology for Business RE-Engineering encompasses 7 key philosophies',

      feature: [
        'Organize around outcomes, not tasks',
        'Identify all the processes in an organization and prioritize them in order of redesign urgency.',
        'Integrate information processing work into the real work that produces the information.',
        'Treat geographically dispersed resources as though they were centralized.',
        'Link parallel activities in the workflow instead of just integrating their results.',
        'Put the decision point where the work is performed, and build control into the process.',
        'Capture information once and at the source.',
      ],
      type: 'page',
      link: 'finance-accounts',
      imagepath: '/assets/images/banner/slide-5.png'
    },
    {
      heading: 'Some projects that we managed for clients',
      feature: [
        'Improving Employee Output',
        'Reduction of activity cycle time',
        'Revenue optimization',
        'Improve sales volume',
        'Streamline Payroll function',
        'Set-up Asset Management process',
        'Enhance manpower utilization',
      ],



      
   
      type: 'page',
      link: 'technoconsult',
      imagepath: '/assets/images/banner/slide-1.png'
    },
    {
      heading: 'Our 5 key focus areas',
      feature: [
        'Strategic Alignment',
        'Project Management',
        'Process Architecture',
        'Process Excellence',
        'Change Management '
      ],
      type: 'web',
   //   link: 'https://www.skillpassport.in',
      imagepath: '/assets/images/banner/slide-4.png'
    },
    {
      heading: 'Process excellence foundations',
    feature: [
        '5S for Structure',
        'Kaizen for Overview & Insight',
        'Lean for Stability',
        '6 Sigma for Capability enhancement',
        'DFSS for robust and consistent operations and delivery '
      ],
      type: 'web',
   //   link: 'https://www.skillpassport.in',
      imagepath: '/assets/images/banner/slide-4.png'
    },
    {
      heading: 'How does it help you?',
      feature: [
        'Efficient data visualisation',
        'Business intelligence through data',
        'Real time tracking of KPIs',
        'Control on process health and hygiene',
        'Real time data analytics',
        'Improves controllership'
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
