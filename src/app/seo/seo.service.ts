import { DOCUMENT }           from '@angular/common';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SEOService {
  constructor(@Inject(DOCUMENT) private dom) { }

  updateCanonicalURL() {
    // Update canonical link in DOM if possible
    let existingCanonicalLink: HTMLLinkElement = this.dom.head.querySelector("link[rel='canonical']")
    if (existingCanonicalLink) {
      existingCanonicalLink.setAttribute('href', this.dom.URL)
      return;
    }

    // Generate new canonical link
    let newCanonicalLink: HTMLLinkElement = this.dom.createElement('link')
    newCanonicalLink.setAttribute('rel', 'canonical')
    newCanonicalLink.setAttribute('href', this.dom.URL)
    this.dom.head.appendChild(newCanonicalLink)
  }
}
