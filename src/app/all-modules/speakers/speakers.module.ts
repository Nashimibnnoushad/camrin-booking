import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeakersRoutingModule } from './speakers-routing.module';
import { SpeakersComponent } from './speakers.component';
import { SpeakersDashboardComponent } from './speakers-dashboard/speakers-dashboard.component';
import { EventsComponent } from './events/events.component';
import { ScheduleTimingsComponent } from './schedule-timings/schedule-timings.component';
import { MyCustomersComponent } from './my-customers/my-customers.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { ChatSpeakerComponent } from './chat-speaker/chat-speaker.component';
import { SpeakerProfileSettingsComponent } from './speaker-profile-settings/speaker-profile-settings.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SpeakerRegisterComponent } from './speaker-register/speaker-register.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SpeakerChangePasswordComponent } from './speaker-change-password/speaker-change-password.component';
import { AddBillingComponent } from './add-billing/add-billing.component';
import { AddProgramsComponent } from './add-programs/add-programs.component';
import { EditBillingComponent } from './edit-billing/edit-billing.component';
import { EditProgramsComponent } from './edit-programs/edit-programs.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { TagInputModule } from 'ngx-chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SpeakersComponent,
    SpeakersDashboardComponent,
    EventsComponent,
    ScheduleTimingsComponent,
    MyCustomersComponent,
    CustomerProfileComponent,
    ChatSpeakerComponent,
    SpeakerProfileSettingsComponent,
    ReviewsComponent,
    SpeakerRegisterComponent,
    SocialMediaComponent,
    SpeakerChangePasswordComponent,
    AddBillingComponent,
    AddProgramsComponent,
    EditBillingComponent,
    EditProgramsComponent
  ],
  imports: [
    CommonModule,
    SpeakersRoutingModule,
    NgxDropzoneModule,
    TagInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SpeakersModule { }
