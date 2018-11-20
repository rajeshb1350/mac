import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../../../services/http/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor() {
    // this.jobsview = this.contservice.getjobspost();
    console.log(this.jobdata);
    this.jobdata = this.jobsview[0];
    console.log(this.jobdata);
    this.userForm = new FormGroup({
      'fromContactName': new FormControl('fffffff', Validators.required),
      'toContactName': new FormControl('name*'),
      'fromContactNumber': new FormControl(),
      'toContactNumber': new FormControl(),
      'Designation': new FormControl(),
      'sizeOfBusiness': new FormControl()
    })
  }



  ngOnInit() {
  }
  onSubmit4th() {
    console.log(this.model);

    var ch = {
      "contactName": this.model.fromContactName,
      "email": this.model.toContactName,
      "contactNumber": this.model.fromContactNumber,
      "message": this.model.toContactNumber,
      "servicesList": ["Smart_Business_Solutions_SBuS", "Finance_and_Accounting_CoE_Solutions"],
      "sizeOfBusiness": this.model.sizeOfBusiness,
      "designation": this.model.Designation
    }
    /*   this.cccc="/create/contactUs/enquiry";
      this.contservice.contactpost(ch,this.cccc).subscribe((data:any)=>{		
        this.subniteddata=data.response;
        console.log(this.subniteddata);
      alert('successfully saved data');
      this.model={};
    
    },err=>{		console.log(err);	}) */

    alert('successfully saved data');
    this.model = {};
  }
}
