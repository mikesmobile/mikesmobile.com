import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryImage } from 'ngx-gallery';

import { QuoteFormComponent } from '../quote-form/quote-form.component';
import { TabNavComponent } from '../tab-nav/tab-nav.component';

import servicesJSON from '../../assets/json/services.json';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private routeSub: any;

  product;
  gallery_images: NgxGalleryImage[];
  recent_install_images: NgxGalleryImage[];
  details: any;
  videoLink = null;

  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  openQuoteForm() {
    this.quoteForm.show();
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.product = servicesJSON.find((data) => {
        return data.slug === params['slug'];
      });

      if (!this.product) {
        this.router.navigate(['/']);
      } else {
        this.videoLink = this.sanitizer.bypassSecurityTrustUrl(
          this.product.video
        );
        this.recent_install_images = this.product.recentInstallImages;

        if (this.details != undefined) {
          this.details = undefined;
        }

        this.details = this.product.details;

        if (this.product.thumbImages && this.product.thumbImages.length > 1) {
          this.gallery_images = this.product.thumbImages;
        }
      }
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
