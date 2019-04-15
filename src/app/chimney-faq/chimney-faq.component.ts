import { Component, OnInit } from '@angular/core';

import chimneyFAQJSON from '../../assets/json/chimney-faq.json';

@Component({
  selector: 'app-chimney-faq',
  templateUrl: './chimney-faq.component.html',
  styleUrls: ['./chimney-faq.component.sass']
})
export class ChimneyFaqComponent implements OnInit {
  public faqs = [];

  ngOnInit() {
    chimneyFAQJSON.forEach((data) => {
      this.faqs.push(data);
    });
  }
}
