import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile-nav',
  templateUrl: './tile-nav.component.html',
  styleUrls: ['./tile-nav.component.sass']
})
export class TileNavComponent implements OnInit {
  @Input() turnOn: boolean = true;
  @Input() region;
  utms = [];
  ngOnInit() {
    let utm = {
      utm_source: "mikesmobile",
      utm_medium: "",
      utm_campaign: ""
    };
    utm.utm_medium = this.region.region.split(' ').map(item => item.toLowerCase()).join('-')
    utm.utm_campaign = this.region.services[0].title.split(' ').map(item => item.toLowerCase()).join('-')
  }
}
