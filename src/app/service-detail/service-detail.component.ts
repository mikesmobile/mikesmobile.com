import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceItem } from '../services/service';
import { ServicesService } from '../services/service.service';
import { DomSanitizer } from '@angular/platform-browser';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
  NgxGalleryImageSize
} from 'ngx-gallery';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.sass'],
  providers: [ServicesService]
})
export class ServiceDetailComponent implements OnInit, OnDestroy {
  private req: any;
  private routeSub: any;

  slug: string;
  service: ServiceItem;

  colorSquares = [
    'stdColors',
    'colorSetx4',
    'colorSetx6',
    'swingingDoorColors'
  ];
  extra_images = [];
  info_graphics = [];
  videoLink = null;
  petImages = {};

  gallery_options: NgxGalleryOptions[];
  gallery_images: NgxGalleryImage[];
  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
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
            this.service = item as ServiceItem;
            this.extra_images = this.service.extraImages;
            this.petImages = this.service.images;
            this.gallery_images = this.service.recentInstallImages;
            this.videoLink = this.sanitizer.bypassSecurityTrustUrl(
              this.service.video
            );
            if (this.service.fullTileImage) {
              this.service.tileImage = this.service.fullTileImage;
            }
          }
        });
      });
    });

    this.gallery_options = [
      {
        image: false,
        height: '200px',
        width: '800px',
        thumbnailsColumns: 5,
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
    ];
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
  }

  viewMoreColors() {
    document.getElementById('more-colors').style.display = 'none';
    document.getElementById('less-colors').style.display = 'block';

    for (let i = 6; i < 19; i++) {
      let el = document.getElementById('square-' + i);
      el.style.display = 'block';
      if (screen.width < 992) {
        let ello = document.getElementById('square-p-' + i);
        ello.style.display = 'block';
      }
    }
  }

  viewLessColors() {
    document.getElementById('less-colors').style.display = 'none';
    document.getElementById('more-colors').style.display = 'block';

    for (let i = 6; i < 19; i++) {
      let el = document.getElementById('square-' + i);
      el.style.display = 'none';
      if (screen.width < 992) {
        let ello = document.getElementById('square-p-' + i);
        ello.style.display = 'none';
      }
    }
  }

  getEmbedUrl(video) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + video
    );
  }
}
