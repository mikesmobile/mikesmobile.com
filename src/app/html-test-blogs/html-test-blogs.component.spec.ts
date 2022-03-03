import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlTestBlogsComponent } from './html-test-blogs.component';

describe('HtmlTestBlogsComponent', () => {
  let component: HtmlTestBlogsComponent;
  let fixture: ComponentFixture<HtmlTestBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlTestBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlTestBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
