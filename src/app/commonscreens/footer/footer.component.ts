import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsertasksService } from 'src/app/services/usertasks.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  contactus:any;
  isloggedin: Boolean = false
  constructor(private toastr: ToastrService, private service: AuthenticationService, private userservice: UsertasksService, private builder: FormBuilder) {

  }
  ngOnInit(): void {
    console.log(typeof this.contactus);
    
    this.service.loginEmitter.subscribe((value) => {
      this.isloggedin = value;
    })
  }

  queryform = this.builder.group({
    uname: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required),
  })
  sendquery() {
    if (this.isloggedin) {
      if (this.queryform.valid) {
        this.userservice.addquery(this.queryform.value).subscribe((res: any) => {
          if (res.success)
            this.toastr.success(res.message);
          else
            this.toastr.warning(res.message)
          this.queryform.reset()
        })
      }
      else {
        this.toastr.warning("Please Enter All Details")
      }
    }
    else {
      this.toastr.warning("Please Login")
    }
  }
}
