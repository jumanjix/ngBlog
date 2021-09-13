import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Album } from '../interfaces/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums : Album[] = [];

  constructor(private apiService : ApiService) { 
    this.apiService.getAlbums().subscribe( data => {
      this.albums = data;
    })
  }

  ngOnInit(): void {
  }

}
