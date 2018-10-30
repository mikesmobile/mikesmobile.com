import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const endpoint = '/assets/json/manuals.json';

@Injectable()
export class manulasService {

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get(endpoint).pipe(map(response=>response),catchError(this.handleError),)
  }
	listInput(input){
		return this.http.get(input).pipe(map(response=>response),catchError(this.handleError),)
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
