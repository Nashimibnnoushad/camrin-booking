import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorsRoutingModule } from './instructors-routing.module';
import { InstructorsComponent } from './instructors.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ScheduleTimingsComponent } from './schedule-timings/schedule-timings.component';
import { MyStudentComponent } from './my-student/my-student.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { ChatInstructorComponent } from './chat-instructor/chat-instructor.component';
import { InstructorProfileSettingsComponent } from './instructor-profile-settings/instructor-profile-settings.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { InstructorRegisterComponent } from './instructor-register/instructor-register.component';
import { AddBillingComponent } from './add-billing/add-billing.component';
import { CollegeComponent } from './college/college.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { EditBillingComponent } from './edit-billing/edit-billing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';


@NgModule({
  declarations: [
    InstructorsComponent,
    InstructorDashboardComponent,
    CoursesComponent,
    AppointmentsComponent,
    ScheduleTimingsComponent,
    MyStudentComponent,
    StudentProfileComponent,
    ChatInstructorComponent,
    InstructorProfileSettingsComponent,
    ReviewsComponent,
    InstructorRegisterComponent,
    AddBillingComponent,
    CollegeComponent,
    CourseDetailsComponent,
    SocialMediaComponent,
    EditBillingComponent
  ],
  imports: [
    CommonModule,
    InstructorsRoutingModule,
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule
    
  ]
})
export class InstructorsModule { }
