import { Component, OnInit, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { turnState } from 'ng-uikit-pro-standard';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId:Object) { }

  innerWidth:number
  slider:boolean


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth
    if (this.innerWidth < 1300) {
      this.slider = false
    } else {
      this.slider = true
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.innerWidth = window.innerWidth
      if (this.innerWidth < 1300) {
        this.slider = false
      } else {
        this.slider = true
      }
      this.growSlideshow()
      stateManager.init()
    }
  }

  growSlideshow() {
    if (screen.width < 992) {
      let slideshow = document.getElementById('slideshow')
      slideshow.classList.remove('container', 'mt-3')
      slideshow.classList.add('row')
    }
  }
}


/* TRYING OUT DIFFERENT WAYS TO HAVE RESPONSIVE JAVASCRIPT */

var stateManager = (function () {
  var state = null;

  var resizePage = function () {
    if (screen.width < 768) {
      if (state !== "mobile") {
        displayMobile();
      }
      resizeMobile();
    }
    else {
      if (state !== "desktop") {
        displayDesktop();
      }
      resizeDesktop();
    }
  };
  var displayMobile = function () {
    state = "mobile";
    //console.log("enter mobile");
  };
  var displayDesktop = function () {
    state = "desktop";
    //console.log("enter desktop");
  };
  var resizeMobile = function () {
    //console.log("resizing mobile");
  };
  var resizeDesktop = function () {
    //console.log("resizing desktop");
  };
  return {
    init: function () {
      resizePage();
      window.onresize = () => {
        resizePage;
      }
    }
  };
}());
