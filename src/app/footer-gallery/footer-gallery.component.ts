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
  @ViewChild('footerModalImg') public modalImg;
  @ViewChild('footerModalPicture') public modalPicture;
  public currentIndex: number;
  public modalImgPath: string;

  show(val: number) {
    this.currentIndex = val;
    this.modalImgPath = this.Images[this.currentIndex].big;
    this.footerModal.show();
  }

  next() {
    this.currentIndex =
      this.currentIndex >= this.Images.length - 1 ? 0 : this.currentIndex + 1;
    this.modalImg.nativeElement.setAttribute(
      'src',
      this.Images[this.currentIndex].big
    );
    this.modalPicture.nativeElement.setAttribute(
      'srcset',
      this.Images[this.currentIndex].big
    );
  }

  previous() {
    this.currentIndex =
      this.currentIndex === 0 ? this.Images.length - 1 : this.currentIndex - 1;
    this.modalImg.nativeElement.setAttribute(
      'src',
      this.Images[this.currentIndex].big
    );
    this.modalPicture.nativeElement.setAttribute(
      'srcset',
      this.Images[this.currentIndex].big
    );
  }
}
