import { Component, OnInit, ViewChild } from '@angular/core';
import { QuoteFormPromoComponent } from '../quote-form-promo/quote-form-promo.component';
@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.sass']
})
export class PromoComponent {
  @ViewChild(QuoteFormPromoComponent)
  private quoteForm: QuoteFormPromoComponent;
  openQuoteForm() {
    this.quoteForm.show();
  }
}
