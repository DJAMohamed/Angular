import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  nom: string = "Jean.";
  variableTemporaire1: string;
  variableTemporaire2: number;
  variableTemporaire3: string;
  variableTemporaire4: string;
  
  message: string = "Message depuis Typescript.";
  nombre: number = 3.145957;
  pourcent: number = 0.25;
  date: any = Date.now();

  users = [
    { name: "Jean", age: 45 },
    { name: "Pierre", age: 40 },
    { name: "Anne", age: 29 }
  ]

  user = { name: "Anne", age: 29 };

  taches = [
    { id : 1613048541015, name: "Tâche 01", etat: true },
    { id : 1613048543847, name: "Tâche 02", etat: false },
    { id : 1613048547895, name: "Tâche 03", etat: true },
    { id : 1613048550919, name: "Tâche 04", etat: false },
    { id : 1613048554327, name: "Tâche 05", etat: true },
    { id : 1613048556993, name: "Tâche 06", etat: false },
    { id : 1613048559655, name: "Tâche 07", etat: true },
    { id : 1613055319411, name: "Tâche 08", etat: false },
    { id : 1613055501841, name: "Tâche 09", etat: true },
    { id : 1613055512114, name: "Tâche 10", etat: false }
  ]

  img = "https://www.leparisien.fr/resizer/74wMQIeXKLDUKuKvSzJQME_0ULg=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/KNVYKZBDTTOXNO37FEVDTD5DJU.jpg"

  constructor() { }

  hello = (param?: string) => {
    param ?
      alert('Bonjour : ' + param)
      : alert("Bonjour à tous.");
  }

  ajouterTache = () => {
    this.taches.push({id: Date.now(), name: this.variableTemporaire1, etat: false});
    this.variableTemporaire1 = "";
  }

  modifierEtat = (nombre: number) => {
    for (let index = 0; index < this.taches.length; index++) {
      if (this.taches[index].id == nombre) {
        this.taches[index].etat = !this.taches[index].etat;
      }
    }
  }

  modifierTache = () => {
    for (let index = 0; index < this.taches.length; index++) {
      if (this.taches[index].id == this.variableTemporaire2) {
        this.taches[index].name = this.variableTemporaire3;
      }
    }
    this.variableTemporaire2 = null;
    this.variableTemporaire3 = "";
  }

  toto = (nombre: number) => {
    for (let index = 0; index < this.taches.length; index++) {
      if (this.taches[index].id == nombre) {
        this.taches[index].name = this.variableTemporaire4;
      }
    }
  }

  supprimerTache = (nombre: number) => {
    this.taches = this.taches.filter(x => x.id != nombre);
  }
  
  ngOnInit() {
  }

}