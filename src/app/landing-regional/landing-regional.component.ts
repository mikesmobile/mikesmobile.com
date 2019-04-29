import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import regionalJSON from '../../assets/json/regional_services.json';

@Component({
  selector: 'app-landing-regional',
  templateUrl: './landing-regional.component.html',
  styleUrls: ['./landing-regional.component.sass']
})
export class LandingRegionalComponent implements OnInit {
  private routeSub: any;

  region;
  service;
  otherServiceCards;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeSub = this.route.url.subscribe((params) => {
      const serviceSlug = params[0].path;
      const regionalSlug = params[1].path;

      this.region = regionalJSON.find((data) => {
        return data.slug === regionalSlug;
      });

      this.service = this.region.services.find((data) => {
        return data.slug === serviceSlug;
      });
      // TODO: Redirect to /regions if no services found

      this.otherServiceCards = this.region.services
        .filter((data) => {
          return data.slug !== serviceSlug;
        })
        .map((data) => {
          return {
            title: data.title,
            text: data.description
          };
        });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
