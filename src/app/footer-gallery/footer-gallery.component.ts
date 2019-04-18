import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer-gallery',
  templateUrl: './footer-gallery.component.html',
  styleUrls: ['./footer-gallery.component.sass']
})
export class FooterGalleryComponent {
  @Input() Images;
  @ViewChild('footerContent') public footerModal;
  @ViewChild('footerModalImage') public modalImage;
  public index: number;
  public name: string;

  show(value: number) {
    this.index = value;
    this.name = this.Images[this.index].big;
    this.footerModal.show();
  }

  next() {
    this.modalImage.nativeElement.setAttribute(
      'src',
      this.Images[++this.index % this.Images.length].big
    );
  }

  previous() {
    this.index--;
    if (this.index < 0) this.index = this.Images.length - 1;
    this.modalImage.nativeElement.setAttribute(
      'src',
      this.Images[this.index].big
    );
  }
}
