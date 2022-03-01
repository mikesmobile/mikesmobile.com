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
  firepit = false;
  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar
        this.currentRoute = event.url;
        this.turnMeOn = this.footerSwitch()
        this.central = this.centralFooterCheck()
        this.firepit = this.firepitCheck()
      }
    });
  }
  adList = [
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
    '/services/masonry/firepits'

  ]
  centralList = [
    '/about/our-security-screen-doors-bakersfield',
    '/regionsSecurity/bakersfield',
    '/products/security-windows-central',
    '/grid/titan-security-doors-central',
    '/products/viewguard-security-doors-central',
    '/products/sliding-security-doors-central',
    '/products/tru-view-security-doors-central'
  ]

  firepitList = [
    '/services/masonry/firepits',
    '/services/masonry/outdoorfireplaces'
  ]
  
  // combines all the lists into one super list of blocking!
  doNotShow = [].concat(this.adList, this.centralList, this.firepitList)

  footerSwitch() {
    // this is where I put the landing pages to remove the footer
    for (let i = 0; i < this.doNotShow.length; i++) {
      if (this.currentRoute === this.doNotShow[i]) {
        return false;
      }
    }
    return true;
  }

  centralFooterCheck() {
    for (let i = 0; i < this.centralList.length; i++) {
      if (this.currentRoute === this.centralList[i]) {
        return true;
      }
    }
    return false;
  }

  firepitCheck(){
    for (let i = 0; i < this.firepitList.length; i++) {
      if (this.currentRoute === this.firepitList[i]) {
        return true;
      }
    }
    return false;
  }

}