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
  totalPrice: number;

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

  handleQuoteSubmit() {
    const selectedWidth = this.width;
    const selectedDrop = this.drop;

    const dropOptions = droprollJSON.find((data) => {
      return data.width === selectedWidth;
    });

    const dropPrice = dropOptions.drops.find((data) => {
      return data.drop === selectedDrop;
    });

    if (
      parseInt(this.width) <= parseInt("18'") &&
      parseInt(this.drop) <= parseInt("12'")
    ) {
      if (
        parseInt(this.width) <= parseInt("10'") &&
        parseInt(this.drop) <= parseInt("8'")
      ) {
        this.laborPrice = this.laborSm;
        this.shippingPrice = this.shipSm;
        this.wirelessMotorPrice = this.wirelessMotorSM;
      } else {
        this.laborPrice = this.laborMd;
        this.shippingPrice = this.shipMd;
        this.wirelessMotorPrice = this.wirelessMotorSM;
      }
    } else {
      this.laborPrice = this.laborLg;
      this.shippingPrice = this.shipLg;
      this.wirelessMotorPrice = this.wirelessMortorLG;
    }

    this.alreadyLoaded = true;
    this.dropRollPrice = dropPrice.cost;
    this.totalPrice =
      parseInt(this.dropRollPrice) +
      parseInt(this.laborPrice) +
      parseInt(this.shippingPrice) +
      parseInt(this.wirelessMotorPrice);

    this.quote = {
      width: this.width,
      drop: this.drop,
      dropRollPrice: this.dropRollPrice,
      laborPrice: this.laborPrice,
      shippingPrice: this.shippingPrice,
      wirelessMotor: this.wirelessMotorPrice,
      totalPrice: this.totalPrice
    };
  }

  ngOnChanges() {}

  ngOnInit() {
    this.wirelessMotorPrice = this.wirelessMotorSM;
    this.dropRollSizes = droprollJSON;
    this.drop;
  }
}
