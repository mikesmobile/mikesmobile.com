import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/service.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.sass'],
  providers: [ServicesService]
})
export class ThankYouComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
