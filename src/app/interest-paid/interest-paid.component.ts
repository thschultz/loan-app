// WEB 425 Angular with TypeScript
// Contributors

// Contributors:
// Richard Krasso
// Thomas James Schultz

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interest-paid',
  templateUrl: './interest-paid.component.html',
  styleUrls: ['./interest-paid.component.css']
})
export class InterestPaidComponent implements OnInit {

  @Input() interestPaidTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
