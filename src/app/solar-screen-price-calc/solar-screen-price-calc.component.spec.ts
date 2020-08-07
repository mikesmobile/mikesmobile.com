import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarScreenPriceCalcComponent } from './solar-screen-price-calc.component';

describe('SolarScreenPriceCalcComponent', () => {
  let component: SolarScreenPriceCalcComponent;
  let fixture: ComponentFixture<SolarScreenPriceCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarScreenPriceCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarScreenPriceCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
