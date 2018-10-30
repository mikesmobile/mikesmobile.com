import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandingItem } from '../landings/landing';
import { LandingService } from '../landings/landing.service';

@Component({
  selector: 'app-seo-adwords-lp',
  templateUrl: './seo-adwords-lp.component.html',
  styleUrls: ['./seo-adwords-lp.component.sass'],
  providers: [LandingService]
})
export class SeoAdwordsLpComponent implements OnInit, OnDestroy {

  private routeSub:any;
  private req:any

  slug:string
  landingPage:LandingItem

  constructor(private route:ActivatedRoute, private _service:LandingService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params=>{
      this.slug = params['slug']
      //console.log(this.slug)
      this.req = this._service.listAdwordsLPs().subscribe(data=>{
        data.filter(item=>{
          if(item.slug == this.slug){
            this.landingPage = item as LandingItem
          }
        })
      })
    })
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
  }

}
