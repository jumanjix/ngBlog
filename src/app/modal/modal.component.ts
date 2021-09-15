import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() user! : User;
  @Input() operation! : string;

  idCount! : number;

  constructor(public activeModal : NgbActiveModal, private apiService : ApiService) { }

  ngOnInit(): void {
    console.log("modal component presente!");


    // Caso Nuovo Utente
    if (this.operation === 'create') {
      console.log('create new user operation');
      
      // get sugli utenti per definire id del nuovo utente
      this.apiService.getUsers().subscribe( result => {
        console.log(result.length);
        
        this.idCount = result.length + 1;

        console.log(this.idCount);        
      })

      // modello del nuovo utente
      this.user = {
        nome : '',
        cognome : '',
        username: '',
        email: '',
        occupazione: '',
        proPic: '',
        followers: 0,
        id: 0 // placeholder perché id è obbligatorio
      }
    }
    
  }

  onOperationConsent() {    
    console.log("form submitted");
    
    if (this.operation === 'create') { // se si crea un nuovo utente
      console.log('add new user mode on');

      this.user.id = this.idCount; // set id del nuovo utente
      console.log(this.user);      

      this.apiService.postUser(this.user).subscribe( result => {});
      
    } else if (this.operation === 'edit') { // se si modifica un utente
      console.log('edit user mode on');
      
      this.apiService.putUser(this.user).subscribe( result => {});
 
    } else { // se si elimina un utente
      console.log('delete user mode on');

      this.apiService.deleteUser(this.user.id).subscribe( result => {
        console.log('mi chiama');
        console.log(result);
                
      });      
    }
    this.activeModal.close("Done");   
  }
}
