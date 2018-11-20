import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

class ApiDataModel {
  constructor(
    message: string,
    response: any
  ) { }
}

@Injectable()
export class SlotserviceService {
  constructor(
    private api: ApiService
  ) {
  }

  private data: ApiDataModel = {
    "message": "Success",
    "response": [
      {
        "id": 16,
        "title": "Information security training program",
        "startDate": "2018-08-27",
        "endDate": "2018-09-08",
        "trainingType": "ClassRoom",
        "description": "Information security, sometimes shortened to InfoSec, is the practice of preventing unauthorized access, use, disclosure, disruption, modification,\r\n inspection, recording or destruction of information.\r\n",
        "noOfDays": 0,
        "status": "Active",
        "dateCreated": 1534765753000,
        "trainingFee": 1000.0,
        "assessmentFee": 1500.0,
        "trainingAssessmentFee": 2000.0,
        "sector": {
          "id": 4,
          "sectorName": "Security",
          "status": "Active"
        },
        "noOfStudents": 20,
        "programId": "PID-2018081700054",
        "studentsCountFinancialYear1": 0,
        "studentsCountFinancialYear2": 0,
        "studentsCountFinancialYear3": 0,
        "studentsCountFinancialYear4": 0,
        "noOfLevels": 1
      },
      {
        "id": 17,
        "title": "SalesForce training program",
        "startDate": "2018-08-27",
        "endDate": "2018-09-08",
        "trainingType": "ClassRoom",
        "description": "Salesforce is a leading CRM (Customer Relationship Management) software which is served form cloud. It has more than 800 applications to support various features like generating new leads, acquiring new leads, increasing sales and closing the deals.",
        "noOfDays": 0,
        "status": "Active",
        "dateCreated": 1534766232000,
        "trainingFee": 1000.0,
        "assessmentFee": 1500.0,
        "trainingAssessmentFee": 2000.0,
        "sector": {
          "id": 2,
          "sectorName": "IT-ITeS",
          "status": "Active"
        },
        "noOfStudents": 20,
        "programId": "PID-2018082000055",
        "studentsCountFinancialYear1": 0,
        "studentsCountFinancialYear2": 0,
        "studentsCountFinancialYear3": 0,
        "studentsCountFinancialYear4": 0,
        "noOfLevels": 2
      },
      {
        "id": 18,
        "title": "Big data analytics training program",
        "startDate": "2018-08-27",
        "endDate": "2018-09-08",
        "trainingType": "ClassRoom",
        "description": "",
        "noOfDays": 0,
        "status": "Active",
        "dateCreated": 1534767171000,
        "trainingFee": 1000.0,
        "assessmentFee": 1500.0,
        "trainingAssessmentFee": 2000.0,
        "sector": {
          "id": 2,
          "sectorName": "IT-ITeS",
          "status": "Active"
        },
        "noOfStudents": 20,
        "programId": "PID-2018082000056",
        "studentsCountFinancialYear1": 0,
        "studentsCountFinancialYear2": 0,
        "studentsCountFinancialYear3": 0,
        "studentsCountFinancialYear4": 0,
        "noOfLevels": 2
      },
      {
        "id": 19,
        "title": "RPA training program",
        "startDate": "2018-08-27",
        "endDate": "2018-09-08",
        "trainingType": "ClassRoom",
        "description": "Artificial intelligence, sometimes called machine intelligence, is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans and other animals",
        "noOfDays": 0,
        "status": "Active",
        "dateCreated": 1534768386000,
        "trainingFee": 1000.0,
        "assessmentFee": 1500.0,
        "trainingAssessmentFee": 2000.0,
        "sector": {
          "id": 2,
          "sectorName": "IT-ITeS",
          "status": "Active"
        },
        "noOfStudents": 20,
        "programId": "PID-2018082000057",
        "studentsCountFinancialYear1": 0,
        "studentsCountFinancialYear2": 0,
        "studentsCountFinancialYear3": 0,
        "studentsCountFinancialYear4": 0,
        "noOfLevels": 2
      }
    ]
  };

  // public getData(){
  //   return new Promise(
  //     (resolve, reject) => {
  //       this.api.getSlotBookData().subscribe(
  //         (apidata: any) =>{
  //           try {
  //             resolve(JSON.parse(apidata.response));
  //           }
  //           catch(e){
  //             resolve(this.data);
  //           }
  //         }, 
  //         error => resolve(this.data)
  //       );
  //     }
  //   );
  // }

  postedjob: any;
  public setData(data) {
    this.data = data;
  }
  setJobPost(data) {
    this.postedjob = data;
  }
  getJobPost() {
    return this.postedjob;
  }
  deleteJob() {
    this.postedjob.pop();
  }
}
