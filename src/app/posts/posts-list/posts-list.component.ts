import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/interfaces/post';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsListComponent implements OnInit {

  public title = 'Lista dei posti'

  
  public showBadge: boolean = false;

  posts : Post[] = [];

  public togleIsnewBadge(): void{
    this.showBadge = !this.showBadge;
  }

  constructor(private apiService : ApiService) { 
    this.apiService.getPosts().subscribe( data => {
      this.posts = data;
    })
  }

  ngOnInit(): void {
  }

}
