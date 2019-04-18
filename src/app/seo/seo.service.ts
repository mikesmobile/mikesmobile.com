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
    private meta: Meta,
    private titleService: Title
  ) {}

  updatePage(url: string) {
    this.updateCanonicalURL();

    // Set up defaults
    let title = "Mike's Mobile Screen and Chimney Service";
    let tag = {
      name: 'description',
      content:
        "Mike's Mobile Screen & Chimney offers Window Screen Repair, Security Screen Doors, Chimney inspections, Chimney Repairs, Retractable Awnings and more!"
    };

    // Overwrite defaults with found data
    const metaInfo = metaData.find(
      (data) => data.page === url
    );

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

  updateCanonicalURL() {
    // Update canonical link in DOM if possible
    let existingCanonicalLink: HTMLLinkElement = this.dom.head.querySelector(
      "link[rel='canonical']"
    );
    if (existingCanonicalLink) {
      existingCanonicalLink.setAttribute('href', this.dom.URL);
      return;
    }

    // Generate new canonical link
    let newCanonicalLink: HTMLLinkElement = this.dom.createElement('link');
    newCanonicalLink.setAttribute('rel', 'canonical');
    newCanonicalLink.setAttribute('href', this.dom.URL);
    this.dom.head.appendChild(newCanonicalLink);
  }
}
