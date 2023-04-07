import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';
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
  isloggedin: Boolean =false
  constructor(private router: Router,private service:AuthenticationService, private toastr: ToastrService
  ) {
    // this.isloggedin= AuthenticationService.isloggedin;
  }
  ngOnInit():void{
    this.service.loginEmitter.subscribe((value)=>{
      this.isloggedin=value;
    })
  }
  logout(){
    localStorage.clear()
    this.service.raiseDataEmitterEvent(false);
    this.toastr.success('Success', 'logged out successfully');
    this.router.navigate(['']);
  }
};