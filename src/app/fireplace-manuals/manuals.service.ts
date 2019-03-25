import { Injectable }     from '@angular/core';
import { HttpClient }     from '@angular/common/http';
import {catchError, map}  from 'rxjs/operators';

const endpoint = '/assets/json/manuals.json'

@Injectable()
export class manualsService {
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<any[]>(endpoint).pipe(map((response) => response), catchError((error) => this.handleError(error, "list")))
  }

  listInput(input) {
    return this.http.get<any[]>(input).pipe(map((response) => response), catchError((error) => this.handleError(error, "listInput")))
  }

  get(slug) {
    return this.http.get<any[]>(endpoint).pipe(map((response) => {
      let data = response.filter((item) => {
        if (item.slug == slug) {
          return item
        }
      })
      if (data.length == 1) {
        return data[0]
      }
      return {}
    }), catchError((error) => this.handleError(error, "get")))
  }

  search(query) {
    return this.http.get<any[]>(endpoint).pipe(map((response) => {
      let data = []
      let req = response.filter((item) => {
        if (item.title.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
          data.push(item)
        }
      })

      return data
    }), catchError((error) => this.handleError(error, "search")))
  }

  handleError(handleError: any, type:string): any {
    throw new Error(handleError)
  }
}
