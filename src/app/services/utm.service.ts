import { Injectable } from '@angular/core';

@Injectable()
export class UTMService {
  checkForUTMs() {
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
