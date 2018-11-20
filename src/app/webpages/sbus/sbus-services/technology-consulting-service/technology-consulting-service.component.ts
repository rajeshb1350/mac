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

  techdata = [
    {
      img: 'ma.png',
      heading: 'Marketing Automation',
      content: [
        {
          subheading: 'Experience Business',
          subcontent: 'Marketing Automation Done Right. B2B or B2C, we have supported most ambitious brands in optimizing their marketing Automation investment.',
          icon: 'hand-shake'
        },
        {
          subheading: 'Web Analytics',
          subcontent: 'we are best to decipher the customer journey & uncover actionable items to convert and retain customers ',
          icon: 'analysis'
        },
        {
          subheading: 'Digital Development',
          subcontent: 'With the enormous amount of digital content churned out every nanosecond the competition is fierce to allure the customers constantly.',
          icon: 'feature'

        },
        {
          subheading: 'Customer Engagement',
          subcontent: 'Today’s customer expect you to entertain them individually with uniquely relevant and consistent contents across all the channels.',
          icon: 'support-1'
        },
        {
          subheading: 'Campaign Execution',
          subcontent: 'Providing the right information at the right time to the right customers through the direct mail and keeping that optimized for mobile users as well gives you an edge during the whole campaign process. ',
          icon: 'seo'
        }
      ],
      imagepath: '/assets/images/banner/slide-7.png'
    }, {
      img: 'pendrive.png',
      heading: 'Experience Technology',
      content: [
        {
          subheading: 'Adobe Marketing Cloud Experts',
          subcontent: 'Certified team of experts in particular with Adobe Experience Manager who are expert in delivering rich digital experience having AEM fitted right in the technology stack. Reach us to get the most out of your Adobe Experience Manager deployments.',
          icon: 'cloud'
        },
        {
          subheading: 'Strategy. Creativity UX',
          subcontent: 'Everything we do is about inspiring your customer to have a lasting relationship with your organization. Have our experts to talk to you to make excellent strategy with innovative ideas together.',
          icon: 'ui'
        },
        {
          subheading: 'MEAN & MERN Stack Experts',
          subcontent: 'Well versed consultants on modern web development techniques.',
          icon: 'algorithm'
        },
        {
          subheading: 'JAVA/JEE Experts',
          subcontent: 'Our consultants have vast experience, serving to the industries more than a decade. Get the most out of Micros Services as well as self contained web applications.',
          icon: 'java'
        }
      ],
      imagepath: '/assets/images/banner/slide-7.png'
    }, {
      img: 'mobileUI.png',
      heading: 'Mobile Apps',
      content: [
        {
          subheading: 'Mobile Apps',
          subcontent: 'We help enterprises transform their business process. Using mobile technology we take pride in building the most awesome apps that garner both – users love and value for our clients.',
          icon: 'smartphone'
        },
        {
          subheading: 'Hybrid Apps',
          subcontent: 'Hybrid app development includes the best of both the HTML5 and JavaScript, in a nutshell, a hybrid app is initially developed using JavaScript and HTML5 and then wrapped inside a native container that gives access to the features of a native platform. ',
          icon: 'smartphone-2'
        },
        {
          subheading: 'Native Apps',
          subcontent: 'Native apps are appropriate when you need to provide a complex or highly polished mobile experience. They support advance features like augmented reality, location-based services and third-party device integrations.',
          icon: 'smartphone-1'
        },
        {
          subheading: 'Responsive Designs',
          subcontent: 'HTML5 is the leading technology used for developing front-end mobile app. Ubiquitous and advance features of HTML5 for content delivery with responsive layouts make it the right option to choose for those who need immersive and interactive mobile solutions. ',
          icon: 'responsive'
        }
      ],
      imagepath: '/assets/images/banner/slide-7.png'
    }, {
      img: 'eb.png',
      heading: 'Experience Business',
      content: [
        {
          subheading: 'Experience Business',
          subcontent: 'Think beyond Personalization. Make your business an “Experience Business” Personalization has been the buzzword for years yet failed to make significant impact on your audience. Delivering consistent experiences across multiple channels is key to converting your visitors into customers. ',
          icon: 'profit'
        },
        {
          subheading: 'Content Management Services',
          subcontent: 'We are an authorized Adobe Solution Partner and we provide services like AEM implementations upgrades integrations with external systems. Whether it is an ad hoc task on AEM or full-fledged implementation our Adobe Certified Experts can deliver your project in timelines and under budget by leveraging their extensive experience in AEM',
          icon: 'content'
        },
        {
          subheading: 'Building Digital Strategy',
          subcontent: 'Using Industry proven tools, unmatched skillset, passion to innovate.',
          icon: 'support-1'
        },
        {
          subheading: 'Analytics Services',
          subcontent: 'Using Adobe Analytics, Google Analytics, Google Tag Manager.',
          icon: 'analysis'
        },
        {
          subheading: 'How we can help',
          subcontent: 'Pick right digital strategy, Select right toolset, Implement & integrate. ',
          icon: 'information'
        }
      ],
      imagepath: '/assets/images/banner/slide-7.png'
    }
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
