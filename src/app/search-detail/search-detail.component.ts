import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceItem } from '../services/service';
import { ServicesService } from '../services/service.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.sass'],
  providers: [ServicesService]
})
export class SearchDetailComponent implements OnInit, OnDestroy {
  private routeSub:any
  private req:any
  query:string
  searchList:[ServiceItem]
  categories = ['Screens', 'Chimney', 'Security', 'Awnings']
  categoryList=[]

  constructor(private route: ActivatedRoute, private _service:ServicesService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params=>{
      this.query = params['q']
      this.req = this._service.search(this.query).subscribe(data=>{
        this.searchList = data as [ServiceItem];
      })
    })
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
  }

}
