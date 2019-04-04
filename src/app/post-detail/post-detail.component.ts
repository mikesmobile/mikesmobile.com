import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../posts/post';
import { PostService } from '../posts/post.service';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
  NgxGalleryImageSize
} from 'ngx-gallery';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass'],
  providers: [PostService]
})
export class PostDetailComponent implements OnInit {
  private req: any;
  private routeSub: any;

  slug: string;
  post: BlogPost;
  blogGalleryOptions: NgxGalleryOptions[];
  blogGalleryImages: NgxGalleryImage[];
  blogGallery: boolean;
  constructor(private route: ActivatedRoute, private _service: PostService) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.slug = params['slug'];
      this.req = this._service.list().subscribe((data: any[]) => {
        data.filter((item) => {
          if (item.slug == this.slug) {
            this.post = item as BlogPost;
            if (this.post.images.length > 1) {
              this.blogGallery = true;
              //console.log(this.blogGallery)
            }
          }
        });
      });
    });
  }
}
