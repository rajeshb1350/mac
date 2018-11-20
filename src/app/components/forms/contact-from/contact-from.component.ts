import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../../../services/model/contact.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../../services/http/api.service';

@Component({
  selector: 'app-contact-from',
  templateUrl: './contact-from.component.html',
  styleUrls: ['./contact-from.component.less']
})
export class ContactFromComponent implements OnInit {
  // status
  // 1: loading
  // 2: success
  // 3: warning
  // 4: error
  finalStatus: number = 1;
  statusMessage: string = "Please wait...";
  formstep: number = 1;

  // Form
  contactFrom: FormGroup;
  formdata: ContactModel;
  contacttype: string = '';
  
  // Servicelist
  serviceList:any;
  serviceSet = new Set<number>();

  constructor(
    private api: ApiService
  ) {
    this.api.getEnquiryServiceList().subscribe(
      data => this.serviceList = data
    )
  }

  ngOnInit() {
    this.contactFrom = new FormGroup({
      'contactName' : new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'contactNumber' : new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9_-]{8,15}$")]),
      'message' : new FormControl(null, [Validators.required]),
      'servicesList' : new FormControl(null),
      'sizeOfBusiness' : new FormControl(null, [Validators.required]),
      'designation' : new FormControl(null, [Validators.required])
    });
  }

  onFormSubmit(){
    this.formstep = 3;
    this.formdata = new ContactModel(
      this.contactFrom.get('contactName').value,
      this.contactFrom.get('email').value,
      this.contactFrom.get('contactNumber').value,
      this.contactFrom.get('message').value,
      Array.from(this.serviceSet),
      this.contactFrom.get('sizeOfBusiness').value,
      this.contactFrom.get('designation').value
    );
    this.api.postEnquiryData(this.formdata).subscribe(
      (response: any) => {
        console.log(response)
        if(response['status'] == "Success") {
          this.finalStatus = 2;
          this.statusMessage = "Your request have been submitted.<br> We will contact you soon";
        } else {
          this.finalStatus = 4;
          this.statusMessage = "Something went wrong. Please try again";
        }
      },
      error => {
        this.finalStatus = 4;
        this.statusMessage = "Something went wrong. Please try again";
        return;
      }
    );
  }

  onServiceListChange(event){
    event.target.checked?
    this.serviceSet.add(event.target.value):
    this.serviceSet.delete(event.target.value);
  }
}
