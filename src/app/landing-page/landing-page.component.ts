import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceItem } from '../services/service';
import { ServicesService } from '../services/service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass'],
  providers: [ServicesService]
})
export class LandingPageComponent implements OnInit, OnDestroy {

  private req:any;
  private routeSub:any;

  slug:string
  landing:ServiceItem

  constructor(private route: ActivatedRoute, private _service:ServicesService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params['slug']
      this.req = this._service.list().subscribe(data => {
        data.filter(item => {
          if(item.slug == this.slug){
            this.landing = item as ServiceItem;
          }
        })
      })
    })
  }
  ngOnDestroy(){}

}
