import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findByTitle',
  pure: false
})
export class FindByTitlePipe implements PipeTransform {
  transform(items: any[], filter: String): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(
      (item) => item.title && item.title.indexOf(filter) !== -1
    );
  }
}

@Pipe({
  name: 'findByCategory',
  pure: false
})
export class FindByCategoryPipe implements PipeTransform {
  transform(items: any[], filter: String): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(
      (item) => item.category && item.category.indexOf(filter) !== -1
    );
  }
}
