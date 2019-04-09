import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
  NgxGalleryImageSize
} from 'ngx-gallery';
import blogsJSON from '../../assets/json/blogposts.json';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent implements OnInit {
  private routeSub: any;

  post;
  blogGallery: boolean;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.post = blogsJSON.find((data) => {
        return data.slug === params['slug'];
      });

      if (this.post.images.length > 1) {
        this.blogGallery = true;
      }
    });
  }
}
