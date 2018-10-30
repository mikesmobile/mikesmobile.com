import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimneyFaqComponent } from './chimney-faq.component';

describe('ChimneyFaqComponent', () => {
  let component: ChimneyFaqComponent;
  let fixture: ComponentFixture<ChimneyFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChimneyFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChimneyFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
