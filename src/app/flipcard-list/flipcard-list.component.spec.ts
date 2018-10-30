import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipcardListComponent } from './flipcard-list.component';

describe('FlipcardListComponent', () => {
  let component: FlipcardListComponent;
  let fixture: ComponentFixture<FlipcardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipcardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipcardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
