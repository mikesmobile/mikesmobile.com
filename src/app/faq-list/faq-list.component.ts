import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FaqService } from '../faq/faq.service';
import { FaqSegment } from '../faq/faq';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.sass'],
  providers:[FaqService]
})
export class FaqListComponent implements OnInit,AfterViewInit {
  faqSections:[FaqSegment];
  req:any;
  private fragment:string;
  constructor(private _service:FaqService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.req = this._service.list().subscribe(data=>{
      this.faqSections = data as [FaqSegment];
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
