
import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Pipe({
  name: 'searchUserFilter'
})
export class SearchUserFilterPipe implements PipeTransform {

  transform(users: User[], searchText: string): any {
    if (!users) return [];
    if (!searchText) return users;

    searchText = searchText.toLocaleLowerCase();

    return users.filter( user => {
      return user.nome.toLocaleLowerCase().includes(searchText);
    })
  }

}
