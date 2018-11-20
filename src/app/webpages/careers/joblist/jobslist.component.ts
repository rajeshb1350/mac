import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SlotserviceService } from '../../../services/http/slotservice.service';
@Component({
  selector: 'app-jobslist',
  templateUrl: './jobslist.component.html',
  styleUrls: ['./jobslist.component.less']
})
export class JobslistComponent implements OnInit {
  userForm: FormGroup;
  jobsview: any = [];
  model: any = {};
  cccc: any;
  subniteddata: any = {};
  jobdata: any = {};

  constructor(
    private slotser: SlotserviceService
  ) {
    this.jobdata = slotser.getJobPost()[0];
  }
  
  
  ngOnInit() {
    this.userForm = new FormGroup({
      'fromContactName': new FormControl('fffffff', Validators.required),
      'toContactName': new FormControl('name*'),
      'fromContactNumber': new FormControl(),
      'toContactNumber': new FormControl(),
      'Designation': new FormControl(),
      'sizeOfBusiness': new FormControl()
    });


  //   document.getElementById("uploadBtn").onchange = function () {
  //     (<HTMLInputElement>document.getElementById("uploadFile")).value = this.value.substring(12);
  // };
  }


  onSubmit4th() {
    var ch = {
      "contactName": this.model.fromContactName,
      "email": this.model.toContactName,
      "contactNumber": this.model.fromContactNumber,
      "message": this.model.toContactNumber,
      "servicesList": ["Smart_Business_Solutions_SBuS", "Finance_and_Accounting_CoE_Solutions"],
      "sizeOfBusiness": this.model.sizeOfBusiness,
      "designation": this.model.Designation
    }
    alert('successfully saved data');
    this.model = {};
  }
}
