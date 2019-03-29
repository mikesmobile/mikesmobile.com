import { Component,
        OnInit,
        OnDestroy,
        ViewChild }           from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { NgxGalleryAnimation,
        NgxGalleryImage,
        NgxGalleryImageSize,
        NgxGalleryOptions }   from 'ngx-gallery';

import { ServiceItem }        from '../services/service';
import { ServicesService }    from '../services/service.service';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.sass'],
  providers: [ServicesService]
})

export class GridComponent implements OnInit {
  private getReq:any;
  private listReq:any
  private routeSub:any;

  slug:string
  service:ServiceItem
  serviceList:[ServiceItem]

  gallery_images: NgxGalleryImage[];

  @ViewChild(QuoteFormComponent) private quoteForm:QuoteFormComponent
  constructor(private route: ActivatedRoute, private _service:ServicesService) { }

  toggleQuoteForm() {
    this.quoteForm.show()
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.slug = params['slug']
      this.getReq = this._service.list().subscribe((data) => {
        data.filter((item) => {
          if (item.slug == this.slug) {
            this.service = item as ServiceItem
            this.gallery_images = this.service.recentInstallImages
          }
        })
      })
    })

    this.listReq = this._service.list().subscribe((data) => {
      this.serviceList = data as [ServiceItem]
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
    this.listReq.unsubscribe()
    this.getReq.unsubscribe()
  }
}
