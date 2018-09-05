import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from "jquery";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.less']
})
export class SettingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.form .stages label').click(function() {
        var radioButtons = $('.form input:radio');
        var selectedIndex = radioButtons.index(radioButtons.filter(':checked'));
        selectedIndex = selectedIndex + 1;
      });
      
      $('.form button').click(function() {
        var radioButtons = $('.form input:radio');
        var selectedIndex = radioButtons.index(radioButtons.filter(':checked'));
      
        selectedIndex = selectedIndex + 2;
      
        $('.form input[type="radio"]:nth-of-type(' + selectedIndex + ')').prop('checked', true);
      
        if (selectedIndex == 6) {
          $('button').html('Submit');
        }
      });
    });
  }

  editPersonalDetails(form: NgForm){
    console.log(form.value);
  }

}
