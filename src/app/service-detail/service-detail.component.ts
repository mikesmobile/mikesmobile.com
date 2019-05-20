import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryImage } from 'ngx-gallery';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

import servicesJSON from '../../assets/json/services.json';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: [
    './service-detail.component.sass',
    '../flipcard-list/flipcard-list.component.sass'
  ]
})
export class ServiceDetailComponent implements OnInit {
  service: any;

  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  openQuoteForm() {
    this.quoteForm.show();
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.service = servicesJSON.find((data) => {
        return data.slug === params['slug'];
      });

      if (!this.service) {
        this.router.navigate(['/']);
        return;
      }

      if (this.service.fullTileImage) {
        this.service.tileImage = this.service.fullTileImage;
      }
    });
  }
}
