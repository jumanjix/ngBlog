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
  searchAlbumInput : string = '';


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
  ngOnInit(): void {
    this.apiService.getAlbums().subscribe( data => {
      this.albums = data;
    })
  }


  openModal(operation : string, album?: Album) {

    // chiamata al componente che contiene la modal con passaggio dei parametri 'album' e 'operation'
    const modalRef = this.modalService.open(AlbumModalComponent);
    modalRef.componentInstance.album = album;
    modalRef.componentInstance.operation = operation;

    // una volta che la modal viene chiusa:
    modalRef.closed.subscribe( result => {

      console.log("modal closed with result: " + result);

      // che una chiamata all'API senza parametri validi generi un errore
      if (result === 'Close click') {
        this.ngOnInit(); //refresh della pagina senza le modifiche fatte
        console.log("operation aborted");

      }
      else {

        console.log('data back from modal:');
        console.log(result);

        switch(operation) {
          // 1) Creazione - POST
          case "create" : {
            console.log("creo nuovo album");

            this.apiService.postAlbum(result).subscribe( res => {
              console.log(res);
              this.ngOnInit();
            });
            break;
          }
          // 2) Modifica - PUT
          case "edit" : {
            console.log("modifico album");

            this.apiService.putAlbum(result).subscribe( res => {
              console.log(res);
              this.ngOnInit();
            });
            break;
          }
          // 3) Eliminazione - DELETE
          case "delete" : {
            console.log("elimino album");

            this.apiService.deleteAlbum(result.id).subscribe( res => {
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
