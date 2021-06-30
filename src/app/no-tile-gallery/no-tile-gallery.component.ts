import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-no-tile-gallery',
  templateUrl: './no-tile-gallery.component.html',
  styleUrls: ['./no-tile-gallery.component.sass']
})
export class noTileGalleryComponent {
  @Input() Images;
  @Input() class: String = 'carousel slide carousel-fade'
  @ViewChild('mainModal') public contentModal: any;
  @ViewChild('mainCarousel') public contentCarousel;
  public modalImgPath: string;

  show() {
    this.modalImgPath = this.Images[
      this.contentCarousel.getCurrentSlideIndex()
    ].big;
    this.contentModal.show();
  }

  next() {
    const currentIndex = this.contentCarousel.getCurrentSlideIndex();
    const toIndex = this.contentCarousel.isLast(currentIndex)
      ? 0
      : currentIndex + 1;
    this.contentCarousel.selectSlide(toIndex);
    this.modalImgPath = this.Images[toIndex].big;
  }

  previous() {
    const currentIndex = this.contentCarousel.getCurrentSlideIndex();
    const toIndex =
      currentIndex === 0 ? this.Images.length - 1 : currentIndex - 1;
    this.contentCarousel.selectSlide(toIndex);
    this.modalImgPath = this.Images[toIndex].big;
  }
}
