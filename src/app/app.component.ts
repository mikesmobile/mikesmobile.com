import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { SEOService } from './seo/seo.service';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  subscription: Subscription;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private seoService: SEOService
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
    this.subscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (isPlatformBrowser(this.platformId)) {
          // Scroll to top of page on router events
          window.scrollTo(0, 0);

          // Set <link rel="canonical">, <title>, and <meta name="description">
          this.seoService.updatePage(this.router.url);
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
