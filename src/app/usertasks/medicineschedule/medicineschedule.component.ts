import { Component, ViewEncapsulation } from '@angular/core';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { FormControl, FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-medicineschedule',
  templateUrl: './medicineschedule.component.html',
  styleUrls: ['./medicineschedule.component.css']
})
export class MedicinescheduleComponent {

  openfiltermodal() {
    const modal=document.getElementById("myModal")
    if(modal!=null)
        modal.style.display='block'
  }
  closefiltermodal(){
    const modal=document.getElementById("myModal")
    if(modal!=null)
        modal.style.display='none'
  }
  openaddschedulemodal(filtercontent: any) {

  }
  constructor( private builder: FormBuilder) {

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
