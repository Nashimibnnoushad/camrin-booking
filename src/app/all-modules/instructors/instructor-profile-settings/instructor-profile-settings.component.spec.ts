import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorProfileSettingsComponent } from './instructor-profile-settings.component';

describe('InstructorProfileSettingsComponent', () => {
  let component: InstructorProfileSettingsComponent;
  let fixture: ComponentFixture<InstructorProfileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorProfileSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
