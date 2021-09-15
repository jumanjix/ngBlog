import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';
import { User } from '../interfaces/user';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : User[] = [];

  constructor(private apiService : ApiService, private modalService : NgbModal) {

   

  }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe( data => {  // recupero tutti gli user
      this.users = data;
      console.log(data);
      
    });
  }

  // prende l'operazione da fare (create, delete, edit) e l'evenutuale utente su cui operare
  openModal(operation : string, user?: User) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.user = user;
    modalRef.componentInstance.operation = operation;
    modalRef.closed.subscribe( result => {
      console.log('chiamo ngoninit');
      console.log(result);
      
      this.ngOnInit();
    })
    
  }

}
