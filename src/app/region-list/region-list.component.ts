import { Component, OnInit, OnDestroy } from '@angular/core';
import { Region } from '../regions/region';
import { RegionsService } from '../regions/regions.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.sass'],
  providers:[RegionsService]
})
export class RegionListComponent implements OnInit, OnDestroy {
  @ViewChild('item') nameInputRef: ElementRef;
  private req: any
  regionList: [Region]
  regions = [];


  // Remove the duplicate Categories
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  constructor(private _service: RegionsService) { }

  ngOnInit() {
    this.req = this._service.list().subscribe(data => {
      this.regionList = data as [Region];
      //console.log("regionList: ",this.regionList);
      // The Category Filter Dropdown
      for (var i = 0; i < this.regionList.length; i++) {
        this.regions.push(this.regionList[i].region)
      }
      // Don't duplicate Categories
      this.regions = this.regions.filter(this.onlyUnique)
      // console.log(this.category)
      //console.log("Regions:",this.regions)
    })
    
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

}
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-region-list',
//   templateUrl: './region-list.component.html',
//   styleUrls: ['./region-list.component.sass']
// })
// export class RegionListComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
