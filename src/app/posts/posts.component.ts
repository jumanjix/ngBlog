import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts : Post[] = [];

  constructor(private apiService : ApiService) { 
    this.apiService.getPosts().subscribe( data => {
      this.posts = data;
    })
  }

  ngOnInit(): void {
  }

}
