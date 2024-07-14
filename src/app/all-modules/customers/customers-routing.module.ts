import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingSuccessComponent } from './booking-success/booking-success.component';
import { BookingComponent } from './booking/booking.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChatComponent } from './chat/chat.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomersComponent } from './customers.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MapGridComponent } from './map-grid/map-grid.component';
import { MapListComponent } from './map-list/map-list.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { SearchComponent } from './search/search.component';
import { SpeakerProfileComponent } from './speaker-profile/speaker-profile.component';

const routes: Routes = [{ path: '', component: CustomersComponent,
children: [
  {path: 'speakers/map-grid', component: MapGridComponent},
  {path: 'speakers/map-list', component: MapListComponent},
  {path: 'search', component: SearchComponent, data: { breadcrumb: 'search' }},
  {path: 'speaker-profile', component: SpeakerProfileComponent, data: { breadcrumb: 'speaker profile' }},
  {path: 'booking', component: BookingComponent, data: { breadcrumb: 'booking' }},
  {path: 'checkout', component: CheckoutComponent, data: { breadcrumb: 'checkout' }},
  {path: 'booking-success', component: BookingSuccessComponent, data: { breadcrumb: 'booking success' }},
  {path: 'customer-dashboard', component: CustomerDashboardComponent, data: { breadcrumb: 'customer dashboard' }},
  {path: 'favourites', component: FavouritesComponent, data: { breadcrumb: 'favourites' }},
  {path: 'chat', component: ChatComponent},
  {path: 'profile-settings', component: ProfileSettingsComponent, data: { breadcrumb: 'profile settings' }},
  {path: 'change-password', component: ChangePasswordComponent, data: { breadcrumb: 'change password' }}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
