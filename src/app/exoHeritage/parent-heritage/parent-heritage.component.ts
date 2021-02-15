import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/exoheritage/Iuser';

@Component({
  selector: 'app-parent-heritage',
  templateUrl: './parent-heritage.component.html',
  styleUrls: ['./parent-heritage.component.css']
})
export class ParentHeritageComponent implements OnInit {

  tab: User[] = [{nom: "Pierre", prenom: "eee", age : 45}, {nom: "Jules", prenom: "eee", age : 40}, {nom: "Anne", prenom: "eee", age : 35}, {nom: "Jean", prenom: "eeee", age : 30}]

  constructor() { }

  add = (user: User) => {
    this.tab.push(user);
  }

  ngOnInit(): void {
  }

}