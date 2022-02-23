import { Component, Input, OnInit } from '@angular/core';
import servicesJSON from '../../assets/json/services.json';


@Component({
  selector: 'app-regioncardsecurity',
  templateUrl: './regioncardsecurity.component.html',
  styleUrls: ['./regioncardsecurity.component.sass']
})
export class RegioncardsecurityComponent implements OnInit {

  @Input() cards;

  cardData = [];
  serviceList = [];

  ngOnInit() {
    this.cardData = this.cards.map((card) => {
      const serviceInfo = servicesJSON.find(
        (data) => data.slug === card.slug
      );

      return {
        title: card.title,
        image: card.image ? card.image : serviceInfo.img,
        link: card.route,
        text: card.text ? card.text : serviceInfo.tileText,
      };
    });
  }
}
