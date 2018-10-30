
import {catchError} from 'rxjs/operators';
import { Injectable, Optional, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { APP_BASE_HREF } from '@angular/common';



// const seolocations = '/assets/json/seolocations.json'
// const adwordsLandingPages = '/assets/json/adwordslps.json'
let seolocations = 'assets/json/og_seolocations.json'
let adwordsLandingPages = 'assets/json/og_adwordslps.json'

@Injectable()
export class LandingService {

  constructor(private http:HttpClient,
		@Optional() @Inject(APP_BASE_HREF) origin: string) {
			if(origin)
			{
        seolocations =`${origin}${seolocations}`;
        adwordsLandingPages =`${origin}${adwordsLandingPages}`;
        console.log(seolocations,adwordsLandingPages) }
     }

  listLocations():Observable<any>{
		return this.http.get(seolocations).pipe(catchError(this.handleError))
  }

  listAdwordsLPs():Observable<any>{
    return this.http.get(adwordsLandingPages).pipe(catchError(this.handleError))
  }

  // search(query){
  //   return this.http.get(endpoint).map(response=>{
  //     let data = []
  //     let req = response.json().filter(item=>{
  //       if(item.title.toLowerCase().indexOf(query.toLowerCase()) >= 0 ){
  //         data.push(item)
  //       }
  //     })
  //     return data
  //   }).catch(this.handleError)
  // }

  private handleError(error:any, caught:any):any{
    //console.log(error, caught)
  }

}
