import { Component, OnInit } from '@angular/core';


// tells which css and html files to use
@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})

// export statement
export class BaseLayoutComponent implements OnInit {

  title: string;

  constructor() {
    this.title = 'Loan App';
  }

  ngOnInit(): void {
  }

}
