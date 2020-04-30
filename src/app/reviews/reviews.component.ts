import { Component, AfterViewInit } from '@angular/core';
import { environment } from 'src/environments/environment';

declare const google: any;

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.sass'],
})
export class ReviewsComponent implements AfterViewInit {
  service;

  public reviews = [];

  constructor() {}

  ngAfterViewInit() {
    const request = {
      placeId: 'ChIJ0YTo3ODQmoAReCXiej25K4Q',
      fields: ['reviews'],
    };

    this.service = new google.maps.places.PlacesService(
      document.getElementById('googleReviews')
    );

    this.service.getDetails(request, this.callback);
  }

  public callback = (place, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      this.reviews = place.reviews.slice();
    }
  };

  createRange(number) {
    const items: number[] = [];
    for (let i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }
}
