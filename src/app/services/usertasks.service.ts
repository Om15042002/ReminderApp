import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsertasksService {
  apiURL = "http://localhost:3000";
  constructor(private http: HttpClient) { }
  addmedicineschedule(scheduledata:any){
    // console.log(scheduledata);
    scheduledata={...scheduledata,userid:localStorage.getItem("userid")};
    // console.log(scheduledata);
    return this.http.post(this.apiURL + '/addmedicine', scheduledata);
    
  }
}
