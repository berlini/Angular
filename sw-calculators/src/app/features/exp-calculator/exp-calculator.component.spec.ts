import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpCalculatorComponent } from './exp-calculator.component';

describe('ExpCalculatorComponent', () => {
  let component: ExpCalculatorComponent;
  let fixture: ComponentFixture<ExpCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
