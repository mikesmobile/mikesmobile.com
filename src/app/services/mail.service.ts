import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  async send(data: any) {
    const apiEndpoint = 'https://9debuaf4hh.execute-api.us-west-1.amazonaws.com/staging/send'

    let formBody: any = [];
    for (let property in data) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }

    formBody = formBody.join('&');

    return fetch(apiEndpoint, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      body: JSON.stringify(data)
    });
  }
}
