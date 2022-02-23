import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  turnMeOn = true;
  central = false;
  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar
        this.currentRoute = event.url;
        this.turnMeOn = this.footerSwitch()
        this.central = this.centralFooterCheck()
      }
    });
  }
  doNotShow = [
    '/about/gas-fireplace-service',
    '/about/theWaterproofingPackage',
    '/grid/our-chimney-repairs',
    '/about/our-screen-doors',
    '/about/our-security-screen-doors',
    '/about/our-chimney-services',
    '/services/our-window-screen-services',
    '/grid/titans',
    '/products/viewguards',
    '/about/our-fireplace-services',
    '/about/our-annual-cleaning-and-inspection',

  ]
  centralList = [
    '/about/our-security-screen-doors-bakersfield',
    '/regionsSecurity/bakersfield',
    '/products/security-windows-central',
    '/grid/titan-security-doors-central',
    'products/viewguard-security-doors-central',
    'products/sliding-security-doors-central',
    'products/tru-view-security-doors-central'
  ]

  footerSwitch() {
    // this is where I put the landing pages to remove the footer
    for (let i = 0; i < this.doNotShow.length; i++) {
      if (this.currentRoute === this.doNotShow[i]) {
        return false;
      }
    }
    return !this.centralFooterCheck()
  }

  centralFooterCheck() {
    for (let i = 0; i < this.centralList.length; i++) {
      if (this.currentRoute === this.centralList[i]) {
        return true;
      }
    }
    return false;
  }

}