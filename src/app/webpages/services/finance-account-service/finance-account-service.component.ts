import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-account-service',
  templateUrl: './finance-account-service.component.html',
  styleUrls: ['./finance-account-service.component.less']
})
export class FinanceAccountServiceComponent implements OnInit {
  content = [
    {
     // heading: 'Finance & Accounting',
      subheading: 'Uberization of workforce and Connecting the world through technology',
      content: 'MacTec allows you to focus on your Core Business, while we assure Cost Effective Offshore Support – Optimum Resource Utilization – Best in Class Delivery Model – Benchmarked Accounting Processes. ',
      content1: '‘Cost’ – one word that always gets undivided attention of any business head or stakeholders. The constant pressures to bring down the cost coupled with increasing need for regulatory compliance and demands for a closer alignment to the business are driving organizations towards new Finance and Accounting Operating models. Chief Financial Officers (CFO) of leading organizations are incorporating Finance and Accounting services outsourcing as a strategy to change their operating models. MacTec offers industry recognized Financial Services Offshoring Solutions that support end-to-end functions. ',
      content2: 'MacTec leverages its deep Finance and Accounting functional expertise, industry familiarity, operational excellence and efficient delivery model with innovative Technology. MacTec offshoring model has the aptitude to deliver the solutions that standardizes finance and accounting processes, transforms operations and lowers costs.',
    
   
      type: 'page',
      link: 'appProducts',
      imagepath: '/assets/images/banner/slide-7.png'
    },
    {
      heading: 'MacTec Offshoring Model',
    //  subheading: 'Reliable Solutions for all your Finance & Accounting Offshoring',
      content: 'Choose our Finance & Accounting Offshoring Solutions to reach Operational Excellence ',
      content1: 'Accounting Book Keeping, Accounts Payable, Order to Cash. Managed by dedicated accounting experts who will represent and work closely with onsite controllership team. ',
      content2: 'General Ledger Review and interpretation of data to produce journal entries, Accounting books closing, reconciliations and periodic accounting summaries, our experts with exceptional quality of services, exposed to domain specific software, ERP and Other tools like, SAP, Oracle, JDE, Black Line, Quick Books, Tally, Sage Accounting, MYOB, BOBJ, and other business intelligence tools.  ',
      content3: 'Payroll Accounting Trained and well versed with employee benefits and compensation working process. Grater offshore experience in payroll cycle management, issuing tax forms – Preparing work schedules – Proper allotment of funds, Employee Insurance and other benefits. Exposure to time sheet based, work order based and other industry specific wage/salary/ compensation workings.  ',
      content4: 'Financial Planning & Analysis Expertise in planning and consolidation of financial reports, budget / forecast submissions, business and leadership interactions and liaison with business and management to formulate right reports, executive summaries and periodic management information system reports. Our team has rich experience in utilization & operational metrics, financial and non-financial reporting. ',
    
      type: 'page',
      link: 'finance-accounts',
      imagepath: '/assets/images/banner/slide-5.png'
    },
    {
      heading: 'Accounting @ Offshore Capabilities Overview',
     content: '<p><b>GL Accounting</b> 60% to 80 % of the activities can be managed from offshore <br><b>Key Activities</b> Monthly Books Closing, Journal entry postings, Reconciliations, Fixed Assets Accounting, Intercompany Accounting, Sub-ledger balancing, GL maintenance, Cost, inventory, and management accounting, Audit support and Escheatment Accounting Process.</p> ',
     content1: '<p><b>Management Reporting</b> 30% to 60 % of the activities can be managed from offshore <br> <b>Key Activities</b> Reporting by business line/CC/Location, etc. Budget and rolling forecasting, Cost management and analysis, set up indirect cost allocation rules, Budget consolidation, Expense budgeting, Revenue, cost, P&L, balance sheet, and cash flow variance analysis. </p> ',
     content2: '<p><b>Fixed Assets</b> 30% to 60 % of the activities can be managed from offshore. <br> <b>Key Activities</b> Capital project setup and maintenance, Budget, CWIP, spending tracking Asset setup and capitalization, Disposal of assets: Sales, scrapping, transfers, Depreciation Reconciliations and reporting.</p> ',
     content3: '<p><b>Intercompany</b> 60% to 80 % of the activities can be managed from offshore <br> <b>Key Activities</b> AP, AR and miscellaneous invoicing, Balance confirmation process, Settlement of dues, Accruals for mismatches and timing difference, Inter-company reconciliations, Support resolution of open items, Track and report process performance</p> ',
     content4: '<p><b>External Reporting</b> 20% to 60 % of the activities of the activities can be managed from offshore <br> <b>Key Activities</b> US GAAP, IFRS, and STAT reporting, Management discussion and analysis Stat books (yellow book, green book, and blue book) BS analysis and commentary, SEC filings such as10-K and 10-Q</p> ',
     content5: '<p><b>Treasury</b> 20% to 40% of the activities can be managed from offshore <br> <b>Key Activities</b> Bank accounting and reconciliation, Fund matching, Cash flow forecast, Cash management, Debt and derivative accounting, Foreign currency conversions and hedging, reporting on capital models, treasury reporting and working capital forecasts</p> ',
      
      type: 'page',
      link: 'technoconsult',
      imagepath: '/assets/images/banner/slide-1.png'
    },
    {
      heading: 'What we Do?',
     feature: [
        'Responsive team structure',
        'KPI Reporting',
        'SLA & Process Management Controls',
        'Critical to Quality Reviews',
        'Periodic Stakeholder Reviews',
        'Leadership Governance Meetings '
      ],
      type: 'web',
   //   link: 'https://www.skillpassport.in',
      imagepath: '/assets/images/banner/slide-3.png'
    },
    {
      heading: 'FP&A Capabilities Overview',
      content: '<b>Budgeting & Planning</b> Key Activities Budgeting and forecasting, Budget file and model management, Uploading models into financial systems, True-up of budget assumptions, Data inputs for expense estimates, Variance analysis',
      content1: '<b>Management Reporting</b> Key Activities Base cost reporting, Sales to contribution margin analysis, Product and channel analysis, Price / volume mix, Sales estimates, Sales and Marketing expense analysis, Commission analysis, Royalty, collaboration agreements, Customer review packs, Balance sheet walk, Property, plant and equipment analysis, Working capital analysis , Program expenses and investments, Variance analysis, Ad-hoc requests, Region analysis, Product/ business line analysis, Transfer price margin analysis, Inter-company profit tracking, Preliminary management commentary, Headcount reporting, Legal financial planning and analysis, vendor analysis, travel and living expense analysis, Contract vs. Actual analysis',
     
      type: 'web',
   //   link: 'https://www.skillpassport.in',
      imagepath: '/assets/images/banner/slide-4.png'
    },
    {
      heading: 'Payables @ Offshore Capabilities Overview',
     // subheading: 'A platform that gives the touch of machine learning and a gate way for self-assessment, continues skilling and upskilling.',
    //  content: 'Our Smart Employee data factory is the resultant out come of skill passport. We diagnose, design and deliver the necessary skill for the workforce that we intend to engage for our client needs. Skill Passport is an intuitive digital platform that leverages result driven assessment and sustainable learning at every stage of employment.',
     // secheading: 'We allow our clients to test the required skills through Skill Passport',
      feature: [
        'Document Management',
        'Invoice Processing',
        'Payment Processing',
        'Help Desk and Others AP activities',
        'An estimated 90–95% of AP processes are outsourced',
        'Increased focus on e-invoicing initiatives across customers',
        'Focus on effectiveness along with efficiency',
        'System-based preventive controls are very effective: ID-driven access restrictions, preventive duplicate payment control, etc. '
      ],
      type: 'web',
   //   link: 'https://www.skillpassport.in',
      imagepath: '/assets/images/banner/slide-5.png'
    },
  
  ];
  constructor() { }

  ngOnInit() {
  }

}
