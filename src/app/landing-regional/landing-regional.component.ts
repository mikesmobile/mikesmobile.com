import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import regionalJSON from '../../assets/json/regional_services.json';

@Component({
  selector: 'app-landing-regional',
  templateUrl: './landing-regional.component.html',
  styleUrls: ['./landing-regional.component.sass']
})
export class LandingRegionalComponent implements OnInit {
  region;
  service;
  otherServiceCards;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.url.subscribe((params) => {
      const serviceSlug = params[0].path;
      const regionalSlug = params[1].path;

      this.region = regionalJSON.find((data) => {
        return data.slug === regionalSlug;
      });

      // No region found
      if (!this.region) {
        this.router.navigate(['/regions']);
        return;
      }

      this.service = this.region.services.find((data) => {
        return data.slug === serviceSlug;
      });

      // Region found, services not found
      if (!this.service) {
        this.router.navigate(['/regions']);
        return;
      }

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
}
