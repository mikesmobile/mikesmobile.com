import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteFormSolarScreenComponent } from './quote-form-solar-screen.component';

describe('QuoteFormSolarScreenComponent', () => {
  let component: QuoteFormSolarScreenComponent;
  let fixture: ComponentFixture<QuoteFormSolarScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteFormSolarScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteFormSolarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
