import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {
  constructor(private builder: FormBuilder,private toastr:ToastrService,private service:AuthenticationService,private router:Router){
    
  }
  registrationform=this.builder.group({
    firstname:this.builder.control('',Validators.required),
    uname:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(6)])),
    upassword:this.builder.control('',Validators.required),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    mobilenumber:this.builder.control('',Validators.required),
  })

  registeruser(){
    console.log(this.registrationform.valid);
    
    if(this.registrationform.valid){
      this.service.registeruser(this.registrationform.value).subscribe(res=>{
        this.toastr.success('Success','Registered sucessfully');
        this.router.navigate(['login']);
      })
    }
    else{
      this.toastr.warning("Please enter valid data!!")
    }
  }
}
