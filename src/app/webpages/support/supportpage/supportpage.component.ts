import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-supportpage',
  templateUrl: './supportpage.component.html',
  styleUrls: ['./supportpage.component.less']
})
export class SupportpageComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.title.setTitle("Support | Skill Passport");
    this.meta.updateTag({ name: "description", content: "Description related to Support Skill Passport" });
    this.meta.updateTag({ name: "keywords", content: "skillpassport, skill passport, courses, elearning, platform, tool online, test platform" });
  }

}
