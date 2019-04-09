import { Component, OnInit } from '@angular/core';

import manualsJSON from '../../assets/json/manuals.json';

@Component({
  selector: 'app-fireplace-manuals',
  templateUrl: './fireplace-manuals.component.html',
  styleUrls: ['./fireplace-manuals.component.sass']
})
export class FireplaceManualsComponent implements OnInit {
  manualsSections = [];

  ngOnInit() {
    manualsJSON.forEach((data) => {
      this.manualsSections.push(data);
    });
  }
}
