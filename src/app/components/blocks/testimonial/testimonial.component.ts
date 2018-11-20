import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.less']
})
export class TestimonialComponent implements OnInit {

  @Input() data;

  constructor() { }
  ngOnInit() {
    window.setInterval(function(){
      document.getElementById('t-nextauto').click();
    }, 5000);
  }
}
