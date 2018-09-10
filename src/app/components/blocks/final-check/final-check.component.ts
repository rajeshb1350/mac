import { Component, OnInit } from '@angular/core';
import * as $  from 'jquery';
import { ModuleService } from '../../../services/model/module.service';

@Component({
  selector: 'app-final-check',
  templateUrl: './final-check.component.html',
  styleUrls: ['./final-check.component.less']
})
export class FinalCheckComponent implements OnInit {

  constructor(private moduleser:ModuleService) { }
  $filters: null;
  moduledata = [];


  
  ngOnInit() {

    //this.moduledata = this.moduleser.getModulesData();


    $(document).ready(()=>{
      $('body').on('click', '.list-group .list-group-item', function () {
        $(this).toggleClass('active');
      });

      $('.list-arrows button').click(function () {
        let $button = $(this), actives : any = '';
          if ($button.hasClass('move-left')) {
              actives = $('.list-right ul li.active');
              actives.clone().appendTo('.list-left ul');
              actives.remove();
          } else if ($button.hasClass('move-right')) {
              actives = $('.list-left ul li.active');
              actives.clone().appendTo('.list-right ul');
              actives.remove();
          }
      });
      
      $('.dual-list .selector').click(function () {
          var $checkBox = $(this);
          if (!$checkBox.hasClass('selected')) {
              $checkBox.addClass('selected').closest('.card').find('ul li:not(.active)').addClass('active');
              $checkBox.children('i').removeClass('fa-square-o').addClass('fa-check-square-o');
          } else {
              $checkBox.removeClass('selected').closest('.card').find('ul li.active').removeClass('active');
              $checkBox.children('i').removeClass('fa-check-square-o').addClass('fa-square-o');
          }
      });
      
      $('[name="SearchDualList"]').keyup(function (e) {
          var code = e.keyCode || e.which;
          if (code == '9') return;
          if (code == '27') $(this).val(null);
          var $rows = $(this).closest('.dual-list').find('.list-group li');
          var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
          $rows.show().filter(function () {
              var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
              return !~text.indexOf(val);
          }).hide();
      });
    });
  }
}
