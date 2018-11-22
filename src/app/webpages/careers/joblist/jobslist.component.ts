import { Component, OnInit } from '@angular/core';
import { SlotserviceService } from '../../../services/http/slotservice.service';
import { Router } from '@angular/router';
import { SeoService } from '../../../services/digital-marketing/seo.service';
@Component({
  selector: 'app-jobslist',
  templateUrl: './jobslist.component.html',
  styleUrls: ['./jobslist.component.less']
})
export class JobslistComponent implements OnInit {
  jobdata: any = {};
  constructor(
    private slotser: SlotserviceService,
    private router: Router,
    private seo: SeoService
  ) {
    if(this.slotser.getJobPost())
    this.jobdata = this.slotser.getJobPost();
    else 
    this.router.navigate(['/careers']);
  }
  ngOnInit() {}
}
