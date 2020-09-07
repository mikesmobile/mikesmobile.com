import { Component, ViewChild } from '@angular/core';
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
    let dropdown = document.getElementById('sidenav');
    dropdown.classList.add('show');
  }

  closeDropdown() {
    let dropdown = document.getElementById('sidenav');
    dropdown.classList.remove('show');
  }

  toggleDropdownMobile() {
    let dropdown = document.getElementById('sidenav');
    dropdown.classList.toggle('show');
  }
}
