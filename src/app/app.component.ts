import { Post } from './models/post';
import { PostsService } from './services/posts.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PostsService]
})
export class AppComponent implements OnDestroy {

  public posts: Post[];
  public postSelected: Post;

  public subPost: Subscription;

  constructor(private postService: PostsService) {
    this.subPost = this.postService.getPosts().subscribe(res => this.posts = res);
  }

  public testIfPostIsSelected(post: Post): boolean {
    return (this.postSelected && post && this.postSelected.id === post.id);
  }

  ngOnDestroy(){
    this.subPost.unsubscribe();
  }

}
