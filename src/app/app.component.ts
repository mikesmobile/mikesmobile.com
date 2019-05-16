import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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
    private seoService: SEOService
  ) {
    this.checkForUTMs();
    this.router.events.subscribe((event) => {
      if (isPlatformBrowser(PLATFORM_ID)) {
        if (event instanceof NavigationEnd) {
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview');
        }
      }
    });
  }

  private checkForUTMs() {
    const source = this.getParameterByName('utm_source');
    const medium = this.getParameterByName('utm_medium');
    const campaign = this.getParameterByName('utm_campaign');
    let expires = new Date();
    // Store for 30 days
    expires.setTime(expires.getTime() + (30*24*60*60*1000));

    // Only write cookie if there is any new utm data
    if (source + medium + campaign !== "") {
      document.cookie = `utm=${source}:${medium}:${campaign};expires=${expires.toUTCString()}`;
    }
  }

  private getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    const results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  ngOnInit() {
    this.subscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
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
