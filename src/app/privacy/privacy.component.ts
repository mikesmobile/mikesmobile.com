import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/service.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.sass'],
  providers: [ServicesService]
})
export class PrivacyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
