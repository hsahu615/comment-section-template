import { Injectable } from '@angular/core';
import { comment } from './types/comment.type';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  data: comment[] = [
    {
      "id": 1,
      "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      "createdAt": "7/13/2023",
      "score": 12,
      "user": {
        "image": { 
          "png": "../../../assets/images/avatars/image-amyrobson.png",
        },
        "username": "amyrobson"
      },
      "replies": []
    },
    {
      "id": 2,
      "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      "createdAt": "7/30/2023",
      "score": 5,
      "user": {
        "image": { 
          "png": "../../../assets/images/avatars/image-maxblagun.png",
        },
        "username": "maxblagun"
      },
      "replies": [
        {
          "id": 3,
          "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          "createdAt": "6/11/2023",
          "score": 4,
          "replyingTo": "maxblagun",
          "user": {
            "image": { 
              "png": "../../../assets/images/avatars/image-ramsesmiron.png",
  
            },
            "username": "ramsesmiron",
          },
          "replies": []
        },
        {
          "id": 4,
          "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          "createdAt": "7/11/2023",
          "score": 2,
          "replyingTo": "ramsesmiron",
          "user": {
            "image": { 
              "png": "../../../assets/images/avatars/image-juliusomo.png",
  
            },
            "username": "juliusomo"
          },
          "replies": []
        }
      ]
    }
  ]

  count:number = 1000;

  constructor() { }

  getComments(): comment[]{
    return this.data;
  }

  addReply(id: number | undefined, content: string) {
    if(content.trim().length==0) return;
    let comment = 
      {
        "id": this.count,
        "content": content,
        "createdAt": new Date().toLocaleDateString(),
        "score": 0,
        "replyingTo": "",
        "user": {
          "image": { 
            "png": "../../../assets/images/avatars/image-juliusomo.png",

          },
          "username": "juliusomo"
        },
        "replies": []
    };
    this.count++;
    for(let i = 0; i < this.data.length; i++){
      if(id == this.data[i].id){
          comment.replyingTo = this.data[i].user.username;
          this.data[i].replies.push(comment);
          break;
      }
      let flag = false;
      for(let j = 0; j < this.data[i].replies.length; j++){
        if(id == this.data[i].replies[j].id){
          comment.replyingTo = this.data[i].replies[j].user.username;
          this.data[i].replies.push(comment);
          flag = true;
          break;
        }
      }
      if(flag == true){break;}
    }
  }

  addScore(id: number | undefined) {
    for(let i = 0; i < this.data.length; i++){
      if(id == this.data[i].id){
          this.data[i].score++;
          break;
      }
      let flag = false;
      for(let j = 0; j < this.data[i].replies.length; j++){
        if(id == this.data[i].replies[j].id){
          this.data[i].replies[j].score++;
          flag = true;
          break;
        }
      }
      if(flag == true){break;}
    }
  }

  subtractScore(id: number | undefined) {
    for(let i = 0; i < this.data.length; i++){
      if(id == this.data[i].id){
          this.data[i].score--;
          break;
      }
      let flag = false;
      for(let j = 0; j < this.data[i].replies.length; j++){
        if(id == this.data[i].replies[j].id){
          this.data[i].replies[j].score--;
          flag = true;
          break;
        }
      }
      if(flag == true){break;}
    }
  }

  sendComment(content: string) {
    if(content.trim().length==0) return;
    let comment = 
      {
        "id": this.count,
        "content": content,
        "createdAt": new Date().toLocaleDateString(),
        "score": 0,
        "replyingTo": "",
        "user": {
          "image": { 
            "png": "../../../assets/images/avatars/image-juliusomo.png",

          },
          "username": "juliusomo"
        },
        "replies": []
    };
    this.count++;

    this.data.push(comment);

  }

  deleteComment(id: number | undefined){
    for(let i = 0; i < this.data.length; i++){
      if(id == this.data[i].id){
        console.log(i);
          this.data.splice(i, 1);
          break;
      }
      let flag = false;
      for(let j = 0; j < this.data[i].replies.length; j++){
        if(this.data[i].replies.length==1){
          this.data[i].replies = [];
          break;
        }
        if(id == this.data[i].replies[j].id){
          this.data[i].replies.splice(j, 1);
          flag = true;
          break;
        }
      }
      if(flag == true){break;}
    }
  }
  
}
