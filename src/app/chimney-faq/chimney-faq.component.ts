import { Component, OnInit } from '@angular/core';
import { FaqService } from '../faq/faq.service';
import { ActivatedRoute } from '@angular/router';
import { FaqSegment } from '../faq/faq';

@Component({
  selector: 'app-chimney-faq',
  templateUrl: './chimney-faq.component.html',
  styleUrls: ['./chimney-faq.component.sass'],
  providers: [FaqService]
})
export class ChimneyFaqComponent implements OnInit {
  public faqs = [];
  req: any;
  private fragment: string;
  constructor(private _service: FaqService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.req = this._service
      .listInput('/assets/json/chimney-faq.json')
      .subscribe((data) => {
        this.faqs = data as [FaqSegment];
        //console.log(this.faqs)
      });
    this.route.fragment.subscribe((fragment) => {
      this.fragment = fragment;
    });
  }
}
