import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private toastr: ToastrService, private service:AuthenticationService , private router: Router) {

  }
  loginform = this.builder.group({
    uname: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(6)])),
    upassword: this.builder.control('', Validators.required),
  })

  proceedlogin() {
    if (this.loginform.valid) {
      this.service.loginvalidation(this.loginform.value).subscribe((res:any) => {
        console.log(res);
        
        if (res.message=='success') {
          this.toastr.success('Success', 'logged in sucessfully');
          localStorage.setItem("token",res.token);
          localStorage.setItem("userid",res.userid);
          // AuthenticationService.isloggedin=true;
          this.service.raiseDataEmitterEvent(true);
          this.router.navigate(['']);
        }
        else if(res.message=='invalidecredentials'){
          this.toastr.warning("Invalid Credentials")
        }
      })
    }
    else {
      this.toastr.warning("Please enter valid !!")
    }
  }
  gotoregistration() {
    this.router.navigate(['login']);
  }
}
