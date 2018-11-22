import { Component, OnInit } from '@angular/core';
import { SlotserviceService } from '../../services/http/slotservice.service';
import { Router } from '@angular/router';
import { SeoService } from '../../services/digital-marketing/seo.service';
import { ApiService } from '../../services/http/api.service';
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.less']
})

export class CareersComponent implements OnInit {
  selectedjob: any = {};
  jobs = [];
  
  constructor(
    private slotser: SlotserviceService,
    private router: Router,
    private seo: SeoService,
    private api: ApiService
  ) {   
    seo.setDmTags("careers");
    this.api.getJobsList().subscribe(
      data => this.jobs = data['response'], 
      error => false
    )
  }
  
  
  ngOnInit() {
  }
  viewjob(data: number) {
    this.slotser.setJobPost(this.jobs[data]);
    this.router.navigate(['/careers','joblist']);
  }
}
