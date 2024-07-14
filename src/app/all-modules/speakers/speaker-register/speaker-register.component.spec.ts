import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerRegisterComponent } from './speaker-register.component';

describe('SpeakerRegisterComponent', () => {
  let component: SpeakerRegisterComponent;
  let fixture: ComponentFixture<SpeakerRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
