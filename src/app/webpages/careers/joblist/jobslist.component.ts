import { Component, OnInit } from '@angular/core';
import { SlotserviceService } from '../../../services/http/slotservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-jobslist',
  templateUrl: './jobslist.component.html',
  styleUrls: ['./jobslist.component.less']
})
export class JobslistComponent implements OnInit {
  jobdata: any = {};

  constructor(
    private slotser: SlotserviceService,
    private router: Router
  ) {
    if(this.slotser.getJobPost())
    this.jobdata = this.slotser.getJobPost();
    else 
    this.router.navigate(['/careers']);
  }
  ngOnInit() {}
}
