import { Injectable } from '@angular/core';

@Injectable()
export class MailSolarService {
  async send(data: any) {
    const apiEndpoint = 'https://api.mikesmobile.com/solar/';

    // use to test locally
    // const apiEndpoint = 'http://localhost:8080/solar';

    let formBody: any = [];
    for (let property in data) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }

    formBody = formBody.join('&');

    return fetch(apiEndpoint, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      body: formBody,
    });
  }
}
