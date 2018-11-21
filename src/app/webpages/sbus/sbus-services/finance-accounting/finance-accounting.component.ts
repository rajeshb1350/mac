import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { SeoService } from '../../../../services/digital-marketing/seo.service';


@Component({
  selector: 'app-finance-accounting',
  templateUrl: './finance-accounting.component.html',
  styleUrls: ['./finance-accounting.component.less']
})
export class FinanceAccountingComponent implements OnInit {

  findata = {
    flist: {
      id: 'testmonial1',
      height: 'small',
      listdata: [
        {
          heading: 'Payroll Accounting',
          content: 'Trained and well versed with employee benefits and compensation working process. Grater offshore experience in payroll cycle management, issuing tax forms – Preparing work schedules – Proper allotment of funds, Employee Insurance and other benefits. Exposure to time sheet based, work order based and other industry specific wage/salary/ compensation workings.'
        }, {
          heading: 'Financial Planning & Analysis',
          content: 'Expertise in planning and consolidation of financial reports, budget / forecast submissions, business and leadership interactions and liaison with business and management to formulate right reports, executive summaries and periodic management information system reports. Our team has rich experience in utilization & operational metrics, financial and non-financial reporting.'
        }, {
          heading: 'Accounting',
          content: 'Book Keeping, Accounts Payable, Order to Cash. Managed by dedicated accounting experts who will represent and work closely with onsite controllership team. Review and interpretation of data to produce journal entries, Accounting books closing, reconciliations and periodic accounting summaries, our experts with exceptional quality of services, exposed to domain specific software, ERP and Other tools like, SAP, Oracle, JDE, Black Line, Quick Books, Tally, Sage Accounting, MYOB, BOBJ, and other business intelligence tools. '
        }, {
          heading: 'General Ledger',
          content: 'Review and interpretation of data to produce journal entries, Accounting books closing, reconciliations and periodic accounting summaries, our experts with exceptional quality of services, exposed to domain specific software, ERP and Other tools like, SAP, Oracle, JDE, Black Line, Quick Books, Tally, Sage Accounting, MYOB, BOBJ, and other business intelligence tools.'
        }
      ]
    },
    r2rcap: [
      {
        heading: 'MacTec Offshoring Model',
        type: 'main',
        caption: 'Market Understanding: Customers are Looking For Strategic and Sustainable Impact',
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
      }
    ]
  };

  financeData = [{
    heading: 'Record-to-Report Capabilities Overview',
    content: [{
      heading: 'General Accounting and Closing',
      outSource: [
        'Journal entry postings',
        'Reconciliations',
        'Fixed assets accounting',
        'Intercompany accounting',
        'Sub-ledger balancing',
        'GL and CC master data maintenance',
        'Cost, inventory, and management accounting',
        'Audit support',
      ],
      retain: [
        'Review of Journals and reconciliations',
        'Guidance on Exceptions and Escalations',
        'Set up financial policies and updating',
      ],
    },
    {
      heading: 'Management Reporting',
      outSource: [
        'Reporting by business line/CC/Location, etc.',
        'Budget and rolling forecasting',
        'Cost management and analysis',
        'Set up indirect cost allocation rules',
        'Budget consolidation',
        'Expense budgeting',
        'Revenue, cost, P&L, balance sheet, and cash flow variance analysis',
        '% Outsourced: 30–60%'
      ],
      retain: [
        'Final review ',
        'Guidance on budgeting and forecast',
        'Preparation of CEO/ Board pack',
        'Provide direction on cost allocation rules',
      ],
    },
    {
      heading: 'External Reporting  ',
      outSource: [
        'US GAAP, IFRS, and STAT reporting',
        'Management discussion and analysis',
        'Stat books (yellow book, green book, and blue book)',
        ' BS analysis and commentary',
        'SEC filings such as10-K and 10-Q',
      ],
      retain: [
        'Final review and submission to authorities',
        'Interpret any changes in rules',
        'Liaison with local authorities',
      ],
    },
    {
      heading: 'Treasury',
      outSource: [
        'Bank accounting and reconciliation',
        'Fund matching',
        'Cash flow forecast',
        'Cash management',
        'Debt and derivative accounting',
        'Foreign currency conversions and hedging',
        'Reporting on capital models — Basel 1 and liquidity models ',
        'Treasury reporting',
      ],
      retain: [
        'Final review and approval for fund movement',
        'Exception approvals',
        'Hedging contracts',
        'Set procedures and updates',
      ],
    },
    {
      heading: 'Tax',
      outSource: [
        'Tax accounting and reporting',
        'Tax reconciliations',
        'Effective tax rate analysis',
        'International tax benefits',
        'M1 schedule preparation',
        'Federal tax returns',
        'UK corporate tax',
        'Tax exemption audits',
        'Property tax',
        'Municipal tax',
      ],
      retain: [
        'Final review and submission to authorities',
        'Interpret changes in tax rules',
        'Liaison with tax authorities',
      ],
    }
    ],
  },

  {
    heading: 'Order-to-Cash Capabilities Overview',
    content: [{
      heading: 'Customer Master',
      outSource: [
        'New Account set up',
        'Changes in  existing  accounts',
        'Price Mapping',
        'Billing Types/Cycle',
        'Tax  Status',
      ],
      retain: [
        'Exception Approvals',
      ],
    },
    {
      heading: 'Credit Risk and Contract Admin',
      outSource: [
        'Initial Analysis',
        'Review of Credit Limits',
        'Receive/Validate Contracts',
        'Contract Renewal / Extension',
        'Contract Audits',
        'Ensure Compliance',


      ],
      retain: [
        'Define Credit Terms',
        'Develop and review credit policies / recommendations',
        'Exception Approvals',
      ],
    },
    {
      heading: 'Order Mgt and Billing ',
      outSource: [
        'Receive/ Validate and Enter PO',
        'Order Fulfillmen',
        'Regular Open Order Analysis',
        'Invoicing Generation and Presentment',
        'Shipping and Freight Detail',
        'Pricing Suppot',

      ],
      retain: [
        'Exception Approvals',
        'Order release  Matrix',
        'Establish and maintain billing policies',
      ],
    },
    {
      heading: 'Collections',
      outSource: [
        'Customer Segmentation',
        'Self Payer Analysis',
        'Call Prioritization',
        'Issue Coding and Analysis',
        'Research Bad Debts',

      ],
      retain: [
        'Collection policies',
        'Strategic and Government Accounts',

      ],
    },
    {
      heading: 'Cash App',
      outSource: [
        'Processing/Clearing lockbox',
        'Misapplied Cash',
        'Exception Coding Research',
        'Unapplied Cash and Credit',


      ],
      retain: [
        'Banking of checks',
        'Approval of write-offs',
      ],
    },
    {
      heading: 'Deductions  Mgt and Others',
      outSource: [
        'Identification and Validation of disputes',
        'Resolution on Short Payments/ Deductions',
        'Credit Memos and  Reconciliations',
      ],
      retain: [
        'High dollar write-offs',
        'Deductions Approval',
      ],
    }
    ],
  },

  {
    heading: 'Accounts Payable Capabilities Overview',
    content: [{
      heading: 'Document Management',
      outSource: [{
        subhead: 'Mailroom services',
        submod: [
          'Scanning',
          'Indexing',
          'Archival ',
        ],
      },],
      retain: [
        'Archival and retrieval of documents',
      ],
    },
    {
      heading: 'Invoice Processing',
      outSource: [{
        subhead: 'Invoice entry',
        submod: [
          'Manual data entry',
          'OCR validation',
          'Electronic upload',
          'Invoice resolution:',
          'Error resolution',
          'Electronic rejects',
        ]
      }],
      retain: [
        'Manage EDI / ERS and other interfaces',
        'Approvals ',
      ],
    },

    {
      heading: 'Payment Processing',
      outSource: [{
        subhead: 'Payment run',
        submod: [

          'Initiate payments',
          'Seek approvals',
          'Final payment run',
          'Check printing'
        ]
      }, {
        subhead: 'Stop & Reissue',
        submod: [
          'Stop payments ',
          'Void or reissue '
        ],
      },],
      retain: [
        'Approval of payments',
        'Check printing',
        'Physical storage of returned checks',

      ],
    },
    {
      heading: 'AP Help Desk ',
      outSource: [
        'Receive and respond to mails to calls',
        'Resolve queries ',
      ],
      retain: [
        'none',
      ],
    },
    {
      heading: 'Others',
      outSource: [
        'Period close',
        'Account recons',
        'Vendor setup & modifications',
        'P-card admin',
        'Audits',
        'T&E',
      ],
      retain: [
        'Approve new vendor setup & modification approval',
        'P-card distribution',
      ],
    },
    ],
  },

  {
    heading: 'Accounting and Closing Capabilities Overview ',
    content: [{
      heading: 'GL Master Data',
      outSource: [
        'GL Account and legal entity Master',
        'Sub-system maintenance and support',
        'User Master and access control',
        'Cost Center/ Profit Center maintenance',
        'System administration   (Oracle, Hyperion, SAP etc.)',

      ],
      retain: [
        'Design and update of policy for GL/ Cost Center/ Profit Center Master Data',
        'Approval for changes',
        'Guidance on Exceptions',

      ],
    },
    {
      heading: 'General Accounting',
      outSource: [
        'Standard/ Recurring Journals',
        'Non-standard/ ad hoc Journals',
        'Expense project accounting',
        'Cost and management accounting',
        'Monthly accruals, amortizations',
        'Allocations and assessments',
      ],
      retain: [
        'Final Review of Journals',
        'Guidance on budgeting setting up allocation/ assessment rules',
        'Hierarchy for cost and management accounting',

      ],
    },
    {
      heading: 'Closing ',
      outSource: [
        'Unit/ LE level closing',
        'Corporate submissions',
        'Consolidation',
        'Sub-system close',
        'GL interfaces',
        'STAT/ GAAP adjustments',
        'Control validation for GL',
        'Close planning and management',
        'Standard reporting and analysis',
      ],
      retain: [
        'Final review of Trial Balance',
        'Exception signoff',
        'Approval for STAT/ GAAP adjustment',
        'Consolidation/ corporate adjustments',
      ],
    },
    {
      heading: 'Fixed Assets',
      outSource: [
        'Capital project setup and maintenance',
        'Budget, CWIP, spending tracking',
        'Asset setup and capitalization ',
        'Disposal of assets: Sales, scrapping, transfers',
        'Depreciation',
        'Reconciliations and reporting',
      ],
      retain: [
        'Capital budgeting and planning',
        'Project setup and maintenance approval',
        'Capitalization & disposals authorization',
        'Reconciliation review',
        'Physical verification and tagging',
      ],
    },
    {
      heading: 'Inter Company',
      outSource: [
        'AP, AR and miscellaneous invoicing',
        'Balance confirmation process',
        'Settlement of dues',
        'Accruals for mismatches and timing difference',
        'Inter-company reconciliations',
        'Support resolution of open items ',
        'Track and report process performance',
      ],
      retain: [
        'Review of invoices',
        'Approval for netting/ wire settlement',
        'Approval for Journals for open items',
        'Reconciliation review',
      ],
    },
    ],
  },

  {
    heading: 'FP&A Capabilities Overview',
    content: [{
      heading: 'Planning & Budgeting',
      outSource: [
        'Budgeting and forecasting',
        'Budget file and model management',
        'Uploading models into financial systems',
        'True-up of budget assumptions',
        'Data inputs for expense estimates',
        'Variance analysis',
      ],
      retain: [
        'Guidance on budgeting and forecasting',
        'Design of budgeting models',
        'Budgeting assumptions',
        'Management commentary on variances',
      ],
    },
    {
      heading: 'Income Statment',
      outSource: [
        'Base cost reporting',
        'Sales to contribution margin analysis',
        'Product and channel analysis',
        'Price / volume mix',
        'Sales estimates',
        'Sales and Marketing expense analysis',
        'Commission analysis',
        'Royalty, collaboration agreements',
        'Customer review packs',
      ],
      retain: [
        'Final review of reports',
        'Report formats and decision on distribution',
        'Management analysis and presentation',
      ],
    },
    {
      heading: 'Balance Sheet ',
      outSource: [
        'Balance sheet walk',
        'Property, plant and equipment analysis',
        'Working capital analysis ',
        'Program expenses and investments',
        'Variance analysis',
        'Ad-hoc requests',
      ],
      retain: [
        'Final review of reports',
        'Management analysis of variances',
        'Allocation rules for working capital reports',
        'Guidance on exception handling',
      ],
    },
    {
      heading: 'Group Consolidation',
      outSource: [
        'Region analysis',
        'Product/ business line analysis',
        'Transfer price margin analysis',
        'Inter-company profit tracking',
        'Preliminary management commentary',
      ],
      retain: [
        'Guidance on reporting formats & parameters',
        'Review of reports',
        'Final review',
        'Management commentary',
        'Presentation to Board of Directors',
      ],
    },
    {
      heading: 'Others',
      outSource: [
        'Headcount reporting',
        'Legal financial planning and analysis',
        'Bullet trains tracking',
        'Vendor analysis',
        'Travel and living expense analysis',
        'Contract vs. Actual analysis',

      ],
      retain: [
        'Review of reports',
        'Report formats and decision on distribution',
        'Management analysis and presentation',
      ],
    },
    ],
  },
  ];

  constructor(
    private router: Router,
    private seo: SeoService
  ) {   seo.setDmTags("finance-accounting");}

  ngOnInit() {
    const $controls = $(".sbus-controls");
    var position = $(window).scrollTop();
    if ($controls) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        scroll > position ?
          $controls.removeClass('up').addClass('down') :
          $controls.removeClass('down').addClass('up');
        position = scroll;
      });
    }
  }

}
