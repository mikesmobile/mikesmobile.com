import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ServicesService } from '../services/service.service';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

@Component({
  selector: 'app-free-quote',
  templateUrl: './free-quote.component.html',
  styleUrls: ['./free-quote.component.sass'],
  providers: [ServicesService]

})
export class FreeQuoteComponent implements OnInit {
  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  toggleQuoteForm() {
    this.quoteForm.show()
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.toggleQuoteForm()
  }
}
