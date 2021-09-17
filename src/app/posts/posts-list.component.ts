import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/interfaces/post';
import { ModalPostComponent } from '../modal-post/modal-post/modal-post.component';



@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  public title = 'Lista dei posti';

  public filteredPosts: Post[] = [];

  public showBadge: Array<boolean> = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

 
  public  posts: Post[] = [];
  searchPostText: string = '';

  constructor(private apiService : ApiService, private modalService : NgbModal) { }


  public setArrayFalse(array: boolean[]) {
    for (let i=0; i<array.length;i++) {
      array[i]=false;
    }
  }

  public togleIsnewBadge(index : number): void{
    this.setArrayFalse(this.showBadge);
    this.showBadge[index] = !this.showBadge[index];
  }


  ngOnInit(): void {
    console.log('Posts Component: ngoninit start');

    this.apiService.getPosts().subscribe( data => { 
     
      this.posts = data;

      console.log('ngoninit : get data:');      
      console.log(data)  
    });
  }

  openModal(operation : string, post?: Post) {

 
    const modalRef = this.modalService.open(ModalPostComponent);
    modalRef.componentInstance.post = post;
    modalRef.componentInstance.operation = operation;

    modalRef.closed.subscribe( result => {

      console.log("modal closed with result: " + result);

      if (result === 'Close click') {

        console.log("operation aborted");
        
      }
      else { 

        console.log('data back from modal:');      
        console.log(result);
        
        switch(operation) {

          // aggiungi POST
          case "create" : {
            console.log("aggiungo nuovo post");
            
            this.apiService.postPost(result).subscribe( res => {
              console.log(res);  
              this.ngOnInit();       
            });
            break;
          }

          // 2) Modifica - PUT
          case "edit" : {
            console.log("modifico Post");
            
            this.apiService.putPost(result).subscribe( res => {
              console.log(res);  
              this.ngOnInit();          
            });
            break;
          }

          // 3) Eliminazione - DELETE
          case "delete" : {
            console.log("elimino post");
            
            this.apiService.deletePost(result.id).subscribe( res => {
              console.log(res);    
              this.ngOnInit();                
            });     
            break;
          }
        }
      }
     
    })
    
  }

}
function ModalPostsComponent(ModalPostsComponent: any) {
  throw new Error('Function not implemented.');
}

