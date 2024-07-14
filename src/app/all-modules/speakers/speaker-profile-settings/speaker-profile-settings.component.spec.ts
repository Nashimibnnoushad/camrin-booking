import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerProfileSettingsComponent } from './speaker-profile-settings.component';

describe('SpeakerProfileSettingsComponent', () => {
  let component: SpeakerProfileSettingsComponent;
  let fixture: ComponentFixture<SpeakerProfileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerProfileSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
