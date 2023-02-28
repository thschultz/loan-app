import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { InterestPaidComponent } from '../interest-paid/interest-paid.component';
import { MonthlyPaymentComponent } from '../monthly-payment/monthly-payment.component';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  constructor(private cookieService: CookieService, private router: Router) {
  }

  ngOnInit(): void {
  }

}
