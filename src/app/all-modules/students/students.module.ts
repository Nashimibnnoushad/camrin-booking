import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { MapGridComponent } from './map-grid/map-grid.component';
import { MapListComponent } from './map-list/map-list.component';
import { SearchComponent } from './search/search.component';
import { InstructorProfileComponent } from './instructor-profile/instructor-profile.component';
import { BookingComponent } from './booking/booking.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BookingSuccessComponent } from './booking-success/booking-success.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgSelect2Module } from 'ng-select2';
import { CrystalLightboxModule } from '@crystalui/angular-lightbox';
import { Daterangepicker } from 'ng2-daterangepicker';

@NgModule({
  declarations: [
    StudentsComponent,
    MapGridComponent,
    MapListComponent,
    SearchComponent,
    InstructorProfileComponent,
    BookingComponent,
    CheckoutComponent,
    BookingSuccessComponent,
    StudentDashboardComponent,
    FavouritesComponent,
    ChatComponent,
    ProfileSettingsComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    GoogleMapsModule,
    NgSelect2Module,
    CrystalLightboxModule,
    Daterangepicker,
  ]
})
export class StudentsModule { }
