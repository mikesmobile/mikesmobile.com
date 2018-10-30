import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandingItem } from '../landings/landing';
import { LandingService } from '../landings/landing.service';
import { Http } from '@angular/http';

@Component({
	selector: 'app-seo-location-lp',
	templateUrl: './seo-location-lp.component.html',
	styleUrls: ['./seo-location-lp.component.sass'],
	providers: [LandingService]
})
export class SeoLocationLpComponent implements OnInit {
  
	private req:any
	private routeSub:any
	slug:string
	landingPage:LandingItem
	numbers:number[]

	constructor(private route:ActivatedRoute, private _service:LandingService) { }

	ngOnInit() {
		this.routeSub = this.route.params.subscribe(params=>{
			this.slug = params['slug']
			this.req = this._service.listLocations().subscribe(data=>{
				data.filter(item=>{
					if(item.slug == this.slug){
						this.landingPage = item as LandingItem
					}
				})
			})
		})

		this.numbers = this.numbersArray();	
	}

	numbersArray(){
		var list:number[] = [];
		for (var i = 0; i <= 60; i++){
			var num = i;
			list.push(num)
		}
		//console.log(list)
		return list
	}
}
