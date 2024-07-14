import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { MapGridComponent } from './map-grid/map-grid.component';
import { MapListComponent } from './map-list/map-list.component';
import { SearchComponent } from './search/search.component';
import { SpeakerProfileComponent } from './speaker-profile/speaker-profile.component';
import { BookingComponent } from './booking/booking.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BookingSuccessComponent } from './booking-success/booking-success.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {CrystalLightboxModule} from '@crystalui/angular-lightbox';
import { Daterangepicker } from 'ng2-daterangepicker';
import { NgSelect2Module } from 'ng-select2';


@NgModule({
  declarations: [
    CustomersComponent,
    MapGridComponent,
    MapListComponent,
    SearchComponent,
    SpeakerProfileComponent,
    BookingComponent,
    CheckoutComponent,
    BookingSuccessComponent,
    CustomerDashboardComponent,
    FavouritesComponent,
    ChatComponent,
    ProfileSettingsComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    CrystalLightboxModule,
    Daterangepicker,
    NgSelect2Module
  ]
})
export class CustomersModule { }
