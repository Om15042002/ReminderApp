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



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomepagecontentComponent,
    AboutusComponent,
    ContactusComponent,
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    AuthenticationModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    HomepagecontentComponent,
    AboutusComponent,
    ContactusComponent
  ]
})
export class CommonscreensModule { }
