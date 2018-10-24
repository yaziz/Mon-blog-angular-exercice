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
    this.postService.increaseLoveIts(this.post);
    console.log(this.post.loveIts);
  }

  onDontLoveIt() {
    this.postService.decreaseLoveIts(this.post);
    console.log(this.post.loveIts);
  }

  onDeletePost(post: Post) {
    if(confirm('Etes-vous sûr de vouloir supprimer ce post ?')) {
      this.postService.removePost(post);
    } else {
      return null;
    }
  }

}
