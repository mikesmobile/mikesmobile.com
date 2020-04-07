import { Component, ViewChild } from '@angular/core';
import { AnnouncementMessageComponent } from '../announcementMessage/announcementMessage.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  @ViewChild(AnnouncementMessageComponent)
  private announcementMessage: AnnouncementMessageComponent;

  openAnnouncementMessage() {
    this.announcementMessage.show();
  }

}
