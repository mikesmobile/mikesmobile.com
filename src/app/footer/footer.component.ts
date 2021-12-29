import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  turnMeOn = true;
  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar
        this.currentRoute = event.url;
        this.turnMeOn = this.footerSwitch()
      }
    });
  }
  doNotShow = [
    '/about/our-chimney-services',
    '/about/gas-fireplace-service',
    '/about/security-screen-doors',
    '/grid/titans',
    '/products/viewguards',
    '/about/theWaterproofingPackage',
    '/grid/our-chimney-repairs',
    '/about/our-screen-doors',
    '/services/our-window-screen-services',
  ]
  footerSwitch() {
    // this is where I put the landing pages to remove the footer
    for(let i = 0; i < this.doNotShow.length; i++){
      if(this.currentRoute.startsWith(this.doNotShow[i])){
        return false;
      }
    }
    return true;
    
  }
  
}