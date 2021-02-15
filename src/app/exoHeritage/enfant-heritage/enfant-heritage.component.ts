import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/exoHeritage/Iuser';

@Component({
  selector: 'app-enfant-heritage',
  templateUrl: './enfant-heritage.component.html',
  styleUrls: ['./enfant-heritage.component.css']
})
export class EnfantHeritageComponent implements OnInit {

  userProfilForm: FormGroup;

  @Output() newUser = new EventEmitter<User>();

  constructor(private fb: FormBuilder) {
    this.userProfilForm = this.fb.group({
      nom: ["Dupont", [Validators.minLength(4), Validators.required]],
      prenom: ["Durant", Validators.required],
      age: [10, Validators.required]
    })
  }

  soumettre = () => {
    if (this.userProfilForm.valid) {
      this.newUser.emit(this.userProfilForm.value);
    }
    else {
      console.log("Erreur ! " + this.userProfilForm.getError);
    }
  }
  
  ngOnInit(): void {
  }

}