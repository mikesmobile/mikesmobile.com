import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import servicesJSON from '../../assets/json/services.json';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  private routeSub: any;
  landing;
  security_door_gallery;
  security_window_gallery;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.landing = servicesJSON.find((data) => {
        return data.slug === params['slug'];
      });

      if (this.landing.images) {
        if (this.landing.images["Security Screen Doors"]) {
          this.security_door_gallery = this.landing.images["Security Screen Doors"];
        }

        if (this.landing.images["Security Window Screens"]) {
          this.security_window_gallery = this.landing.images["Security Window Screens"];
        }
      }
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
