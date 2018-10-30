import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  searchQuery:string

  @Input()
  passedQuery:string

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.passedQuery){
      this.searchQuery = this.passedQuery
    }
  }

  submitSearch(event, formData){
    //console.log(event)
    //console.log(formData.value)
    let searchedQuery = formData.value['q']
    if(searchedQuery){
      this.router.navigate(['/search', {q: searchedQuery}])
    }
  }

}
