import { APP_BASE_HREF } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Optional, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

// const seolocations = '/assets/json/seolocations.json'
// const adwordsLandingPages = '/assets/json/adwordslps.json'
let seolocations = 'assets/json/og_seolocations.json';
let adwordsLandingPages = 'assets/json/og_adwordslps.json';

@Injectable()
export class LandingService {
  constructor(
    private http: HttpClient,
    @Optional() @Inject(APP_BASE_HREF) origin: string
  ) {
    if (origin) {
      seolocations = `${origin}${seolocations}`;
      adwordsLandingPages = `${origin}${adwordsLandingPages}`;
    }
  }

  listLocations(): Observable<any> {
    return this.http
      .get<any[]>(seolocations)
      .pipe(catchError((error) => this.handleError(error, 'listLocations')));
  }

  listAdwordsLPs(): Observable<any> {
    return this.http
      .get<any[]>(adwordsLandingPages)
      .pipe(catchError((error) => this.handleError(error, 'listAdwordsLPs')));
  }

  handleError(handleError: any, type: string): any {
    throw new Error(handleError);
  }
}
