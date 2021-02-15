import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireDeBaseComponent } from './formulaire-de-base.component';

describe('FormulaireDeBaseComponent', () => {
  let component: FormulaireDeBaseComponent;
  let fixture: ComponentFixture<FormulaireDeBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireDeBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireDeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
