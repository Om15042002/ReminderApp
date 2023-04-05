import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isloggedin: Boolean =false
  constructor(private toastr: ToastrService,private service:AuthenticationService) {

  }
  ngOnInit():void{
    this.service.loginEmitter.subscribe((value)=>{
      this.isloggedin=value;
    })
  }
  sendquery(){
    if(this.isloggedin){
      this.toastr.success("Query sent successfully")
    }
    else{
      this.toastr.warning("Please Login")
    }
  }
}
