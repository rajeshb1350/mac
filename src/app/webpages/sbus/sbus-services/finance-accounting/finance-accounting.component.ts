import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-accounting',
  templateUrl: './finance-accounting.component.html',
  styleUrls: ['./finance-accounting.component.less']
})
export class FinanceAccountingComponent implements OnInit {

  findata = {
    flist: [
      {
        title: 'Payroll Accounting',
        content: 'Trained and well versed with employee benefits and compensation working process. Grater offshore experience in payroll cycle management, issuing tax forms – Preparing work schedules – Proper allotment of funds, Employee Insurance and other benefits. Exposure to time sheet based, work order based and other industry specific wage/salary/ compensation workings.' 
      },{
        title: 'Financial Planning & Analysis',
        content: 'Expertise in planning and consolidation of financial reports, budget / forecast submissions, business and leadership interactions and liaison with business and management to formulate right reports, executive summaries and periodic management information system reports. Our team has rich experience in utilization & operational metrics, financial and non-financial reporting.'
      },{
        title: 'Accounting',
        content: 'Book Keeping, Accounts Payable, Order to Cash. Managed by dedicated accounting experts who will represent and work closely with onsite controllership team. Review and interpretation of data to produce journal entries, Accounting books closing, reconciliations and periodic accounting summaries, our experts with exceptional quality of services, exposed to domain specific software, ERP and Other tools like, SAP, Oracle, JDE, Black Line, Quick Books, Tally, Sage Accounting, MYOB, BOBJ, and other business intelligence tools. '
      },{
        title: 'General Ledger',
        content: 'Review and interpretation of data to produce journal entries, Accounting books closing, reconciliations and periodic accounting summaries, our experts with exceptional quality of services, exposed to domain specific software, ERP and Other tools like, SAP, Oracle, JDE, Black Line, Quick Books, Tally, Sage Accounting, MYOB, BOBJ, and other business intelligence tools.'
      }
    ],
    r2rcap: [
      {
        heading: 'MacTec Offshoring Model',
        list: [
          {
            title: 'Accounting',
            content: 'Trained and well versed with employee benefits and compensation working process. Grater offshore experience in payroll cycle management, issuing tax forms – Preparing work schedules – Proper allotment of funds, Employee Insurance and other benefits. Exposure to time sheet based, work order based and other industry specific wage/salary/ compensation workings.'
          },
          {
            title: 'General Ledger',
            content: 'Review and interpretation of data to produce journal entries, Accounting books closing, reconciliations and periodic accounting summaries, our experts with exceptional quality of services, exposed to domain specific software, ERP and Other tools like, SAP, Oracle, JDE, Black Line, Quick Books, Tally, Sage Accounting, MYOB, BOBJ, and other business intelligence tools. '
          },
          {
            title: 'Payroll Accounting',
            content: 'Trained and well versed with employee benefits and compensation working process. Grater offshore experience in payroll cycle management, issuing tax forms – Preparing work schedules – Proper allotment of funds, Employee Insurance and other benefits. Exposure to time sheet based, work order based and other industry specific wage/salary/ compensation workings.'
          },
          {
            title: 'Financial Planning & Analysis',
            content: 'Expertise in planning and consolidation of financial reports, budget / forecast submissions, business and leadership interactions and liaison with business and management to formulate right reports, executive summaries and periodic management information system reports. Our team has rich experience in utilization & operational metrics, financial and non-financial reporting.'
          }
        ]
      }, 
      {
        heading: 'Record-to-Report Capabilities Overview',
        list: [
          {
            title: 'GL Accounting',
            content: 'Key Activities: Monthly Books Closing, Journal entry postings, Reconciliations, Fixed Assets Accounting, Intercompany Accounting, Sub-ledger balancing, GL maintenance, Cost, inventory, and management accounting, Audit support and Escheatment Accounting Process',
            outsource: '60% to 80 % of the activities can be managed from offshore'
          },{
            title: 'Management Reporting',
            content: 'Key Activities: Reporting by business line/CC/Location, etc. Budget and rolling forecasting, Cost management and analysis, set up indirect cost allocation rules, Budget consolidation, Expense budgeting, Revenue, cost, P&L, balance sheet, and cash flow variance analysis',
            outsource: '30% to 60 % of the activities can be managed from offshore'
          },{
            title: 'Fixed Assets',
            content: 'Key Activities: Capital project setup and maintenance, Budget, CWIP, spending tracking Asset setup and capitalization, Disposal of assets: Sales, scrapping, transfers, Depreciation Reconciliations and reporting.',
            outsource: '30% to 60 % of the activities can be managed from offshore'
          },{
            title: 'Intercompany',
            content: 'Key Activities: AP, AR and miscellaneous invoicing, Balance confirmation process, Settlement of dues, Accruals for mismatches and timing difference, Inter-company reconciliations, Support resolution of open items, Track and report process performance',
            outsource: '60% to 80 % of the activities can be managed from offshore'
          },{
            title: 'External Reporting',
            content: 'Key Activities: US GAAP, IFRS, and STAT reporting, Management discussion and analysis Stat books (yellow book, green book, and blue book) BS analysis and commentary, SEC filings such as10-K and 10-Q',
            outsource: '20% to 60 % of the activities of the activities can be managed from offshore'
          },{
            title: 'Treasury',
            content: 'Key Activities: Bank accounting and reconciliation, Fund matching, Cash flow forecast, Cash management, Debt and derivative accounting, Foreign currency conversions and hedging, reporting on capital models, treasury reporting and working capital forecasts',
            outsource: '20% to 40% of the activities can be managed from offshore'
          }
        ]
      } 
    ]
  };

  

  constructor() { }

  ngOnInit() {
  }

}
