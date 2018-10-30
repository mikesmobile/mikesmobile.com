import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor() { }
  public map: any = { lat: 38.577009, lng: -121.324027 };
  public mapp: any = { lat: 38.023547, lng: -121.280482 };


  ngOnInit() {
    this.growSlideshow()   
  }
  growSlideshow(){
    if(screen.width < 992){
      var slideshow = document.getElementById('slideshow');
      slideshow.classList.remove('container', 'mt-3');
      slideshow.classList.add('row');
    }
}
  

}
