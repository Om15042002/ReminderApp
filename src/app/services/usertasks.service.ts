import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsertasksService {
  apiURL = "http://localhost:3000";
  constructor(private http: HttpClient) { }
  addmedicineschedule(scheduledata: any) {
    // console.log(scheduledata);
    scheduledata = { ...scheduledata, userid: localStorage.getItem("userid") };
    // console.log(scheduledata);
    return this.http.post(this.apiURL + '/addmedicine', scheduledata);

  }
  getmedicineschedules() {
    let queryParams = new HttpParams();
    let userid = localStorage.getItem('userid');
    if (userid != null) {
      queryParams = queryParams.append("userid", userid);

    }
    return this.http.get(this.apiURL + '/getmedicineschedule', { params: queryParams });

  }
}
