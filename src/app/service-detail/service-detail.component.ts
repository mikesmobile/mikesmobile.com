import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryImage } from 'ngx-gallery';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

import servicesJSON from '../../assets/json/services.json';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.sass']
})
export class ServiceDetailComponent implements OnInit, OnDestroy {
  private routeSub: any;

  service;
  extra_images = [];
  petImages = {};
  gallery_images: NgxGalleryImage[];

  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  toggleQuoteForm() {
    this.quoteForm.show();
  }
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.service = servicesJSON.find((data) => {
        return data.slug === params['slug'];
      });
      if (!this.service) {
        this.router.navigate(['/']);
      } else {
        this.extra_images = this.service.extraImages;
        this.petImages = this.service.images;
        this.gallery_images = this.service.recentInstallImages;
        if (this.service.fullTileImage) {
          this.service.tileImage = this.service.fullTileImage;
        }
      }
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
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
}
