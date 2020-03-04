import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteFormAwningComponent } from './quote-form-awning.component';

describe('QuoteFormAwningComponent', () => {
  let component: QuoteFormAwningComponent;
  let fixture: ComponentFixture<QuoteFormAwningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteFormAwningComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteFormAwningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
