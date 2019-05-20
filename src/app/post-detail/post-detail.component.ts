import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import blogsJSON from '../../assets/json/blogposts.json';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent implements OnInit {
  post: any;
  fullURIEncoded: string;
  hasGallery: boolean;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.post = blogsJSON.find((data) => {
        return data.slug === params['slug'];
      });

      if (!this.post) {
        this.router.navigate(['/']);
        return;
      }

      this.fullURIEncoded = encodeURIComponent(location.href);

      if (this.post.images.length > 1) {
        this.hasGallery = true;
      }
    });
  }
}
