import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loanAmount: number = 0;
  interestRate: number = 0;
  numberOfYears: number = 0;
  interestPaidTotal: number = 0;
  monthlyPaymentTotal: number = 0;
  calculatorForm: FormGroup = new FormGroup({});
  monthlyPayment: number = 0;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.calculatorForm = this.fb.group({
      loanAmount: ['', Validators.required],
      interestRate: ['', Validators.required],
      numberOfYears: ['', Validators.required]

    })
  }

  get form() { return this.calculatorForm.controls; }

  calculatePayment() {

    this.monthlyPayment = (this.form.loanAmount.value * (((this.form.interestRate.value / 100) / 12) * Math.pow((((this.form.interestRate.value / 100) / 12) + 1), (this.form.numberOfYears.value * 12))) / (Math.pow((1 + ((this.form.interestRate.value / 100) / 12)), (this.form.numberOfYears.value * 12)) - 1));

    this.monthlyPaymentTotal = parseFloat(this.monthlyPayment.toFixed(2));

    this.interestPaidTotal = (this.monthlyPaymentTotal * this.form.numberOfYears.value * 12) - this.form.loanAmount.value;

  }

}
