import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingChimneyComponent } from './landing-chimney.component';

describe('LandingChimneyComponent', () => {
  let component: LandingChimneyComponent;
  let fixture: ComponentFixture<LandingChimneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingChimneyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingChimneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
