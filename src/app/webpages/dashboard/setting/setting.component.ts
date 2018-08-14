import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.less']
})
export class SettingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  editPersonalDetails(form: NgForm){
    console.log(form.value);
  }

}
