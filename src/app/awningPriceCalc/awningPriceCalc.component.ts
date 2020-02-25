import { Component, OnInit, OnChanges } from '@angular/core';
import awningJSON from '../../assets/json/awnings.json';

@Component({
  selector: 'awning-price-calc',
  templateUrl: './awningPriceCalc.component.html',
  styleUrls: ['./awningPriceCalc.component.sass']
})
export class AwningPriceCalcComponent implements OnInit, OnChanges {
  width: string;
  projection: string;
  awnType: string;
  selectedAwn;
  projectionOptions;

  setProjectionOptions() {
    const thisWidth = this.width;
    const array = this.selectedAwn.sizes;
    console.log(array);
    this.projectionOptions = this.selectedAwn.sizes[this.width];

    console.log(this.projectionOptions);
  }

  setAwnType() {
    this.selectedAwn = awningJSON.find((data) => {
      return data.type === this.awnType;
    });
    console.log(this.selectedAwn);
  }

  ngOnChanges() {}

  ngOnInit() {
    this.selectedAwn = awningJSON.find((data) => {
      return data.type === this.awnType;
    });
    console.log(this.selectedAwn);
  }
}
