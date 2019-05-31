import { Component, OnInit } from '@angular/core';

import blogsJSON from '../../assets/json/blogposts.json';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {
  blogList = [];
  uniqueCategories = [];
  uniqueLocations = [];
  filter: string = '';

  ngOnInit() {
    blogsJSON.forEach((data) => {
      this.blogList.push(data);

      if (this.uniqueCategories.indexOf(data.filter.Category) < 0) {
        this.uniqueCategories.push(data.filter.Category);
      }

      if (this.uniqueLocations.indexOf(data.filter.Location) < 0) {
        this.uniqueLocations.push(data.filter.Location);
      }
    });
  }

  filterBy(filter): void {
    const filterElement = document.getElementById(filter);

    this.clearPreviouslySelectedFilters();

    if (filterElement.id === this.filter) {
      this.filter = '';
      return;
    }

    this.filter = filter;
    filterElement.classList.add('selected');
  }

  clearPreviouslySelectedFilters(): void {
    const previouslySelected = document.querySelectorAll('.subcat.selected');
    previouslySelected.forEach((element) => {
      element.classList.remove('selected');
    });
  }
}
