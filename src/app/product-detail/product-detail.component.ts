import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryImage } from 'ngx-gallery';

import { JSONLDService } from '../services/jsonld.service';
import { QuoteFormComponent } from '../quote-form/quote-form.component';


import servicesJSON from '../../assets/json/services.json';
import priceJSON from '../../assets/json/prices.json';
import { ModalDirective } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {
  product: any;
  video: string = 'https://www.facebook.com/watch/?v=1264548423571761';
  price;
  gallery_images: NgxGalleryImage[];
  delrayImages: NgxGalleryImage[];
  phenomImages: NgxGalleryImage[];

  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  openQuoteForm() {
    this.quoteForm.show();
  };

  @ViewChild('videoModal') public videoModal: ModalDirective;
  show() {
    this.videoModal.show();
  }

  hide() {
    this.videoModal.hide();
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jsonService: JSONLDService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.product = servicesJSON.find((data) => {
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

      if (!this.product) {
        this.router.navigate(['/']);
        return;
      }

      if (this.product.thumbImages && this.product.thumbImages.length > 1) {
        this.gallery_images = this.product.thumbImages;
      }
      this.delrayImages = [
        {
          small: "/assets/images/gasFireplacepages/DelraySquare/Square1.png",
          medium: "/assets/images/gasFireplacepages/DelraySquare/Square1.png",
          big: "/assets/images/gasFireplacepages/DelraySquare/Square1.png",

        },
        {
          small: "/assets/images/gasFireplacepages/DelraySquare/Square2.png",
          medium: "/assets/images/gasFireplacepages/DelraySquare/Square2.png",
          big: "/assets/images/gasFireplacepages/DelraySquare/Square2.png",

        },
        {
          small: "/assets/images/gasFireplacepages/DelraySquare/Square4.png",
          medium: "/assets/images/gasFireplacepages/DelraySquare/Square4.png",
          big: "/assets/images/gasFireplacepages/DelraySquare/Square4.png",

        },
        {
          small: "/assets/images/gasFireplacepages/DelraySquare/Square5.png",
          medium: "/assets/images/gasFireplacepages/DelraySquare/Square5.png",
          big: "/assets/images/gasFireplacepages/DelraySquare/Square5.png",

        },
        {
          small: "/assets/images/gasFireplacepages/DelraySquare/DRSQ38-specs.gif",
          medium: "/assets/images/gasFireplacepages/DelraySquare/DRSQ38-specs.gif",
          big: "/assets/images/gasFireplacepages/DelraySquare/DRSQ38-specs.gif",

        },

      ];
      this.phenomImages = [
        {
          small: "/assets/images/gasFireplacepages/Phenom/Phenom1.png",
          medium: "/assets/images/gasFireplacepages/Phenom/Phenom1.png",
          big: "/assets/images/gasFireplacepages/Phenom/Phenom1.png",

        },
        {
          small: "/assets/images/gasFireplacepages/Phenom/Phenom2.png",
          medium: "/assets/images/gasFireplacepages/Phenom/Phenom2.png",
          big: "/assets/images/gasFireplacepages/Phenom/Phenom2.png",

        },
        {
          small: "/assets/images/gasFireplacepages/Phenom/Phenom3.png",
          medium: "/assets/images/gasFireplacepages/Phenom/Phenom3.png",
          big: "/assets/images/gasFireplacepages/Phenom/Phenom3.png",
        },
        {
          small: "/assets/images/gasFireplacepages/Phenom/Phenom4.png",
          medium: "/assets/images/gasFireplacepages/Phenom/Phenom4.png",
          big: "/assets/images/gasFireplacepages/Phenom/Phenom4.png",
        },
        {
          small: "/assets/images/gasFireplacepages/Phenom/P42DF-Specs.png",
          medium: "/assets/images/gasFireplacepages/Phenom/P42DF-Specs.png",
          big: "/assets/images/gasFireplacepages/Phenom/P42DF-Specs.png",
        },
      ]
    });
  }
}
