import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Album } from '../interfaces/album';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AlbumModalComponent } from '../album-modal/album-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [NgbCarouselConfig]
})
export class AlbumsComponent implements OnInit {

  albums : Album[] = [];



  constructor(private apiService : ApiService, config: NgbCarouselConfig, private modalService : NgbModal) {
    this.apiService.getAlbums().subscribe( data => {
      this.albums = data;
    })
    config.interval = 0;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationIndicators = true;

  }
  // prende l'operazione da fare (create, delete, edit)
  openModal(operation : string, album?: Album) {
    const modalRef = this.modalService.open(AlbumModalComponent);
    modalRef.componentInstance.album = album;
    modalRef.componentInstance.operation = operation;
    modalRef.closed.subscribe( (result: any) => {
      console.log(result);
    })
  }
  ngOnInit(): void {
  }
}
