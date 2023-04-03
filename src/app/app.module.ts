import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonscreensModule } from './commonscreens/commonscreens.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { UsertasksModule } from './usertasks/usertasks.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsertasksModule,
    AppRoutingModule,
    CommonscreensModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
