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
    
    const text1: any = document.getElementsByClassName("title1").item(0);
    const text2: any = document.getElementsByClassName("title2").item(0);
    const text3: any = document.getElementsByClassName("title3").item(0);
    if (document.documentElement.scrollTop > 300&&document.documentElement.scrollTop < 1000) {
      text1.style.left = "0px";
      text1.style.transition = "left 2s ";
    }  if(document.documentElement.scrollTop > 1000||document.documentElement.scrollTop <10){
      text1.style.left = "1000px";
      text1.style.transition = "left 2s ";
    }
    if(document.documentElement.scrollTop > 400&&document.documentElement.scrollTop <1000){
      text2.style.right = "0px";
      text2.style.transition = "right 2s ";
      console.log('hello');
      
    }
    if(document.documentElement.scrollTop > 1500||document.documentElement.scrollTop <1000){
      text2.style.right = "1000px";
      text2.style.transition = "left 2s ";
      console.log('hello');
    }
    if(document.documentElement.scrollTop > 1300&&document.documentElement.scrollTop <1700){
      text3.style.left = "0px";
      text3.style.transition = "left 2s ";
      // console.log('hello');
      
    }
    if(document.documentElement.scrollTop > 1700||document.documentElement.scrollTop <500){
      text3.style.left = "1000px";
      text3.style.transition = "left 2s ";
      // console.log('hello');
    }
  }
}
