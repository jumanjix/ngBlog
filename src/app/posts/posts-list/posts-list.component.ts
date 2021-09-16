import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  public title = 'Lista dei posti'

  
  public showBadge: boolean = false;

  posts : Post[] = [];

  constructor(private apiService : ApiService) { 
    this.apiService.getPosts().subscribe( data => {
      this.posts = data;
    })
  }

  ngOnInit(): void {
  }

}
