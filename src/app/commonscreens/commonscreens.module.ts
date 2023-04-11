import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepagecontentComponent } from './homepagecontent/homepagecontent.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from '../authentication/login/login.component';
import { RegisterationComponent } from '../authentication/registeration/registeration.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AppRoutingModule } from '../app-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ToastrModule } from 'ngx-toastr';
import { NodatafoundComponent } from './nodatafound/nodatafound.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomepagecontentComponent,
    AboutusComponent,
    ContactusComponent,
    PagenotfoundComponent,
    NodatafoundComponent
  ],
  imports: [
    CommonModule,
    AuthenticationModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      // toastClass: 'toast toast-bootstrap-compatibility-fix'

    }),
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    HomepagecontentComponent,
    AboutusComponent,
    ContactusComponent,
    NodatafoundComponent
  ]
})
export class CommonscreensModule { }
