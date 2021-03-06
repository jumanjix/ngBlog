import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { HomeComponent } from './home/home.component';
import { PostsListComponent } from './posts/posts-list.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'posts', component: PostsListComponent },
  { path: 'users', component: UsersComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
