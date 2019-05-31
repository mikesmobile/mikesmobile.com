import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer-gallery',
  templateUrl: './footer-gallery.component.html',
  styleUrls: [
    './footer-gallery.component.sass',
    '../main-gallery/main-gallery.component.sass'
  ]
})
export class FooterGalleryComponent {
  @Input() Images;
  @ViewChild('footerContent') public footerModal;
  public currentIndex: number;
  public modalImagePath: string;

  show(val: number) {
    this.currentIndex = val;
    this.modalImagePath = this.Images[this.currentIndex].big;
    this.footerModal.show();
  }

  next() {
    this.currentIndex =
      this.currentIndex >= this.Images.length - 1 ? 0 : this.currentIndex + 1;
    this.modalImagePath = this.Images[this.currentIndex].big;
  }

  previous() {
    this.currentIndex =
      this.currentIndex === 0 ? this.Images.length - 1 : this.currentIndex - 1;
    this.modalImagePath = this.Images[this.currentIndex].big;
  }
}
