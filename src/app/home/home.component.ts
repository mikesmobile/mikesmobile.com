import { Component, OnInit, ViewChild } from '@angular/core';
import { AnnouncementMessageComponent } from '../announcementMessage/announcementMessage.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  phone = '(916) 318-9845'
  @ViewChild(AnnouncementMessageComponent)
  private announcementMessage: AnnouncementMessageComponent;
  ngOnInit(){
    AOS.init({
      once: true,
      easing: 'ease-out-back',
      duration: 700
    });
  }

  openAnnouncementMessage() {
    this.announcementMessage.show();
  }

}
