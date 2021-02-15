import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { User } from '../Iuser';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {

  //  @Input() tableau : Array<{name: string, age: number}> = [];
  @Input() tableau : Array<User> = [];
  @Output() newUser = new EventEmitter<User>();
  @Output() newNumber = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  addEnfant = () => {
    this.newUser.emit({name: "Noëlle", age: 75});
  }

  addNumber = () => {
    this.newNumber.emit(2021);
  }

}
