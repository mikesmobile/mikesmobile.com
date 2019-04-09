import { Component, ViewChild } from '@angular/core';
import { QuoteFormComponent } from '../quote-form/quote-form.component';
import { MouseEvent } from '@agm/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
  animations: [
    trigger('infobox', [
      state(
        'normal',
        style({
          backgroundColor: 'red',
          transform: 'translateX(0)'
        })
      ),
      state(
        'clicked',
        style({
          backgroundColor: 'black',
          transition: 'opacity 3s ease-in-out',
          opacity: '0',
          transform: 'translateX(100px)'
        })
      ),
      transition('normal <=> clicked', animate(300))
      // transition('clicked => normal', animate(800))
    ])
  ]
})
export class ContactComponent {
  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  toggleQuoteForm() {
    this.quoteForm.show();
  }

  state = 'clicked';
  clicked: string = 'none';
  //  center position of the map
  lat = 38.253401;
  lng = -121.299688;
  markers: marker[] = [
    {
      lat: 38.57683,
      lng: -121.32426,
      label: 'Sacramento',
      draggable: false
    },
    {
      lat: 38.023689,
      lng: -121.280342,
      label: 'Stockton',
      draggable: false
    }
  ];
  zoom: number = 9.7;
  scrollwheel = false;

  mapClicked($event: MouseEvent) {
    this.scrollwheel = true;
    this.clicked = 'none';
  }

  clickedMarker(label: string) {
    this.clicked = label;
    this.state == 'normal' ? (this.state = 'clicked') : (this.state = 'normal');
  }

  constructor() {}
}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
