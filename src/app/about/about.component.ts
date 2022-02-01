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
  constructor(){
    this.changePic = false;
  }

  imgSrc: string = "/assets/images/about/8.26GroupPicSrs.jpg";

  onMouseOver(): void {
    this.imgSrc = "/assets/images/about/8.26GroupPicFun.jpg";
  }

  onMouseOut(): void {
    this.imgSrc = "/assets/images/about/8.26GroupPicSrs.jpg";
  }

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
