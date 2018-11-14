import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology-consulting-service',
  templateUrl: './technology-consulting-service.component.html',
  styleUrls: ['./technology-consulting-service.component.less']
})
export class TechnologyConsultingServiceComponent implements OnInit {
  content = [
    {
      heading: 'Technology Service',
      content: 'Our technology consulting service not only allows our customers implement strategies to marginalize cost but also add value and benefits from world class service levels and reliability that might otherwise be inaccessible. Our IT offshoring services are primarily on application development support, UI/UX design and software testing along with the networking and system administration and maintenance (Dev Ops). ',
      content1: 'MacTec is an expert in the evolving ITO marketplace. By using our proprietary methodology and knowledge base, we can develop and tailor your IT outsourcing strategy. ',
      content2: 'All our employees are office-based to ensure that the quality of communication and output is maintained at a high level. We have our own leased line to guarantee uninterrupted and high-speed internet connection with fiber optic cable as the backbone network.  ',


      type: 'page',
      link: 'appProducts',
      imagepath: '/assets/images/banner/slide-7.png'
    },


  ];
  servOffer = [
    {
      heading: 'SBuS Service Offerings',
      modules: 'Enterprise Solutions',
      seclist: [
        {
          header: 'Enterprise Solutions',
          feature: [
            'Implementation',
            'Customization',
            'Upgrades',
            'Maintain & Support',
          ],
        },
        {
          header: 'Advanced Analytics',
          feature: [
            'Data Management',
            'Data Integration',
            'Data Analysis',
            'Predictive Analytics',
            'Real-time Analystics',
          ],
        },
        {
          header: 'Digital Transformation',
          feature: [
            'User Experience',
            'Mobility',
            'CMS',
            'Digital Marketing',
            'Application Development ',
          ],
        },
        {
          header: 'Cloud Services',
          feature: [
            'SaaS',
            'PaaS',
            'IaaS/ Cloud Migration',
            'iPaaS',
          ],
        },
        {
          header: 'IT Support',
          feature: [
            'Application Support',
            'Infrastructure Support',
            'Infrastructure & Network Monitoring',
            'Service Desk ',
          ],
        },
        {
          header: 'Automation',
          feature: [
            'RPA',
            'DevOps',
            'Chatbots',
            'Digital Assistant ',
          ],
        },
        {
          header: 'Emerging',
          feature: [
            'IoT',
            'AI',
            'NLP',
            'Cognitive',
            'Blockchain',
          ],
        },

      ],

      type: 'page',
      link: 'appProducts',
      imagepath: '/assets/images/banner/slide-7.png'
    },


  ];


  DigitalTrans = [
    {
      heading: 'Our Digital Transformation Offerings',

      seclist: [
        {
          header: 'User Experience',
          feature: [
            'Due Diligence',
            'Wireframe/templating Services',
            'Click Through Web Demos',
            'HTML Design Services',
            'SPA & Responsive Design',
          ],
        },
        {
          header: 'Application Development',
          feature: [
            'Web & Windows Applications',
            'eCommerce & eLearning Portal',
            'RESTful Services',
            'Database Development',
            'Integration with other products',
            'Application Migration',
          ],
        },
        {
          header: 'Digital Marketing',
          feature: [
            'Social Network Marketing',
            'SEO',
            'Market Research',
            'Google Adwords',
          ],
        },
        {
          header: 'Mobility',
          feature: [
            'Native Mobile Application Development for iOS, Android & Windows',
            'Hybrid Mobile Application Development',
          ],
        },
        {
          header: 'CMS',
          feature: [
            'Portal Development',
            'COTS products customization',
          ],
        },

      ],

      type: 'page',
      link: 'appProducts',
      imagepath: '/assets/images/banner/slide-7.png'
    },


  ];



  cldserv = [
    {
      heading: 'Our Cloud Services',

      seclist: [
        {
          header: 'Advisory Services',
          feature: [
            ' Due diligence',
            'Cloud Roadmap Services',
            'AS IS & TO BE Architecture services',
          ],
        },
        {
          header: 'Subscription Management',
          feature: [
            'Procurement Services',
            'Subscription Planning Services',
            'Service Provisioning',
            'Billing Services',
          ],
        },
        {
          header: 'Migration',
          feature: [
            'On premise Infra Migration to cloud(Iaas)',
            'On premise application migration services to cloud(PaaS)',
            'On premise Database migration services to cloud Paas/Iaas',
            'Active Directory on cloud',
          ],
        },
        {
          header: 'Development',
          feature: [
            'Web & Mobile Development services using PaaS',
            'Microservices Development',
            'Hybrid Integration Services',
            'IoT services',
            'Big Data & Analytics Services',
          ],
        },
        {
          header: 'DevOps',
          feature: [
            'DevOps Advisory Services',
            'DevOps Management Services',
            'DevOps Implementation Services',
            'DevOps Integration Services',
          ],
        },
        {
          header: 'Management and Support',
          feature: [
            'Application Support Services',
            'Infrastructure Support Services',
            'Cloud Monitoring Services',
            'Database & VMs Backup Services',
          ],
        },
   
      ],

      type: 'page',
      link: 'appProducts',
      imagepath: '/assets/images/banner/slide-7.png'
    },


  ];






  ITSupport = [
    {
      heading: 'Our IT Support Offerings',

      seclist: [
        {
          header: 'Application Support',
          feature: [
            'Analysis & Troubleshooting',
            'Change Management',
            'Release Management',
            'Database Support',
            'Innovation & Transformation',
          ],
        },
        {
          header: 'Infrastructure Support',
          feature: [
            'Environment Readiness',
            'Environment Upgrades',
            'Software Installation',
            'Desktop Management',
            'Troubleshooting',
            'Patch Management',
            'Backups & Recovery',
          ],
        },
        {
          header: 'Network Monitoring',
          feature: [
            'Application Server Monitoring',
            'Database Server Monitoring',
            'Log Analysis',
            'Network Monitoring',
          ],
        },
        {
          header: 'Service Desk',
          feature: [
            'Service Desk Setup',
            'Incident Management',
            '24 x 7 Support',
            'SLA Management',
            'Knowledge Management',
          ],
        },



      ],

      type: 'page',
      link: 'appProducts',
      imagepath: '/assets/images/banner/slide-7.png'
    },


  ];


  AutoSupport = [
    {
      heading: 'Our Automation Offerings',

      seclist: [
        {
          header: 'RPA',
          feature: [
            'Due diligence & Recommendations',
            'Process Automation Implementation',
            'Support Services',
          ],
        },
        {
          header: 'DevOps',
          feature: [
            'Build Automation',
            'Test Automation',
            'Infra Provisioning Automation',
            // 'Release Automation',
          ],
        },
        {
          header: 'Chatbots',
          feature: [
            'Chatbot Integration with Internal/ External applications',
            'Additional Services include AI building using NLP, Machine Learning',
          ],
        },
        {
          header: 'Digital Assistance',
          feature: [
            'Due diligence & platform recommendations',
            'Development of DA for Mobiles and Web',
          ],
        },
        {
          header: 'Advisory Service',
          feature: [
            'Discover, Remediate, Provision and operationalize  along with ability to evolve through a process of learning',
          ],
        },




      ],

      type: 'page',
      link: 'appProducts',
      imagepath: '/assets/images/banner/slide-7.png'
    },


  ];



  EmergingSer = [
    {
      heading: 'Our Emerging Technology Offerings ',

      seclist: [
        {
          header: 'IoT',
          feature: [
            'Platform Services, Managed Services, IoT Operations',
            'IoT devices remotely connected, controlled & Monitored',
          ],
        },
        {
          header: 'AI',
          feature: [
            'Deep Learning, Speech Recognition, Decision Making',
            'NLP, RPA, ML, Chatbots',
            'Learn, Understand, Reason, Plan, Act',
          ],
        },
        {
          header: 'NLP',
          feature: [
            'Connected Homes',
            'Human Augmentation',
          ],
        },
        {
          header: 'Cognitive',
          feature: [
            'Automate, Augment and Assist autonomously or according to set of instructions ',
          ],
        },
        {
          header: 'Blockchain',
          feature: [
            'Compliance & Governance Model',
            'Advisory service from available Ecosystem to support Organization',
          ],
        },




      ],

      type: 'page',
      link: 'appProducts',
      imagepath: '/assets/images/banner/slide-7.png'
    },


  ];

  pmoOffer = [
    {
      heading: 'Our Emerging Technology Offerings ',

      seclist: [
        {
          header: 'LEAN and AGILE Coaching',
          img: 'lean',
          feature: [
            'Enable organizational adoption, team engagements, individual acceptance',
            'Effectively manage in Lean and Agile culture',
          ],
        },
        {
          header: 'Organizational Change Management (OCM)',
          img: 'ocm',
          feature: [
            'Help assess the need, know the impact',
            'Deliver customized OCM plan that meet the needs of your organization',
          ],
        },
        {
          header: 'Methodologies and Processes ',
          img: 'method',
          feature: [
            'Our custom-built project processes optimize performance across your projects.',
            'Building specific methodologies from project conceptualization to commercial operation',
          ],
        },
        {
          header: 'Project and Program Management (PgM)',
          img: 'project',
          feature: [
            'Program integration through sequencing right set of projects, resources, and monitor and control program change impact management',
            'Rolling up the right initiative to the portfolio level',
          ],
        },
        {
          header: 'Organization Competence, strategy and governance',
          img: 'org',
          feature: [
            'Predict and manage investments by maintaining a robust pipeline of innovation and growth initiatives, through governance model',
            'Ensures flow of information to enable timely decision making',
          ],
        },
        {
          header: 'On-Demand Services',
          img: 'demand',
          feature: [
            'Leverage our Global PMO Pool worked in Global Regions (EMEA, APAC, LAG, NA)',
            'Operationalize & administer your PMO, PgM, PM activities by partnering with your teams to deliver on your objectives',
          ],
        },




      ],

      type: 'page',
      link: 'appProducts',
      imagepath: '/assets/images/banner/slide-7.png'
    },


  ];


  constructor() { }

  ngOnInit() {
  }

}
