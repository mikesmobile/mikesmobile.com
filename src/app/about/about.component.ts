import { Component, OnInit, ViewChild } from '@angular/core';

import { QuoteFormComponent } from '../quote-form/quote-form.component';
import employeesJSON from '../../assets/json/employees.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent implements OnInit {
  changePic: boolean;
  employees = [];

  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  openQuoteForm() {
    this.quoteForm.show();
  }
  ngOnInit() {
    employeesJSON.forEach((data) => {
      this.employees.push(data);
    });
  }


}
