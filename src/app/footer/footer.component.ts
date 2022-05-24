import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import phoneListJSON from '../../assets/json/phoneList.json';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  phone;
  cityNames;
  cityNameSplit = false;
  phoneList = [];
  turnMeOn = true;
  central = false;
  south = false;
  firepit = false;
  securityFooter = false;
  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar
        this.currentRoute = event.url;
        this.turnMeOn = this.footerSwitch()
        this.central = this.centralFooterCheck()
        this.south = this.southernFooterCheck()
        this.firepit = this.firepitCheck()
        this.securityFooter = this.securityDoorCheck()
        this.phone = this.phoneNumberSwitch()
        this.cityNames = this.citySwitch()
        this.cityNameSplit = this.cityNames ? this.cityNames.length > 5 : false
      }
      console.log(this.currentRoute)
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
    '/about/ad/pellet-stove-repair',
    '/about/our-security-screen-doors/ventura',
    '/about/our-security-screen-doors/los-angeles',
    '/about/our-security-screen-doors/san-diego',
    '/regions/ventura/security'
  ]

  centralList = [
    '/about/our-security-screen-doors-bakersfield',
    '/regions/bakersfield/security',
    '/regions/visalia/security',
    '/products/security-windows-central',
    '/grid/titan-security-doors-central',
    '/products/viewguard-security-doors-central',
    '/products/sliding-security-doors-central',
    '/products/tru-view-security-doors-central',
  ]
  southernList = [
    '/about/our-security-screen-doors/ventura',
    '/about/our-security-screen-doors/los-angeles',
    '/about/our-security-screen-doors/san-diego',
    '/regions/ventura/security'
  ]

  firepitList = [
    '/services/masonry/firepits',
    '/services/masonry/outdoorfireplaces',
    '/services/masonry/repairs'
  ]
  securityDoorsList = [
    '/about/our-security-screen-doors/east-bay-contra-costa',
    '/about/our-security-screen-doors/east-bay-alameda',
    '/about/our-security-screen-doors/vacaville',
    '/about/our-security-screen-doors/stockton',
    '/about/our-security-screen-doors/fresno',
    '/about/our-security-screen-doors/el-dorado-county',
    '/about/our-security-screen-doors/san-jose',
    '/about/our-security-screen-doors/sacramento'
  ]

  // combines all the lists into one super list of blocking!
  doNotShow = [].concat(this.adList, this.centralList, this.firepitList, this.securityDoorsList)

  phoneNumberSwitch() {

    // if one of the json.slugs matches currentRoute then return the phone number, otherwise return the main number. will have to combine the json in security door too.
    // meaning i have to loop through the json slugs to find the one that matches the current route forloop style then return the specific number. 

    for (let i = 0; i < this.phoneList.length; i++) {
      if (this.phoneList[i].slug === this.currentRoute) {
        return this.phoneList[i].phone
      }
    }
    return this.phoneList[0].phone
  }

  citySwitch() {
    // debugger
    for (let i = 0; i < this.phoneList.length; i++) {
      if (this.phoneList[i].slug === this.currentRoute) {
        return this.phoneList[i].cities
      }
    }
    return this.phoneList[0].cities
  }

  footerSwitch() {
    // this is where I put the landing pages to remove the footer
    for (let i = 0; i < this.doNotShow.length; i++) {
      if (this.currentRoute.split('?')[0] === this.doNotShow[i]) {
        return false;
      }
    }
    return true;
  }

  southernFooterCheck() {
    for (let i = 0; i < this.southernList.length; i++) {
      if (this.currentRoute === this.southernList[i]) {
        return true;
      }
    }
    return false;
  }
  centralFooterCheck() {
    for (let i = 0; i < this.centralList.length; i++) {
      if (this.currentRoute === this.centralList[i]) {
        return true;
      }
    }
    return false;
  }

  firepitCheck() {
    for (let i = 0; i < this.firepitList.length; i++) {
      if (this.currentRoute === this.firepitList[i]) {
        return true;
      }
    }
    return false;
  }
  securityDoorCheck() {
    for (let i = 0; i < this.securityDoorsList.length; i++) {
      if (this.currentRoute === this.securityDoorsList[i]) {
        return true;
      }
    }
    return false;
  }


  ngOnInit() {
    phoneListJSON.forEach((data) => {
      this.phoneList.push(data);
    });
  }
}