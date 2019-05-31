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
  selector: 'source[appLazyLoad]'
})
export class LazyLoadSourceDirective implements AfterViewInit, OnChanges {
  @HostBinding('attr.srcset') srcAttr = null;
  @Input() srcset: string;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.srcset && !changes.srcset.firstChange) {
      this.srcset = changes.srcset.currentValue;
      this.srcAttr = changes.srcset.currentValue;
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
    this.srcAttr = this.srcset;
  }
}
