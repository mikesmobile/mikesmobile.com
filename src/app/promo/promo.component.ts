import { Component, OnInit, ViewChild } from '@angular/core';
import { QuoteFormPromoComponent } from '../quote-form-promo/quote-form-promo.component';
import { JSONLDService } from '../services/jsonld.service';

import servicesJSON from '../../assets/json/services.json';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.sass']
})
export class PromoComponent implements OnInit {
  service: any;

  @ViewChild(QuoteFormPromoComponent)
  private quoteForm: QuoteFormPromoComponent;
  openQuoteForm() {
    this.quoteForm.show();
  }
  constructor(private jsonService: JSONLDService) {}

  ngOnInit() {
    const promoService = 'chimney-cleaning';
    this.service = servicesJSON.find((data) => {
      if (data.slug === promoService) {
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
  }
}
