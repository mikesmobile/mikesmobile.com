import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryImage } from 'ngx-gallery';

import { JSONLDService } from '../services/jsonld.service';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

import servicesJSON from '../../assets/json/services.json';
import priceJSON from '../../assets/json/prices.json';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {
  product: any;
  price;
  gallery_images: NgxGalleryImage[];

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
      this.product = servicesJSON.find((data) => {
        if (data.slug === params['slug']) {
          this.jsonService.updateJSONLD({
            name: data.title,
            description: data.tileText,
            image: data.tileImage
          });
          return true;
        }

        return false;
      });

      this.price = priceJSON.find((data) => {
        if (data.title === params['slug']) {
          return true;
        }

        return false;
      });

      if (!this.product) {
        this.router.navigate(['/']);
        return;
      }

      if (this.product.thumbImages && this.product.thumbImages.length > 1) {
        this.gallery_images = this.product.thumbImages;
      }
    });
  }
}
