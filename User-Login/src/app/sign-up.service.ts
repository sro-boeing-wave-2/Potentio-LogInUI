import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './User';
import { HttpHeaders } from '@angular/common/http';
import { Login} from './Login';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private header: HttpHeaders;
  constructor(private http: Http) {
    this.header = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

  }

  USerSignUp(user: User) {
    return this.http.post("http://localhost:5050/api/Users/Register", user);
  }
  USerLogIn(user: Login) {
    return this.http.post("http://localhost:5050/api/Users/Login", user);
  }
  UserLogOut(){
    return this.http.post("http://localhost:5050/api/Users/Logout","");
  }
  GetDomain(){
    return this.http.get("https://localhost:44334/api/questions/domain");
    
  }
}
