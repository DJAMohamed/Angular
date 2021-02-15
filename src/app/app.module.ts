import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonneComponent } from './personne/personne.component';
import { CorrectionTodoComponent } from './correction-todo/correction-todo.component';
import { FormulaireDeBaseComponent } from './formulaire-de-base/formulaire-de-base.component';
import { FormulaireDynamiqueComponent } from './formulaire-dynamique/formulaire-dynamique.component';
import { ParentComponent } from './heritage/parent/parent.component';
import { EnfantComponent } from './heritage/enfant/enfant.component';
import { EnfantHeritageComponent } from './exoHeritage/enfant-heritage/enfant-heritage.component';
import { ParentHeritageComponent } from './exoHeritage/parent-heritage/parent-heritage.component';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    CorrectionTodoComponent,
    FormulaireDeBaseComponent,
    FormulaireDynamiqueComponent,
    ParentComponent,
    EnfantComponent,
    EnfantHeritageComponent,
    ParentHeritageComponent,
    ErrorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
