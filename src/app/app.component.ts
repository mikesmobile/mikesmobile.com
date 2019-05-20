import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { SEOService } from './seo/seo.service';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    router: Router,
    seoService: SEOService
  ) {
    this.checkForUTMs();
    router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (isPlatformBrowser(this.platformId)) {
          // Send to analytics
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview');

          // Scroll to top of page on router events
          window.scrollTo(0, 0);

          // Set <link rel="canonical">, <title>, and <meta name="description">
          seoService.updatePage(
            event.urlAfterRedirects,
            event.url !== event.urlAfterRedirects
          );
        }
      });
  }

  private checkForUTMs() {
    const source = this.getParameterByName('utm_source');
    const medium = this.getParameterByName('utm_medium');
    const campaign = this.getParameterByName('utm_campaign');
    let expires = new Date();
    // Store for 30 days
    expires.setTime(expires.getTime() + 30 * 24 * 60 * 60 * 1000);

    // Only write cookie if there is any new utm data
    if (source + medium + campaign !== '') {
      document.cookie = `utm=${source}:${medium}:${campaign};expires=${expires.toUTCString()}`;
    }
  }

  private getParameterByName(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null
      ? ''
      : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
}
