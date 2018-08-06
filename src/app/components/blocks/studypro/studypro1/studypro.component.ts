import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-studypro',
  templateUrl: './studypro.component.html',
  styleUrls: ['./studypro.component.less'],
})
export class StudyproComponent implements OnInit {
  ngOnInit() {
    $(document).ready(function(){
      <HTMLElement>$('.btn-filter').click(function(e) {
        e.preventDefault(); //prevent the link from being followed
        <HTMLElement>$('.btn-filter').removeClass('selected');
        <HTMLElement>$(this).addClass('selected');
      });
    });
  }

}
