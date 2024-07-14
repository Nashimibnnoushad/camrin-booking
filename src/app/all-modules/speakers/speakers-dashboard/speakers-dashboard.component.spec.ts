import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersDashboardComponent } from './speakers-dashboard.component';

describe('SpeakersDashboardComponent', () => {
  let component: SpeakersDashboardComponent;
  let fixture: ComponentFixture<SpeakersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakersDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
