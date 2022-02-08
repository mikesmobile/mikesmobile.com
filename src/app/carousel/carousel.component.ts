import { Component, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {
  // images = [
  //   {
  //     "src": '../../assets/images/home/nofocus.png',
  //     "alt": 'House without any security products'
  //   },
  //   {
  //     "src": '../../assets/images/home/windowfocus.png',
  //     "alt": 'Security Screens'
  //   },
  //   {
  //     "src": '../../assets/images/home/doorfocus.png',
  //     "alt": 'Viewguard Security Screen Door'
  //   },
  //   {
  //     "src": '../../assets/images/home/chimfocus.png',
  //     "alt": 'Chimney with a Mikes Mobile Cap and Waterproofing!'
  //   }
  // ]

  constructor() { }

  ngOnInit() {
    AOS.init({
      once: true,
      easing: 'ease-out-back',
      duration: 700
    });
  }

}
