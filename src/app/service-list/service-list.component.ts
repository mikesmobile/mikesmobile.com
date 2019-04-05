import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ServiceItem } from '../services/service';
import { ServicesService } from '../services/service.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.sass'],
  providers: [ServicesService]
})
export class ServiceListComponent implements OnInit, OnDestroy {
  @Input() categories = [
    'Chimney Services',
    'Door and Window Screens',
    'Security Screen Doors and Windows',
    'Awnings'
  ];

  private req: any;
  serviceList: [ServiceItem];

  constructor(private _service: ServicesService) {}

  ngOnInit() {
    this.req = this._service.list().subscribe((data) => {
      this.serviceList = data as [ServiceItem];
    });
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }
}
