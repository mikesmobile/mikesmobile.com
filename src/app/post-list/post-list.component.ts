import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

import blogsJSON from '../../assets/json/blogposts.json';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {
  @ViewChild('item') nameInputRef: ElementRef;
  blogPostList = [];
  filterItems = [];
  category = [];
  location = [];
  clicked: string = 'all';
  selected = [];

  ngOnInit() {
    blogsJSON.forEach((data) => {
      this.blogPostList.push(data);
      this.filterItems.push(data.filter);

      if (this.category.indexOf(data.filter.Category) < 0) {
        this.category.push(data.filter.Category);
      }

      if (this.location.indexOf(data.filter.Location) < 0) {
        this.location.push(data.filter.Location);
      }
    });
  }

  clickedItem(post) {
    this.clicked = post;
    let x = document.getElementsByClassName('subcat');

    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove('selected');
    }

    document.getElementById(post).classList.toggle('selected');
    this.selected = [this.clicked];
  }

  removeButton() {
    this.clicked = 'all';
    this.selected.splice(this.selected.indexOf(this.clicked), 1);
  }
}
