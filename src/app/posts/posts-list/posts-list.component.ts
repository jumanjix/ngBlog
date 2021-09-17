import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  public title = 'Lista dei posti'

  
  public showBadge: Array<boolean> = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

  public posts : Post[] = [];

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

  ngOnInit(): void {
  }

}
