import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceItem } from '../services/service';
import { ServicesService } from '../services/service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.sass'],
  providers: [ServicesService]
})
export class ServiceDetailComponent implements OnInit, OnDestroy {

    private req:any;
    private routeSub:any;

    slug:string
    service:ServiceItem

    colorSquares = ['stdColors', 'colorSetx4', 'colorSetx6', 'swingingDoorColors', 'securityDoorColors']
    extra_images=[]
    info_graphics=[]
    groupOptionsSelect=[]
    videoLink=null
    petImages = {}
  
    gallery_options: NgxGalleryOptions[];
    gallery_images: NgxGalleryImage[];
    @ViewChild(QuoteFormComponent) private quoteForm:QuoteFormComponent;
    toggleQuoteForm(){
      this.quoteForm.show()
  }
    constructor(private route: ActivatedRoute, private _service:ServicesService, private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params=>{
        this.slug = params['slug']
        this.req = this._service.list().subscribe(data=>{
            data.filter(item=>{
                if(item.slug == this.slug){
                    this.service = item as ServiceItem;
                    this.extra_images = this.service.extraImages;
                    this.petImages = this.service.images;
                    this.gallery_images = this.service.recentInstallImages;
                    this.videoLink=this.sanitizer.bypassSecurityTrustUrl(this.service.video)
                    //console.log(this.videoLink)
                }
            })
        })
    })

    
    
    this.gallery_options = [
        { 
            image: false, 
            height: '200px',
            width: '800px',
            // width: '600px', 
            // height: '500px', 
            thumbnailsColumns: 5, 
            // thumbnailsRows: 2, 
            // thumbnailsPercent: 40, 
            // imagePercent: 60, 
            // thumbnailMargin: 2, 
            // thumbnailsMargin: 2, 
            imageAutoPlay: true, 
            thumbnailsSwipe: true,
            imageAutoPlayPauseOnHover: true, 
            previewAutoPlay: true, 
            previewAutoPlayPauseOnHover: true, 
            previewCloseOnClick: true, 
            previewCloseOnEsc: true
        },
        { 
          breakpoint: 990, 
          width: "100%",
          thumbnailsColumns: 3, 

        }
    ];

    this.groupOptionsSelect = [
        { value: '', label: 'DOOR AND WINDOW SCREENS', group: true },
        { value: '1', label: 'Retractable Screen Doors' },
        { value: '2', label: 'Sliding Screen Doors' },
        { value: '3', label: 'Swinging Screen Doors' },
        { value: '4', label: 'Pet Doors' },
        { value: '5', label: 'Window Screen Repair' },
        { value: '6', label: 'Solar Screens' },
        { value: '', label: 'CHIMNEY SERVICES', group: true },
        { value: '7', label: 'Chimney Inspection' },
        { value: '8', label: 'Chimney Cleaning' },
        { value: '9', label: 'Chimney Repair' },
        { value: '10', label: 'Masonry Services' },
        { value: '11', label: 'Dryer Vent Cleaning' },
        { value: '', label: 'SECURITY DOORS AND WINDOWS', group: true },
        { value: '12', label: 'Steel Security Doors' },
        { value: '13', label: 'Viewguard' },
        { value: '14', label: 'Tru-View' },
        { value: '15', label: 'Tru-Frame' },
        { value: '16', label: 'Sliding Security Doors' },
        { value: '17', label: 'CRL Guarda Quick Escape' },
        { value: '18', label: 'CRL Guarda Fixed' },
        //{ value: '19', label: 'CRL Guarda Casement' },
        { value: '', label: 'AWNINGS', group: true },
        { value: '20', label: 'Retractable Patio Awnings' },
        { value: '21', label: 'Drop Roll Sunscreens' },
        
    ];
    
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
  }

    viewMoreColors(){
        var viewMoreBtn = document.getElementById('more-colors').style.display="none";
        var viewLessBtn = document.getElementById('less-colors').style.display="block";

        for (var i=6; i<19; i++){
            var el = document.getElementById("square-" + i);            
            el.style.display = 'block';
            if (screen.width < 992){
                var ello = document.getElementById("square-p-" + i);
                ello.style.display = 'block';
            }            
        }
    }
    viewLessColors(){
        var viewLessBtn = document.getElementById('less-colors').style.display="none";
        var viewMoreBtn = document.getElementById('more-colors').style.display="block";

        for (var i=6; i<19; i++){
            var el = document.getElementById("square-" + i);            
            el.style.display = 'none';
            if (screen.width < 992){
                var ello = document.getElementById("square-p-" + i);
                ello.style.display = 'none';
            }            
        }     
    }

    getEmbedUrl(video){
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + video)
    }

}
