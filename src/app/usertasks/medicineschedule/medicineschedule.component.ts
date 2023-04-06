import { Component, ViewEncapsulation } from '@angular/core';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { FormControl, FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsertasksService } from 'src/app/services/usertasks.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-medicineschedule',
  templateUrl: './medicineschedule.component.html',
  styleUrls: ['./medicineschedule.component.css']
})
export class MedicinescheduleComponent {
  medicinescheduledata: any={
    medicinename:"",
    remindertime:[],
    timephase:[],
    quantity:[],
    days:[]

  };
  openfiltermodal() {
    const modal = document.getElementById("filterModal")
    if (modal != null)
      modal.style.display = 'block'
  }
  closefiltermodal() {
    const modal = document.getElementById("filterModal")
    if (modal != null)
      modal.style.display = 'none'
  }
  openeditmodal() {
    const modal = document.getElementById("editModal")
    if (modal != null)
      modal.style.display = 'block'
  }
  closeeditmodal() {
    const modal = document.getElementById("editModal")
    if (modal != null)
      modal.style.display = 'none'
  }
  openaddschedulemodal() {
    const modal = document.getElementById("addscheduleModal")
    if (modal != null)
      modal.style.display = 'block'
  }
  closeaddschedulemodal() {
    const modal = document.getElementById("addscheduleModal")
    if (modal != null)
      modal.style.display = 'none'
  }
  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: UsertasksService, private router: Router) {

  }
  // scheduleentryform=this.builder.group({
  //   medicinename:this.builder.control('',Validators.required),
  //   uname:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(6)])),
  //   upassword:this.builder.control('',Validators.required),
  //   email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
  // })
  enablecontrols() {
    const timephase_morning: any = document.getElementById("morning");
    const timephase_afternoon: any = document.getElementById("afternoon");
    const timephase_night: any = document.getElementById("night");

    const quantity_morning: any = document.getElementById("MorningQuantity");
    const quantity_afternoon: any = document.getElementById("AfternoonQuantity");
    const quantity_night: any = document.getElementById("NightQuantity");

    const remindertime_morning: any = document.getElementById("MorningReminderTime");
    const remindertime_afternoon: any = document.getElementById("AfternoonReminderTime");
    const remindertime_night: any = document.getElementById("NightReminderTime");

    if (!timephase_morning.checked) {
      quantity_morning.disabled = true;
      remindertime_morning.disabled = true;
    }
    else {
      quantity_morning.disabled = false;
      remindertime_morning.disabled = false;
    }
    if (!timephase_afternoon.checked) {
      quantity_afternoon.disabled = true;
      remindertime_afternoon.disabled = true;
    }
    else {
      quantity_afternoon.disabled = false;
      remindertime_afternoon.disabled = false;
    }
    if (!timephase_night.checked) {
      quantity_night.disabled = true;
      remindertime_night.disabled = true;
    }
    else {
      quantity_night.disabled = false;
      remindertime_night.disabled = false;
    }
    // console.log("hello");

  }
  validatemedicinedata() {
    this.medicinescheduledata={
      medicinename:"",
      remindertime:[],
      timephase:[],
      quantity:[],
      days:[]
  
    };
    const medicinename: any = document.getElementById("medicinename");

    const day_mon: any = document.getElementById("Mon");
    const day_tue: any = document.getElementById("Tue");
    const day_wed: any = document.getElementById("Wed");
    const day_thus: any = document.getElementById("Thus");
    const day_fri: any = document.getElementById("Fri");
    const day_sat: any = document.getElementById("Sat");
    const day_sun: any = document.getElementById("Sun");

    const timephase_morning: any = document.getElementById("morning");
    const timephase_afternoon: any = document.getElementById("afternoon");
    const timephase_night: any = document.getElementById("night");

    const quantity_morning: any = document.getElementById("MorningQuantity");
    const quantity_afternoon: any = document.getElementById("AfternoonQuantity");
    const quantity_night: any = document.getElementById("NightQuantity");

    const remindertime_morning: any = document.getElementById("MorningReminderTime");
    const remindertime_afternoon: any = document.getElementById("AfternoonReminderTime");
    const remindertime_night: any = document.getElementById("NightReminderTime");

    if (medicinename.value == "") {
      this.toastr.warning("Please enter medicine name!!")

      // console.log(day_mon.checked);
    }
    else if (day_mon.checked == false && day_tue.checked == false && day_wed.checked == false && day_thus.checked == false && day_fri.checked == false && day_sat.checked == false && day_sun.checked == false) {
      console.log(day_mon.value);
      this.toastr.warning("Please select at least one day to schedule!!")
    }
    else if (!timephase_morning.checked && !timephase_afternoon.checked && !timephase_night.checked) {
      this.toastr.warning("Please select at least one time phase!!")
    }
    else {
      if (timephase_morning.checked) {
        if (quantity_morning.value <= 0 ||
          remindertime_morning.value <= 0) {
          this.toastr.warning("Please enter proper value of quantity and remindertime for morning!!")
        }
        else {
          this.medicinescheduledata["timephase"].push("morning");
          this.medicinescheduledata["remindertime"].push(remindertime_morning.value);
          this.medicinescheduledata["quantity"].push(quantity_morning.value);
        }
      }
      if (timephase_afternoon.checked) {
        if (quantity_morning.value <= 0 ||
          remindertime_morning.value <= 0) {
          this.toastr.warning("Please enter proper value of quantity and remindertime for afternoon!!")
        }
        else {
          this.medicinescheduledata["timephase"].push("afternoon");
          this.medicinescheduledata["remindertime"].push(remindertime_afternoon.value);
          this.medicinescheduledata["quantity"].push(quantity_afternoon.value);
        }
      }
      if (timephase_night.checked) {
        if (quantity_morning.value =="" ||
          remindertime_morning.value =="") {
          this.toastr.warning("Please enter proper value of quantity and remindertime for night!!")
        }
        else {
          this.medicinescheduledata["timephase"].push("night");
          this.medicinescheduledata["remindertime"].push(remindertime_night.value);
          this.medicinescheduledata["quantity"].push(quantity_night.value);
        }
      }
        this.medicinescheduledata["medicinename"] = medicinename.value;
        if(day_mon.checked)
        this.medicinescheduledata["days"].push("Mon");
        if(day_tue.checked)
        this.medicinescheduledata["days"].push("Tue");
        if(day_wed.checked)
        this.medicinescheduledata["days"].push("Wed");
        if(day_thus.checked)
        this.medicinescheduledata["days"].push("Thus");
        if(day_fri.checked)
        this.medicinescheduledata["days"].push("Fri");
        if(day_sat.checked)
        this.medicinescheduledata["days"].push("Sun");
        if(day_sun.checked)
        this.medicinescheduledata["days"].push("Sat");
        console.log(this.medicinescheduledata);
        this.addmedicineschedule();
    }
  }
  addmedicineschedule() {
    
    this.service.addmedicineschedule(this.medicinescheduledata).subscribe(res=>{
      this.toastr.success('Success','Data added');
      this.router.navigate(['login']);
    })
  }
  students: any[] = [
    {
      name: 'Om Siddhapura'
    },
    {
      name: 'Om Siddhapura'
    },
    {
      name: 'Om Siddhapura'
    }
    ,
    {
      name: 'Om Siddhapura'
    }
    ,
    {
      name: 'Om Siddhapura'
    }
    ,
    {
      name: 'Om Siddhapura'
    }
    ,
    {
      name: 'Om Siddhapura'
    }
    ,
    {
      name: 'Om Siddhapura'
    }
    ,
    {
      name: 'Om Siddhapura'
    }
    ,
    {
      name: 'Om Siddhapura'
    }
    ,
    {
      name: 'Om Siddhapura'
    }
    ,
    {
      name: 'Om Siddhapura'
    }
    ,
    {
      name: 'Om Siddhapura'
    }
    ,
    {
      name: 'Om Siddhapura'
    }
    ,
    {
      name: 'Om Siddhapura'
    }
    ,
    {
      name: 'Om Siddhapura'
    }
  ];
}