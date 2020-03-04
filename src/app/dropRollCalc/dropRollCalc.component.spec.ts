import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropRollCalcComponent } from './dropRollCalc.component';

describe('DropRollCalcComponent', () => {
  let component: DropRollCalcComponent;
  let fixture: ComponentFixture<DropRollCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropRollCalcComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropRollCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
