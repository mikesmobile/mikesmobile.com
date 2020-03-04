import { Component, OnInit, OnChanges } from '@angular/core';
import awningJSON from '../../assets/json/awnings.json';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { parseTimelineCommand } from '@angular/animations/browser/src/render/shared';

@Component({
  selector: 'awning-price-calc',
  templateUrl: './awningPriceCalc.component.html',
  styleUrls: ['./awningPriceCalc.component.sass'],
  animations: [
    trigger('shake', [
      state(
        'initial',
        style({
          animation: 'shake .1s'
        })
      ),
      state(
        'final',
        style({
          animation: 'shake .1s'
        })
      ),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1500ms'))
    ])
  ]
})
export class AwningPriceCalcComponent implements OnInit, OnChanges {
  width: string;
  projection: string;
  alreadySubmit: boolean = false;
  awnType: string;
  awnPrice: string;
  awnAcc: {
    type: string;
    arms: string;
    mtgBrkts: string;
    centerSeamSupport: string;
    wallBrackets: string;
    ceilingBrkts: string;
    wirelessRemote: string;
    manualOverridde: string;
    handCrank: string;
    endBrackets: string;
    pitchAdjust: string;
  };
  wallBrktPrice: string;
  handCrankPrice: string;
  motorRemotePrice: string;
  pitchAdjusterPrice: string;
  hoodPrice: string;
  optMR: boolean = true;
  optPA: boolean = true;
  optHood: boolean = true;
  paNotAvil: boolean = false;
  awnings: {}[];
  projOpt5: boolean;
  projOpt6: boolean;
  projOpt7: boolean;
  projOpt8: boolean;
  projOpt9: boolean;
  projOpt10: boolean;
  projOptions5 = ["6'8"];
  projOptions6 = ["6'8", "8'3"];
  projOptions7 = ["6'8", "8'3", "10'"];
  projOptions8 = ["6'8", "8'3", "10'", "11'6"];
  projOptions9 = ["6'8", "8'3", "10'", "11'6", "13'"];
  projOptions10up = ["6'8", "8'3", "10'", "11'6", "13'", "14'8"];
  laborSm: string = '400';
  laborMd: string = '500';
  laborLg: string = '800';
  shippingSm: string = '400';
  shippingMd: string = '600';
  shippingLg: string = '800';
  selectedLabor: string;
  selectedShipping: string;
  labShipPrice: string;
  totalCost: string;
  shakeIt: boolean = true;
  currentState = 'initial';

  handleSelectWidth() {
    if (this.width === "5'") {
      this.projOpt5 = true;
      this.projOpt6 = false;
      this.projOpt7 = false;
      this.projOpt8 = false;
      this.projOpt9 = false;
      this.projOpt10 = false;
    } else {
      if (this.width === "6'") {
        this.projOpt5 = false;
        this.projOpt6 = true;
        this.projOpt7 = false;
        this.projOpt8 = false;
        this.projOpt9 = false;
        this.projOpt10 = false;
      } else {
        if (this.width === "7'") {
          this.projOpt5 = false;
          this.projOpt6 = false;
          this.projOpt7 = true;
          this.projOpt8 = false;
          this.projOpt9 = false;
          this.projOpt10 = false;
        } else {
          if (this.width === "8'") {
            this.projOpt5 = false;
            this.projOpt6 = false;
            this.projOpt7 = false;
            this.projOpt8 = true;
            this.projOpt9 = false;
            this.projOpt10 = false;
          } else {
            if (this.width === "9'") {
              this.projOpt5 = false;
              this.projOpt6 = false;
              this.projOpt7 = false;
              this.projOpt8 = false;
              this.projOpt9 = true;
              this.projOpt10 = false;
            } else {
              this.projOpt5 = false;
              this.projOpt6 = false;
              this.projOpt7 = false;
              this.projOpt8 = false;
              this.projOpt9 = false;
              this.projOpt10 = true;
            }
          }
        }
      }
    }
    this.checkAlreadySubmit();
  }

  handleSelectWR() {
    if (this.optMR) {
      this.optMR = false;
    } else {
      this.optMR = true;
    }
    this.calcTotal();
  }

  handleSelectPa() {
    if (this.optPA) {
      this.optPA = false;
    } else {
      this.optPA = true;
    }
    this.calcTotal();
  }

  handleSelectHood() {
    if (this.optHood) {
      this.optHood = false;
    } else {
      this.optHood = true;
    }
    this.calcTotal();
  }

  handleQuoteSubmit() {
    this.paNotAvil = false;
    const selectedWidth = this.width;
    const selectedProj = this.projection;
    const styleOptions = awningJSON.find((data) => {
      return data.width === selectedWidth;
    });

    //find type
    if (
      parseInt(selectedWidth) <= parseInt("24'") &&
      parseInt(selectedProj) <= parseInt("10'")
    ) {
      this.awnType = 'sunlight';
    } else {
      if (
        parseInt(selectedWidth) <= parseInt("40'") &&
        parseInt(selectedProj) <= parseInt("11'6")
      ) {
        this.awnType = 'sunstyle';
      } else {
        this.awnType = 'sunesta';
      }
    }

    //find size
    if (parseInt(selectedWidth) <= parseInt("20'")) {
      this.selectedLabor = this.laborSm;
      this.selectedShipping = this.shippingSm;
    } else {
      if (parseInt(selectedWidth) <= parseInt("30'")) {
        this.selectedLabor = this.laborMd;
        this.selectedShipping = this.shippingMd;
      } else {
        this.selectedLabor = this.laborLg;
        this.selectedShipping = this.shippingLg;
      }
    }

    this.labShipPrice = (
      parseInt(this.selectedLabor) + parseInt(this.selectedShipping)
    ).toString();

    const price = styleOptions.projections.find((data) => {
      return data.proj === selectedProj;
    });

    const style = styleOptions.types.find((data) => {
      return data.type === this.awnType;
    });

    this.awnAcc = style;

    if (this.awnAcc.pitchAdjust === 'n/a') {
      this.pitchAdjusterPrice = '0';
      this.paNotAvil = true;
    } else {
      this.pitchAdjusterPrice = this.addTax(this.awnAcc.pitchAdjust);
    }

    this.wallBrktPrice = this.addTax(this.awnAcc.wallBrackets);
    this.handCrankPrice = this.addTax(this.awnAcc.handCrank);
    this.motorRemotePrice = this.addTax(this.awnAcc.wirelessRemote);

    this.hoodPrice = this.addTax(this.awnAcc.endBrackets);

    this.alreadySubmit = true;

    this.awnPrice = this.addTax(price.price);

    this.calcTotal();
  }

  calcTotal() {
    const oldCost = this.totalCost;
    let sum = (
      parseFloat(this.awnPrice) +
      parseFloat(this.wallBrktPrice) +
      parseFloat(this.handCrankPrice) +
      parseFloat(this.labShipPrice)
    )
      .toFixed(2)
      .toString();

    if (this.optMR) {
      sum = (parseFloat(sum) + parseFloat(this.motorRemotePrice))
        .toFixed(2)
        .toString();
    }

    if (this.optPA) {
      sum = (parseFloat(sum) + parseFloat(this.pitchAdjusterPrice))
        .toFixed(2)
        .toString();
    }

    if (this.optHood) {
      sum = (parseFloat(sum) + parseFloat(this.hoodPrice))
        .toFixed(2)
        .toString();
    }

    this.totalCost = sum;

    if (oldCost !== this.totalCost) {
      this.shakeIt = this.shakeIt === true ? false : true;
    }
  }

  addTax(string) {
    return (parseInt(string) * 1.09).toFixed(2).toString();
  }

  checkAlreadySubmit() {
    if (this.alreadySubmit === true) {
      this.handleQuoteSubmit();
    }
  }

  ngOnChanges() {}

  ngOnInit() {
    this.projOpt10 = true;
    this.awnings = awningJSON;
  }
}
