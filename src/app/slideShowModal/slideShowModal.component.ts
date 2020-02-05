import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ng-uikit-pro-standard';
import servicesJSON from '../../assets/json/services.json';

// Property declared by Google Tag Manager
declare global {
  interface Window {
    dataLayer: any;
  }
}

@Component({
  selector: 'app-slideShowModal',
  templateUrl: './slideShowModal.component.html',
  styleUrls: ['./slideShowModal.component.sass']
})
export class SlideShowModalComponent implements OnInit {
  @Input() slides;
  door;
  cardData = [];
  serviceList = [];
  doorObj = [];
  carouselItems = [];

  ngOnInit() {}
  @ViewChild('slideShowModal') public slideShowModal: ModalDirective;

  constructor(private route: ActivatedRoute, private router: Router) {}

  public setSlide(door) {
    this.door = door;

    this.doorObj = servicesJSON.filter((title) => title.title === this.door);

    const images = [];
    images.push(this.doorObj[0].tileImage);
    if (this.doorObj[0].thumbImages) {
      this.doorObj[0].thumbImages.map((img) => {
        images.push(img.medium);
      });
    }

    this.carouselItems = [...images];
  }

  public show() {
    this.slideShowModal.show();
  }

  hide() {
    this.slideShowModal.hide();
  }
}
