import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobpostFromModel } from '../../../services/model/jobform.model';

@Component({
  selector: 'app-jobpost-form',
  templateUrl: './jobpost-form.component.html',
  styleUrls: ['./jobpost-form.component.less']
})
export class JobpostFormComponent implements OnInit {
  // status
  // 1: loading
  // 2: success
  // 3: warning
  // 4: error
  finalStatus: number = 1;
  statusMessage: string = "Please wait...";
  formstep: number = 1;

  // Form
  jobpostfrom: FormGroup;
  formdata: JobpostFromModel;
  resumefile: File = null;

  constructor() { }

  ngOnInit() {
    this.jobpostfrom = new FormGroup({
      'name' : new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'contact' : new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9_-]{8,15}$")]),
      'message' : new FormControl(null, [Validators.required]),
      'designation' : new FormControl(null, [Validators.required])
    });
  }


  onFormSubmit(){
    // this.formstep = 3;
    this.formdata = new JobpostFromModel(
      this.jobpostfrom.get('name').value,
      this.jobpostfrom.get('email').value,
      this.jobpostfrom.get('contact').value,
      this.resumefile,
      this.jobpostfrom.get('designation').value,
      this.jobpostfrom.get('message').value
    );
 
    console.log(this.formdata)

    // this.api.postEnquiryData(this.formdata).subscribe(
    //   (response: any) => {
    //     console.log(response)
    //     if(response['status'] == "Success") {
    //       this.finalStatus = 2;
    //       this.statusMessage = "We have recieved your message.<br> One of our expert will contact you shortly.";
    //     } else {
    //       this.finalStatus = 4;
    //       this.statusMessage = "Something went wrong. Please try again";
    //     }
    //   },
    //   error => {
    //     this.finalStatus = 4;
    //     this.statusMessage = "Something went wrong. Please try again";
    //     return;
    //   }
    // );
  }

  onUpload(event) {
    this.resumefile = event.target.files[0];
  }
}
