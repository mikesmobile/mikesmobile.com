import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MouseEvent } from '@agm/core';
import * as AOS from 'aos';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { AgmPolygon, LatLngLiteral, PolygonManager } from '@agm/core';
import regionalSecurityJSON from '../../assets/json/regionalSecurity.json';

@Component({
  selector: 'app-landing-regional-security',
  templateUrl: './landing-regional-security.component.html',
  styleUrls: ['./landing-regional-security.component.sass'],
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


export class LandingRegionalSecurityComponent implements OnInit {
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
  ) { }

  mapClicked($event: MouseEvent) {
    this.scrollwheel = true;
    this.clicked = 'none';
  }

  clickedMarker(label: string) {
    this.clicked = label;
    this.state == 'normal' ? (this.state = 'clicked') : (this.state = 'normal');
  }

  ngOnInit() {
    AOS.init({
      once: true,
      easing: 'ease-out-back',
      duration: 700
    });
    
    this.route.url.subscribe((params) => {
      const regionalSlug = params[1].path;

      console.log(params[1].path);
      this.region = regionalSecurityJSON.find((data) => {
        return data.slug === regionalSlug;
      });

      // console.log(this.region.services[1].cards)

      // No region found
      if (!this.region) {
        this.router.navigate(['/regions']);
        return;
      }
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
