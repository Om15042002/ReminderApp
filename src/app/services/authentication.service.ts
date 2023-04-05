import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }
  apiURL = "http://localhost:3000";
  static isloggedin:boolean=false;

  loginEmitter=new EventEmitter<boolean>();
  raiseDataEmitterEvent(isloggedin:boolean){
    this.loginEmitter.emit(isloggedin);
  }
  registeruser(user: any) {
    console.log('====================================');
    console.log(user);
    console.log('====================================');
    return this.http.post(this.apiURL + '/adduser', user)
  }

  loginvalidation(user: any) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("uname",user.uname );
    queryParams = queryParams.append("upassword",user.upassword );
    return this.http.get(this.apiURL + "/login", { params: queryParams })
  }
}
