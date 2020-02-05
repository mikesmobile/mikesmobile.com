import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideShowModalComponent } from './slideShowModal.component';

describe('SlideShowModalComponent', () => {
  let component: SlideShowModalComponent;
  let fixture: ComponentFixture<SlideShowModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SlideShowModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideShowModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
