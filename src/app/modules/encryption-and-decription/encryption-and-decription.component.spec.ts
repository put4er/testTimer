import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptionAndDecriptionComponent } from './encryption-and-decription.component';

describe('EncryptionAndDecriptionComponent', () => {
  let component: EncryptionAndDecriptionComponent;
  let fixture: ComponentFixture<EncryptionAndDecriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncryptionAndDecriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncryptionAndDecriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
