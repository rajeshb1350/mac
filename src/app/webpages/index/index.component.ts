import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less'],
})
export class IndexComponent implements OnInit {
  
  slotBookData: any;

  constructor(
    private title: Title, 
    private meta: Meta,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.title.setTitle("Skill Passport");
    this.meta.updateTag({ name:"description", content: "Skill Passport is a platform for elearning and management for students, coorporates and colleges" });
    this.meta.updateTag({ name:"keywords", content: "skillpassport, skill passport, courses, elearning, platform, tool online, test platform" });
    this.route.data.subscribe(
      (data: Data)=>this.slotBookData = data
    );
  }
}
