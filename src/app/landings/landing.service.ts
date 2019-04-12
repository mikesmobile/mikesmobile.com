import { APP_BASE_HREF } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Optional, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

let adwordsLandingPages = 'assets/json/adwordslps.json';

@Injectable()
export class LandingService {
  constructor(
    private http: HttpClient,
    @Optional() @Inject(APP_BASE_HREF) origin: string
  ) {
    if (origin) {
      adwordsLandingPages = `${origin}${adwordsLandingPages}`;
    }
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
