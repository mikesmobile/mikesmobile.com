import { APP_BASE_HREF }                from '@angular/common';
import { HttpClient, HttpHeaders }      from '@angular/common/http';
import { Injectable, Optional, Inject } from '@angular/core';
import { Observable ,  of }             from 'rxjs';
import { catchError, map, tap }         from  'rxjs/operators';

// const endpoint = '/assets/json/services.json'
let endpoint = 'assets/json/og_services.json'

@Injectable()
export class ServicesService {
  private baseURL = 'https://mh24vgs0vi.execute-api.us-west-2.amazonaws.com/Development'

  constructor(
    private http:HttpClient,
    @Optional() @Inject(APP_BASE_HREF) origin:string
  ) {
    if (origin) {
      this.baseURL = `${origin}${this.baseURL}`
      endpoint = `${origin}${endpoint}`
    }
  }

  list():Observable<any> {
    return this.http.get(endpoint)
  }

  create(
    name:string,
    city:string,
    phone:string,
    email:string,
    message:string,
    option:string,
    utm_source:string = "",
    utm_medium:string = "",
    utm_campaign:string = ""
  ): Observable<any> {
    let apiSendMessageEndpoint = `${this.baseURL}/`
    let data = {
      'name': name,
      'city': city,
      'phone': phone,
      'email': email,
      'message': message,
      'option': option,
      'utm_source': utm_source,
      'utm_medium': utm_medium,
      'utm_campaign': utm_campaign
    }

    return this.http.post(apiSendMessageEndpoint, data, {
      headers: new HttpHeaders().set("content-type","application/json")
    })
  }

  search(query) {
    return this.http.get<any[]>(endpoint).pipe(map((response) => {
      let data = []
      let req = response.filter((item) => {
        if (item.title.toLowerCase().indexOf(query.toLowerCase()) >= 0){
          data.push(item)
        }
      })
      return data
    }))
  }
}
