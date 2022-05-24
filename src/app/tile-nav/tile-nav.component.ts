import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile-nav',
  templateUrl: './tile-nav.component.html',
  styleUrls: ['./tile-nav.component.sass']
})
export class TileNavComponent implements OnInit{
  @Input() turnOn: boolean = true;
  slug;
  ngOnInit() {
  }
}
