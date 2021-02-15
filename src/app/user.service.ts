import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  messageService: string = "Message provenant du service.";

  constructor() { }

  getMessageService = () => {
    return this.messageService;
  }

  getPost = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    // .then(res => console.log(JSON.stringify(res)))
    .then(res => console.log(res))
  }
}