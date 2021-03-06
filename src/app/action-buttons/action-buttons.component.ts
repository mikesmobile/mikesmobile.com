import { Component, ViewChild } from '@angular/core';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.sass']
})
export class ActionButtonsComponent {
  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  openQuoteForm() {
    this.quoteForm.show();
  }

  hideShowSearch() {
    let searchInput = document.getElementById('search-input');

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
      let container = document.getElementById('action-buttons-container');
      container.classList.remove('container', 'mt-3');
      container.classList.add('row');
    }
  }
}
