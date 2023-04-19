import { Component } from '@angular/core';

@Component({
  selector: 'app-homepagecontent',
  templateUrl: './homepagecontent.component.html',
  styleUrls: ['./homepagecontent.component.css']
})
export class HomepagecontentComponent {
  ngOnInit() {
    window.addEventListener("scroll", this.loadtext)
  }
  loadtext() {
    // console.log('hello');

    const text1: any = Array.from(document.getElementsByClassName("title1"));
    const text2: any = Array.from(document.getElementsByClassName("title2"))
    const text3: any = Array.from(document.getElementsByClassName("title3"))
    if (document.documentElement.scrollTop > 200 && document.documentElement.scrollTop < 1000) {
      for (let item of text1) {
        item.style.left = "0px";
        item.style.transition = "left 2s ";
      }
    } else {
      for (let item of text1) {
        item.style.left = "1000px";
        item.style.transition = "left 2s ";
      }
    }
    if (document.documentElement.scrollTop > 600 && document.documentElement.scrollTop < 1400) {
      for (let item of text2) {
        item.style.right = "0px";
        item.style.transition = "right 2s ";
      }
    }
    else {
      for (let item of text2) {
        item.style.right = "1000px";
        item.style.transition = "right 2s ";
      }
    }
    if (document.documentElement.scrollTop > 1300 && document.documentElement.scrollTop < 2000) {
      for (let item of text3) {
        item.style.left = "0px";
        item.style.transition = "left 2s ";
      }
    }
    else {
      for (let item of text3) {
        item.style.left = "1000px";
        item.style.transition = "left 2s ";
      }
    }
  }
}
