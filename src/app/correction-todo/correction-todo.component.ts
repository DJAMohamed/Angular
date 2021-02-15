import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Task } from '../Itask';
import { UserService } from '../user.service';

@Component({
  selector: 'app-correction-todo',
  templateUrl: './correction-todo.component.html',
  styleUrls: ['./correction-todo.component.css']
})
export class CorrectionTodoComponent implements OnInit {

  tab: Task[] = [{ id: Date.now(), task: "Repasser", state: false, update: false}];

  messageService: string;

  constructor(private service : UserService) { }

  add = (param: HTMLInputElement) => {
    if (param.value !== "") {
      this.tab.push({ id: Date.now(), task: param.value, state: false, update: false});
    }
    param.value = "";
  }

  delete(id: number) {
    this.tab = this.tab.filter(x => x.id !== id);
  }

  check(task: Task) {
    task.state = !task.state;
  }

  update(task: Task) {
    if (task.update == false) {
      task.update = true;
    }
    else {
      task.update = false;
    }
  }

  getMessage = () => {
    this.messageService = this.service.getMessageService();
  }

  ngOnInit(): void {
    this.getMessage();
    console.log(this.messageService);
    this.getPost();
  }

  getPost = () => {
    return this.service.getPost();
  }

}
