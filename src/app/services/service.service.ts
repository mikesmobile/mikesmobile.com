import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ServicesService {
  private baseURL =
    'https://mh24vgs0vi.execute-api.us-west-2.amazonaws.com/Development';

  constructor(private http: HttpClient) {}

  create(
    name: string,
    city: string,
    phone: string,
    email: string,
    message: string,
    option: string,
    utm_source: string = '',
    utm_medium: string = '',
    utm_campaign: string = ''
  ): Observable<any> {
    let apiSendMessageEndpoint = `${this.baseURL}/`;
    let data = {
      name: name,
      city: city,
      phone: phone,
      email: email,
      message: message,
      option: option,
      utm_source: utm_source,
      utm_medium: utm_medium,
      utm_campaign: utm_campaign
    };

    return this.http.post(apiSendMessageEndpoint, data, {
      headers: new HttpHeaders().set('content-type', 'application/json')
    });
  }
}
