import { Injectable } from '@angular/core';

@Injectable()
export class MailResumeService {
  async send(data: any) {
    const apiEndpoint = 'https://api.mikesmobile.com/resume/';

   

    return fetch(apiEndpoint, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      body: data
    });
  }
}
