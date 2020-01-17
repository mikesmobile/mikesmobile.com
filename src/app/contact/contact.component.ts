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
import { AgmPolygon, LatLngLiteral, PolygonManager } from '@agm/core';

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
  openQuoteForm() {
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
  // 9.7 was old setting, smaller number is more out!
  zoom: number = 9;
  scrollwheel = false;

  paths: Array<LatLngLiteral> = [
    { lat: 40, lng: -121 },
    { lat: 41, lng: -122 },
    { lat: 42, lng: -123 },
    { lat: 42, lng: -121 },
    { lat: 40, lng: -121 }
  ];

  color: string = 'blue';

  mapClicked($event: MouseEvent) {
    this.scrollwheel = true;
    this.clicked = 'none';
  }

  clickedMarker(label: string) {
    this.clicked = label;
    this.state == 'normal' ? (this.state = 'clicked') : (this.state = 'normal');
  }
}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
