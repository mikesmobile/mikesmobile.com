import { Component, OnInit, AfterViewInit } from '@angular/core';
import { manulasService } from '../fireplace-manuals/manuals.service';
import { manualsSegment } from '../fireplace-manuals/manuals';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fireplace-manuals',
  templateUrl: './fireplace-manuals.component.html',
  styleUrls: ['./fireplace-manuals.component.sass'],
  providers:[manulasService]
})
export class FireplaceManualsComponent implements OnInit,AfterViewInit {

  manulasSections:[manualsSegment];
  req:any;
  private fragment:string;

  constructor(private _service:manulasService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.req = this._service.list().subscribe(data=>{
      this.manulasSections = data as [manualsSegment];
      //console.log(this.faqSections)
    })
    this.route.fragment.subscribe(fragment =>{this.fragment = fragment});
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }
}