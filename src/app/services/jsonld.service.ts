import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JSONLDService {
  constructor(@Inject(DOCUMENT) private dom: Document) {}

  async updateJSONLD({ name, image, description }) {
    const json: any = {
      '@context': 'http://schema.org',
      '@type': 'Product',
      name,
      description,
      image: `https://mikesmobile.com/${image}`
    };

    let existingTag = this.dom.head.querySelector(
      "script[type='application/ld+json']"
    );

    if (existingTag) {
      existingTag.innerHTML = JSON.stringify(json);
      return;
    }

    let tag = this.dom.createElement('script');
    tag.setAttribute('type', 'application/ld+json');
    tag.innerHTML = JSON.stringify(json);

    this.dom.head.appendChild(tag);
  }
}
