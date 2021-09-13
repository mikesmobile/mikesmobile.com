import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryImage } from 'ngx-gallery';

import { JSONLDService } from '../services/jsonld.service';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

import servicesJSON from '../../assets/json/services.json';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {
  landing;
  security_door_gallery;
  security_window_gallery;
  gallery_images: NgxGalleryImage[];

  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jsonService: JSONLDService
  ) { }

  openQuoteForm() {
    this.quoteForm.show();
  }

  gasReviews = [
    {
      "name": "Joe C.",
      "dataReviewId": "OxF9vvRwY0kbXEwUZcCZ2Q",
      "data-hostname": "www.yelp.com",
      "link1": "https://www.yelp.com/user_details?userid=j6BFs-kFBr8ZU7YeF7iliA",
      "link2": "https://www.yelp.com/biz/mikes-mobile-screen-and-chimney-service-hayward?hrid=OxF9vvRwY0kbXEwUZcCZ2Q",
      "link3": "https://www.yelp.com/biz/JB6L1DF0e8FVgHvPUf9RfA",
      "content": "Really excellent work! They were able to fit me in short notice just before thanksgiving. Overall the fireplace looks almost brand new. Additionally the technician gave us a little lesson on how to maintain the fireplace going forward."
    },
    {
      "name": "Emily L.",
      "dataReviewId": "qJmSlxYj3zbYTCfrd3UtnA",
      "data-hostname": "www.yelp.com",
      "link1": "https://www.yelp.com/user_details?userid=GaPfaaQeBIVh_DqEopUsgg",
      "link2": "https://www.yelp.com/biz/mikes-mobile-screen-and-chimney-service-modesto?hrid=qJmSlxYj3zbYTCfrd3UtnA",
      "link3": "https://www.yelp.com/biz/K7py6eBfMdHnmi4ssi0MKw",
      "content": "COVID hasn't stopped mikes mobile from providing great service! I called for my annual cleaning for my gas fireplace and their tech arrived with a mask and gloves, socially distanced and still took the time to explain everything he did to my system this visit. I received great service and my fire place looks brand new! Best in the Modesto area!"
    },
  ]

  doorsReviews = [
    {
      "name": "Barb W.",
      "dataReviewId": "wxh-gPv8XLhmA4IiEjFa8A",
      "data-hostname": "www.yelp.com",
      "link1": "https://www.yelp.com/user_details?userid=vmpaNu-NXE1ewihygP5NLw",
      "link2": "https://www.yelp.com/biz/mikes-mobile-screen-and-chimney-service-sacramento-2?hrid=wxh-gPv8XLhmA4IiEjFa8A",
      "link3": "https://www.yelp.com/biz/FfkoDxdGjADTD61dzGvdLg",
      "content": "I love my security screen door. The team arrived on time and installed my door with precision. The installers were kind, friendly and professional. My door looks fantastic!!"
    },
    {
      "name": "Stefani R.",
      "dataReviewId": "EL71Id6x2OKQh_z8yA2fYQ",
      "data-hostname": "www.yelp.com",
      "link1": "https://www.yelp.com/user_details?userid=Kj-7-u98ciWjs_GLXFGAWA",
      "link2": "https://www.yelp.com/biz/mikes-mobile-screen-and-chimney-service-sacramento-2?hrid=EL71Id6x2OKQh_z8yA2fYQ",
      "link3": "https://www.yelp.com/biz/FfkoDxdGjADTD61dzGvdLg",
      "content": "I wanted a security screen door without the look of a security screen door - you know the heavy ones with bars that slam shut. Enter the Viewguard! We've had our door for about a week now and have zero regrets. The salesperson and the installer were both professional, no pressure, quick and polite. I would recommend."
    },
    {
      "name": "Stephanie B.",
      "dataReviewId": "FOPy-hgM0zdxUqdSNux16w",
      "data-hostname": "www.yelp.com",
      "link1": "https://www.yelp.com/user_details?userid=bdN26bzhppk-oJGqcOZBZw",
      "link2": "https://www.yelp.com/biz/mikes-mobile-screen-and-chimney-service-sacramento-2?hrid=FOPy-hgM0zdxUqdSNux16w",
      "link3": "https://www.yelp.com/biz/FfkoDxdGjADTD61dzGvdLg",
      "content": "We purchased a security door and love it. Not only does it look nice but the air flow we now get in our house is great. We have had it for months now and everyone is always complimenting us on it and asking where we got it. I am very glad we decided to go through Mikes Mobile."
    }
    
  ]


  ngOnInit() {

    this.route.params.subscribe((params) => {
      this.landing = servicesJSON.find((data) => {
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

      if (!this.landing) {
        this.router.navigate(['/']);
        return;
      }

      if (this.landing.images) {
        if (this.landing.images['Security Screen Doors']) {
          this.security_door_gallery = this.landing.images[
            'Security Screen Doors'
          ];
        }

        if (this.landing.images['Security Window Screens']) {
          this.security_window_gallery = this.landing.images[
            'Security Window Screens'
          ];
        }
      }
      if (this.landing.thumbImages && this.landing.thumbImages.length > 1) {
        this.gallery_images = this.landing.thumbImages;
      }
    });
  }
}
