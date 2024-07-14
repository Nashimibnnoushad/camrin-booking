import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSpeakerComponent } from './chat-speaker.component';

describe('ChatSpeakerComponent', () => {
  let component: ChatSpeakerComponent;
  let fixture: ComponentFixture<ChatSpeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatSpeakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
