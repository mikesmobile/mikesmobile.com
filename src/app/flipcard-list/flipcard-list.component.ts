import { Component, OnInit, Input } from '@angular/core';
import { ServiceItem } from '../services/service';
import { ServicesService } from '../services/service.service';

@Component({
  selector: 'app-flipcard-list',
  templateUrl: './flipcard-list.component.html',
  styleUrls: ['./flipcard-list.component.sass'],
  providers: [ServicesService]
})
export class FlipcardListComponent implements OnInit {
  @Input() CardTexts;
  @Input() categories = [
    'Door and Window Screens',
    'Chimney Services',
    'Security Doors and Windows',
    'Awnings'
  ];
  @Input() images?;
  private req: any;
  serviceList: [ServiceItem];

  constructor(private _service: ServicesService) {}

  ngOnInit() {
    //console.log("AAAAA" ,this.CardTexts)
    this.req = this._service.list().subscribe((data) => {
      this.serviceList = data as [ServiceItem];
    });
  }
}
