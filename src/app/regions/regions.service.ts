import {map, catchError} from 'rxjs/operators';
import { Injectable, Optional, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

let endpoint = '/assets/json/og_services.json';

@Injectable()
export class RegionsService {

  constructor(private http:HttpClient,
		@Optional() @Inject(APP_BASE_HREF) origin: string) {
			if(origin)
			endpoint =`${origin}${endpoint}`;
			console.log(endpoint) }

  list(){
		return this.http.get<any[]>(endpoint).pipe(
			map(response=>response
				.filter(item=>
					{
						if(item.type.indexOf("landing-")>-1)
						return item
					}
				)
			),catchError(this.handleError),)
  }

  get(slug){
	  return this.http.get<any[]>(endpoint).pipe(map(response=>{
		  let data = response.filter(item=>{
		  	if (item.slug == slug){
			  	return item
		  	}
			})
			if (data.length == 1){
		  	return data[0]
	  	}
	  	return {}
		}),catchError(this.handleError),)
  }

  search(query){
	  return this.http.get<any[]>(endpoint).pipe(map(response=>{
		let data = []
		let req = response.filter(item=>{
			if (item.title.toLowerCase().indexOf(query.toLowerCase()) >= 0){
				data.push(item)
			}
		})
		return data
	  }),
	  catchError(this.handleError),)
  }

  handleError(error:any, caught:any):any{
    //console.log(error, caught)
  }

}
