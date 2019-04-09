import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  Inject,
  Optional,
  PLATFORM_ID
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Subscription } from 'rxjs';
import { mergeMap, map, filter } from 'rxjs/operators';

import { SEOService } from './seo/seo.service';

import metaData from '../assets/json/meta.json';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  subscription: Subscription;

  constructor(
    @Optional()
    @Inject(SESSION_STORAGE)
    private storage: WebStorageService,
    @Inject(PLATFORM_ID) private platformId: Object,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private meta: Meta,
    private seoService: SEOService,
    private titleService: Title
  ) {
    this.router.events.subscribe((event) => {
      if (isPlatformBrowser(PLATFORM_ID)) {
        if (event instanceof NavigationEnd) {
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview');
        }
      }
    });
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params) {
        for (let key in params) {
          if (params.hasOwnProperty(key)) {
            this.storage.set(key, params[key]);
          }
        }
      }
    });

    this.subscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (isPlatformBrowser(this.platformId)) {
          // Scroll to top of page on router events
          window.scrollTo(0, 0);

          // Set <link rel="canonical"> tag
          this.seoService.updateCanonicalURL();

          // Set up defaults
          let title = "Mike's Mobile Screen and Chimney Service";
          let tag = {
            name: 'description',
            content:
              "Mike's Mobile Screen & Chimney offers Window Screen Repair, Security Screen Doors, Chimney inspections, Chimney Repairs, Retractable Awnings and more!"
          };

          // Overwrite defaults with found data
          const metaInfo = metaData.find((data) => data.page === this.router.url);

          if (metaInfo) {
            if (metaInfo.content) {
              tag.content = metaInfo.content;
            }
            if (metaInfo.title) {
              title = metaInfo.title;
            }
          }

          this.titleService.setTitle(title);
          this.meta.updateTag(tag);
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
