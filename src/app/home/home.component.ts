import {
  Component,
  OnInit,
  HostListener,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  innerWidth: number;
  slider: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1300) {
      this.slider = false;
    } else {
      this.slider = true;
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.innerWidth = window.innerWidth;
      if (this.innerWidth < 1300) {
        this.slider = false;
      } else {
        this.slider = true;
      }
      this.growSlideshow();
    }
  }

  growSlideshow() {
    if (screen.width < 992) {
      let slideshow = document.getElementById('slideshow');
      slideshow.classList.remove('container', 'mt-3');
      slideshow.classList.add('row');
    }
  }
}
