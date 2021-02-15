import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulaire-dynamique',
  templateUrl: './formulaire-dynamique.component.html',
  styleUrls: ['./formulaire-dynamique.component.css']
})
export class FormulaireDynamiqueComponent implements OnInit {

  TeamForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.TeamForm = this.fb.group({
      membres: this.fb.array([
        this.fb.control('')
      ])
    })
  }

  get members(): FormArray {
    return this.TeamForm.get("membres") as FormArray;
  }

  addMembre = () => {
    this.members.push(this.fb.control(''));
  }

  soumettre = () => {
    console.log(this.TeamForm.value);
  }

  ngOnInit(): void {
  }

}
