import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentHeritageComponent } from './parent-heritage.component';

describe('ParentHeritageComponent', () => {
  let component: ParentHeritageComponent;
  let fixture: ComponentFixture<ParentHeritageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentHeritageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentHeritageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
