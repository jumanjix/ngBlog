import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.css']
})
export class ModalPostComponent implements OnInit {

  @Input() post!: Post;
  @Input() operation!: 'create' | 'edit' | 'delete';

  Conta!: number;
  constructor(public activeModal: NgbActiveModal, private apiService: ApiService) { }

  ngOnInit(): void {
    console.log("modal component : ngOnInit start");

    if (this.operation === 'create') {
      console.log('creating new-post');
      this.apiService.getPosts().subscribe(result => {
        this.Conta = Math.floor(Math.random() * (100 - result.length) + result.length);
        console.log('ID: ' + this.Conta);
      });

      this.post = {
        titolo: '',
        contenuto: '',
        autore: '',
        imageUrl: '',
        id: 0,
        commenti: [
          {
            autore: '',
            contenuto: '',
            like: 0,
            dislike: 0,
            id: 0
          },
        ]
      }
    }
  }
  onOperationConsent() {
    console.log("form submitted with values:");
    console.log(this.post);

    if (this.operation === 'create') {

      this.post.id = this.Conta;
     
    }
    this.activeModal.close(this.post);
  }
}
