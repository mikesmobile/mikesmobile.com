import { Component, ViewChild } from '@angular/core';
import { QuoteFormComponent } from '../quote-form/quote-form.component';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';

import servicesJSON from '../../assets/json/services.json';
import { JSONLDService } from '../services/jsonld.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent {
  phone: string;
  currentRoute: string;
  hideMe: boolean;
  // landing;
  // phoneList = [];

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
        this.phoneNumberSwitch()
        this.hideMe = this.dontShowButton()
      }
    });
  }
  // ngOnInit() {
  //   this.route.params.subscribe((params) => {
  //     this.landing = servicesJSON.find((data) => {
  //       if (data.slug === params['slug']) {
  //         if (data.offers) {
  //           this.jsonService.updateJSONLD({
  //             name: data.title,
  //             description: data.tileText,
  //             image: data.tileImage,
  //             offers: data.offers
  //           });
  //           return true;
  //         } else {
  //           this.jsonService.updateJSONLD({
  //             name: data.title,
  //             description: data.tileText,
  //             image: data.tileImage,
  //             offers: ''
  //           });
  //           return true;
  //         }
  //       }

  //       return false;
  //     });

  //     servicesJSON.forEach((data) => {

  //       if(this.noPhoneButton.includes("/grid/"+ data.slug)|| this.noPhoneButton.includes("/about/"+ data.slug) || this.noPhoneButton.includes("/security/"+ data.slug)){
  //         this.phoneList.push(data)
  //         // console.log(this.phoneList)
  //       }
  //     });


  //   });
  // }

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

    // this is where I change the phone numbers for each landing page. There must be a better way of doing this.
    if (this.currentRoute === '/about/security-screen-doors') {
      this.phone = "(916) 318-9845";
    } else if (this.currentRoute === '/grid/titans') {
      this.phone = "(916) 312-3182";
    } else if (this.currentRoute === '/about/theWaterproofingPackage') {
      this.phone = '(916) 304-8225';
    } else if (this.currentRoute === '/about/our-security-screen-doors') {
      this.phone = '(916) 931-1873';
    } else if (this.currentRoute === '/about/our-chimney-services') {
      this.phone = '(916) 931-1772';
    } else if (this.currentRoute === '/about/our-fireplace-services') {
      this.phone = '(916) 931-0125';
    }else if(this.currentRoute === '/about/our-annual-cleaning-and-inspection'){
    this.phone = '(916) 915-8676';
    }else if(this.currentRoute === '/services/our-window-screen-services'){
      this.phone = '(916) 915-8731';
    }else if (this.currentRoute ===  '/about/our-security-screen-doors-bakersfield' || this.currentRoute === '/regionsSecurity/bakersfield'||  this.currentRoute === '/products/security-windows-central' || this.currentRoute === '/grid/titan-security-doors-central' || this.currentRoute === '/products/viewguard-security-doors-central' || this.currentRoute === '/products/sliding-security-doors-central' ||  this.currentRoute === '/products/tru-view-security-doors-central') {
      this.phone = '(661) 567-0284';
    }else {
      this.phone = "(916) 318-9845";
    }
    // console.log("current Route: "+this.currentRoute)
    // for(let i = 0; i < this.phoneList.length; i++){
    //   if(this.currentRoute == "/about/" + this.phoneList[i].slug || "/grid/" + this.phoneList[i].slug || "/products/" + this.phoneList[i].slug){
    //     console.log("phoneList slug:" + this.phoneList[i].slug)
    //     return this.phoneList[i].phone;
    //   }
    // }
    // return "(800) 992-9938";

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
