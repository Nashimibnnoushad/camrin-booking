import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBillingComponent } from './add-billing/add-billing.component';
import { AddProgramsComponent } from './add-programs/add-programs.component';
import { ChatSpeakerComponent } from './chat-speaker/chat-speaker.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { EditBillingComponent } from './edit-billing/edit-billing.component';
import { EditProgramsComponent } from './edit-programs/edit-programs.component';
import { EventsComponent } from './events/events.component';
import { MyCustomersComponent } from './my-customers/my-customers.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ScheduleTimingsComponent } from './schedule-timings/schedule-timings.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SpeakerChangePasswordComponent } from './speaker-change-password/speaker-change-password.component';
import { SpeakerProfileSettingsComponent } from './speaker-profile-settings/speaker-profile-settings.component';
import { SpeakerRegisterComponent } from './speaker-register/speaker-register.component';
import { SpeakersDashboardComponent } from './speakers-dashboard/speakers-dashboard.component';
import { SpeakersComponent } from './speakers.component';

const routes: Routes = [{ path: '', component: SpeakersComponent,
children: [
  {path: 'speakers-dashboard', component: SpeakersDashboardComponent, data: { breadcrumb: 'dashboard' }},
  {path: 'events', component: EventsComponent, data: { breadcrumb: "Events" }},
  {path: 'schedule-timings', component: ScheduleTimingsComponent, data: { breadcrumb: "Schedule Timings" }},
  {path: 'my-customers', component: MyCustomersComponent, data: { breadcrumb: "My Customers" }},
  {path: 'customer-profile', component: CustomerProfileComponent, data: { breadcrumb: "Profile" }},
  {path: 'chat-speaker', component: ChatSpeakerComponent},
  {path: 'speaker-profile-settings', component: SpeakerProfileSettingsComponent, data: { breadcrumb: "Profile Settings"}},
  {path: 'reviews', component: ReviewsComponent, data: { breadcrumb: "Reviews"}},
  {path: 'speaker-register', component: SpeakerRegisterComponent},
  {path: 'social-media', component: SocialMediaComponent, data: { breadcrumb: 'social media'}},
  {path: 'speaker-change-password', component: SpeakerChangePasswordComponent, data: { breadcrumb: 'speakers change password'}},
  {path: 'add-billing', component: AddBillingComponent, data: { breadcrumb: 'add billing'}},
  {path: 'edit-billing', component: EditBillingComponent, data: { breadcrumb: 'edit billing'}},
  {path: 'add-programs', component: AddProgramsComponent, data: { breadcrumb: 'add programs'}},
  {path: 'edit-programs', component: EditProgramsComponent, data: { breadcrumb: 'edit programs'}}
  
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakersRoutingModule { }
