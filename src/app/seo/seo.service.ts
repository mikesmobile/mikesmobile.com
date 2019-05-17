import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import metaData from '../../assets/json/meta.json';

@Injectable({
  providedIn: 'root'
})
export class SEOService {
  constructor(
    @Inject(DOCUMENT) private dom,
    private metaService: Meta,
    private titleService: Title
  ) {}

  // TODO: Run as Asynchronous
  updatePage(url: string) {
    // Set up defaults for page found
    let descriptionTag = {
      name: 'description',
      content:
        "Mike's Mobile Screen & Chimney offers Window Screen Repair, Security Screen Doors, Chimney inspections, Chimney Repairs, Retractable Awnings and more!"
    };
    let robotsTag = {
      name: 'robots',
      content: 'index, follow'
    };
    let title = "Mike's Mobile Screen and Chimney Service";

    // Search for page specific data in meta.json
    const pageInfo = metaData.find(
      (data) =>
        data.page === url || (data.aliases && data.aliases.includes(url))
    );

    // Overwrite defaults with found data
    if (pageInfo) {
      // Update canonical URL
      this._updateCanonicalURL(pageInfo.page);

      if (pageInfo.description) {
        descriptionTag.content = pageInfo.description;
      }
      if (pageInfo.robots) {
        robotsTag.content = pageInfo.robots;
      }
      if (pageInfo.title) {
        title = pageInfo.title;
      }
    } else {
      // Assume 404 page if info not found in meta.json
      robotsTag.content = 'noindex';
      // Send 404 from prerendering service
      // This code is ONLY respected by the prerender service and therefore doesn't need to be removed as a new DOM will be generated without the code for a found page
      this.metaService.addTag({ name: 'prerender-status-code', content: '404' });
      // TODO: Send 404 if possible from Apache/Nginx
    }

    this.metaService.updateTag(descriptionTag);
    this.metaService.updateTag(robotsTag);
    this.titleService.setTitle(title);
  }

  private _updateCanonicalURL(relativeLink: string) {
    // Opinionated canonical links:
    // - Strip off www subdomain if present
    // - Require https protocol
    const canonicalURL = document.domain.replace(
      /(https?:\/\/)?(www\.)?/,
      'https://'
    ) + relativeLink;

    let existingCanonicalLink: HTMLLinkElement = this.dom.head.querySelector(
      "link[rel='canonical']"
    );

    // Update canonical link in DOM if possible
    if (existingCanonicalLink) {
      existingCanonicalLink.setAttribute('href', canonicalURL);
      return;
    }

    // Generate new canonical link
    let newCanonicalLink: HTMLLinkElement = this.dom.createElement('link');
    newCanonicalLink.setAttribute('rel', 'canonical');
    newCanonicalLink.setAttribute('href', canonicalURL);
    this.dom.head.appendChild(newCanonicalLink);
  }
}
