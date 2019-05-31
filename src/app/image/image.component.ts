import {
  Component,
  Input,
  OnChanges,
  HostBinding,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-img',
  styleUrls: ['./image.component.sass'],
  templateUrl: './image.component.html'
})
export class ImageComponent implements OnChanges {
  // Remove class property from app-img
  @HostBinding('class') classBinding = null;
  @Input() alt: string = '';
  @Input() class: string = '';
  @Input() src: string = '';

  // Set webp location dynamically. Requires converting before hand
  // File name must maintain {file.jpg.webp}
  // TODO: Change to file.webp?
  webp_src: string = `${this.src}.webp`;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.src) {
      this.webp_src = `${this.src}.webp`;
    }
  }
}
