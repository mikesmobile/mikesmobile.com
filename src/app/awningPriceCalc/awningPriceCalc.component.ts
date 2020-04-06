import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import awningJSON from '../../assets/json/awnings.json';

import { QuoteFormAwningComponent } from '../quote-form-awning/quote-form-awning.component';

@Component({
  selector: 'awning-price-calc',
  templateUrl: './awningPriceCalc.component.html',
  styleUrls: ['./awningPriceCalc.component.sass']
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
  electrical: string = '450';
  electricalPick: boolean = false;
  shippingSm: string = '400';
  shippingMd: string = '600';
  shippingLg: string = '800';
  selectedLabor: string;
  selectedShipping: string;
  labShipPrice: string;
  totalCost: string;
  shakeIt: boolean = true;
  currentState = 'initial';
  quote: {
    awnType: string;
    awnWidth: string;
    awnProj: string;
    awnWallBrkt: string;
    awnCrank: string;
    awnMotor: string;
    awnPitchAdjust: string;
    awnHood: string;
    awnPrice: string;
    awnWallBrktPrice: string;
    awnMotorPrice: string;
    awnHoodPrice: string;
    shipLabPrice: string;
    awnTotalPrice: string;
  };

  @ViewChild(QuoteFormAwningComponent)
  private quoteForm: QuoteFormAwningComponent;

  openQuoteForm() {
    this.quoteForm.show();
  }

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

  handleSelectElectrical() {
    if (this.electricalPick) {
      this.electricalPick = false;
    } else {
      this.electricalPick = true;
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
      this.awnType = 'Sunlight';
    } else {
      if (
        parseInt(selectedWidth) <= parseInt("40'") &&
        parseInt(selectedProj) <= parseInt("11'6")
      ) {
        this.awnType = 'Sunstyle';
      } else {
        this.awnType = 'Sunesta';
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


    if (this.optHood) {
      sum = (parseFloat(sum) + parseFloat(this.hoodPrice))
        .toFixed(2)
        .toString();
    }

    if (this.electricalPick) {
      sum = (parseFloat(sum) + parseFloat(this.electrical)).toFixed(2).toString();
    }

    this.totalCost = sum;

    if (oldCost !== this.totalCost) {
      this.shakeIt = this.shakeIt === true ? false : true;
    }
    this.buildQuote();
  }

  addTax(string) {
    return (parseInt(string) * 1.09).toFixed(2).toString();
  }

  checkAlreadySubmit() {
    if (this.alreadySubmit === true) {
      this.handleQuoteSubmit();
    }
  }

  buildQuote() {
    let newMr;
    let newMrPrice;
    let newPitchAdjust;
    let newPitchAdjustPrice;
    let newHood;
    let newHoodPrice;

    if (this.optMR) {
      newMr = 'yes';
      newMrPrice = this.motorRemotePrice;
    } else {
      newMr = 'no';
      newMrPrice = '0';
    }

    if (this.optPA && !this.paNotAvil) {
      newPitchAdjust = 'yes';
      newPitchAdjustPrice = this.pitchAdjusterPrice;
    } else {
      newPitchAdjust = 'no';
      newPitchAdjustPrice = '0';
    }

    if (this.optHood) {
      newHood = 'yes';
      newHoodPrice = this.hoodPrice;
    } else {
      newHood = 'no';
      newHoodPrice = '0';
    }

    const newQuote = {
      awnType: this.awnType,
      awnWidth: this.width,
      awnProj: this.projection,
      awnWallBrkt: this.awnAcc.mtgBrkts,
      awnCrank: this.handCrankPrice,
      awnMotor: newMr,
      awnPitchAdjust: newPitchAdjust,
      awnHood: newHood,
      awnPrice: this.awnPrice,
      awnWallBrktPrice: this.wallBrktPrice,
      awnMotorPrice: newMrPrice,
      awnHoodPrice: newHoodPrice,
      shipLabPrice: this.labShipPrice,
      awnTotalPrice: this.totalCost
    };

    this.quote = newQuote;
  }

  ngOnChanges() { }

  ngOnInit() {
    this.projOpt10 = true;
    this.awnings = awningJSON;
  }
}
