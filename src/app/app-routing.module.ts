import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { HomeComponent } from './home/home.component';
import { PostsEditComponent } from './posts/posts-edit/posts-edit.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'posts', component: PostsListComponent },
  { path: 'users', component: UsersComponent },
  { path: 'posts-edit', component: PostsEditComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
