import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import {  ApiService} from './../../services/http/api.service';
declare var $: any;
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.less']
})
export class ContactUsComponent implements OnInit {
	userForm:FormGroup;
cccc:any;
responds:any;
selectAll:any = false;
model: any = {};
ch :any={};
array:any=[];
size:any=[];
subniteddata:any={};
objs:any=[];
  constructor(private fb:FormBuilder, private contservice: ApiService ) {
    this.getCalls();
   this.array=[{'name':'cc'},{'name':'cddddc'},{'name':'cdddddwwwdddc'},{'name':'ddc'}];
   
   this.size=[{'name':'100-500'},{'name':'500-1000'},{'name':'1000-5000'},{'name':'5000+'}];
   this.model.sizeOfBusiness=this.size[0].name;
   $(document).ready(function () {

    $('.checkboxes input[type="checkbox"]').change(function () {
        var mycheck = new Array();
        
        $(".checkboxes input[type='checkbox']:checked").each(function () {
            if ($(this).is(':checked')) {
                mycheck.push($(this).attr("id") ); //aggiungo value del checked
            }
        });
       /  alert(mycheck); /
    console.log(mycheck);
    this.objs=mycheck;
    console.log(this.objs)
    });
  
  });

   this.userForm=new FormGroup({
    'fromContactName': new FormControl('fffffff', Validators.required),
    'toContactName': new FormControl('name*'),
    'fromContactNumber': new FormControl(),
    'toContactNumber': new FormControl(),
    'Designation': new FormControl(),
    'sizeOfBusiness': new FormControl()
	  })
   }

  contactUsForm:FormGroup;


  ngOnInit() {
 
  this.contactUsForm = this.fb.group({
    name : [null,Validators.required],
    email : [null,[Validators.required,Validators.email]],
    subject : [null,Validators.required],
    message : [null,Validators.required]
  });
}


public getCalls(){
this.cccc="/get/services/list";
  this.contservice.getServicesforContactUs(this.cccc).subscribe((data:any)=>{		this.responds=data.response;
  console.log(this.responds)},err=>{		console.log(err);	})
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
  
  
  login(formdata) {
    console.log(formdata)}
    onSubmit4th() {
        console.log(this.model);
      
        var ch=   {
        
          "contactName": this.model.fromContactName,
          "email": this.model.toContactName,
          "contactNumber": this.model.fromContactNumber,
          "message": this.model.toContactNumber,
    "servicesList":["Smart_Business_Solutions_SBuS","Finance_and_Accounting_CoE_Solutions"],"sizeOfBusiness":this.model.sizeOfBusiness,
    "designation":this.model.Designation
      }
      console.log(ch)
      this.cccc="/create/contactUs/enquiry";
      this.contservice.contactpost(ch,this.cccc).subscribe((data:any)=>{		
        this.subniteddata=data.response;
        console.log(this.subniteddata);
      alert('Thanks for contacting us. Will get back to you soon');
      // $('#recentjobs').modal('show'); 
    },err=>{		console.log(err);	})
}
}
/* "sizeOfBusiness":this.model.sizeOfBusiness,
"Designation":this.model.Designation, */