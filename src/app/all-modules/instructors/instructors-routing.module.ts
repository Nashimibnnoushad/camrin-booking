import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBillingComponent } from './add-billing/add-billing.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ChatInstructorComponent } from './chat-instructor/chat-instructor.component';
import { CollegeComponent } from './college/college.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesComponent } from './courses/courses.component';
import { EditBillingComponent } from './edit-billing/edit-billing.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { InstructorProfileSettingsComponent } from './instructor-profile-settings/instructor-profile-settings.component';
import { InstructorRegisterComponent } from './instructor-register/instructor-register.component';
import { InstructorsComponent } from './instructors.component';
import { MyStudentComponent } from './my-student/my-student.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ScheduleTimingsComponent } from './schedule-timings/schedule-timings.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';

const routes: Routes = [
  { path: '', component: InstructorsComponent,
    children: [
      { path: 'admin-dashboard', component: InstructorDashboardComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'schedule-timings', component: ScheduleTimingsComponent },
      { path: 'my-student', component: MyStudentComponent },
      { path: 'student-profile', component: StudentProfileComponent },
      { path: 'chat-instructor', component: ChatInstructorComponent },
      { path: 'instructor-profile-settings', component: InstructorProfileSettingsComponent },
      { path: 'reviews', component: ReviewsComponent },
      { path: 'instructor-register', component: InstructorRegisterComponent },
      { path: 'add-billing', component: AddBillingComponent },
      { path: 'edit-billing', component: EditBillingComponent },
      { path: 'college', component: CollegeComponent },
      { path: 'course-details', component: CourseDetailsComponent },
      { path: 'social-media', component: SocialMediaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorsRoutingModule { }
