import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteFormDropRollComponent } from './quote-form-droproll.component';

describe('QuoteFormDropRollComponent', () => {
  let component: QuoteFormDropRollComponent;
  let fixture: ComponentFixture<QuoteFormDropRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteFormDropRollComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteFormDropRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
