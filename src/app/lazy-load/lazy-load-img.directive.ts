import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: 'img[appLazyLoad]'
})
export class LazyLoadImgDirective implements AfterViewInit, OnChanges {
  @HostBinding('attr.src') srcAttr = null;
  @Input() src: string;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.src && !changes.src.firstChange) {
      this.src = changes.src.currentValue;
      this.srcAttr = changes.src.currentValue;
    }
  }

  private canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  private lazyLoadImage() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadImage();
          obs.unobserve(this.el.nativeElement);
        }
      });
    });
    obs.observe(this.el.nativeElement);
  }

  private loadImage() {
    this.srcAttr = this.src;
  }
}
