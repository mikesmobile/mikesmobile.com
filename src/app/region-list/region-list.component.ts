import { Component, OnInit, OnDestroy } from '@angular/core';
import { Region } from '../regions/region';
import { RegionsService } from '../regions/regions.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.sass'],
  providers: [RegionsService]
})
export class RegionListComponent implements OnInit, OnDestroy {
  @ViewChild('item') nameInputRef: ElementRef;
  private req: any;
  regionList: [Region];
  regions = [];

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  constructor(private _service: RegionsService) {}

  ngOnInit() {
    this.req = this._service.list().subscribe((data) => {
      this.regionList = data as [Region];
      for (var i = 0; i < this.regionList.length; i++) {
        this.regions.push(this.regionList[i].region);
      }
      this.regions = this.regions.filter(this.onlyUnique);
    });
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }
}
