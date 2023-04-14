import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicinescheduleComponent } from './medicineschedule/medicineschedule.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AppModule } from '../app.module';
import { NodatafoundComponent } from '../commonscreens/nodatafound/nodatafound.component';
import { CommonscreensModule } from '../commonscreens/commonscreens.module';



// const newroutes: Routes = [
//   { path: 'medicineschedule', component: MedicinescheduleComponent },
// ];

@NgModule({
  declarations: [
    MedicinescheduleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    CommonscreensModule
  ],
  exports:[
    MedicinescheduleComponent
  ]
})
export class UsertasksModule { }
