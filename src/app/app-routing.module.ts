import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'post', component: PostsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'album', component: AlbumsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
