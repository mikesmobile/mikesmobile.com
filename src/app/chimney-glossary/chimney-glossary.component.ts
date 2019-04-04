import { Component, OnInit } from '@angular/core';
import { FaqService } from '../faq/faq.service';
import { FaqSegment } from '../faq/faq';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chimney-glossary',
  templateUrl: './chimney-glossary.component.html',
  styleUrls: ['./chimney-glossary.component.sass'],
  providers: [FaqService]
})
export class ChimneyGlossaryComponent implements OnInit {
  public glossarySections = [];
  req: any;
  private fragment: string;
  constructor(private _service: FaqService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.req = this._service
      .listInput('/assets/json/chimney-glossary.json')
      .subscribe((data) => {
        this.glossarySections = data as [FaqSegment];
        //console.log(this.glossarySections)
      });
    this.route.fragment.subscribe((fragment) => {
      this.fragment = fragment;
    });
  }
}
