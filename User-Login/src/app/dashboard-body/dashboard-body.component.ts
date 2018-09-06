import { Component, OnInit, Inject } from '@angular/core';
import { SignUpService } from '../sign-up.service';
import { DOCUMENT } from '@angular/common';
import { ValidUser} from '../ValidUser';
import { resource } from 'selenium-webdriver/http';
@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.css']
})
export class DashboardBodyComponent implements OnInit {

  constructor(private signupservice: SignUpService, @Inject(DOCUMENT) private document: any) {
  }

  public Domain = [];
  selectedUser:ValidUser;
  ngOnInit() {
    this.GetDomainValue();
    // console.log(this.Domain);
  }
  GetDomainValue() {
    this.signupservice.GetDomain().subscribe(result => {
      this.Domain.push(...result.json())
      console.log(this.Domain[1]);
    });

  }
  private quizurl = "http://localhost:4500/start";
  private url="";

  GetUserID() {
    return this.signupservice.GetUser().subscribe();
  }

  async RedirectToQuiz(DomainName: string) {
    // this.signupservice.GetUser().subscribe(result=>{ this.selectedUser =result.json();
    // var userid = await this.GetUserID();
    // console.log(userid);
    var uid = this.GetUserID();
    console.log(uid);
      // this.url = `${this.quizurl}/${this.selectedUser.id}/${DomainName}`;
    // });
   // console.log(this.url);

  // this.document.location.href = this.url;

  }

}
