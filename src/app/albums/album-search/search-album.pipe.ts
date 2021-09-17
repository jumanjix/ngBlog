import { Pipe, PipeTransform } from '@angular/core';
import { Album} from 'src/app/interfaces/album';

@Pipe({
  name: 'searchAlbum'
})
export class SearchAlbumPipe implements PipeTransform {

  transform(albums: Album[], searchText: string): any {
    if (!albums) return [];
    if (!searchText) return albums;

    searchText = searchText.toLocaleLowerCase();

    return albums.filter( album => {
      return album.titolo.toLocaleLowerCase().includes(searchText);
    })
  }

}
