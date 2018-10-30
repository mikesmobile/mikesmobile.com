import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoLocationLpComponent } from './seo-location-lp.component';

describe('SeoLocationLpComponent', () => {
  let component: SeoLocationLpComponent;
  let fixture: ComponentFixture<SeoLocationLpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoLocationLpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoLocationLpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
