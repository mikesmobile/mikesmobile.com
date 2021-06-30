import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { noTileGalleryComponent } from './no-tile-gallery.component';

describe('noTileGalleryComponent', () => {
  let component: noTileGalleryComponent;
  let fixture: ComponentFixture<noTileGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [noTileGalleryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(noTileGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
