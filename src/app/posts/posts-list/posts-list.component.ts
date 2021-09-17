import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostListService } from './posts-list.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  public title = 'Lista dei posti';

  public filteredPosts: Post[] = [];

  public showBadge: Array<boolean> = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

  private _postFilter = "mot";
  public  posts: Post[] = [];
  public errMsg! : string;
 
  constructor(private postListService: PostListService){
    
  }

  ngOnInit() {
    this.postListService.getPosts().subscribe({
      next: posts => {
        this.posts = posts;
        this.filteredPosts = this.posts;
      },
      error :err => this.errMsg = err   
    });
    this.postFilter = '';
  }

  public setArrayFalse(array: boolean[]) {
    for (let i=0; i<array.length;i++) {
      array[i]=false;
    }
  }

  public togleIsnewBadge(index : number): void{
    this.setArrayFalse(this.showBadge);
    this.showBadge[index] = !this.showBadge[index];
  }


  // constructor(private apiService : ApiService) { 
  //   this.apiService.getPosts().subscribe( data => {
  //     this.posts = data;
  //   })
  // }



  public get postFilter(): string{
    return this._postFilter;
  }

  public set postFilter(filter : string){
    this._postFilter= filter;

    this.filteredPosts = this.postFilter ? this.filterPosts(this.postFilter) : this.posts;
  }
  
  private filterPosts(criteria: string): Post[] {
    criteria = criteria.toLocaleLowerCase();

    const res = this.posts.filter(
      (post: Post) => post.titolo.toLocaleLowerCase().indexOf(criteria) !== -1
    );

    return res;

  }

}
