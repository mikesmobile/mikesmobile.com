import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import droprollJSON from '../../assets/json/dropRoll.json';
import { QuoteFormDropRollComponent } from '../quote-form-droproll/quote-form-droproll.component';

@Component({
  selector: 'dropRoll-price-calc',
  templateUrl: './dropRollCalc.component.html',
  styleUrls: ['./dropRollCalc.component.sass']
})
export class DropRollCalcComponent implements OnInit, OnChanges {
  width: string;
  drop: string;
  quote: {
    width: string;
    drop: string;
    dropRollPrice: string;
    laborPrice: string;
    shippingPrice: string;
    shipLab: string;
    wirelessMotor: string;
    totalPrice: string;
  };
  alreadyLoaded: boolean;
  widthLess10: boolean = true;
  widthLess19: boolean;
  width19: boolean;
  widthLess23: boolean;
  widthLess26: boolean;
  dropRollSizes = [];
  wirelessMotorPrice: string;
  wirelessMotorSM: string = '572';
  wirelessMortorLG: string = '608';
  laborSm: string = '400';
  laborMd: string = '500';
  laborLg: string = '800';
  shipSm: string = '400';
  shipMd: string = '600';
  shipLg: string = '800';
  shipLab: number;
  shakeIt: boolean = true;
  dropOptionsLess10 = [
    "2'",
    "3'",
    "4'",
    "5'",
    "6'",
    "7'",
    "8'",
    "9'",
    "10'",
    "11'",
    "12'"
  ];

  dropOptions10to18 = [
    "2'",
    "3'",
    "4'",
    "5'",
    "6'",
    "7'",
    "8'",
    "9'",
    "10'",
    "11'",
    "12'",
    "13'",
    "14'",
    "15'",
    "16'"
  ];
  dropOptions19 = ["8'", "9'", "10'", "11'", "12'", "13'", "14'", "15'", "16'"];
  dropOptions20to23 = ["8'", "9'", "10'", "11'", "12'", "13'", "14'"];
  dropOptions24to26 = ["8'", "9'", "10'", "11'", "12'"];

  dropRollPrice: string;
  laborPrice: string;
  shippingPrice: string;
  totalPrice: string;

  @ViewChild(QuoteFormDropRollComponent)
  private quoteForm: QuoteFormDropRollComponent;

  openQuoteForm() {
    this.quoteForm.show();
  }

  setPossibleDrops() {
    if (parseInt(this.width) <= parseInt("9'")) {
      this.widthLess10 = true;
      this.widthLess19 = false;
      this.width19 = false;
      this.widthLess23 = false;
      this.widthLess26 = false;
    } else {
      if (parseInt(this.width) <= parseInt("18'")) {
        this.widthLess10 = false;
        this.widthLess19 = true;
        this.width19 = false;
        this.widthLess23 = false;
        this.widthLess26 = false;
      } else {
        if (parseInt(this.width) === parseInt("19'")) {
          this.widthLess10 = false;
          this.widthLess19 = false;
          this.width19 = true;
          this.widthLess23 = false;
          this.widthLess26 = false;
        } else {
          if (parseInt(this.width) <= parseInt("23'")) {
            this.widthLess10 = false;
            this.widthLess19 = false;
            this.width19 = false;
            this.widthLess23 = true;
            this.widthLess26 = false;
          } else {
            this.widthLess10 = false;
            this.widthLess19 = false;
            this.width19 = false;
            this.widthLess23 = false;
            this.widthLess26 = true;
          }
        }
      }
    }

    if (this.alreadyLoaded === true) {
      this.handleQuoteSubmit();
    }
  }

  checkAlreadySubmit() {
    if (this.alreadyLoaded === true) {
      this.handleQuoteSubmit();
    }
  }

  addTax(string) {
    const sumTax = parseInt(string) * 1.09;
    return sumTax.toFixed(2).toString();
  }

  handleQuoteSubmit() {
    const selectedWidth = this.width;
    const selectedDrop = this.drop;
    const oldCost = this.totalPrice;

    const dropOptions = droprollJSON.find((data) => {
      return data.width === selectedWidth;
    });

    const dropPrice = dropOptions.drops.find((data) => {
      return data.drop === selectedDrop;
    });

    if (parseInt(this.width) <= parseInt("20'")) {
      this.shippingPrice = this.shipSm;
      this.laborPrice = this.laborSm;
    } else {
      if (parseInt(this.width) <= parseInt("30'")) {
        this.shippingPrice = this.shipMd;
        this.laborPrice = this.laborMd;
      } else {
        this.shippingPrice = this.shipLg;
        this.laborPrice = this.laborLg;
      }
    }

    if (
      parseInt(this.width) <= parseInt("18'") &&
      parseInt(this.drop) <= parseInt("12'")
    ) {
      this.wirelessMotorPrice = this.wirelessMotorSM;
    } else {
      this.wirelessMotorPrice = this.wirelessMortorLG;
    }

    this.alreadyLoaded = true;
    this.dropRollPrice = this.addTax(dropPrice.cost);
    this.totalPrice = (
      parseFloat(this.dropRollPrice) +
      parseFloat(this.laborPrice) +
      parseFloat(this.shippingPrice) +
      parseFloat(this.wirelessMotorPrice)
    ).toFixed(2);

    this.shipLab = parseInt(this.laborPrice) + parseInt(this.shippingPrice);

    this.quote = {
      width: this.width,
      drop: this.drop,
      dropRollPrice: this.dropRollPrice,
      laborPrice: this.laborPrice,
      shippingPrice: this.shippingPrice,
      shipLab: this.shipLab.toString(),
      wirelessMotor: this.wirelessMotorPrice,
      totalPrice: this.totalPrice.toString()
    };
    if (oldCost !== this.totalPrice) {
      this.shakeIt = this.shakeIt === true ? false : true;
    }
  }

  ngOnChanges() {}

  ngOnInit() {
    this.wirelessMotorPrice = this.wirelessMotorSM;
    this.dropRollSizes = droprollJSON;
    this.drop;
  }
}
