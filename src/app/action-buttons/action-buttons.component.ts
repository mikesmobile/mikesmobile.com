import { Component, ViewChild } from '@angular/core';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.sass']
})
export class ActionButtonsComponent {
  constructor() {}

  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  toggleQuoteForm() {
    console.log(this.quoteForm);
    this.quoteForm.show();
  }

  hideShowSearch() {
    var searchInput = document.getElementById('search-input');

    document.getElementById('search-button').classList.toggle('orange');

    if (searchInput.style.display === 'none') {
      searchInput.style.display = 'inline';
      searchInput.style.width = '100%';
    } else {
      searchInput.style.display = 'none';
    }
  }

  growActionBtns() {
    if (screen.width < 992) {
      var container = document.getElementById('action-buttons-container');
      container.classList.remove('container', 'mt-3');
      container.classList.add('row');
    }
  }
}
