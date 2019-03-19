import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent {
  public map: any = { lat: 38.577009, lng: -121.324027 };
  public mapp: any = { lat: 38.023547, lng: -121.280482 };
}
