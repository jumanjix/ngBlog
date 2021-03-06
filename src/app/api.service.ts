import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './interfaces/user';
import { Album } from './interfaces/album';
import { Observable } from 'rxjs';
import { Post } from './interfaces/post';




@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // getPosts() {
  //   throw new Error('Method not implemented.');
  // }

  // indirizzo principale json *** NON UTILIZZATO
  private apiUrl: string = "http://localhost:3000/";
  // indirizzi specifici
  private postsUrl: string = "http://localhost:3000/posts/";
  private usersUrl: string = "http://localhost:3000/users/";
  private albumUrl: string = "http://localhost:3000/albums/";

  constructor(private http: HttpClient) { }

  // // ***** Operazioni sui post ***** 
  // GET - recupero 
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }
  // DELETE - eliminazione
  deletePost(id: number) {
    return this.http.delete<Post>(this.postsUrl + id);
  }
  // PUT - modifica esistente
  putPost(post: Post) {
    return this.http.put<Post>(this.postsUrl + post.id, post);
  }
  // POST - aggiunta nuovo
  postPost(post: Post) {
    return this.http.post<Post>(this.postsUrl, post);
  }


  // *** Operazioni sui commenti 
  // TODO !!!


  // ***** Operazioni sugli users *****
  // GET
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
  // DELETE
  deleteUser(id: number) {
    return this.http.delete<User>(this.usersUrl + id);
  }
  // PUT
  putUser(user: User) {
    //console.log('aggiornando ' + user);
    
    return this.http.put<User>(this.usersUrl + user.id, user);
  }
  // POST
  postUser(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }


  // *** Operazioni sugli album *****
  // GET
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumUrl);
  }
  // DELETE
  deleteAlbum(id: number) {
    return this.http.delete<Album>(this.albumUrl + id);
  }
  // PUT
  putAlbum(album: Album) {
    return this.http.put<Album>(this.albumUrl + album.id, album);
  }
  // POST
  postAlbum(album: Album) {
    return this.http.post<Album>(this.albumUrl, album);
  }

  // *** Operazioni sulle immagini
  // TODO ???

 

}

