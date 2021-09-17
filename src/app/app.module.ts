import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { AlbumsComponent } from './albums/albums.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './users/modal-user/modal.component';
import { AlbumModalComponent } from './album-modal/album-modal.component';
import { HeaderComponent } from './header/header.component';
import { SearchUserFilterPipe } from './users/search-user-pipe/search-user-filter.pipe';
import { SearchAlbumPipe } from './albums/album-search/search-album.pipe';
import { PostsListComponent } from './posts/posts-list.component';
import { SearchPostFilterPipe } from './posts/post-list.filter.pipe';
import { ModalPostComponent } from './modal-post/modal-post/modal-post.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PostsListComponent,
    UsersComponent,
    AlbumsComponent,
    HomeComponent,
    ModalComponent,
    AlbumModalComponent,
    HeaderComponent,
    SearchUserFilterPipe,
    SearchAlbumPipe,
<<<<<<< HEAD
    SearchPostFilterPipe,
    ModalPostComponent,
    ScrollTopComponent,
    ModalPostComponent
 

=======
    ScrollTopComponent
>>>>>>> eb95557cce7e48cacf5efad1ff98e926dcb67f64
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],

exports: [
  FormsModule
  ]
})


export class AppModule { }
