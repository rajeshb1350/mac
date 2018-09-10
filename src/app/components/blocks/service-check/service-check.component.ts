import { Component, OnInit, Input } from '@angular/core';
import { ModuleService } from '../../../services/model/module.service';

@Component({
  selector: 'app-service-check',
  templateUrl: './service-check.component.html',
  styleUrls: ['./service-check.component.less']
})
export class ServiceCheckComponent implements OnInit {
  @Input() services: any;
  constructor(private  moduleser:  ModuleService) { }
  ngOnInit() {
    console.log(this.services);
  }
}
  
  // constructor(private moduleser:ModuleService) { }
  // $filters: null;
  // moduledata = [];
  // ngOnInit() {
  //  this.moduledata = this.moduleser.getModulesData();


  // }



