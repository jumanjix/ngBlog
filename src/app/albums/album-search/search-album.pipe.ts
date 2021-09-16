import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchAlbum'
})
export class SearchAlbumPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
