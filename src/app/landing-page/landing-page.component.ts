import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryImage } from 'ngx-gallery';
import * as AOS from 'aos';
import { JSONLDService } from '../services/jsonld.service';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

import phoneListJSON from '../../assets/json/phoneList.json';
import servicesJSON from '../../assets/json/services.json';
import { fade, moveLeft, moveRight } from '../animation/animation';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass'],
  animations: [fade, moveLeft, moveRight]
})
export class LandingPageComponent implements OnInit {
  phone;
  phoneList = [];
  landing;
  security_door_gallery;
  security_window_gallery;
  gallery_images: NgxGalleryImage[];

  @Input() categories = [
    'Chimney Services'
  ];

  gasReviews = [];
  chimneyServiceList = [];
  doorsServiceList = [];


  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jsonService: JSONLDService
  ) { }

  openQuoteForm() {
    this.quoteForm.show();
  }


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

  
  slugCheckForPhoneList(slug) {
    for (let i = 0; i < this.phoneList.length; i++) {
      if (this.phoneList[i].title === slug && this.phoneList[i].phone) {
        return this.phoneList[i].phone
      }
    }
    return this.phoneList[0].phone
  }

  ngOnInit() {
    AOS.init({
      once: true,
      easing: 'ease-out-back',
      duration: 700
    });

    phoneListJSON.forEach((data) => {
      this.phoneList.push(data);
    });

    this.route.params.subscribe((params) => {

      this.phone = this.slugCheckForPhoneList(params['slug'])
      this.landing = servicesJSON.find((data) => {
        if (data.slug === params['slug']) {
          if (data.offers) {
            console.log(this.landing)
            this.jsonService.updateJSONLD({
              name: data.title,
              description: data.tileText,
              image: data.tileImage,
              offers: data.offers
            });
            return true;
          } else {
            console.log(data)
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

      this.chimneyServiceList = [];
      this.doorsServiceList = [];

      servicesJSON.forEach((data) => {
        if (data.category === 'Chimney Services') {
          this.chimneyServiceList.push(data);
        }
        if (data.category === 'Door and Window Screens') {
          // for the screen doors page
          if(data.subcategory == "Door"){
            this.doorsServiceList.push(data);
          }

        }
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
