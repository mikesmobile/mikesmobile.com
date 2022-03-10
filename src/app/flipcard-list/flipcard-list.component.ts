import { Component, OnInit, Input } from '@angular/core';
import servicesJSON from '../../assets/json/services.json';

@Component({
  selector: 'app-flipcard-list',
  templateUrl: './flipcard-list.component.html',
  styleUrls: ['./flipcard-list.component.sass'],
})
export class FlipcardListComponent implements OnInit {
  @Input() cards;

  cardData = [];
  serviceList = [];

  ngOnInit() {
    this.cardData = this.cards.map((card) => {
      const serviceInfo = servicesJSON.find(
        (data) => data.title === card.title
      );

      const link = `/${serviceInfo.type === 'landing' ? 'about' : serviceInfo.type
        }/${serviceInfo.slug}`;

      return {
        title: card.title,
        image: card.image ? card.image : serviceInfo.tileImage,
        link,
        text: card.text ? card.text : serviceInfo.tileText,
      };
    });
  }
}
