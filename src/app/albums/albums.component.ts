import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Album } from '../interfaces/album';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [NgbCarouselConfig]
})
export class AlbumsComponent implements OnInit {

  albums : Album[] = [];
  showNavigationIndicators = true;
  model = {
    left: true,
    middle: false,
    right: false
  };

  constructor(private apiService : ApiService, config: NgbCarouselConfig) {
    this.apiService.getAlbums().subscribe( data => {
      this.albums = data;
    })
    config.interval = 0;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationIndicators = true;
  }


  ngOnInit(): void {
  }

}
