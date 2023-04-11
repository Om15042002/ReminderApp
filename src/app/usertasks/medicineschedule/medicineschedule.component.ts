import { Component, ViewEncapsulation } from '@angular/core';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { FormControl, FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsertasksService } from 'src/app/services/usertasks.service';
import { filter } from 'rxjs';
import { CommonscreensModule } from 'src/app/commonscreens/commonscreens.module';
// import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-medicineschedule',
  templateUrl: './medicineschedule.component.html',
  styleUrls: ['./medicineschedule.component.css']
})

export class MedicinescheduleComponent {
  editedmedicinescheduledata: any = {
    medicinename: "",
    remindertime: [],
    timephase: [],
    quantity: [],
    days: []
  };
  medicinescheduledata: any = {
    days: [],
    medicine_id: [],
    medicinenames: [],
    otherdetails: []
  };
  filtermedicinescheduledata: any = {
    days: [],
    medicine_id: [],
    medicinenames: [],
    otherdetails: []
  };
  ngOnInit() {
    console.log("hello");
    this.loader = true;
    this.isdatafound=true;
    setTimeout(() => {
      this.service.getmedicineschedules().subscribe((res: any) => {
        console.log(res);
        if (res.success) {
          // this.toastr.success(res.message);
          
          
          if(res.data==null){
            this.loader=false;
            this.isdatafound=false;
          }
          else{
            this.medicinescheduledata = res.data;
            this.filtermedicinescheduledata = this.medicinescheduledata
            console.log(this.medicinescheduledata);
            // this.closeloadingmodal();
          }
          this.loader=false;
        }
        else{
          this.toastr.warning(res.message);
          this.loader=false;
        }
          
      });
    }, 800);
  }
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
  openloadingmodal() {
    const modal = document.getElementById("laodingModal")
    if (modal != null)
      modal.style.display = 'block'
  }
  closeloadingmodal() {
    const modal = document.getElementById("laodingModal")
    if (modal != null)
      modal.style.display = 'none'
  }
  loader: boolean = false;
  isdatafound:boolean=false;
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
    this.editedmedicinescheduledata = {
      medicinename: "",
      remindertime: [],
      timephase: [],
      quantity: [],
      days: []
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
          this.editedmedicinescheduledata["timephase"].push("morning");
          this.editedmedicinescheduledata["remindertime"].push(remindertime_morning.value);
          this.editedmedicinescheduledata["quantity"].push(quantity_morning.value);
        }
      }
      if (timephase_afternoon.checked) {
        if (quantity_morning.value <= 0 ||
          remindertime_morning.value <= 0) {
          this.toastr.warning("Please enter proper value of quantity and remindertime for afternoon!!")
        }
        else {
          this.editedmedicinescheduledata["timephase"].push("afternoon");
          this.editedmedicinescheduledata["remindertime"].push(remindertime_afternoon.value);
          this.editedmedicinescheduledata["quantity"].push(quantity_afternoon.value);
        }
      }
      if (timephase_night.checked) {
        if (quantity_morning.value == "" ||
          remindertime_morning.value == "") {
          this.toastr.warning("Please enter proper value of quantity and remindertime for night!!")
        }
        else {
          this.editedmedicinescheduledata["timephase"].push("night");
          this.editedmedicinescheduledata["remindertime"].push(remindertime_night.value);
          this.editedmedicinescheduledata["quantity"].push(quantity_night.value);
        }
      }
      this.editedmedicinescheduledata["medicinename"] = medicinename.value;
      if (day_mon.checked)
        this.editedmedicinescheduledata["days"].push("Mon");
      if (day_tue.checked)
        this.editedmedicinescheduledata["days"].push("Tue");
      if (day_wed.checked)
        this.editedmedicinescheduledata["days"].push("Wed");
      if (day_thus.checked)
        this.editedmedicinescheduledata["days"].push("Thus");
      if (day_fri.checked)
        this.editedmedicinescheduledata["days"].push("Fri");
      if (day_sat.checked)
        this.editedmedicinescheduledata["days"].push("Sun");
      if (day_sun.checked)
        this.editedmedicinescheduledata["days"].push("Sat");
      console.log(this.editedmedicinescheduledata);
      this.addmedicineschedule();
    }
  }
  addmedicineschedule() {

    this.service.addmedicineschedule(this.editedmedicinescheduledata).subscribe((res: any) => {
      if (res.success) {
        this.toastr.success(res.message);
        this.closeaddschedulemodal()
        this.ngOnInit();
      }

      else
        this.toastr.warning(res.message);
      // this.router.navigate(['login']);
    })
  }
  deleteschedule(medicine_id: any, index: any) {
    console.log(medicine_id);

    this.service.deletemedicineshedule(medicine_id).subscribe((result: any) => {
      if (result.success) {
        // this.medicinescheduledata = result.data;
        this.toastr.success(result.message);
        // console.log(this.medicinescheduledata);
        this.medicinescheduledata["medicine_id"] = this.medicinescheduledata["medicine_id"].filter((item: any) => {
          return this.medicinescheduledata["medicine_id"].indexOf(item) != index;
        })
        this.medicinescheduledata["days"] = this.medicinescheduledata["days"].filter((item: any) => {
          return this.medicinescheduledata["days"].indexOf(item) != index;
        })
        this.medicinescheduledata["medicinenames"] = this.medicinescheduledata["medicinenames"].filter((item: any) => {
          return this.medicinescheduledata["medicinenames"].indexOf(item) != index;
        })
        this.medicinescheduledata["otherdetails"] = this.medicinescheduledata["otherdetails"].filter((item: any) => {
          return this.medicinescheduledata["otherdetails"].indexOf(item) != index;
        })
        this.filtermedicinescheduledata = this.medicinescheduledata
      }
      else
        this.toastr.warning(result.message);
    });
  }
  filterschedules() {
    const medicinename: any = document.getElementById("search");

    const day_mon: any = document.getElementById("filterMon");
    const day_tue: any = document.getElementById("filterTue");
    const day_wed: any = document.getElementById("filterWed");
    const day_thus: any = document.getElementById("filterThus");
    const day_fri: any = document.getElementById("filterFri");
    const day_sat: any = document.getElementById("filterSat");
    const day_sun: any = document.getElementById("filterSun");

    const timephase_morning: any = document.getElementById("filterMorning");
    const timephase_afternoon: any = document.getElementById("filterAfternoon");
    const timephase_night: any = document.getElementById("filterNight");
    this.filtermedicinescheduledata = {
      days: [],
      medicine_id: [],
      medicinenames: [],
      otherdetails: []
    };

    console.log(medicinename.value);

    if (medicinename.value != "") {
      let filternames = []
      let temp: any = {
        days: [],
        medicine_id: [],
        medicinenames: [],
        otherdetails: []
      };
      filternames = this.medicinescheduledata["medicinenames"].filter((item: any) => {
        return item == medicinename.value;
      })
      for (let i of filternames) {
        let index = this.medicinescheduledata["medicinenames"].indexOf(medicinename.value);
        temp['days'].push(this.medicinescheduledata['days'][index])
        temp['medicine_id'].push(this.medicinescheduledata['medicine_id'][index])
        temp['medicinenames'].push(this.medicinescheduledata['medicinenames'][index])
        temp['otherdetails'].push(this.medicinescheduledata['otherdetails'][index])
      }
      this.filtermedicinescheduledata = temp
      console.log(this.filtermedicinescheduledata);
    }
    else {
      this.filtermedicinescheduledata = this.medicinescheduledata;
    }
    if (timephase_morning.checked || timephase_afternoon.checked || timephase_night.checked) {

      if (timephase_morning.checked) {
        let filterdays = [];
        let temp: any = {
          days: [],
          medicine_id: [],
          medicinenames: [],
          otherdetails: []
        };
        filterdays = this.filtermedicinescheduledata["otherdetails"].filter((item: any) => {
          return item['timephase'].includes("morning");
        })
        // console.log(filterdays);

        for (let i of filterdays) {
          let index = this.filtermedicinescheduledata["otherdetails"].indexOf(i);
          temp['days'].push(this.filtermedicinescheduledata['days'][index])
          temp['medicine_id'].push(this.filtermedicinescheduledata['medicine_id'][index])
          temp['medicinenames'].push(this.filtermedicinescheduledata['medicinenames'][index])
          temp['otherdetails'].push(this.filtermedicinescheduledata['otherdetails'][index])
        }
        this.filtermedicinescheduledata = temp
        // console.log(this.filtermedicinescheduledata);
      }
      if (timephase_afternoon.checked) {
        let filterdays = [];
        let temp: any = {
          days: [],
          medicine_id: [],
          medicinenames: [],
          otherdetails: []
        };
        filterdays = this.filtermedicinescheduledata["otherdetails"].filter((item: any) => {
          return item['timephase'].includes("afternoon");
        })
        // console.log(filterdays);

        for (let i of filterdays) {
          let index = this.filtermedicinescheduledata["otherdetails"].indexOf(i);
          temp['days'].push(this.filtermedicinescheduledata['days'][index])
          temp['medicine_id'].push(this.filtermedicinescheduledata['medicine_id'][index])
          temp['medicinenames'].push(this.filtermedicinescheduledata['medicinenames'][index])
          temp['otherdetails'].push(this.filtermedicinescheduledata['otherdetails'][index])
        }
        this.filtermedicinescheduledata = temp
      }
      if (timephase_night.checked) {
        let filterdays = [];
        let temp: any = {
          days: [],
          medicine_id: [],
          medicinenames: [],
          otherdetails: []
        };
        filterdays = this.filtermedicinescheduledata["otherdetails"].filter((item: any) => {
          return item['timephase'].includes("night");
        })
        // console.log(filterdays);

        for (let i of filterdays) {
          let index = this.filtermedicinescheduledata["otherdetails"].indexOf(i);
          temp['days'].push(this.filtermedicinescheduledata['days'][index])
          temp['medicine_id'].push(this.filtermedicinescheduledata['medicine_id'][index])
          temp['medicinenames'].push(this.filtermedicinescheduledata['medicinenames'][index])
          temp['otherdetails'].push(this.filtermedicinescheduledata['otherdetails'][index])
        }
        this.filtermedicinescheduledata = temp;
      }
    }
    console.log(this.filtermedicinescheduledata);

    if (day_mon.checked || day_tue.checked || day_wed.checked || day_thus.checked || day_fri.checked || day_sat.checked || day_sun.checked) {
      if (day_mon.checked) {
        let filterschduleday = []
        let temp: any = {
          days: [],
          medicine_id: [],
          medicinenames: [],
          otherdetails: []
        };
        filterschduleday = this.filtermedicinescheduledata["days"].filter((item: any) => {
          return item['day_name'].includes("Mon");
        })
        // console.log(filterdays);

        for (let i of filterschduleday) {
          let index = this.filtermedicinescheduledata["days"].indexOf(i);
          temp['days'].push(this.filtermedicinescheduledata['days'][index])
          temp['medicine_id'].push(this.filtermedicinescheduledata['medicine_id'][index])
          temp['medicinenames'].push(this.filtermedicinescheduledata['medicinenames'][index])
          temp['otherdetails'].push(this.filtermedicinescheduledata['otherdetails'][index])
        }
        this.filtermedicinescheduledata = temp;

      }
      if (day_tue.checked) {
        let filterschduleday = []
        let temp: any = {
          days: [],
          medicine_id: [],
          medicinenames: [],
          otherdetails: []
        };
        filterschduleday = this.filtermedicinescheduledata["days"].filter((item: any) => {
          return item['day_name'].includes("Tue");
        })
        // console.log(filterdays);

        for (let i of filterschduleday) {
          let index = this.filtermedicinescheduledata["days"].indexOf(i);
          temp['days'].push(this.filtermedicinescheduledata['days'][index])
          temp['medicine_id'].push(this.filtermedicinescheduledata['medicine_id'][index])
          temp['medicinenames'].push(this.filtermedicinescheduledata['medicinenames'][index])
          temp['otherdetails'].push(this.filtermedicinescheduledata['otherdetails'][index])
        }
        this.filtermedicinescheduledata = temp;
      }
      if (day_wed.checked) {
        let filterschduleday = []
        let temp: any = {
          days: [],
          medicine_id: [],
          medicinenames: [],
          otherdetails: []
        };
        filterschduleday = this.filtermedicinescheduledata["days"].filter((item: any) => {
          return item['day_name'].includes("Wed");
        })
        // console.log(filterdays);

        for (let i of filterschduleday) {
          let index = this.filtermedicinescheduledata["days"].indexOf(i);
          temp['days'].push(this.filtermedicinescheduledata['days'][index])
          temp['medicine_id'].push(this.filtermedicinescheduledata['medicine_id'][index])
          temp['medicinenames'].push(this.filtermedicinescheduledata['medicinenames'][index])
          temp['otherdetails'].push(this.filtermedicinescheduledata['otherdetails'][index])
        }
        this.filtermedicinescheduledata = temp;
      }
      if (day_thus.checked) {
        let filterschduleday = []
        let temp: any = {
          days: [],
          medicine_id: [],
          medicinenames: [],
          otherdetails: []
        };
        filterschduleday = this.filtermedicinescheduledata["days"].filter((item: any) => {
          return item['day_name'].includes("Thus");
        })
        // console.log(filterdays);

        for (let i of filterschduleday) {
          let index = this.filtermedicinescheduledata["days"].indexOf(i);
          temp['days'].push(this.filtermedicinescheduledata['days'][index])
          temp['medicine_id'].push(this.filtermedicinescheduledata['medicine_id'][index])
          temp['medicinenames'].push(this.filtermedicinescheduledata['medicinenames'][index])
          temp['otherdetails'].push(this.filtermedicinescheduledata['otherdetails'][index])
        }
        this.filtermedicinescheduledata = temp;
      }
      if (day_fri.checked) {
        let filterschduleday = []
        let temp: any = {
          days: [],
          medicine_id: [],
          medicinenames: [],
          otherdetails: []
        };
        filterschduleday = this.filtermedicinescheduledata["days"].filter((item: any) => {
          return item['day_name'].includes("Fri");
        })
        // console.log(filterdays);

        for (let i of filterschduleday) {
          let index = this.filtermedicinescheduledata["days"].indexOf(i);
          temp['days'].push(this.filtermedicinescheduledata['days'][index])
          temp['medicine_id'].push(this.filtermedicinescheduledata['medicine_id'][index])
          temp['medicinenames'].push(this.filtermedicinescheduledata['medicinenames'][index])
          temp['otherdetails'].push(this.filtermedicinescheduledata['otherdetails'][index])
        }
        this.filtermedicinescheduledata = temp;
      }
      if (day_sat.checked) {
        let filterschduleday = []
        let temp: any = {
          days: [],
          medicine_id: [],
          medicinenames: [],
          otherdetails: []
        };
        filterschduleday = this.filtermedicinescheduledata["days"].filter((item: any) => {
          return item['day_name'].includes("Sat");
        })
        // console.log(filterdays);

        for (let i of filterschduleday) {
          let index = this.filtermedicinescheduledata["days"].indexOf(i);
          temp['days'].push(this.filtermedicinescheduledata['days'][index])
          temp['medicine_id'].push(this.filtermedicinescheduledata['medicine_id'][index])
          temp['medicinenames'].push(this.filtermedicinescheduledata['medicinenames'][index])
          temp['otherdetails'].push(this.filtermedicinescheduledata['otherdetails'][index])
        }
        this.filtermedicinescheduledata = temp;
      }
      if (day_sun.checked) {
        let filterschduleday = []
        let temp: any = {
          days: [],
          medicine_id: [],
          medicinenames: [],
          otherdetails: []
        };
        filterschduleday = this.filtermedicinescheduledata["days"].filter((item: any) => {
          return item['day_name'].includes("Sun");
        })
        // console.log(filterdays);

        for (let i of filterschduleday) {
          let index = this.filtermedicinescheduledata["days"].indexOf(i);
          temp['days'].push(this.filtermedicinescheduledata['days'][index])
          temp['medicine_id'].push(this.filtermedicinescheduledata['medicine_id'][index])
          temp['medicinenames'].push(this.filtermedicinescheduledata['medicinenames'][index])
          temp['otherdetails'].push(this.filtermedicinescheduledata['otherdetails'][index])
        }
        this.filtermedicinescheduledata = temp;
      }
    }
    console.log(this.filtermedicinescheduledata);

    this.closefiltermodal()
  }
}
