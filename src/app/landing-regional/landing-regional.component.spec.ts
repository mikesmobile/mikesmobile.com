import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingRegionalComponent } from './landing-regional.component';

describe('LandingRegionalComponent', () => {
  let component: LandingRegionalComponent;
  let fixture: ComponentFixture<LandingRegionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingRegionalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
