import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import adwordsJSON from '../../assets/json/adwordslps.json';

@Component({
  selector: 'app-seo-adwords-lp',
  templateUrl: './seo-adwords-lp.component.html',
  styleUrls: ['./seo-adwords-lp.component.sass']
})
export class SeoAdwordsLpComponent implements OnInit {
  slug: string;
  landingPage: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.landingPage = adwordsJSON.find((data) => {
        return data.slug === params['slug'];
      });

      if (!this.landingPage) {
        this.router.navigate(['/']);
        return;
      }
    });
  }
}
