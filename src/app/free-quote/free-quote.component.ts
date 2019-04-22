import { Component, ViewChild } from '@angular/core';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

@Component({
  selector: 'app-free-quote',
  templateUrl: './free-quote.component.html',
  styleUrls: ['./free-quote.component.sass']
})
export class FreeQuoteComponent {
  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  toggleQuoteForm() {
    this.quoteForm.show();
  }

  ngAfterViewInit() {
    this.toggleQuoteForm();
  }
}
