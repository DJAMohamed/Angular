import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionTodoComponent } from './correction-todo.component';

describe('CorrectionTodoComponent', () => {
  let component: CorrectionTodoComponent;
  let fixture: ComponentFixture<CorrectionTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectionTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
