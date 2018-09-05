import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coueses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit {
  currentsection: string;

  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentsection = this.route.snapshot.params["section"];
    this.title.setTitle("Courses | Skill Passport");
    this.meta.updateTag({name: "description", content: "Courses offered by Skill Passport"});
    this.meta.updateTag({name: "Keywords", content: "Courses, Skill Passport, SKpass, Online Teaching"});
  }
}
