import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceItem } from '../services/service';
import { ServicesService } from '../services/service.service';
import { DomSanitizer } from '@angular/platform-browser';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
  NgxGalleryImageSize
} from 'ngx-gallery';
@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.sass']
})
export class TabNavComponent implements OnInit, OnChanges {
  @Input() details;
  counter = 0;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.counter++;
    // console.log(this.counter);
  }
}
