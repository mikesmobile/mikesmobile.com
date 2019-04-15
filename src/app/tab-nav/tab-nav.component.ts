import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.sass']
})
export class TabNavComponent {
  @Input() details;
  constructor(private sanitizer: DomSanitizer) {}
}
