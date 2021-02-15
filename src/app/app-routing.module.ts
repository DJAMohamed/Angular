import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ParentHeritageComponent } from './exoHeritage/parent-heritage/parent-heritage.component';
// import { FormulaireDeBaseComponent } from './formulaire-de-base/formulaire-de-base.component';
// import { FormulaireDynamiqueComponent } from './formulaire-dynamique/formulaire-dynamique.component';
// import { PersonneComponent } from './personne/personne.component';
// import { ErrorComponent } from './error/error.component';

import { PersonneComponent } from './personne/personne.component';
import { CorrectionTodoComponent } from './correction-todo/correction-todo.component';
import { FormulaireDeBaseComponent } from './formulaire-de-base/formulaire-de-base.component';
import { FormulaireDynamiqueComponent } from './formulaire-dynamique/formulaire-dynamique.component';
import { ParentComponent } from './heritage/parent/parent.component';
import { EnfantComponent } from './heritage/enfant/enfant.component';
import { EnfantHeritageComponent } from './exoHeritage/enfant-heritage/enfant-heritage.component';
import { ParentHeritageComponent } from './exoHeritage/parent-heritage/parent-heritage.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path: "", component: PersonneComponent},
  {path: "heritage", component: ParentHeritageComponent},
  {path: "todo", component: CorrectionTodoComponent},
  {path: "404", component: ErrorComponent},
  {path: "formulaire", component: FormulaireDeBaseComponent,
   children: [
    {path: "dynamique", component: FormulaireDynamiqueComponent}
  
  ]},
  {path: "**", redirectTo: "404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }