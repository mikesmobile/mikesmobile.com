import { Component, OnInit, ViewChild } from '@angular/core';
import { SolarScreenWindow } from '../solar-screen-window';
import { SolarScreenWindowDataService } from '../solar-screen-window-data.service';

import { QuoteFormSolarScreenComponent } from '../quote-form-solar-screen/quote-form-solar-screen.component';

@Component({
  selector: 'app-solar-screen-price-calc',
  templateUrl: './solar-screen-price-calc.component.html',
  styleUrls: ['./solar-screen-price-calc.component.sass'],
  providers: [SolarScreenWindowDataService],
})
export class SolarScreenPriceCalcComponent implements OnInit {
  newSolarScreenWindow: SolarScreenWindow = new SolarScreenWindow();
  errorMessage: string;
  grid: boolean = false;
  regPrice: number = 11.99;
  gridPrice: number = 16.36;
  minGridPrice: number = 174.41;
  minRegPrice: number = 103.55;
  gridMsg: string = '';
  totalCost: number;

  constructor(
    private solarScreenWindowDataService: SolarScreenWindowDataService
  ) {}

  @ViewChild(QuoteFormSolarScreenComponent)
  private quoteForm: QuoteFormSolarScreenComponent;

  openQuoteForm() {
    this.quoteForm.show();
  }

  addSolarScreenWindow() {
    if (this.newSolarScreenWindow.width && this.newSolarScreenWindow.height) {
      console.log(this.newSolarScreenWindow.width);
      console.log(Number.isInteger(this.newSolarScreenWindow.width));
      if (Number.isInteger(this.newSolarScreenWindow.width)) {
        this.errorMessage = '';
        if (Number.isInteger(this.newSolarScreenWindow.height)) {
          if (this.newSolarScreenWindow.grid === false) {
            this.newSolarScreenWindow.price =
              this.newSolarScreenWindow.width *
              this.newSolarScreenWindow.height *
              this.regPrice;
            this.newSolarScreenWindow.gridMsg = '';
          } else {
            this.newSolarScreenWindow.price =
              this.newSolarScreenWindow.width *
              this.newSolarScreenWindow.height *
              this.gridPrice;
            this.newSolarScreenWindow.gridMsg = 'W/ Grid';
          }
          if (this.newSolarScreenWindow.grid === false) {
            if (this.newSolarScreenWindow.price < 103.55) {
              this.newSolarScreenWindow.price = this.minRegPrice;
            }
          } else {
            if (this.newSolarScreenWindow.price < 174.4) {
              this.newSolarScreenWindow.price = this.minGridPrice;
            }
          }

          this.solarScreenWindowDataService.addSolarScreenWindow(
            this.newSolarScreenWindow
          );
          this.newSolarScreenWindow = new SolarScreenWindow();
          this.errorMessage = '';
        } else {
          this.errorMessage =
            'The Height needs to be a whole number rounded up to biggest foot.';
        }
      } else {
        this.errorMessage =
          'The width needs to be a whole number rounded up to biggest foot.';
      }
    } else {
      this.errorMessage = 'You need to enter a height and width';
    }
  }

  removeSolarScreenWindow(solarScreenWindow) {
    this.solarScreenWindowDataService.deleteSolarScreenWindowById(
      solarScreenWindow.id
    );
  }

  updateSolarScreenWindow(solarScreenWindow) {
    this.solarScreenWindowDataService.updateSolarScreenWindowById(
      solarScreenWindow.id,
      solarScreenWindow
    );
    console.log(solarScreenWindow);
  }

  switchGrid() {
    if (this.grid === false) {
      this.newSolarScreenWindow.grid = true;
      this.grid = true;
    } else {
      this.newSolarScreenWindow.grid = false;
      this.grid = false;
    }
  }

  get solarScreenWindows() {
    return this.solarScreenWindowDataService.getAllSolarScreenWindows();
  }

  get solarScreenTotal() {
    let total = 0;
    for (let i = 0; i < this.solarScreenWindows.length; i++) {
      total = total + this.solarScreenWindows[i].price;
    }
    return total.toFixed(2);
  }

  ngOnInit() {}
}
