import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
  NgxGalleryImageSize
} from 'ngx-gallery';

import { ServiceItem } from '../services/service';
import { ServicesService } from '../services/service.service';
import { QuoteFormComponent } from '../quote-form/quote-form.component';
import { TabNavComponent } from '../tab-nav/tab-nav.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass'],
  providers: [ServicesService],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  gallery_options: NgxGalleryOptions[];
  gallery_images: NgxGalleryImage[];
  recent_install_images_options: NgxGalleryOptions[];
  recent_install_images: NgxGalleryImage[];
  details: any;

  private req: any;
  private routeSub: any;

  slug: string;
  product: ServiceItem;
  videoLink = null;

  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  @ViewChild('navwrap') private navwrap;

  toggleQuoteForm() {
    this.quoteForm.show();
  }

  constructor(
    private route: ActivatedRoute,
    private _service: ServicesService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.slug = params['slug'];
      this.req = this._service.list().subscribe((data) => {
        data.filter((item) => {
          if (item.slug == this.slug) {
            this.product = item as ServiceItem;
            this.videoLink = this.sanitizer.bypassSecurityTrustUrl(
              this.product.video
            );
            this.recent_install_images = this.product.recentInstallImages;

            if (this.details != undefined) {
              this.details = undefined;
            }

            this.details = this.product.details;

            if (
              this.product.thumbImages &&
              this.product.thumbImages.length > 1
            ) {
              this.gallery_images = this.product.thumbImages;
            }
          }
        });
      });
    });

    this.gallery_options = [
      {
        width: '550px',
        height: '625px',
        thumbnailSize: NgxGalleryImageSize.Cover,
        thumbnailsColumns: 4,
        thumbnailsRemainingCount: true,
        imageArrowsAutoHide: true,
        imageDescription: true,
        thumbnailsArrowsAutoHide: true,
        thumbnailsSwipe: true,
        imageSize: NgxGalleryImageSize.Contain,
        imageAnimation: NgxGalleryAnimation.Zoom,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        imageSwipe: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        // imagePercent: 80,
        thumbnailSize: NgxGalleryImageSize.Cover,
        imageArrowsAutoHide: false,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        imageSwipe: true
      }
    ];

    this.recent_install_images_options = [
      {
        image: false,
        height: '200px',
        width: '800px',
        // width: '600px',
        // height: '500px',
        thumbnailsColumns: 5,
        // thumbnailsRows: 2,
        // thumbnailsPercent: 40,
        // imagePercent: 60,
        // thumbnailMargin: 2,
        // thumbnailsMargin: 2,
        imageAutoPlay: true,
        thumbnailsSwipe: true,
        imageAutoPlayPauseOnHover: true,
        previewAutoPlay: true,
        previewAutoPlayPauseOnHover: true,
        previewCloseOnClick: true,
        previewCloseOnEsc: true
      },
      {
        breakpoint: 990,
        width: '100%',
        thumbnailsColumns: 3
      }
      // {
      //   breakpoint: 300,
      //   width: '100%',
      //   height: '200px',
      //   thumbnailsColumns: 2
      // }
    ];
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
  }
}
