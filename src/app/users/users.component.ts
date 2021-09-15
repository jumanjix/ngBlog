import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : User[] = [];

  constructor(private apiService : ApiService) {

    this.apiService.getUsers().subscribe( data => {  // recupero tutti gli user
      this.users = data;
    });

  }

  ngOnInit(): void {
  }

  modificaUtente(user : User) {
    console.log(user);
    
    this.apiService.putUser(user).subscribe( result => {});
  }

}
