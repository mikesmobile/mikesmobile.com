import { Component, OnInit } from '@angular/core';

import glossaryJSON from '../../assets/json/chimney-glossary.json';

@Component({
  selector: 'app-chimney-glossary',
  templateUrl: './chimney-glossary.component.html',
  styleUrls: ['./chimney-glossary.component.sass']
})
export class ChimneyGlossaryComponent implements OnInit {
  public glossarySections = [];

  ngOnInit() {
    glossaryJSON.forEach((data) => {
      this.glossarySections.push(data);
    });
  }
}
