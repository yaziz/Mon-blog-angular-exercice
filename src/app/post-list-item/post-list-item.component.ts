import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string; // Propriété personnalisée
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt() {
    this.postLoveIts ++;
    console.log(this.postLoveIts);
  }

  onDontLoveIt() {
    this.postLoveIts --;
    console.log(this.postLoveIts);
  }

}
