import { Component, Input, OnInit } from '@angular/core';
import servicesJSON from '../../assets/json/services.json';


@Component({
  selector: 'app-regioncardsecurity',
  templateUrl: './regioncardsecurity.component.html',
  styleUrls: ['./regioncardsecurity.component.sass']
})
export class RegioncardsecurityComponent implements OnInit {

  @Input() cards;
  @Input() city;
  @Input() service;
  cardData = [];
  serviceList = [];
  
  ngOnInit() {
    let utm = {
      utm_source: "mikesmobile",
      utm_medium: "",
      utm_campaign: ""
    };
    this.cardData = this.cards.map((card) => {
      const serviceInfo = servicesJSON.find(
        (data) => data.slug === card.slug
      );
      utm.utm_medium = this.city.split(' ').map(item => item.toLowerCase()).join('-')
      utm.utm_campaign = serviceInfo.title.split(' ').map(item => item.toLowerCase()).join('-')
      return {
        title: card.title,
        image: card.image ? card.image : serviceInfo.img,
        link: card.route,
        text: card.text ? card.text : serviceInfo.tileText,
        utm: {
          ...utm
        }
      };
    });
    console.log(this.cardData)
  }
}
