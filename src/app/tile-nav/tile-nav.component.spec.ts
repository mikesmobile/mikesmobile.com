import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileNavComponent } from './tile-nav.component';

describe('TileNavComponent', () => {
  let component: TileNavComponent;
  let fixture: ComponentFixture<TileNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TileNavComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
