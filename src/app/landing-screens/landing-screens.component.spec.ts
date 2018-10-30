import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingScreensComponent } from './landing-screens.component';

describe('LandingScreensComponent', () => {
  let component: LandingScreensComponent;
  let fixture: ComponentFixture<LandingScreensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingScreensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
