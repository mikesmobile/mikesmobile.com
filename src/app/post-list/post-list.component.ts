import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogPost } from '../posts/post';
import { PostService } from '../posts/post.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass'],
  providers: [PostService]
})
export class PostListComponent implements OnInit, OnDestroy {
  @ViewChild('item') nameInputRef: ElementRef;
  private req: any
  blogPostList: [BlogPost]
  filterItems = [];
  category = [];
  location = [];
  date = [];
  clicked: string = 'all';
  selected = [];

  // Removes the duplicate Categories
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  clickedItem(post) {
    this.clicked = post
    var x = document.getElementsByClassName('subcat')
    for(var i = 0; i < x.length; i++){
      x[i].classList.remove('selected')
    }
    document.getElementById(post).classList.toggle('selected')
    this.selected = [this.clicked]
  }

  // showSub(arr:string){
  //   var x = document.getElementById(arr).classList.toggle('hide');
  //   console.log(x)
  // }

  removeButton(){
    this.clicked = 'all'
    this.selected.splice(this.selected.indexOf(this.clicked),1)
  }


  constructor(private _service: PostService) { }

  ngOnInit() {
    this.req = this._service.list().subscribe(data => {
      this.blogPostList = data as [BlogPost];
      // The Category Filter Dropdown
      for (var i = 0; i < this.blogPostList.length; i++) {
        this.filterItems.push(this.blogPostList[i].filter)
        this.category.push(this.filterItems[i].Category)
        this.location.push(this.filterItems[i].Location)
        this.date.push(this.filterItems[i].Postdate)
      }
      // Don't duplicate Categories
      this.category = this.category.filter(this.onlyUnique)
      this.location = this.location.filter(this.onlyUnique)
      this.date = this.date.filter(this.onlyUnique)
    })
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

}