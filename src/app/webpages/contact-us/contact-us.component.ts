import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../../services/digital-marketing/seo.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.less']
})
export class ContactUsComponent implements OnInit {
  constructor(
    private router: Router,
    private seo: SeoService
  ) {   seo.setDmTags("contact");}

  ngOnInit() {}
}
