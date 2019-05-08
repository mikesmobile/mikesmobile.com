import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import servicesJSON from '../../assets/json/services.json';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: [
    './search-detail.component.sass',
    '../flipcard-list/flipcard-list.component.sass'
  ]
})
export class SearchDetailComponent implements OnInit, OnDestroy {
  private routeSub: any;
  query: string;
  searchList = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.query = params['q'];
      servicesJSON.forEach((data) => {
        if (data.title.toLowerCase().indexOf(this.query.toLowerCase()) >= 0) {
          let slug = data.slug;
          if (data.type !== 'resource') {
            slug = `${data.type}/${data.slug}`;
          }
          this.searchList.push({ ...data, slug });
        }
      });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
