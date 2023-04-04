import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicinescheduleComponent } from './medicineschedule/medicineschedule.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

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
    AppRoutingModule
  ],
  exports:[
    MedicinescheduleComponent
  ]
})
export class UsertasksModule { }
