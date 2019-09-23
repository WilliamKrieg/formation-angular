import { Post } from './../models/post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  // Liste de données typée et retournée mais non instanciée
  public getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('http://localhost:3000/posts');
  }

  // Liste de données typée et retournée mais et instanciée
  public getList(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('http://localhost:3000/posts').pipe(
      map((item: Post[]) => {
        return item.map(post => {
          return new Post(post);
        });
      })
    )
  }

}
