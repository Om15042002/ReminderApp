import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
interface task {
  taskid: number;
  title: string;
  description: string;
  duedate: string;
  dateadded: string;
  isImportant: boolean;
  isCompleted: boolean;
  userid: number;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  constructor(private router: Router
  ) {

    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        this.aboutus = this.contactus = this.home = false;
        if (this.router.url === '/aboutus')
          this.aboutus = true;
        if (this.router.url === '/contactus')
          this.contactus = true;
        if (this.router.url === '/')
          this.home = true;
      }
    });

  }
  aboutus: Boolean = false;
    contactus: Boolean = false;
    home: Boolean = false;
    isloggedin: Boolean = false;
}
