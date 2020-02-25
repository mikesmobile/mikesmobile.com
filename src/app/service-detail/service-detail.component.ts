import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

import { JSONLDService } from '../services/jsonld.service';

import servicesJSON from '../../assets/json/services.json';
import priceJSON from '../../assets/json/prices.json';

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
  price;

  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  openQuoteForm() {
    this.quoteForm.show();
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jsonService: JSONLDService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.service = servicesJSON.find((data) => {
        if (data.slug === params['slug']) {
          if (data.offers) {
            this.jsonService.updateJSONLD({
              name: data.title,
              description: data.tileText,
              image: data.tileImage,
              offers: data.offers
            });
            return true;
          } else {
            this.jsonService.updateJSONLD({
              name: data.title,
              description: data.tileText,
              image: data.tileImage,
              offers: ''
            });
            return true;
          }
        }

        return false;
      });

      this.price = priceJSON.find((data) => {
        if (data.title === params['slug']) {
          return true;
        }

        return false;
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
