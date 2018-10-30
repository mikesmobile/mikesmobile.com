
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer-gallery',
  templateUrl: './footer-gallery.component.html',
  styleUrls: ['./footer-gallery.component.sass']
})
export class FooterGalleryComponent implements OnInit {
  @Input() Images
  @ViewChild('footerContent') public footerModal;
  @ViewChild('footerModalImage') public modalImage;
  public index: number;
  public name:string

  public source:string;
  constructor() { }

  ngOnInit() {
    // //console.log(this.Images);
  }
  

    show(value:number){
        this.index = value;
        // //console.log(this.Images,this.index)
        this.name=this.Images[this.index].big
        this.footerModal.show();
        // //console.log(value);
    }
next(){
    // //console.log(this.index);
    

    // //console.log(this.modalImage)
     this.modalImage.nativeElement.setAttribute('src',this.Images[(++this.index)%this.Images.length].big)
    // //console.log(this.index);
  }
  previous(){
    this.index--;
    if(this.index<0)
      this.index=this.Images.length-1
    this.modalImage.nativeElement.setAttribute('src',this.Images[this.index].big)
  }
}
