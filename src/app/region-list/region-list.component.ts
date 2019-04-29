import { Component, OnInit } from '@angular/core';

import regionalJSON from '../../assets/json/regional_services.json';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.sass']
})
export class RegionListComponent implements OnInit {
  regions = [];

  ngOnInit() {
    this.regions = regionalJSON;
  }
}
