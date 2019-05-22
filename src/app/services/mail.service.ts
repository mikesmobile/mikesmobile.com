import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  async send(data: any) {
    const apiEndpoint = 'https://hooks.zapier.com/hooks/catch/4001184/v3cj7d/';
    fetch(apiEndpoint, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      body: JSON.stringify(data)
    });
    // No promises. No error handling.
  }
}
