import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireplaceManualsComponent } from './fireplace-manuals.component';

describe('FireplaceManualsComponent', () => {
  let component: FireplaceManualsComponent;
  let fixture: ComponentFixture<FireplaceManualsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireplaceManualsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireplaceManualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
