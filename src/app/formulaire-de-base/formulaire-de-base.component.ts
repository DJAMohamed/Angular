import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-de-base',
  templateUrl: './formulaire-de-base.component.html',
  styleUrls: ['./formulaire-de-base.component.css']
})
export class FormulaireDeBaseComponent implements OnInit {

  userProfilForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userProfilForm = this.fb.group({
      nom: ["", [Validators.minLength(4), Validators.required]],
      prenom: ["Bob", Validators.required],
      age: [45, Validators.required]

    })
  }

  soumettre = () => {
    if (this.userProfilForm.valid) {
      console.log(this.userProfilForm.value);
    }
    else {
      console.log("Erreur ! " + this.userProfilForm.getError);
    }
  }

  ngOnInit(): void {
  }

}
