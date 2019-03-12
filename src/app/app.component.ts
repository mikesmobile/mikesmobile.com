import { isPlatformBrowser }                                from '@angular/common';
import { Component, OnInit, Inject, Optional, PLATFORM_ID } from '@angular/core';
import { Meta, Title }                                      from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute }            from '@angular/router';
import { SESSION_STORAGE, WebStorageService }               from 'angular-webstorage-service';
import { Subscription }                                     from 'rxjs';
import { mergeMap, map, filter }                            from 'rxjs/operators';

import { MetaService }  from './meta/meta.service';
import { Metas }        from './meta/meta';
import { SEOService }   from './seo/seo.service';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers:[MetaService]

})
export class AppComponent {
  title = 'Mikes Mobile';
  private req: any
  private reques: any
  metaList: [Metas]
  href: string;
  subscription: Subscription;

  constructor(
    @Optional() @Inject(SESSION_STORAGE)
    private storage: WebStorageService,
    @Inject(PLATFORM_ID) private platformId:Object,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private meta: Meta,
    private _meta:MetaService,
    private seoService: SEOService,
    private titleService: Title
  ) {
    this.router.events.subscribe((event) => {
      if (isPlatformBrowser(PLATFORM_ID)) {
        if (event instanceof NavigationEnd) {
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview');
        }

      }
    });

  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data))
      .subscribe((event) => this.titleService.setTitle(event['title']));

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      if(isPlatformBrowser(PLATFORM_ID))
      {
      window.scrollTo(0, 0)
      }
    });

    this.activatedRoute.queryParams.subscribe((params) => {
      if (params)
        for (var key in params) {
          if (params.hasOwnProperty(key)) {
            this.storage.set(key, params[key]);
          }
        }
    });

    this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd))
    .subscribe((event) => {
      this.href = this.router.url
  //    console.log('page Url :', this.href)
      this.req = this._meta.list().subscribe(data => {
        this.metaList = data as [Metas];
        let tag = {
          name:"description",
          content:"Mike's Mobile Screen and Chimney offers screen repair, Security Doors, Chimney inspections,chimney repairs, retractable awnings and more!"
        }
        let title = "Security Doors, Security Window Screens & Chimney Services | Mike's Mobile"
        //console.log(this.href)
        for(var i = 0; i < this.metaList.length; i++){

          if (this.metaList[i].page === this.href) {

          tag.name=this.metaList[i].name;
          tag.content=this.metaList[i].content
          title = this.metaList[i].title
          }
        }
        //console.log(tag)
        this.seoService.createCanonicalURL()
        this.meta.updateTag(tag)
        this.titleService.setTitle(title)
        })

    })
    //For Scrolling up on every new page
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe(() =>{
      if (isPlatformBrowser(this.platformId))
      window.scrollTo(0, 0)
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
