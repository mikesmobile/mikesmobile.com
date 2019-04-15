import { Component, OnInit } from '@angular/core';

import servicesJSON from '../../assets/json/services.json';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.sass']
})
export class RegionListComponent implements OnInit {
  regionList = [];
  regions = [];

  ngOnInit() {
    servicesJSON.forEach((data) => {
      if (data.region) {
        this.regionList.push(data);
        if (this.regions.indexOf(data.region) < 0) {
          this.regions.push(data.region);
        }
      }
    });
  }
}
