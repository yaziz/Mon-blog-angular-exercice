import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/post.model';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  onLoveIt() {
    this.post.loveIts ++;
    console.log(this.post.loveIts);
    this.postService.savePosts();
    this.postService.emitPosts();
  }

  onDontLoveIt() {
    this.post.loveIts --;
    console.log(this.post.loveIts);
    this.postService.savePosts();
    this.postService.emitPosts();
  }

  onDeletePost(post: Post) {
    if(confirm('Etes-vous sûr de vouloir supprimer ce post ?')) {
      this.postService.removePost(post);
    } else {
      return null;
    }
  }

}
