import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerChangePasswordComponent } from './speaker-change-password.component';

describe('SpeakerChangePasswordComponent', () => {
  let component: SpeakerChangePasswordComponent;
  let fixture: ComponentFixture<SpeakerChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
