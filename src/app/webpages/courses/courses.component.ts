import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-coueses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }
  ngOnInit() {
    this.title.setTitle("Courses | Skill Passport");
    this.meta.updateTag({name: "description", content: "Courses offered by Skill Passport"});
    this.meta.updateTag({name: "Keywords", content: "Courses, Skill Passport, SKpass, Online Teaching"});
  }
}
