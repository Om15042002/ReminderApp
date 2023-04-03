import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicinescheduleComponent } from './medicineschedule/medicineschedule.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// const newroutes: Routes = [
//   { path: 'medicineschedule', component: MedicinescheduleComponent },
// ];

@NgModule({
  declarations: [
    MedicinescheduleComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  // exports:[
  //   MedicinescheduleComponent
  // ]
})
export class UsertasksModule { }
