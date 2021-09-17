import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';
import { User } from '../interfaces/user';
import { ModalComponent } from './modal-user/modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : User[] = []; // array che popola la view (utenti assegnti all'interno della ngOnInit)
  searchUserText : string = ''; // stringa del box ricerca
  
  constructor(private apiService : ApiService, private modalService : NgbModal) { }

  ngOnInit(): void {
    console.log('Users Component: ngoninit start');

    this.apiService.getUsers().subscribe( data => {  // recupero tutti gli user
     
      this.users = data; // assegno a users l'array di utenti ricevuto dalla get

      console.log('ngoninit: get data:');      
      console.log(data)  
    });
  }

  // prende l'operazione da fare (create, delete, edit) e l'evenutuale utente su cui operare
  // TODO l'unica operazione che richiede la stringa con l'operazione è la create, le altre possono essere 
  // omesse e l'argomento 'operation' reso facoltativo come 'user'
  openModal(operation : string, user?: User) {

    // chiamata al componente che contiene la modal con passaggio dei parametri 'user' e 'operation'
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.user = user;
    modalRef.componentInstance.operation = operation;

    // una volta che la modal viene chiusa:
    modalRef.closed.subscribe( result => {

      console.log("modal closed with result: " + result);
      
      // intercettare chiusura modal per annullamento dell'operazione per evitare 
      // che una chiamata all'API senza parametri validi generi un errore
      if (result === 'Close click') {

        console.log("operation aborted");
        this.ngOnInit(); // per eliminare i cambiamenti fatti dall'ngModel ma non salvati sul json
        
      }
      else { // in questo caso la modal è stata chiusa confermando l'operazione e posso chiamare il servizio API

        console.log('data back from modal:');      
        console.log(result);
        
        switch(operation) {

          // 1) Creazione - POST
          case "create" : {
            console.log("creo nuovo utente");
            
            this.apiService.postUser(result).subscribe( res => {
              console.log(res);  
              this.ngOnInit(); // ngOnInint qui dentro per aspettare che l'operazione sia conclusa prima di aggiornare la view          
            });
            break;
          }

          // 2) Modifica - PUT
          case "edit" : {
            console.log("modifico utente");
            
            this.apiService.putUser(result).subscribe( res => {
              console.log(res);  
              this.ngOnInit();          
            });
            break;
          }

          // 3) Eliminazione - DELETE
          case "delete" : {
            console.log("elimino utente");
            
            this.apiService.deleteUser(result.id).subscribe( res => {
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
