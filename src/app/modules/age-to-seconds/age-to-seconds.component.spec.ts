import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeToSecondsComponent } from './age-to-seconds.component';

describe('AgeToSecondsComponent', () => {
  let component: AgeToSecondsComponent;
  let fixture: ComponentFixture<AgeToSecondsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeToSecondsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeToSecondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
