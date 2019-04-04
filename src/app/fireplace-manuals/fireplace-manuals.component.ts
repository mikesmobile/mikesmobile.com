import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { manualsSegment } from './manuals';
import { manualsService } from './manuals.service';

@Component({
  selector: 'app-fireplace-manuals',
  templateUrl: './fireplace-manuals.component.html',
  styleUrls: ['./fireplace-manuals.component.sass'],
  providers: [manualsService]
})
export class FireplaceManualsComponent implements OnInit, AfterViewInit {
  manualsSections: [manualsSegment];
  private fragment: string;

  constructor(
    private _service: manualsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._service.list().subscribe((data) => {
      this.manualsSections = data as [manualsSegment];
    });

    this.route.fragment.subscribe((fragment) => {
      this.fragment = fragment;
    });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) {}
  }
}
