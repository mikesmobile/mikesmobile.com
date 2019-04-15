import { Component, OnInit, Input } from '@angular/core';
import servicesJSON from '../../assets/json/services.json';

@Component({
  selector: 'app-flipcard-list',
  templateUrl: './flipcard-list.component.html',
  styleUrls: ['./flipcard-list.component.sass']
})
export class FlipcardListComponent implements OnInit {
  @Input() CardTexts;
  @Input() categories = [
    'Door and Window Screens',
    'Chimney Services',
    'Security Screen Doors and Windows',
    'Awnings'
  ];
  @Input() images?;
  serviceList = [];

  ngOnInit() {
    servicesJSON.forEach((data) => {
      this.serviceList.push(data);
    });
  }
}
