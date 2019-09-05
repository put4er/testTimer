import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RockPaperScessorsComponent } from './rock-paper-scessors.component';

describe('RockPaperScessorsComponent', () => {
  let component: RockPaperScessorsComponent;
  let fixture: ComponentFixture<RockPaperScessorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RockPaperScessorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RockPaperScessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
