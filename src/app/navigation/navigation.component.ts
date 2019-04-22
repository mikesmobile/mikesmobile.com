import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

import servicesJSON from '../../assets/json/services.json';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  toggleQuoteForm() {
    this.quoteForm.show();
  }

  serviceList = [];

  ngOnInit() {
    servicesJSON.forEach((data) => {
      this.serviceList.push(data);
    });
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
