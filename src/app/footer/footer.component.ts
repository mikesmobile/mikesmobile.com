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
        this.footerSwitch()
      }
    });
  }
  
  footerSwitch() {
    // this is where I put the landing pages to remove the footer
    if (this.currentRoute.startsWith('/about/gas-fireplace-service') || this.currentRoute.startsWith('/about/security-screen-doors') || this.currentRoute.startsWith('/grid/titans') || this.currentRoute.startsWith('/products/viewguards') || this.currentRoute.startsWith('/about/theWaterproofingPackage') || this.currentRoute.startsWith('/grid/our-chimney-repairs')) {
      this.turnMeOn = false;
    } else {
      this.turnMeOn = true;
    }
  }
  
}
