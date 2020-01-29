import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MouseEvent } from '@agm/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { AgmPolygon, LatLngLiteral, PolygonManager } from '@agm/core';
import regionalJSON from '../../assets/json/regional_services.json';

@Component({
  selector: 'app-landing-regional',
  templateUrl: './landing-regional.component.html',
  styleUrls: ['./landing-regional.component.sass'],

  animations: [
    trigger('infobox', [
      state(
        'normal',
        style({
          backgroundColor: 'red',
          transform: 'translateX(0)'
        })
      ),
      state(
        'clicked',
        style({
          backgroundColor: 'black',
          transition: 'opacity 3s ease-in-out',
          opacity: '0',
          transform: 'translateX(100px)'
        })
      ),
      transition('normal <=> clicked', animate(300))
      // transition('clicked => normal', animate(800))
    ])
  ]
})
export class LandingRegionalComponent implements OnInit {
  region;
  service;
  review1;
  review2;
  review3;
  _reload = true;
  cleanReviews;
  url: SafeResourceUrl;
  safePipe;
  otherServiceCards;
  state = 'clicked';
  maplink;
  clicked: string = 'none';
  scrollwheel = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public sanitizer: DomSanitizer
  ) {}

  mapClicked($event: MouseEvent) {
    this.scrollwheel = true;
    this.clicked = 'none';
  }

  clickedMarker(label: string) {
    this.clicked = label;
    this.state == 'normal' ? (this.state = 'clicked') : (this.state = 'normal');
  }

  ngOnInit() {
    this.route.url.subscribe((params) => {
      const regionalSlug = params[1].path;

      this.region = regionalJSON.find((data) => {
        return data.slug === regionalSlug;
      });

      // No region found
      if (!this.region) {
        this.router.navigate(['/regions']);
        return;
      }
      this.review1 = 'bASTk8xVt-yEmQHXVcX1dQ';
      this.review2 = this.region.reviews[1].dataReviewId;
      this.review3 = this.region.reviews[2].dataReviewId;
      console.log(this.review1);

      setTimeout(() => {
        this._reload = false;
        console.log('reload');
      }, 2000);
      setTimeout(() => {
        this._reload = true;
        console.log('reload');
      }, 3000);
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.region.map);
    });
  }
}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

interface region {
  paths: Array<LatLngLiteral>;
  fillColor: string;
  visible: boolean;
  label?: string;
}
