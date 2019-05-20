import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QuoteFormComponent } from '../quote-form/quote-form.component';

import servicesJSON from '../../assets/json/services.json';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: [
    './grid.component.sass',
    '../flipcard-list/flipcard-list.component.sass'
  ]
})
export class GridComponent implements OnInit {
  service;
  serviceList = [];

  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  constructor(private route: ActivatedRoute, private router: Router) {}

  openQuoteForm() {
    this.quoteForm.show();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.service = servicesJSON.find((data) => {
        return data.slug === params['slug'];
      });

      if (!this.service) {
        this.router.navigate(['/']);
        return;
      }
    });

    servicesJSON.forEach((data) => {
      this.serviceList.push(data);
    });
  }
}
