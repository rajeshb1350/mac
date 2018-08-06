import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel1',
  templateUrl: './carousel1.component.html',
  styleUrls: ['./carousel1.component.less']
})
export class Carousel1Component implements OnInit {
  items: Array<any> = []

  constructor() {
    this.items = [
      { 
        title: 'Title1',
        path: 'assets/images/carousel/thumb1.png',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime modi expedita qui dolores quisquam iste architecto repellat Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime modi expedita qui dolores quisquam iste architecto repellat.',
        name: 'sit amet consectetur',
        desg: 'Designation1' 
      },
      { 
        title: 'Title2',
        path: 'assets/images/carousel/thumb2.png',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime modi expedita qui dolores quisquam iste architecto repellat.',
        name: 'sit amet consectetur',
        desg: 'Designation2' 
      },
      { 
        title: 'Title3',
        path: 'assets/images/carousel/thumb3.png',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime modi expedita qui dolores quisquam iste architecto repellat.',
        name: 'sit amet consectetur',
        desg: 'Designation3' 
      },
      { 
        title: 'Title4',
        path: 'assets/images/carousel/thumb4.png',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime modi expedita qui dolores quisquam iste architecto repellat.',
        name: 'sit amet consectetur',
        desg: 'Designation4' 
      }
    ]
  }
  ngOnInit() {
  }

}
