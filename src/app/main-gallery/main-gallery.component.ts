import { Component, Input, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-main-gallery',
  templateUrl: './main-gallery.component.html',
  styleUrls: ['./main-gallery.component.sass']
})
export class MainGalleryComponent {
  @Input() Images;
  @ViewChild('mainContent') public contentModal: any;
  @ViewChild('mainCarousel') public contentCarousel;
  @ViewChild('mainModalImage') public modalImage;
  public name: string;

  show() {
    this.name = this.Images[this.contentCarousel.getCurrentSlideIndex()].big;
    this.contentModal.show();
  }

  next() {
    const currentIndex = this.contentCarousel.getCurrentSlideIndex();
    const toIndex = this.contentCarousel.isLast(currentIndex)
      ? 0
      : currentIndex + 1;
    this.contentCarousel.selectSlide(toIndex);
    this.modalImage.nativeElement.setAttribute('src', this.Images[toIndex].big);
  }

  previous() {
    const currentIndex = this.contentCarousel.getCurrentSlideIndex();
    const toIndex =
      currentIndex === 0 ? this.Images.length - 1 : currentIndex - 1;
    this.contentCarousel.selectSlide(toIndex);
    this.modalImage.nativeElement.setAttribute('src', this.Images[toIndex].big);
  }
}
