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

  updatePage(url: string) {
    this.updateCanonicalURL();

    // Set up defaults
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

    const pageInfo = metaData.find((data) => data.page === url);

    // Overwrite defaults with found data
    if (pageInfo) {
      if (pageInfo.description) {
        descriptionTag.content = pageInfo.description;
      }
      if (pageInfo.robots) {
        robotsTag.content = pageInfo.robots;
      }
      if (pageInfo.title) {
        title = pageInfo.title;
      }
    }

    this.metaService.updateTag(descriptionTag);
    this.metaService.updateTag(robotsTag);
    this.titleService.setTitle(title);
  }

  updateCanonicalURL() {
    const canonicalURL = this.dom.URL;

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
