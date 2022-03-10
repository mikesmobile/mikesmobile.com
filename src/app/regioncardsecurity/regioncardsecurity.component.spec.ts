import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegioncardsecurityComponent } from './regioncardsecurity.component';

describe('RegioncardsecurityComponent', () => {
  let component: RegioncardsecurityComponent;
  let fixture: ComponentFixture<RegioncardsecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegioncardsecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegioncardsecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
