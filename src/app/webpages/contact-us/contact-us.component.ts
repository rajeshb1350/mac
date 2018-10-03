import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.less']
})
export class ContactUsComponent implements OnInit {


 
  
  constructor(private fb:FormBuilder) { }

  contactUsForm:FormGroup;


  ngOnInit() {
 
  this.contactUsForm = this.fb.group({
    name : [null,Validators.required],
    email : [null,[Validators.required,Validators.email]],
    subject : [null,Validators.required],
    message : [null,Validators.required]
  });
}

  get name() {return this.contactUsForm.get('name');} 
  get email() {return this.contactUsForm.get('email');} 
  get subject() {return this.contactUsForm.get('subject');} 
  get message() {return this.contactUsForm.get('message');} 


  submitForm(){
    if(this.contactUsForm.valid){
      let userData = this.contactUsForm.value;
      let userJson = JSON.stringify(userData);
      console.log(JSON.parse(userJson).name);
    }
    else{
        alert("Form invalid");
    }
  
  }
}
