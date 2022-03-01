import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
import regionalJSON from '../../assets/json/regional_services.json';
import regionalSecurityJSON from '../../assets/json/regionalSecurity.json';

@Component({
  selector: 'app-service-area',
  templateUrl: './service-area.component.html',
  styleUrls: ['./service-area.component.sass'],
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
export class ServiceAreaComponent implements OnInit {
  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  openQuoteForm() {
    this.quoteForm.show();
  }

  private id: string;

  constructor(private route: ActivatedRoute) { }

  state = 'clicked';
  regions = [];
  regionSecurityOnly = [];

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
  zoom: number = 7.5;
  scrollwheel = false;

  paths: Array<LatLngLiteral> = [
    { lat: 39.56332, lng: -122.28213 },
    { lat: 39.56751, lng: -122.15712 },
    { lat: 39.5453, lng: -121.61948 },
    { lat: 39.55582, lng: -121.46027 },
    { lat: 39.28271, lng: -121.02417 },
    { lat: 39.21335, lng: -120.78274 },
    { lat: 39.01437, lng: -120.80223 },
    { lat: 38.78566, lng: -120.65598 },
    { lat: 38.77872, lng: -120.54192 },
    { lat: 38.63457, lng: -120.46784 },
    { lat: 38.38389, lng: -120.48115 },
    { lat: 37.97737, lng: -120.35821 },
    { lat: 37.66657, lng: -120.44626 },
    { lat: 37.27024, lng: -120.26215 },
    { lat: 37.00989, lng: -119.67895 },
    { lat: 36.75607, lng: -119.50577 },
    { lat: 36.5544, lng: -119.58965 },
    { lat: 36.44856, lng: -120.44662 },
    { lat: 37.40167, lng: -121.31938 },
    { lat: 37.63615, lng: -121.44563 },
    { lat: 37.53918, lng: -121.70059 },
    { lat: 37.12515, lng: -121.45646 },
    { lat: 37.08681, lng: -121.46058 },
    { lat: 37.08462, lng: -121.54436 },
    { lat: 37.18426, lng: -121.88498 },
    { lat: 37.46059, lng: -122.23658 },
    { lat: 37.53743, lng: -122.12734 },
    { lat: 37.79615, lng: -122.36904 },
    { lat: 37.82769, lng: -122.30822 },
    { lat: 37.93824, lng: -122.45447 },
    { lat: 38.0078, lng: -122.3752 },
    { lat: 38.05431, lng: -122.27371 },
    { lat: 38.29743, lng: -122.51868 },
    { lat: 38.40563, lng: -122.42142 },
    { lat: 38.57053, lng: -122.08625 },
    { lat: 38.89524, lng: -122.31091 },
    { lat: 39.56332, lng: -122.28213 }
  ];

  color: string = 'blue';

  regionLogging = []
  clickMeForRegion(){
    for(let i = 0; i < this.regions.length; i++){
    this.regionLogging.push( this.regions[i].region )
    }
    console.log(this.regionLogging)
  }

  ngOnInit() {
    this.route.params.subscribe((params) => { this.id = params.id; });
    this.regions = regionalJSON;
    this.regionSecurityOnly = regionalSecurityJSON;
  }

  mapClicked($event: MouseEvent) {
    this.scrollwheel = true;
    this.clicked = 'none';
  }

  clickedMarker(label: string) {
    this.clicked = label;
    this.state == 'normal' ? (this.state = 'clicked') : (this.state = 'normal');
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.id).scrollIntoView({ block: 'center' });
    } catch (e) { }
  }
}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

interface region {
  paths: Array<LatLngLiteral>;
  fillColor: string;
  visible: boolean;
  label?: string;
}