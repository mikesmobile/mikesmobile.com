import { APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, Optional, Inject } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

let endpoint = '/assets/json/blogposts.json';

@Injectable()
export class PostService {
  constructor(
    private http: HttpClient,
    @Optional() @Inject(APP_BASE_HREF) origin: string
  ) {
    if (origin) {
      endpoint = `${origin}${endpoint}`;
    }
  }

  list() {
    return this.http.get<any[]>(endpoint).pipe(
      map((response) => response),
      catchError((error) => this.handleError(error, 'list'))
    );
  }

  get(slug) {
    return this.http.get<any[]>(endpoint).pipe(
      map((response) => {
        let data = response.filter((item) => {
          if (item.slug == slug) {
            return item;
          }
        });
        if (data.length == 1) {
          return data[0];
        }
        return {};
      }),
      catchError((error) => this.handleError(error, 'get'))
    );
  }

  search(query) {
    return this.http.get<any[]>(endpoint).pipe(
      map((response) => {
        let data = [];
        let req = response.filter((item) => {
          if (item.title.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
            data.push(item);
          }
        });

        return data;
      }),
      catchError((error) => this.handleError(error, 'search'))
    );
  }

  handleError(handleError: any, type: string): any {
    throw new Error(handleError);
  }
}
