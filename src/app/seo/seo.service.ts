import { DOCUMENT }           from '@angular/common';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SEOService {
  constructor(@Inject(DOCUMENT) private dom) { }

  createCanonicalURL() {
    const existingCanonicalLink = this.dom.head.querySelector("link[rel='canonical']")
    if (existingCanonicalLink) {
      this.dom.head.removeChild(existingCanonicalLink)
    }

    let link: HTMLLinkElement = this.dom.createElement('link')
    link.setAttribute('rel', 'canonical')
    this.dom.head.appendChild(link)
    link.setAttribute('href', this.dom.URL)
  }
}
