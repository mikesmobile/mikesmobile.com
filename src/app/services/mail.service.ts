import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  async send(data: any) {
    const apiEndpoint = 'https://api.mikesmobile.com/send/';

    let formBody: any = [];
    for (let property in data) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }

    formBody = formBody.join('&');

    fetch(apiEndpoint, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      body: formBody
    });
    // No error handling.
  }
}
