import { Component, OnInit } from '@angular/core';

import faqJSON from '../../assets/json/faq.json';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.sass']
})
export class FaqListComponent implements OnInit {
  faqSections = [];

  ngOnInit() {
    faqJSON.forEach((data) => {
      this.faqSections.push(data);
    });
  }
}
