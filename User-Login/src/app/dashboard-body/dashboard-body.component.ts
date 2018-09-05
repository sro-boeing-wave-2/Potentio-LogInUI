import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../sign-up.service';
@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.css']
})
export class DashboardBodyComponent implements OnInit {

  constructor(private signupservice: SignUpService) {
  }

  public Domain = [];
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

}
