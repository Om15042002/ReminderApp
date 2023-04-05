import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule ,ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterationComponent
  ],
  imports: [
    CommonModule,
    // FormsModule
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      // toastClass: 'toast toast-bootstrap-compatibility-fix'

    }),
  ],
  exports:[
    LoginComponent,
    RegisterationComponent,
  ]
})
export class AuthenticationModule { }
