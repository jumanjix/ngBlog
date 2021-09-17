import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Post } from "src/app/interfaces/post";


@Injectable({
    providedIn: 'root'
  })

export class PostListService{

    private readonly POST_API_URL = 'api/blog.json';

    constructor(private http: HttpClient){

    }

    public getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.POST_API_URL).pipe(
            tap(posts => console.log('post:', posts)),
            catchError(this.handleError)
        );

    }

    public createHotel(post: Post): Observable<Post> {
        post = {
          ...post,
          imageUrl: 'assets/img/1.jpg',
         
        };
        return this.http.post<Post>(this.POST_API_URL, post).pipe(
          catchError(this.handleError)
        )
      }
    
      public updateHotel(post: Post): Observable<Post> {
        const url = `${this.POST_API_URL}/${post.id}`;
    
        return this.http.put<Post>(url, post).pipe(
          catchError(this.handleError)
        );
      }
    
      public deleteHotel(id: number): Observable<{}> {
        const url = `${this.POST_API_URL}/${id}`;
    
        return this.http.delete<Post>(url).pipe(
          catchError(this.handleError)
        );
      }
    

    private handleError(err: HttpErrorResponse) {
        let error: string;
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', err.error.message);
          error = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${err.status}, ` +
            `body was: ${err.error}`
          );
          error = `Backend returned code ${err.status}, body was: ${err.error}`;
        }
        // Return an observable with a user-facing error message.
        return throwError(
          'Something bad happened; please try again later.'
          + '\n'
          + error
        );
      }
}