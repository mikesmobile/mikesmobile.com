import { Component, ViewChild } from '@angular/core';
import { QuoteFormComponent } from '../quote-form/quote-form.component';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent {
  phone: string;
  currentRoute: string;
  hideMe: boolean;

  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  openQuoteForm() {
    this.quoteForm.show();
  }

  constructor(private router: Router) {
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar
        this.currentRoute = event.url;
        this.phoneNumberSwitch()
      }
    });
  }
  phoneNumberSwitch() {
    this.hideMe = false;
    if (this.currentRoute.startsWith('/about/security-screen-doors')) {
      this.phone = "(916) 283-7537";
    }else if(this.currentRoute.startsWith('/grid/titans')){
      this.phone = "(916) 312-3182";
    } else if(this.currentRoute.startsWith('/products/viewguards')){
      this.phone = "(916) 318-9845";
    } else if(this.currentRoute.startsWith('/about/theWaterproofingPackage')){
      this.phone = '(916) 304-8225';
    } else if(this.currentRoute.startsWith('/grid/our-chimney-repairs')){
      this.phone = '(916) 304-8225';
      this.hideMe = true;
    }else {
      this.hideMe = false;
      this.phone = "(800) 992-9938";
    }
  }

  openDropdown() {
    let dropdown = document.getElementById('dropdown');
    dropdown.classList.add('show');
  }

  closeDropdown() {
    let dropdown = document.getElementById('dropdown');
    dropdown.classList.remove('show');
  }

  toggleDropdownMobile() {
    let dropdown = document.getElementById('DropdownMobile');
    dropdown.classList.toggle('show');
  }
}
