import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoAdwordsLpComponent } from './seo-adwords-lp.component';

describe('SeoAdwordsLpComponent', () => {
  let component: SeoAdwordsLpComponent;
  let fixture: ComponentFixture<SeoAdwordsLpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoAdwordsLpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoAdwordsLpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
