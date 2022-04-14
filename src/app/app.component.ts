import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { SEOService } from './services/seo.service';
import { UTMService } from './services/utm.service';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    router: Router,
    seoService: SEOService,
    utmService: UTMService
  ) {
    // Tracks UTMs into a cookie so we can attach that information to quote forms
    utmService.checkForUTMs();

    router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (isPlatformBrowser(this.platformId)) {
          // Send to analytics
          if (typeof gtag === 'function') {
            gtag('config', 'UA-31532667-1', {
              page_path: event.urlAfterRedirects
            });
          }

          // Scroll to top of page on router events
          window.scrollTo(0, 0);

          // Set <link rel="canonical">, <title>, and <meta name="description">
          // seoService.updatePage(
          //   event.urlAfterRedirects,
          //   event.url !== event.urlAfterRedirects
          // );
        }
      });
  }
}
