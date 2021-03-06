import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.onscroll = function () { myFunction() };
    var header = <HTMLFormElement>document.querySelector(".header");
    var sticky = header.offsetTop;
    function myFunction() {

      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        Array.from(header.children).forEach(element => (
          Array.from(element.children).forEach(
            element => element.classList.add("sticky")
          )
        ));
      } else {
        header.classList.remove("sticky");
        Array.from(header.children).forEach(element => (
          Array.from(element.children).forEach(
            element => element.classList.remove("sticky")
          )
        ))
      }
    }
  }
}
