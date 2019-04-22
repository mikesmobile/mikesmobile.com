import { Component, OnInit, Input } from '@angular/core';

import servicesJSON from '../../assets/json/services.json';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.sass']
})
export class ServiceListComponent implements OnInit {
  @Input() categories = [
    'Chimney Services',
    'Door and Window Screens',
    'Security Screen Doors and Windows',
    'Awnings'
  ];

  private req: any;
  serviceList = [];
  categoryList = [];

  ngOnInit() {
    servicesJSON.forEach((data) => {
      this.serviceList.push(data);
      if (data.type && data.type === "landing") {
        this.categoryList.push(data);
      }
    });
  }
}
