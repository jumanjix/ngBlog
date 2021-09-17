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

  @Input() user!: User;
  @Input() operation!: 'create' | 'edit' | 'delete';

  idCount!: number;

  // opzioni per la foto profilo. sono le immagini nella cartella assets/propics
  proPics: string[] = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg',
    'pic5.jpg',
    'pic6.jpg',
    'pic7.jpg',
    'pic8.jpg',
    'pic9.jpg',
    'pic10.jpg',
    'pic11.jpg',
    'pic12.jpg',
    'pic13.jpg',
    'pic14.jpg',
    'pic15.jpg',
    'pic16.jpg',
    'pic17.jpg',
    'pic18.jpg',
    'pic19.jpg',
    'pic20.jpg',
    'pic21.jpg',
    'pic22.jpg',
    'pic23.jpg',
    'pic24.jpg',

  ]

  constructor(public activeModal: NgbActiveModal, private apiService: ApiService) { }

  ngOnInit(): void {
    console.log("modal component : ngOnInit start");

    // in caso di Nuovo Utente bisogna creare un modello per il form
    if (this.operation === 'create') {
      console.log('creating new-user model ...');

      // get sugli utenti per ricavare lunghezza array, utilizzata per definire id del nuovo utente
      this.apiService.getUsers().subscribe(result => {
        //console.log(result.length);
        //this.idCount = result.length + 1;
        // giocare con la lunghezza dell'array utenti crea problemi di sfalsamento quando viene 
        // cancellato un utente e poi aggiunto un altro
        
        // creo id random compreso tra lunghezza array utenti e 200 (un numero abbastanza grande che non dovrebbe creare problemi per poche operazioni)
        this.idCount = Math.floor(Math.random() * (200 - result.length) + result.length);
        console.log('ID: ' + this.idCount);
      });

      // modello del nuovo utente
      this.user = {
        nome: '',
        cognome: '',
        username: '',
        email: '',
        occupazione: '',
        proPic: '',
        followers: 0,
        id: 0 // TODO : provare ad assegnare il valore di idCount qui
      }
    }

  }

  // chiamata quando si dà il consenso a procedere (click sull'apposito bottone della modal) 
  // con l'operazione di creazione/modifica/eliminazione utente
  onOperationConsent() {
    console.log("form submitted with values:");
    console.log(this.user);

    if (this.operation === 'create') { // se si crea un nuovo utente

      this.user.id = this.idCount; // set dell'id del nuovo utente

      /*  this.apiService.postUser(this.user).subscribe( result => {
         console.log(result);
         
       }); */

    } /* else if (this.operation === 'edit') { // se si modifica un utente
      console.log('edit user mode on');
      
      this.apiService.putUser(this.user).subscribe( result => {});
 
    } else { // se si elimina un utente
      console.log('delete user mode on');

      this.apiService.deleteUser(this.user.id).subscribe( result => {
        console.log('mi chiama');
        console.log(result);
                
      });      
    } */

    // alla chiusura della modal, ritorna al componente Users l'utente creato/modificato/eliminato
    // le chiamate al servizio API verranno effettuate da Users
    this.activeModal.close(this.user);
  }
}
