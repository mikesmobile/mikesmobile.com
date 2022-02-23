import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingRegionalSecurityComponent } from './landing-regional-security.component';

describe('LandingRegionalSecurityComponent', () => {
  let component: LandingRegionalSecurityComponent;
  let fixture: ComponentFixture<LandingRegionalSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingRegionalSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingRegionalSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
