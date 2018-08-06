import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slotbook',
  templateUrl: './slotbook.component.html',
  styleUrls: ['./slotbook.component.less']
})
export class SlotbookComponent implements OnInit {


  current: number = 0;
  items: Array<any>;
  constructor() { }
  ngOnInit() {

    this.items =[
      {
          "id": 111,
          "title": "c language training program",
          "startDate": "2018-08-25",
          "endDate": "2018-09-05",
          "timings":"1:00 PM IST (GMT 07:30 AM)",
          "trainingType": "ClassRoom",
          "description": "C is a computer programming language. That means that you can use C to create lists of instructions for a computer to follow. C is one of thousands of programming languages currently in use. C has been around for several decades and has won widespread acceptance because it gives programmers maximum control and efficiency. C is an easy language to learn. It is a bit more cryptic in its style than some other languages, but you get beyond that fairly quickly",
          "noOfDays": 0,
          "status": "Active",
          "dateCreated": 1529928463000,
          "trainingFee": 1500,
          "assessmentFee": 2000,
          "trainingAssessmentFee": 2500,
          "sector": {
              "id": 46,
              "sectorName": "New Sectors",
              "status": "Active"
          },
          "noOfStudents": 10,
          "programId": "PID-2018062500036",
          "studentsCountFinancialYear1": 0,
          "studentsCountFinancialYear2": 0,
          "studentsCountFinancialYear3": 0,
          "studentsCountFinancialYear4": 0,
          "noOfLevels": 0
      },
      {
          "id": 112,
          "title": "Data structure training program",
          "startDate": "2019-06-25",
          "endDate": "2019-07-05",
          "timings":"1:00 PM IST (GMT 07:30 AM)",
          "trainingType": "Online",
          "description": "Data structures can implement one or more particular abstract data types (ADT), which specify the operations that can be performed on a data structure and the computational complexity of those operations. In comparison, a data structure is a concrete implementation of the space provided by an ADT. ",
          "noOfDays": 0,
          "status": "Active",
          "dateCreated": 1529912244000,
          "trainingFee": 1500,
          "assessmentFee": 2000,
          "trainingAssessmentFee": 2500,
          "sector": {
              "id": 46,
              "sectorName": "New Sectors",
              "status": "Active"
          },
          "noOfStudents": 10,
          "programId": "PID-2018062500037",
          "studentsCountFinancialYear1": 0,
          "studentsCountFinancialYear2": 0,
          "studentsCountFinancialYear3": 0,
          "studentsCountFinancialYear4": 0,
          "noOfLevels": 0
      },
      {
        "id": 113,
        "title": "c language training program",
        "startDate": "2018-08-25",
        "endDate": "2018-09-05",
        "timings":"1:00 PM IST (GMT 07:30 AM)",
        "trainingType": "Virtual",
        "description": "C is a computer programming language. That means that you can use C to create lists of instructions for a computer to follow. C is one of thousands of programming languages currently in use. C has been around for several decades and has won widespread acceptance because it gives programmers maximum control and efficiency. C is an easy language to learn. It is a bit more cryptic in its style than some other languages, but you get beyond that fairly quickly",
        "noOfDays": 0,
        "status": "Active",
        "dateCreated": 1529928463000,
        "trainingFee": 1500,
        "assessmentFee": 2000,
        "trainingAssessmentFee": 2500,
        "sector": {
            "id": 46,
            "sectorName": "New Sectors",
            "status": "Active"
        },
        "noOfStudents": 10,
        "programId": "PID-2018062500036",
        "studentsCountFinancialYear1": 0,
        "studentsCountFinancialYear2": 0,
        "studentsCountFinancialYear3": 0,
        "studentsCountFinancialYear4": 0,
        "noOfLevels": 0
    },
    {
        "id": 114,
        "title": "Data structure training program",
        "startDate": "2019-06-25",
        "endDate": "2019-07-05",
        "timings":"1:00 PM IST (GMT 07:30 AM)",
        "trainingType": "ClassRoom",
        "description": "Data structures can implement one or more particular abstract data types (ADT), which specify the operations that can be performed on a data structure and the computational complexity of those operations. In comparison, a data structure is a concrete implementation of the space provided by an ADT. ",
        "noOfDays": 0,
        "status": "Active",
        "dateCreated": 1529912244000,
        "trainingFee": 1500,
        "assessmentFee": 2000,
        "trainingAssessmentFee": 2500,
        "sector": {
            "id": 46,
            "sectorName": "New Sectors",
            "status": "Active"
        },
        "noOfStudents": 10,
        "programId": "PID-2018062500037",
        "studentsCountFinancialYear1": 0,
        "studentsCountFinancialYear2": 0,
        "studentsCountFinancialYear3": 0,
        "studentsCountFinancialYear4": 0,
        "noOfLevels": 0
    }

  ]
  }

}
