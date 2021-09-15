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

  @Input() user : any;

  constructor(public activeModal : NgbActiveModal, private apiService : ApiService) { }

  ngOnInit(): void {
    console.log("modal component presente!");
    
  }

  onSubmit(formValues : User) {
    console.log(formValues);
    
    console.log("form submitted");

    console.log(this.user);
    

    this.apiService.putUser(this.user).subscribe( result => {});

    this.activeModal.close("Submit");    
  }
}
