import { Component, OnInit, ViewChild } from '@angular/core';
import { AnnouncementMessageComponent } from '../announcementMessage/announcementMessage.component';
import * as AOS from 'aos';
import { QuoteFormComponent } from '../quote-form/quote-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { JSONLDService } from '../services/jsonld.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  
  phone = '(916) 318-9845'
  @ViewChild(QuoteFormComponent) private quoteForm: QuoteFormComponent;
  @ViewChild(AnnouncementMessageComponent) private announcementMessage: AnnouncementMessageComponent;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jsonService: JSONLDService
    ) { }
    
  ngOnInit(){
    AOS.init({
      once: true,
      easing: 'ease-out-back',
      duration: 700
    });
  }
  
  openQuoteForm() {
    this.quoteForm.show();
  }
  

  openAnnouncementMessage() {
    this.announcementMessage.show();
  }

}
