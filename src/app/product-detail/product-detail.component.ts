import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryImage } from 'ngx-gallery';

import { JSONLDService } from '../services/jsonld.service';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

import phoneListJSON from '../../assets/json/phoneList.json';
import servicesJSON from '../../assets/json/services.json';
import { ModalDirective } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {
  phone;
  phoneList = []
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
  doorsReviews = [
    {
      "name": "Shellie M.",
      "dataReviewId": "VU3Mvq5-41cZSbCZY2K0RA",
      "data-hostname": "www.yelp.com",
      "link1": "https://www.yelp.com/user_details?userid=P2zWedA2jwI52VotGhJFCA",
      "link2": "https://www.yelp.com/biz/mikes-mobile-screen-and-chimney-service-sacramento-2?hrid=VU3Mvq5-41cZSbCZY2K0RA",
      "link3": "https://www.yelp.com/biz/FfkoDxdGjADTD61dzGvdLg",
      "content": "We have had Mike's mobile do 4 projects at our house and have been happy with all of them, they built new screen doors for our sliding glass doors, then install a beautiful view guard security screen door on the front door next was installing a wonderful majestic gas fireplace insert then repairing the chimney top and custom building a Beautiful cap. All the workers are polite, on time, efficient and clean up the job site when done. Highly recommend this business..."
    },
    {
      "name": "Stefani R.",
      "dataReviewId": "EL71Id6x2OKQh_z8yA2fYQ",
      "data-hostname": "www.yelp.com",
      "link1": "https://www.yelp.com/user_details?userid=Kj-7-u98ciWjs_GLXFGAWA",
      "link2": "https://www.yelp.com/biz/mikes-mobile-screen-and-chimney-service-sacramento-2?hrid=EL71Id6x2OKQh_z8yA2fYQ",
      "link3": "https://www.yelp.com/biz/FfkoDxdGjADTD61dzGvdLg",
      "content": "I wanted a security screen door without the look of a security screen door - you know the heavy ones with bars that slam shut. Enter the Viewguard! We've had our door for about a week now and have zero regrets. The salesperson and the installer were both professional, no pressure, quick and polite. I would recommend..."
    },
    {
      "name": "Larry R.",
      "dataReviewId": "VgCvZJ26aSMQhQNUWRbpDg",
      "data-hostname": "www.yelp.com",
      "link1": "https://www.yelp.com/user_details?userid=wEQG6EiXtnTNgO37uaLnEw",
      "link2": "https://www.yelp.com/biz/mikes-mobile-screen-and-chimney-service-sacramento-2?hrid=VgCvZJ26aSMQhQNUWRbpDg",
      "link3": "https://www.yelp.com/biz/FfkoDxdGjADTD61dzGvdLg",
      "content": "Today we had our second View guard door installed on the back of our home heading out to the patio.  The installation is perfect!   New threshold ( built onsite) with no gaps or space openings and perfectly balanced. Andy did a perfect job and I can't thank him enough.  Just like our first door? It closes and opens with zero noise, built right into the jam of the house..."
    }
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jsonService: JSONLDService
  ) { }

  slugCheckForPhoneList(slug) {
    for (let i = 0; i < this.phoneList.length; i++) {
      if (this.phoneList[i].title === slug && this.phoneList[i].phone) {
        return this.phoneList[i].phone
      }
    }
    return this.phoneList[0].phone

  }

  ngOnInit() {

    phoneListJSON.forEach((data) => {
      this.phoneList.push(data);
    });

    this.route.params.subscribe((params) => {

      this.phone = this.slugCheckForPhoneList(params['slug'])


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
