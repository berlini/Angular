import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixStarCalculatorComponent } from './six-star-calculator.component';

describe('SixStarCalculatorComponent', () => {
  let component: SixStarCalculatorComponent;
  let fixture: ComponentFixture<SixStarCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixStarCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixStarCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
