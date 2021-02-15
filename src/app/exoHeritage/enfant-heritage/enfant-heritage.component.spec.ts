import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantHeritageComponent } from './enfant-heritage.component';

describe('EnfantHeritageComponent', () => {
  let component: EnfantHeritageComponent;
  let fixture: ComponentFixture<EnfantHeritageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfantHeritageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfantHeritageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
