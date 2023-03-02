// WEB 425 Angular with TypeScript
// Contributors

// Contributors:
// Richard Krasso
// Thomas James Schultz

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-monthly-payment',
  templateUrl: './monthly-payment.component.html',
  styleUrls: ['./monthly-payment.component.css']
})
export class MonthlyPaymentComponent {

  @Input() monthlyPaymentTotal: number;

  constructor() { }

}
