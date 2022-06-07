import { Component, OnInit, ViewChild } from '@angular/core';
import { QuoteFormComponent } from '../quote-form/quote-form.component';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';

import phoneListJSON from '../../assets/json/phoneList.json';
import { JSONLDService } from '../services/jsonld.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
  phone: string;
  currentRoute: string;
  hideMe: boolean;
  showMobileDropdown: string = ''
  phoneList = [];

  noPhoneButton = [
    '/grid/our-chimney-repairs',
    '/grid/chimney-repairs',
    '/about/our-screen-doors',
  ];

  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  openQuoteForm() {
    this.quoteForm.show();
  }

  constructor(private router: Router, private route: ActivatedRoute, private jsonService: JSONLDService) {
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar
        this.currentRoute = event.url.split('?')[0];
        this.phone = this.phoneNumberSwitch()
        this.hideMe = this.dontShowButton()
      }
    });
  }

  ngOnInit() {
    phoneListJSON.forEach((data) => {
      this.phoneList.push(data);
    });
  }



  dontShowButton() {
    // this is where I put the landing pages to remove the phone button
    for (let i = 0; i < this.noPhoneButton.length; i++) {
      if (this.currentRoute.startsWith(this.noPhoneButton[i])) {
        return true;
      }
    }
    return false;
  }

  phoneNumberSwitch() {

      // if one of the json.slugs matches currentRoute then return the phone number, otherwise return the main number. will have to combine the json in security door too.
      // meaning i have to loop through the json slugs to find the one that matches the current route forloop style then return the specific number. 

    for(let i = 0; i < this.phoneList.length; i++){
      if(this.phoneList[i].slug === this.currentRoute){
        return this.phoneList[i].phone
      }
    }
    return this.phoneList[0].phone

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
    let dropdown = document.getElementById('DropdownMobile2');
    dropdown.classList.toggle('show');
  }
}
