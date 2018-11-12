import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-subscription-ver2',
  templateUrl: './subscription-ver2.component.html',
  styleUrls: ['./subscription-ver2.component.less']
})
export class SubscriptionVer2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      var formOne = $("#form-one");
      var triggerOneNext = $("#form-button-one-next");
  
      var formTwo = $("#form-two");
      var triggerTwoNext = $("#form-button-two-next");
      var triggerTwoPrevious = $("#form-button-two-previous");
      
      var formThree = $("#form-three");
      var triggerThreeNext = $("#form-button-three-next");
      var triggerThreePrevious = $("#form-button-three-previous");
  
      var formFour = $("#form-four");
      var triggerFourPrevious = $("#form-button-four-previous");
  
      triggerOneNext.click(function () {
          formOne.addClass("form-done");
          formTwo.removeClass("form-to-go");
      });
  
      triggerTwoPrevious.click(function () {
          formOne.removeClass("form-done");
          formTwo.addClass("form-to-go");
      });
  
      triggerTwoNext.click(function () {
          formTwo.addClass("form-done");
          formThree.removeClass("form-to-go");
      });
  
      triggerThreePrevious.click(function () {
          formTwo.removeClass("form-done");
          formThree.addClass("form-to-go");
      });
  
      triggerThreeNext.click(function () {
          formThree.addClass("form-done");
          formFour.removeClass("form-to-go");
  
          showResults();
      });
  
      triggerFourPrevious.click(function () {
          formThree.removeClass("form-done");
          formFour.addClass("form-to-go");
      });
  
  });
  
  function showResults() {}
  }

}
