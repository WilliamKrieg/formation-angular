import { Post } from './models/post';
import { PostsService } from './services/posts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PostsService]
})
export class AppComponent {

  public posts: Post[];
  public postSelected: Post;

  constructor(private postService: PostsService) {
    this.postService.getPosts().subscribe(res => this.posts = res);
  }

  public testIfPostIsSelected(post: Post) : boolean{
    return (this.postSelected && post && this.postSelected.id === post.id);
  }

}
