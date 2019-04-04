import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ServiceItem } from '../services/service';
import { ServicesService } from '../services/service.service';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
  providers: [ServicesService]
})
export class NavigationComponent implements OnInit {
  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  toggleQuoteForm() {
    this.quoteForm.show();
  }
  categories = [
    'Screens',
    'Chimney',
    'Security',
    'Awnings',
    'Home Improvement'
  ];
  gridType = [
    'swinging-screen-doors',
    'accessories',
    'repairs',
    'resources',
    'masonry-services',
    'steel-security-doors'
  ];

  private req: any;
  serviceList: [ServiceItem];

  constructor(private _service: ServicesService) {}

  ngOnInit() {
    this.req = this._service.list().subscribe((data) => {
      this.serviceList = data as [ServiceItem];
    });
  }

  ngOnDestroy() {
    this.req.unsubscribe();
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
