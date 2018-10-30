import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimneyGlossaryComponent } from './chimney-glossary.component';

describe('ChimneyGlossaryComponent', () => {
  let component: ChimneyGlossaryComponent;
  let fixture: ComponentFixture<ChimneyGlossaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChimneyGlossaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChimneyGlossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
