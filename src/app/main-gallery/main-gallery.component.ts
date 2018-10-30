import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { ViewEncapsulation } from '@angular/core'
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-main-gallery',
  templateUrl: './main-gallery.component.html',
  styleUrls: ['./main-gallery.component.sass']
})
export class MainGalleryComponent implements OnInit,OnChanges {

  @Input() Images
  @ViewChild('mainContent') public contentModal:any;
  @ViewChild('mainCarousel') public contentCarousel; 
  @ViewChild('mainModalImage') public modalImage;
  public name: string;
  public reload: boolean = false;
  public index: number = 0;
  public source:string;
  public imagesSize;
  constructor() { }

  ngOnInit() {
    this.imagesSize= this.Images.length
  }
  ngOnChanges(changes: SimpleChanges){
    // //console.log(changes)
  }
  
  activeSlideChange(event: any){
    // //console.log(event);
}

  hideCheck(event){
    // //console.log(event)

  }
  show(){
        
        this.name = this.Images[this.contentCarousel._currentActiveSlide].big
        this.contentModal.show();
    }
  next(){
      // //console.log(this.contentCarousel._currentActiveSlide);
      this.contentCarousel.nextSlide();
      // //console.log(this.modalImage)
       this.modalImage.nativeElement.setAttribute('src',this.Images[(this.contentCarousel._currentActiveSlide+1)%this.imagesSize].big)
    }
    previous(){
      let nextIndex = this.contentCarousel._currentActiveSlide-1;
      if(this.contentCarousel._currentActiveSlide===0)
        nextIndex=this.imagesSize-1
      this.contentCarousel.previousSlide();
      this.modalImage.nativeElement.setAttribute('src',this.Images[nextIndex].big)
    }
}
