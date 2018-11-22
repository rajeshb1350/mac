import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { JobpostFromModel } from '../../../services/model/jobform.model';
import { ApiService } from '../../../services/http/api.service';

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
  @Input() jobid: number;

  // Form
  jobpostfrom: FormGroup;
  formdata: JobpostFromModel;
  resumefile: File = null;
  @ViewChild('user_resume') resume;
  
  constructor(
    private api: ApiService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.jobpostfrom = this.fb.group({
        'fname' : [ null, Validators.required ],
        'lname' : [ null, Validators.required ],
        'email' : [ null, Validators.compose([Validators.required, Validators.email])],
        'contact' : [ null, Validators.compose([Validators.required, Validators.pattern("^[a-z0-9_-]{8,15}$")])],
        'designation' : [ null, Validators.required ],
        'resume' : [ null ]
    });
    // this.jobpostfrom = new FormGroup({
    // });
  }


  onFormSubmit(data){
    // this.formstep = 2;
    this.formdata = new JobpostFromModel(
      data['fname'],
      data['lname'],
      data['email'],
      data['contact'],
      data['designation'],
      data['resume']
    );
 
    console.log(this.formdata);

    console.log(data['resume'])
    // this.api.postJobsRequest(this.formdata, this.jobid).subscribe(
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

  onUpload() {
    console.log(this.resume)
  }
}
