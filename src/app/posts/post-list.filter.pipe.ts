import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../interfaces/post';

@Pipe({
  name: 'searchPostFilter'
})
export class SearchPostFilterPipe implements PipeTransform {

  transform(posts: Post[], searchText: string): any {
    if (!posts) return [];
    if (!searchText) return posts;

    searchText = searchText.toLocaleLowerCase();

    return posts.filter( post => {
      return post.titolo.toLocaleLowerCase().includes(searchText);
    })
  }

}