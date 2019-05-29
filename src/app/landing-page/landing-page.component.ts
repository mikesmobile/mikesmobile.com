import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jsonService: JSONLDService
  ) {}

  openQuoteForm() {
    this.quoteForm.show();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.landing = servicesJSON.find((data) => {
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
    });
  }
}
