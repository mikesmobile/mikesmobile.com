import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancingComponent } from './financing.component';

describe('FreeQuoteComponent', () => {
  let component: FinancingComponent;
  let fixture: ComponentFixture<FinancingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FinancingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
