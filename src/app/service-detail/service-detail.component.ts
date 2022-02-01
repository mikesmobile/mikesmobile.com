import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteFormComponent } from '../quote-form/quote-form.component';
import * as AOS from 'aos';
import { JSONLDService } from '../services/jsonld.service';

import servicesJSON from '../../assets/json/services.json';
import priceJSON from '../../assets/json/prices.json';
import { fade, moveLeft, moveRight } from '../animation/animation';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: [
    './service-detail.component.sass',
    '../flipcard-list/flipcard-list.component.sass'
  ],
  animations: [fade, moveLeft, moveRight]
})
export class ServiceDetailComponent implements OnInit {
  service: any;
  price;
  img;
  windowsServiceList = [];

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
    AOS.init({
      once: true,
      easing: 'ease-out-back',
      duration: 700
    });

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

      // servicesJSON.forEach((data) => {
      //   if (data.category === 'Door and Window Screens') {
      //     // for the screen doors page
      //     if(data.slug){
      //       this.windowsServiceList.push(data);
      //     }

      //   }
      // });
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
        this.img = this.service.fullTileImage;
      } else {
        this.img = this.service.tileImage;
      }
    });
  }
}
