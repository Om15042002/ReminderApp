import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterationComponent } from './authentication/registeration/registeration.component';
import { HomepagecontentComponent } from './commonscreens/homepagecontent/homepagecontent.component';
import { AboutusComponent } from './commonscreens/aboutus/aboutus.component';
import { ContactusComponent } from './commonscreens/contactus/contactus.component';
import { MedicinescheduleComponent } from './usertasks/medicineschedule/medicineschedule.component';
import { PagenotfoundComponent } from './commonscreens/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterationComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'home', component: HomepagecontentComponent },
  { path: 'medicineschedule', component: MedicinescheduleComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
