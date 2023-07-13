import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from 'src/app/comments.service';
import { comment } from 'src/app/types/comment.type';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {
  
  @Input() comment?: comment;

  replyBox: boolean = false;

  constructor(private _service: CommentsService) { }

  ngOnInit(): void {
  }

  addReply(id: number | undefined, content:string): void {
    this.replyBox = false;
    this._service.addReply(id, content);
  }

  addScore(id: number | undefined): void {
    this._service.addScore(id);
  }

  subtractScore(id: number | undefined): void {
    this._service.subtractScore(id);
  }

  deleteComment(id: number | undefined): void {
    this._service.deleteComment(id);
  }

}
