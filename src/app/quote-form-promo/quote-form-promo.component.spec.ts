import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteFormPromoComponent } from './quote-form-promo.component';

describe('QuoteFormPromoComponent', () => {
  let component: QuoteFormPromoComponent;
  let fixture: ComponentFixture<QuoteFormPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteFormPromoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteFormPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
