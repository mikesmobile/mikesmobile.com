import { Component, OnDestroy, ViewChild } from '@angular/core';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent {
  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  openQuoteForm() {
    this.quoteForm.show();
  }

  openDropdown() {
    let dropdown = document.getElementById('dropdown');
    if (screen.width > 992) {
      dropdown.classList.add('show');
    }
  }

  closeDropdown() {
    let dropdown = document.getElementById('dropdown');
    dropdown.classList.remove('show');
  }

  openDropdownMobile() {
    let dropdown = document.getElementById('DropdownMobile');
    if (screen.width < 992) {
      dropdown.classList.toggle('show');
    }
  }
}
