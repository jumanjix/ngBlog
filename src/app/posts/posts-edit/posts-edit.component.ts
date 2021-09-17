import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostListService } from '../posts-list/posts-list.service';

@Component({
  selector: 'app-posts-edit',
  templateUrl: './posts-edit.component.html',
  styleUrls: ['./posts-edit.component.css']
})
export class PostsEditComponent implements OnInit {

  public post!: Post;

 
  constructor(
    private fb: FormBuilder,
    public postForm: FormGroup,
    public route: ActivatedRoute,
    public router: Router,
    private postService: PostListService
    ) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      titolo:['', Validators.required],
      contenuto:['', Validators.required],
      autore:['']
    });

  this.route.paramMap.subscribe(params =>{
    const id = params.get('id');

    console.log(id);
  }); 
  }

public savePost(): void{
  if(this.postForm.valid){
    if(this.postForm.dirty) {
      const post: Post={
        ...this.post,
        ...this.postForm.value
      };
      if(post.id === 0){

      }else{
        this.postService.updatePost(post).subscribe({
          next:() => this.saveCompleted()
        });
      }
    }
  }
  console.log(this.postForm.value);
}
public saveCompleted(): void{
  this.postForm.reset();
  this.router.navigate(['/posts-edit']);
}
}
