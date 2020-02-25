import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwningPriceCalcComponent } from './awningPriceCalc.component';

describe('AwningPriceCalcComponent', () => {
  let component: AwningPriceCalcComponent;
  let fixture: ComponentFixture<AwningPriceCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AwningPriceCalcComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwningPriceCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
