import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTestComponent } from './js-test.component';

describe('JsTestComponent', () => {
  let component: JsTestComponent;
  let fixture: ComponentFixture<JsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
