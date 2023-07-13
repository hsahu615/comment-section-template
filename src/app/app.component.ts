import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import { comment } from './types/comment.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'comments-template';

  data: comment[] = [];

  constructor(private _service: CommentsService){

  }
  ngOnInit(): void {
    this.data = this._service.getComments();
  }

  sendComment(content: string): void {
    this._service.sendComment(content);
  }


}

