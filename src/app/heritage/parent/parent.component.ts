import { Component, OnInit } from '@angular/core';
import { User } from '../Iuser';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  tab = [{name: "Pierre", age : 45}, {name: "Jules", age : 40}, {name: "Anne", age : 35}, {name: "Jean", age : 30}]

  tab2 = [12, 45, 16, 18, 20]

  constructor() { }

  ngOnInit(): void {
  }

  add = (user: User) => {
    this.tab.push(user);
  }

  addNumber = (nombre: number) => {
    this.tab2.push(nombre);
  }

}
