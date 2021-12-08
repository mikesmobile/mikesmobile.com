import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { JSONLDService } from '../services/jsonld.service';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

import servicesJSON from '../../assets/json/services.json';
import priceJSON from '../../assets/json/prices.json';
import { SlideShowModalComponent } from '../slideShowModal/slideShowModal.component';

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
  price;
  reviews;

  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jsonService: JSONLDService
  ) {}

  @ViewChild(SlideShowModalComponent)
  private slideShowModal: SlideShowModalComponent;

  openSlideShowModal(title) {
    this.slideShowModal.show();
    this.slideShowModal.setSlide(title);
  }

  openQuoteForm() {
    this.quoteForm.show();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.service = servicesJSON.find((data) => {
        if (data.slug === params['slug']) {
          if (data.offers) {
            this.jsonService.updateJSONLD({
              name: data.title,
              description: data.tileText,
              image: data.tileImage,
              offers: data.offers,
            });
            return true;
          } else {
            this.jsonService.updateJSONLD({
              name: data.title,
              description: data.tileText,
              image: data.tileImage,
              offers: '',
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
    });

    servicesJSON.forEach((data) => {
      if(data.reviews){
        this.reviews = data.reviews
      }
      this.serviceList.push(data);
    });
  }
}
