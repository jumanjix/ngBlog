import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';
import { Album } from '../interfaces/album';
import { Immagine } from '../interfaces/immagine';


@Component({
  selector: 'app-album-modal',
  templateUrl: './album-modal.component.html',
  styleUrls: ['./album-modal.component.css']
})
export class AlbumModalComponent implements OnInit {

  @Input() album! : Album;
  @Input() operation! : string;

  idCount! : number;

  constructor(public activeModal : NgbActiveModal, private apiService : ApiService) { }

  ngOnInit(): void {
    console.log("modal component presente!");


    // Caso Nuovo Album
    if (this.operation === 'create') {
      console.log('create new album operation');

      // get sull'album
      this.apiService.getAlbums().subscribe( result => {
        console.log(result.length);

        this.idCount = result.length + 1;

        console.log(this.idCount);
      })

      // modello del nuovo album
      this.album = {
        id: 0,
        titolo: "",
        immagini:[]
      }
    }

  }

  onOperationConsent() {
    console.log("form submitted");

    if (this.operation === 'create') { // se si crea un nuovo album
      console.log('add new album mode on');

      this.album.id = this.idCount; // set id
      console.log(this.album);

      this.apiService.postAlbum(this.album).subscribe( result => {});

    } else if (this.operation === 'edit') { // se si modifica un album
      console.log('edit album mode on');

      this.apiService.putAlbum(this.album).subscribe( result => {});

    } else { // se si elimina un album
      console.log('delete album mode on');

      this.apiService.deleteAlbum(this.album.id).subscribe( result => {
        console.log('mi chiama');
        console.log(result);

      });
    }
    this.activeModal.close("Done");
  }
}

