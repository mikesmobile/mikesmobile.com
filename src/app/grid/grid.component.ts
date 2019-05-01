import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryImage } from 'ngx-gallery';

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
export class GridComponent implements OnInit, OnDestroy {
  private routeSub: any;

  service;
  serviceList = [];

  gallery_images: NgxGalleryImage[];

  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  constructor(private route: ActivatedRoute, private router: Router) {}

  openQuoteForm() {
    this.quoteForm.show();
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.service = servicesJSON.find((data) => {
        return data.slug === params['slug'];
      });
      if (!this.service) {
        this.router.navigate(['/']);
      } else {
        this.gallery_images = this.service.recentInstallImages;
      }
    });

    servicesJSON.forEach((data) => {
      this.serviceList.push(data);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
