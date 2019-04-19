import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import adwordsJSON from '../../assets/json/adwordslps.json';

@Component({
  selector: 'app-seo-adwords-lp',
  templateUrl: './seo-adwords-lp.component.html',
  styleUrls: ['./seo-adwords-lp.component.sass']
})
export class SeoAdwordsLpComponent implements OnInit, OnDestroy {
  private routeSub: any;
  slug: string;
  landingPage: any;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.landingPage = adwordsJSON.find((data) => {
        return data.slug === params['slug'];
      });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
